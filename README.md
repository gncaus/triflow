# TriFlow Treinos

Planilhas de treino para corrida, natação e ciclismo — por modalidade e nível,
com métodos explicados, plano semanal, instruções de movimento e treino
complementar de força.

Este projeto foi reconstruído a partir de um app gerado no [Base44](https://base44.com)
para React + Vite "puro", sem depender da plataforma Base44, para poder ser
hospedado em qualquer lugar.

## Stack

- **Frontend:** React 18 + Vite + Tailwind CSS + shadcn/ui + React Router + TanStack Query
- **Backend:** Node.js + Express, autenticação com JWT (`jsonwebtoken` + `bcryptjs`)
- **Dados de usuário:** arquivo JSON local (`server/data/users.json`) — ver aviso abaixo

## Rodando localmente

```bash
npm install
cp .env.example .env
```

Abra `.env` e defina um `JWT_SECRET` de verdade (qualquer string longa e aleatória).
O backend lê a porta de `API_PORT` (não `PORT`) de propósito — evita colidir
com a porta que o Vite (ou o host de dev) já costuma exportar como `PORT`.

```bash
npm run dev:all
```

Isso sobe o frontend (Vite, `http://localhost:5173`) e o backend (Express,
`http://localhost:4000`) juntos; o Vite faz proxy de `/api` para o backend.
Se preferir rodar separado: `npm run dev` (só frontend) e `npm run dev:server`
(só backend).

## Build e produção

```bash
npm run build
npm start
```

`npm start` sobe **um único processo Node** (`server/index.js`) que serve a
API em `/api/*` **e** os arquivos estáticos do build (`dist/`) — inclusive o
fallback de SPA para rotas do React Router. Isso significa que você pode
publicar o app inteiro (frontend + backend) num único serviço.

### Deploy

Qualquer host que rode um processo Node (Railway, Render, Fly.io, um VPS)
funciona: configure `PORT` e `JWT_SECRET` como variáveis de ambiente, rode
`npm install && npm run build`, e inicie com `npm start`.

Se preferir separar frontend (Vercel/Netlify) do backend (Railway/Render),
publique `dist/` como site estático em um, o `server/` no outro, e configure
`VITE_API_PROXY_TARGET` (dev) / o domínio do backend + `CLIENT_ORIGIN` no
backend para CORS.

## O que mudou em relação ao app original (Base44)

- **SDK do Base44 removido.** `src/api/base44Client.js` foi substituído por
  [`src/api/authClient.js`](src/api/authClient.js), que fala com o backend
  Express próprio (`server/auth.js`) por `fetch`. `src/lib/AuthContext.jsx`
  também foi reescrito, mas mantém a mesma interface (`useAuth()`) que
  `App.jsx` e `ProtectedRoute.jsx` já usavam.
- **Login com Google não está configurado.** O botão continua na UI, mas
  mostra um aviso ao clicar. Para habilitar de verdade: crie um OAuth Client
  no [Google Cloud Console](https://console.cloud.google.com/apis/credentials),
  adicione rotas `/api/auth/google` (redirect) e `/api/auth/google/callback`
  em `server/auth.js`, e troque `authClient.loginWithProvider` para chamar
  essa rota.
- **`OAuthConsent.jsx` foi removido.** Era a tela de consentimento do
  servidor MCP do Base44 (autorização de clientes de IA via `ctx` handle) —
  não existe fora da plataforma Base44.
- **O gate "app inteiro exige login" não foi reproduzido.** No app original,
  a plataforma Base44 redirecionava automaticamente para `/login` fora deste
  código-fonte (por isso as páginas de auth nem apareciam no `App.jsx`
  original). Replicar isso aqui causaria um loop (a própria página de login
  seria redirecionada para si mesma). Por padrão, `Home` e `SportTraining`
  são **públicas**. Se quiser exigir login para ver os treinos, envolva essas
  duas rotas com `<ProtectedRoute>` (já implementado em
  [`src/components/ProtectedRoute.jsx`](src/components/ProtectedRoute.jsx))
  — o comentário em [`src/App.jsx`](src/App.jsx) mostra como.
- **Verificação de e-mail e reset de senha "enviam" e-mail via console.log.**
  Funciona ponta a ponta localmente (o código aparece no terminal do
  backend), mas para produção real troque `sendEmail()` em
  [`server/auth.js`](server/auth.js) por um provedor de e-mail (Resend, SES,
  Postmark...).
- **Armazenamento de usuários em arquivo JSON** (`server/data/users.json`,
  já no `.gitignore`). Funciona para dev e tráfego pequeno em uma única
  instância, mas não tem controle de concorrência — troque por um banco de
  verdade (Postgres, SQLite, Mongo) antes de depender disso em produção séria.
- **Componentes shadcn/ui:** só os realmente usados pelas páginas atuais
  foram recriados (`button`, `input`, `label`, `input-otp`, `toast`/
  `toaster`). Se adicionar páginas que usam outros (`dialog`, `select`,
  `tabs`, etc.), instale com `npx shadcn@latest add <componente>`.
- **`src/components/ui/image.jsx`** é um substituto simples do componente
  `Image` original do Base44 (o código-fonte dele não estava disponível) —
  hoje é só um `<img loading="lazy">`.

## Estrutura

```
src/
  api/authClient.js       # cliente HTTP de autenticação (substitui base44Client.js)
  lib/AuthContext.jsx      # contexto de auth (useAuth)
  lib/authReturnTo.js      # validação segura de ?returnTo=
  components/              # AuthLayout, ProtectedRoute, ComplementTraining, ui/...
  data/                    # trainingData.js, complementData.js
  pages/                   # Home, Login, Register, ForgotPassword, ResetPassword, SportTraining
server/
  index.js                 # Express app (API + estáticos em produção)
  auth.js                  # rotas /api/auth/*
  db.js                    # store JSON simples
```
