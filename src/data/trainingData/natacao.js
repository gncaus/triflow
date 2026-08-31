export const natacao = {
  iniciante: {
    title: "Iniciante",
    goal: "Nadar 200 m contínuos com técnica básica",
    frequency: "3 treinos por semana",
    duration: "30 a 45 minutos por sessão",
    method: {
      name: "Método de Adaptação e Técnica",
      description:
        "Foco total em sentir a água, respiração e flutuação antes de pensar em velocidade. Você aprende a relaxar na água, controlar a respiração e dominar o nado crawl básico com exercícios de flutuação e pernada.",
    },
    schedule: [
      { day: "Segunda", focus: "Adaptação à água", detail: "Caminhada na água 10 min + flutuação dorsal 10 min + 8 x 25m pernada com prancha" },
      { day: "Quarta", focus: "Respiração", detail: "Exercícios de bolhas 5 min + 8 x 25m crawl focando na expiração submersa" },
      { day: "Sábado", focus: "Coordenação", detail: "6 x 25m pernada + 4 x 25m braçada com prancha + 4 x 25m crawl completo" },
    ],
    movements: [
      {
        name: "Flutuação e relaxamento",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80",
        steps: [
          "Deite de costas, braços abertos, olhando para o teto.",
          "Relaxe o pescoço e deixe o quadril subir — não force.",
          "Respire lento e profundo. Se afundar, encha mais os pulmões.",
          "Pratique até ficar 30 segundos relaxado sem se mexer.",
        ],
        tip: "A água sustenta quem relaxa. Tensão afunda. Respire fundo e confie na flutuação.",
      },
      {
        name: "Pernada com prancha",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80",
        steps: [
          "Segure a prancha à frente, braços esticados, rosto na água.",
          "Pernada alternada: pernadas curtas e rápidas vindo do quadril.",
          "Joelhos quase retos — a batida vem da coxa, não do joelho.",
          "Pés relaxados, como nadadeiras. Expire pelo nariz submerso.",
        ],
        tip: "Pernada boa é pequena e rápida, não grande e lenta. Pernadas grandes cansam e afundam.",
      },
      {
        name: "Respiração lateral no crawl",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80",
        steps: [
          "Ao completar a braçada, gire a cabeça para o lado (não levante).",
          "A boca sai só o suficiente para inspirar — uma orelha fica na água.",
          "Inspire rápido pela boca, gire de volta e expire pelo nariz submerso.",
          "Comece respirando a cada 2 braçadas sempre do mesmo lado.",
        ],
        tip: "Nunca levante a cabeça para frente — isso afunda o quadril e trava o nado.",
      },
    ],
    tips: [
      "Use óculos de natação — ver embaixo d'água muda tudo na técnica.",
      "Aprenda a expirar totalmente submerso antes de virar para inspirar.",
      "Não tente nadar rápido no começo — técnica primeiro, velocidade depois.",
      "Se cansar, faça flutuação dorsal para recuperar e volte.",
    ],
  },
  intermediario: {
    title: "Intermediário",
    goal: "Nadar 1000 m contínuos com técnica sólida",
    frequency: "3 a 4 treinos por semana",
    duration: "45 a 60 minutos por sessão",
    method: {
      name: "Método de Volume + Técnica (Drills)",
      description:
        "Cada treino começa com drills (exercícios de técnica) que isolam partes do nado, seguidos de blocos de volume controlado. A combinação refina a técnica enquanto constrói resistência.",
    },
    schedule: [
      { day: "Segunda", focus: "Técnica + volume", detail: "Aquecimento 200m + 4 x 50m drills (catch-up, dedo no calcanhar) + 8 x 100m crawl 30s descanso" },
      { day: "Quarta", focus: "Resistência", detail: "Aquecimento 200m + 5 x 200m crawl ritmo moderado / 45s descanso + 200m desaquecimento" },
      { day: "Sexta", focus: "Velocidade", detail: "Aquecimento 200m + 10 x 50m forte / 30s descanso + 200m leve" },
      { day: "Domingo", focus: "Longo", detail: "800 a 1000m contínuos em ritmo confortável, foco em técnica e respiração 3 braçadas" },
    ],
    movements: [
      {
        name: "Drill Catch-up (mão espera)",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80",
        steps: [
          "Nade crawl, mas a mão da frente só começa o puxão quando a outra mão tocá-la.",
          "Mantém uma mão sempre esticada à frente — como se esperasse o 'entrega'.",
          "Força a braçada longa e o rolamento do corpo.",
          "Faça 4 x 50m com 20s descanso.",
        ],
        tip: "Catch-up ensina a extensão total e evita braçadas curtas e apressadas.",
      },
      {
        name: "Drill Dedo no calcanhar",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80",
        steps: [
          "Ao final da braçada, toque o dedo no calcanhar antes de estender o braço à frente.",
          "Força o rolamento do corpo e a recuperação relaxada do braço.",
          "Mantenha pernada leve e constante para não afundar.",
          "Faça 4 x 50m alternando lados.",
        ],
        tip: "Esse drill corrige a falta de rolamento, que trava o crawl e cansa os ombros.",
      },
      {
        name: "Respiração a cada 3 braçadas (bilateral)",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80",
        steps: [
          "Inspire alternando os lados: direita, esquerda, direita...",
          "Mantém o nado simétrico e equilibrado, evitando lesões no ombro.",
          "No começo é difícil — pratique em séries curtas de 50m.",
          "Com tempo, fica natural e você ganha opções em provas.",
        ],
        tip: "Respiração bilateral equilibra a braçada e previne o 'ombro de nadador'.",
      },
    ],
    tips: [
      "Faça drills sempre no aquecimento — técnica é a base da velocidade.",
      "Conte braçadas por piscina: menos braçadas = mais eficiente.",
      "Trabalhe a pernada leve, só para manter o quadril alto — pernas gastam muito oxigênio.",
      "Nade 2-3 treinos por semana para evoluir de verdade.",
    ],
  },
  pro: {
    title: "Pro",
    goal: "Provas de 1500 m a águas abertas com performance",
    frequency: "5 a 6 treinos por semana",
    duration: "60 a 120 minutos por sessão",
    method: {
      name: "Periodização com Séries Específicas",
      description:
        "Treinos divididos em aeróbico (Z2), limiar (Z3) e velocidade (Z4/5). Inclui séries longas de limiar, sprints curtos e treinos específicos de prova. Periodização anual com pico para a competição principal.",
    },
    schedule: [
      { day: "Segunda", focus: "Técnica + fácil", detail: "Aquecimento 400m + drills 400m + 1000m fácil Z2" },
      { day: "Terça", focus: "Limiar (threshold)", detail: "Aquecimento 400m + 10 x 100m em ritmo de limiar / 15s descanso + 200m desaquecimento" },
      { day: "Quinta", focus: "Velocidade", detail: "Aquecimento 400m + 8 x 50m sprint / 1min descanso + 4 x 25m máxima" },
      { day: "Sexta", focus: "Recuperação ativa", detail: "1500m muito leve, foco total em técnica e respiração bilateral" },
      { day: "Sábado", focus: "Longo aeróbico", detail: "2000 a 3000m contínuos Z2, com blocos de 200m em ritmo de prova" },
      { day: "Domingo", focus: "Águas abertas", detail: "Treino em lago/mar 40-60 min, praticando orientação e saída" },
    ],
    movements: [
      {
        name: "Catch (pegada) de alta cotovelo",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80",
        steps: [
          "Após estender o braço, mantenha o cotovelo alto e 'agarre' a água com o antebraço.",
          "O antebraço fica quase vertical, formando uma pá com o braço todo.",
          "Puxe a água de baixo do corpo em direção aos quadris, não para o lado.",
          "Acelere a braçada do início ao fim — não puxe e pare.",
        ],
        tip: "O catch é onde a velocidade nasce. Cotovelo alto = mais água deslocada = mais propulsão.",
      },
      {
        name: "Saída de virada (flip turn)",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80",
        steps: [
          "A 2 metros da borda, faça a cambalhota para frente agrupado.",
          "Pouse os pés na parede com joelhos flexionados.",
          "Empurre forte em decúbito dorsal, gire para o ventral e deslize.",
          "Comece a pernada borboleta (submersa) antes de subir à superfície.",
        ],
        tip: "Viradas economizam segundos por piscina. Em 1500m, são minutos no total.",
      },
      {
        name: "Orientação em águas abertas (sighting)",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80",
        steps: [
          "A cada 12-20 braçadas, levante os olhos apenas acima da água para mirar uma referência.",
          "Inspire de lado na braçada seguinte, sem quebrar o ritmo.",
          "Mire um ponto fixo na praia ou uma boia, não o sol ou nuvens.",
          "Nade em linha reta entre miragens para não fazer zigue-zague.",
        ],
        tip: "Em águas abertas, nadar reto economiza centenas de metros. Pratique o sighting sempre.",
      },
    ],
    tips: [
      "Faça teste de limiar para definir zonas de treino com precisão.",
      "Inclua 2 treinos de força em academia (remada, dorsal, core) por semana.",
      "Pratique saída e chegada de prova — faz diferença em segundos.",
      "Monitore a frequência cardíaca e o RPE para ajustar a carga.",
    ],
  },
};
