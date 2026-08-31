export const ciclismo = {
  iniciante: {
    title: "Iniciante",
    goal: "Pedalar 20 km confortavelmente em 8 semanas",
    frequency: "3 treinos por semana",
    duration: "30 a 60 minutos por sessão",
    method: {
      name: "Método de Adaptação ao Saddle",
      description:
        "Treinos curtos e leves para o corpo se adaptar ao banco (saddle), à postura na bike e ao uso dos marchas. O foco é sentir-se confortável e aprender a cadência ideal antes de buscar distância.",
    },
    schedule: [
      { day: "Terça", focus: "Adaptação", detail: "30 min em terreno plano, cadência 80-90 rpm, marcha leve" },
      { day: "Quinta", focus: "Cadência", detail: "40 min alternando 5 min em pé / 5 min sentado, sempre cadência alta" },
      { day: "Domingo", focus: "Distância", detail: "50 a 60 min plano, ritmo confortável, hidrate-se a cada 20 min" },
    ],
    movements: [
      {
        name: "Postura e ajuste da bike",
        image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=800&q=80",
        steps: [
          "Ajuste a altura do selim: perna quase esticada no pedal mais baixo (micro dobra no joelho).",
          "O guidão na altura do selim ou um pouco acima para iniciantes.",
          "Cotovelos levemente flexionados, não travados — absorvem impacto.",
          "Costas retas, não arqueada. Use o core para sustentar o tronco.",
        ],
        tip: "Bike mal ajustada causa dor no joelho e na lombar. Peça um bike fitting profissional.",
      },
      {
        name: "Cadência ideal (80-90 rpm)",
        image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=800&q=80",
        steps: [
          "Cadência = número de rotações do pedal por minuto.",
          "Mantenha entre 80 e 90 rpm em terreno plano — pernas girando leves.",
          "Se as pernas pesam, reduza a marcha e gire mais rápido.",
          "Se perde o fôlego, aumente a marcha e gire mais devagar.",
        ],
        tip: "Cadência alta poupa joelhos e pernas; marchas pesadas demais machucam as articulações.",
      },
      {
        name: "Uso dos marchas",
        image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=800&q=80",
        steps: [
          "Marchas leves (catracas grandes atrás) para subidas e vento contra.",
          "Marchas pesadas (catracas pequenas atrás) para descidas e terreno plano com vento a favor.",
          "Antecipe as mudanças antes da subida, não durante — evita pular a corrente.",
          "Troque uma marcha por vez, pedalando suavemente.",
        ],
        tip: "Regra de ouro: se as pernas pesam, reduza marcha; se perde o fôlego, aumente.",
      },
    ],
    tips: [
      "Use capacete sempre — não é opcional, é segurança.",
      "Calça com forro (culote) evita dor no bumbum. Vale o investimento.",
      "Hidrate-se a cada 20 min, mesmo sem sede, em passeios longos.",
      "Aprenda a sinalizar paradas e curvas se for pedalar em grupo.",
    ],
  },
  intermediario: {
    title: "Intermediário",
    goal: "Completar 50-60 km com controle de ritmo",
    frequency: "4 treinos por semana",
    duration: "60 a 120 minutos por sessão",
    method: {
      name: "Método de Volume + Intervalados em Subida",
      description:
        "Combina um treino longo de resistência, um intervalado de subida para construir potência e treinos de ritmo. O volume constrói base; os intervalados elevam o limiar e a potência.",
    },
    schedule: [
      { day: "Terça", focus: "Intervalados de subida", detail: "Aquecimento 20 min + 6 x 3 min em subida forte / 3 min descida + desaquecimento" },
      { day: "Quinta", focus: "Ritmo (sweet spot)", detail: "Aquecimento 15 min + 3 x 15 min em ritmo forte controlado / 5 min descanso" },
      { day: "Sábado", focus: "Fácil", detail: "60 min muito leve, cadência alta, recuperação ativa" },
      { day: "Domingo", focus: "Longo", detail: "90 a 120 min em ritmo confortável, com 2 blocos de 10 min em ritmo de prova" },
    ],
    movements: [
      {
        name: "Pedalada em pé (dança)",
        image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=800&q=80",
        steps: [
          "Em subidas ou acelerações, levante do selim e pedale em pé.",
          "Use o peso do corpo para empurrar o pedal de baixo.",
          "Balance a bike levemente dos dois lados, contrário ao pedal que empurra.",
          "Volte a sentar quando a subida suavizar para economizar energia.",
        ],
        tip: "Pedalar em pé gasta mais energia — use em subidas curtas ou ataques, não por longos trechos.",
      },
      {
        name: "Ritmo sweet spot",
        image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=800&q=80",
        steps: [
          "Intensidade entre ritmo confortável e limiar — você sente o esforço, mas aguenta.",
          "Respiração ofegante mas controlada, não consiga falar frases longas.",
          "Mantenha cadência 85-95 rpm, não force as marchas.",
          "Faça blocos de 10 a 20 min com descanso curto entre eles.",
        ],
        tip: "Sweet spot é a intensidade que mais melhora o limiar com menos cansaço. O treino-chave do ciclista.",
      },
      {
        name: "Descida técnica",
        image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=800&q=80",
        steps: [
          "Mãos no guidão inferior (drops) para mais controle e aerodinâmica.",
          "Olhe 10-15 metros à frente, não para o chão logo à frente da roda.",
          "Frene com ambos os freios, mais o dianteiro — nunca só o traseiro.",
          "Em curva, incline a bike e mantenha o corpo, contrapedalando a curva.",
        ],
        tip: "Descidas bem feitas recuperam tempo e energia. Confie na bike e olhe longe.",
      },
    ],
    tips: [
      "Aprenda a pedalar em grupo: ganha-se muito tempo e quebra-se o vento (pelotão).",
      "Faça fortalecimento de pernas e core 2x por semana para potência e estabilidade.",
      "Alimente-se em treinos longos: 1 gel ou barra a cada 45-60 min.",
      "Controle a cadência em subidas: abaixo de 70 rpm força os joelhos.",
    ],
  },
  pro: {
    title: "Pro",
    goal: "Provocional / gran fondo de 100+ km ou competições",
    frequency: "5 a 6 treinos por semana",
    duration: "90 a 240 minutos por sessão",
    method: {
      name: "Periodização com Potência (FTP)",
      description:
        "Treinos baseados no FTP (limiar de potência funcional) e zonas de potência. Periodização em blocos: base aeróbica, build de potência, pico de forma e taper. Inclui treinos específicos de prova e recuperação monitorada.",
    },
    schedule: [
      { day: "Segunda", focus: "Recuperação ativa", detail: "60 min Z1-Z2 muito leve, cadência 90+ rpm" },
      { day: "Terça", focus: "Intervalados VO2", detail: "Aquecimento 30 min + 5 x 4 min em 115% FTP / 4 min descanso + desaquecimento" },
      { day: "Quinta", focus: "Limiar (FTP)", detail: "Aquecimento 20 min + 3 x 12 min em 95-100% FTP / 5 min descanso" },
      { day: "Sexta", focus: "Sprints", detail: "Aquecimento 20 min + 8 x 30s sprint máximo / 4min descanso" },
      { day: "Sábado", focus: "Longo + blocos", detail: "3-4h Z2 com 3 x 20 min em ritmo de prova nos últimos 90 min" },
      { day: "Domingo", focus: "Específico de prova", detail: "Simulação de percurso: subidas longas, sprints finais, alimentação de prova" },
    ],
    movements: [
      {
        name: "Sprint de pé (sprint)",
        image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=800&q=80",
        steps: [
          "Aproxime-se em cadência alta (100+ rpm), sentado.",
          "Levante do selim nos últimos 100-200m e acelere com o peso do corpo.",
          "Balance a bike ritmicamente, contrário ao pedal que empurra.",
          "Mantenha a aceleração até cruzar a linha — não desacelere antes.",
        ],
        tip: "Sprints de pé recrutam a máxima potência. Treine-os sempre fresco, no início da sessão.",
      },
      {
        name: "Treino de limiar (FTP)",
        image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=800&q=80",
        steps: [
          "Encontre seu FTP (potência que aguenta por 1h) com um teste de 20 min.",
          "Treine blocos de 10-20 min em 95-105% do FTP.",
          "Mantenha cadência 85-95 rpm, potência estável — não oscile.",
          "É o treino que mais eleva a velocidade sustentável.",
        ],
        tip: "O FTP é a métrica mais importante do ciclista. Reteste a cada 6-8 semanas.",
      },
      {
        name: "Aerodinâmica e posição de prova",
        image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=800&q=80",
        steps: [
          "Mãos no drops, cotovelos flexionados, ombros baixos.",
          "Queixo próximo ao guidão, olhar para frente, não para cima.",
          "Cotovelos próximos ao corpo, não abertos.",
          "Em retas longas, mantenha a posição o máximo que aguentar.",
        ],
        tip: "80% da resistência no ciclismo é o ar. Posição aerodinâmica vale mais que equipamento caro.",
      },
    ],
    tips: [
      "Use medidor de potência para treinar com precisão — é o padrão do ciclismo moderno.",
      "Periodize: 3 semanas de carga + 1 semana de alívio (deload).",
      "Pratique alimentação de prova: 60-90g de carboidrato por hora em provas longas.",
      "Faça taper na semana da prova: reduza volume 50%, mantenha intensidade.",
    ],
  },
};
