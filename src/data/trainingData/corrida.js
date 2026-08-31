export const corrida = {
  iniciante: {
    title: "Iniciante",
    goal: "Correr 5 km sem parar em 8 semanas",
    frequency: "3 treinos por semana",
    duration: "30 a 45 minutos por sessão",
    method: {
      name: "Método Caminhar-Correr (Run-Walk)",
      description:
        "Você alterna blocos de caminhada e corrida leve. O corpo se adapta gradualmente ao impacto, reduzindo o risco de lesão no joelho, canela e panturrilha. A cada semana, aumente o tempo de corrida e diminua o de caminhada até correr continuamente.",
    },
    schedule: [
      { day: "Segunda", focus: "Run-Walk leve", detail: "5 min caminhada + (1 min corrida / 2 min caminhada) x 6 + 5 min caminhada" },
      { day: "Quarta", focus: "Técnica de postura", detail: "Caminhada rápida 10 min + 20 min corrida leve com passada curta" },
      { day: "Sábado", focus: "Resistência", detail: "Caminhada 5 min + (2 min corrida / 1 min caminhada) x 8 + caminhada 5 min" },
    ],
    movements: [
      {
        name: "Postura ereta e relaxada",
        image: "https://images.unsplash.com/photo-1487956382808-425310a8e4ac?auto=format&fit=crop&w=800&q=80",
        steps: [
          "Mantenha a cabeça erguida, olhando 10 metros à frente, nunca para os pés.",
          "Ombros relaxados e baixos — não suba os ombros quando cansar.",
          "Tronco levemente inclinado para frente a partir dos tornozelos, não da cintura.",
          "Braços dobrados a 90°, balançando para frente e trás sem cruzar a linha do peito.",
        ],
        tip: "Imagine um fio puxando o topo da sua cabeça para o céu. Isso alinha toda a coluna.",
      },
      {
        name: "Cadência e passada curta",
        image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb46?auto=format&fit=crop&w=800&q=80",
        steps: [
          "Dê passos curtos e rápidos em vez de passos longos e lentos.",
          "O pé deve aterrissar sob o quadril, não à frente do corpo.",
          "Busque 160 a 170 passos por minuto — use uma playlist nesse ritmo.",
          "Apoie o pé no meio, não no calcanhar, para amortecer o impacto.",
        ],
        tip: "Passada longa é a causa nº 1 de canelha e dor no joelho. Prefira curtas e rápidas.",
      },
    ],
    tips: [
      "Use tênis próprio para corrida — nunca corra com calçado de academia.",
      "Hidrate-se antes, não só durante. Beba 500 ml de água 1h antes do treino.",
      "Aqueça sempre 5 min caminhando e termine com alongamento leve.",
      "Dor que piora ao correr = pare. desconforto muscular leve é normal.",
    ],
  },
  intermediario: {
    title: "Intermediário",
    goal: "Completar 10 km com ritmo controlado",
    frequency: "4 treinos por semana",
    duration: "45 a 70 minutos por sessão",
    method: {
      name: "Método de Treino Intervalado + Longo",
      description:
        "Combina um treino longo de resistência, um intervalado de velocidade e dois fáceis. O longo constrói base aeróbica; o intervalado aumenta o VO2 máx e a velocidade de prova; os fáceis recuperam e consolidam a técnica.",
    },
    schedule: [
      { day: "Segunda", focus: "Fácil", detail: "40 min de corrida confortável (consegue falar frases completas)" },
      { day: "Quarta", focus: "Intervalados", detail: "Aquecimento 15 min + 6 x 400 m forte / 200 m caminhando + desaquecimento 10 min" },
      { day: "Sexta", focus: "Técnica + rampas", detail: "10 x 100 m em subida leve, descida caminhando" },
      { day: "Domingo", focus: "Longo", detail: "60 a 75 min de corrida contínua em ritmo conversacional" },
    ],
    movements: [
      {
        name: "Corrida em subida (hill repeats)",
        image: "https://images.unsplash.com/photo-1469041797191-50428616d4a7?auto=format&fit=crop&w=800&q=80",
        steps: [
          "Mantenha o tronco um pouco mais inclinado que no plano, acompanhando a ladeira.",
          "Reduza o tamanho da passada e aumente a frequência dos braços.",
          "Empurre o joelho à frente com mais força, olhando para cima.",
          "Na descida, recupere caminhando — não corra, para poupar as pernas.",
        ],
        tip: "Subidas constroem força nas pernas sem impacto articular. São o melhor amigo do corredor.",
      },
      {
        name: "Ritmo de prova (tempo run)",
        image: "https://images.unsplash.com/photo-1486218119553-2e2e7c1e1f1f?auto=format&fit=crop&w=800&q=80",
        steps: [
          "Comece em ritmo confortável e acelere gradualmente a cada quilômetro.",
          "Mantenha um ritmo que você conseguiria manter por 1h sem parar.",
          "Respiração rítmica: 2 passos inspirando, 2 expirando.",
          "Nos últimos 10 min, mantenha ou aumente levemente — não desacelere.",
        ],
        tip: "O treino de ritmo ensina o corpo a suportar a velocidade da prova por mais tempo.",
      },
    ],
    tips: [
      "Faça pelo menos um treino longo por semana — é ele que dá confiança para a distância.",
      "Inclua 2 sessões de fortalecimento (agachamento, prancha, panturrilha) para evitar lesões.",
      "Aprenda a controlar o ritmo: começar rápido é o erro mais comum.",
      "Use um relógio ou app para acompanhar pace e distância.",
    ],
  },
  pro: {
    title: "Pro",
    goal: "Meia maratona / maratona com performance otimizada",
    frequency: "5 a 6 treinos por semana",
    duration: "60 a 180 minutos por sessão",
    method: {
      name: "Polarização 80/20 + Periodização",
      description:
        "80% do volume em baixa intensidade (zona 2) e 20% em alta intensidade (zona 4/5). A periodização divide o ano em blocos: base, build, pico e taper, levando ao ápice no dia da prova.",
    },
    schedule: [
      { day: "Segunda", focus: "Fácil regenerativo", detail: "45 min Z1-Z2, muito leve, recuperação ativa" },
      { day: "Terça", focus: "Intervalados VO2", detail: "Aquecimento 20 min + 5 x 1000 m em 5k pace / 90s descanso + desaquecimento" },
      { day: "Quinta", focus: "Tempo run", detail: "Aquecimento 15 min + 20 min em ritmo de meia maratona + desaquecimento" },
      { day: "Sexta", focus: "Fácil + tiros", detail: "60 min Z2 + 6 x 100m strides (acelerações) no final" },
      { day: "Sábado", focus: "Longo", detail: "90 a 120 min Z2, com últimos 20 min em ritmo de prova" },
      { day: "Domingo", focus: "Cross training", detail: "Bike ou natação 45 min ou descanso total" },
    ],
    movements: [
      {
        name: "Strides (acelerações controladas)",
        image: "https://images.unsplash.com/photo-1487956382808-425310a8e4ac?auto=format&fit=crop&w=800&q=80",
        steps: [
          "Após um treino fácil, faça 4 a 6 acelerações de 100 metros.",
          "Comece em 70% da velocidade máxima e acelere até 90%.",
          "Mantenha técnica perfeita: postura, cadência e braços relaxados.",
          "Volte caminhando 100 m para recuperar entre cada stride.",
        ],
        tip: "Strides melhoram a economia de corrida e mantêm a velocidade sem cansar.",
      },
      {
        name: "Corrida em zona 2 (base aeróbica)",
        image: "https://images.unsplash.com/photo-1486218119553-2e2e7c1e1f1f?auto=format&fit=crop&w=800&q=80",
        steps: [
          "Mantenha o coração em 60-70% da frequência cardíaca máxima.",
          "Você deve conseguir conversar em frases completas sem ofegar.",
          "Se a respiração ficar ofegante, está forte demais — diminua o ritmo.",
          "É o treino que constrói mitocôndrias e capilares, base de toda performance.",
        ],
        tip: "Corredores amadores correm rápido demais nos dias fáceis. Respeite a zona 2.",
      },
    ],
    tips: [
      "Periodize o ano: 3 semanas de carga + 1 semana de alívio (deload).",
      "Faça taper nas 2 últimas semanas antes da prova: reduza o volume em 60%, mantenha intensidade.",
      "Treine a nutrição: pratique géis e hidratação nos treinos longos.",
      "Sono de 8h+ é o melhor treino de recuperação que existe.",
    ],
  },
};
