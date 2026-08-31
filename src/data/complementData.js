// Treino complementar de hipertrofia para performance, por modalidade.
// Cada modalidade recebe 3 tipos: forca, resistencia, recuperatorio.
export const complementIntro = {
  title: "Treino complementar de hipertrofia",
  subtitle: "Força, resistência e recuperação para turbinar sua performance no esporte",
  description:
    "O treino de força complementar previne lesões, aumenta potência e eficiência. Adicione 2 sessões por semana além do treino principal do seu esporte.",
};

const IMG = (id) => `https://media.base44.com/images/public/6a85ffbb7d74073068ff46a5/${id}_generated_image.png`;

export const complements = {
  corrida: {
    forca: {
      title: "Força",
      method:
        "Força máxima para potência e prevenção de lesões. Cargas altas (4-6 repetições), foco em cadeia posterior e estabilidade unilateral — o que sustenta a passada e reduz impacto no joelho.",
      movements: [
        {
          name: "Agachamento búlgaro (unilateral)",
          image: IMG("0eca6ef86"),
          steps: [
            "Apoie o peito do pé de trás num banco, pé da frente à frente.",
            "Desça flexionando o joelho da frente até quase tocar o chão.",
            "Mantenha o tronco ereto e o core contraído.",
            "Suba empurrando o calcanhar da frente, sem deixar o joelho cair para dentro.",
          ],
          tip: "Unilateral corrige assimetrias entre as pernas — comum em corredores e causa de lesões.",
        },
        {
          name: "Stiff (cadeia posterior)",
          image: IMG("93b95cd7c"),
          steps: [
            "Em pé, halteres na frente das coxas, pernas quase esticadas.",
            "Desça empurrando o quadril para trás, costas neutras.",
            "Sinta alongar a parte de trás da coxa até o meio da canela.",
            "Suba contraindo os glúteos e a lombar.",
          ],
          tip: "Stiff fortalece isquiotibiais e glúteos — protege o joelho e melhora a impulsão da passada.",
        },
      ],
      tips: [
        "Faça 2 sessões de força por semana, em dias diferentes do treino de corrida.",
        "Cargas altas e poucas repetições (4-6) com 2-3 min de descanso.",
        "Priorize exercícios unilaterais para equilibrar as pernas.",
      ],
    },
    resistencia: {
      title: "Resistência",
      method:
        "Resistência muscular para aguentar o final da prova sem perder técnica. Cargas moderadas, repetições altas (15-20), foco em core e pernas — a fadiga muscular é o que derruba o ritmo nos últimos quilômetros.",
      movements: [
        {
          name: "Afundo (lunge) alternado",
          image: IMG("f7525ffa4"),
          steps: [
            "Em pé, dê um passo largo à frente e desça até os dois joelhos a 90°.",
            "Suba empurrando o calcanhar da frente e volte à posição inicial.",
            "Alterne as pernas, mantendo o tronco ereto.",
            "Faça 3 séries de 16 repetições (8 por perna).",
          ],
          tip: "Afundo com repetições altas constrói resistência nas pernas para o final da corrida.",
        },
        {
          name: "Prancha frontal",
          image: IMG("994860560"),
          steps: [
            "Apoie os antebraços e pontas dos pés, corpo alinhado.",
            "Contraia o abdômen e o glúteo, sem deixar o quadril afundar.",
            "Respire normalmente, mantenha a posição.",
            "Comece com 30s e evolua até 90s por série.",
          ],
          tip: "Core forte mantém a postura da corrida quando cansa — evita o 'corredor caído' no fim.",
        },
      ],
      tips: [
        "Repetições altas (15-20) com descanso curto (45-60s).",
        "Inclua prancha frontal e lateral — core é o que sustenta a postura.",
        "Treine resistência 1-2x por semana, de preferência após treinos leves.",
      ],
    },
    recuperatorio: {
      title: "Recuperatório",
      method:
        "Recuperação ativa e mobilidade para rodar treinos pesados sem lesão. Liberação miofascial, mobilidade de quadril e alongamento — o que devolve qualidade ao músculo e mantém você treinando.",
      movements: [
        {
          name: "Foam roller nas pernas",
          image: IMG("53ba418e6"),
          steps: [
            "Apoie o rolo sob a panturrilha, quadríceps ou isquiotibial.",
            "Role lentamente ao longo do músculo, 2 cm por segundo.",
            "Pare e respire fundo nos pontos de tensão por 30s.",
            "Evite rolar sobre o joelho ou a parte de trás do joelho.",
          ],
          tip: "Foam roller reduz dor muscular e acelera a recuperação entre treinos de corrida.",
        },
        {
          name: "Mobilidade de quadril",
          image: IMG("ae6887b4d"),
          steps: [
            "Apoie um joelho no chão, o outro à frente a 90°.",
            "Empurre o quadril à frente, sentindo alongar a frente da coxa.",
            "Faça círculos lentos com o quadril para ganhar mobilidade.",
            "Mantenha o tronco ereto e o core contraído.",
          ],
          tip: "Quadril móvel aumenta a amplitude da passada e previne dor lombar no corredor.",
        },
      ],
      tips: [
        "Faça recuperação ativa nos dias de treino leve ou descanso.",
        "Durma 7-9h — a recuperação real acontece no sono.",
        "Alongamento estático deixe para após o treino, nunca antes.",
      ],
    },
  },
  natacao: {
    forca: {
      title: "Força",
      method:
        "Força para potência na braçada e na pernada. Cargas altas (4-6 repetições), foco em costas, ombros e core — a musculatura que gera a propulsão na água.",
      movements: [
        {
          name: "Remada curvada",
          image: IMG("489f0597c"),
          steps: [
            "Tronco inclinado à frente, costas neutras, barra ou halteres à frente.",
            "Puxe o peso até a cintura, cotovelos próximos ao corpo.",
            "Aperte as escápulas no final do movimento.",
            "Desça controlado e repita.",
          ],
          tip: "Remada fortalece o dorsal — o principal motor da braçada do crawl e do nado borboleta.",
        },
        {
          name: "Desenvolvimento de ombro",
          image: IMG("8dc76a513"),
          steps: [
            "Sentado, barra ou halteres na altura dos ombros.",
            "Empurre o peso para cima até esticar os braços.",
            "Mantenha o core contraído, sem arquear a lombar.",
            "Desça controlado até os ombros.",
          ],
          tip: "Ombro forte sustenta a braçada e previne a lesão crônica do nadador.",
        },
      ],
      tips: [
        "Priorize costas e ombros — são os músculos da braçada.",
        "Cargas altas (4-6 reps) com descanso de 2-3 min.",
        "Inclua core forte para estabilizar o rolamento do corpo na água.",
      ],
    },
    resistencia: {
      title: "Resistência",
      method:
        "Resistência muscular para sustentar a técnica por longas séries na água. Cargas moderadas, repetições altas (15-20), foco em ombro e core — o que evita a fadiga que derruba a técnica no fim do treino.",
      movements: [
        {
          name: "Face pull",
          image: IMG("9287c5e9f"),
          steps: [
            "Polia alta com corda, carga leve a moderada.",
            "Puxe a corda em direção ao rosto, abrindo os cotovelos.",
            "Contraia a parte de trás do ombro e as escápulas.",
            "Volte lento e controlado.",
          ],
          tip: "Face pull equilibra o ombro e previne a lesão por uso excessivo no nadador.",
        },
        {
          name: "Prancha lateral",
          image: IMG("bebdeedb3"),
          steps: [
            "Apoie um antebraço de lado, corpo alinhado.",
            "Contraia o abdômen lateral e o glúteo.",
            "Mantenha o quadril elevado, sem deixar afundar.",
            "Comece com 20s por lado e evolua.",
          ],
          tip: "Core lateral estabiliza o rolamento do corpo na água — essencial para um crawl eficiente.",
        },
      ],
      tips: [
        "Repetições altas (15-20) com descanso curto (45-60s).",
        "Equilibre peito e costas para proteger o ombro.",
        "Treine resistência 1-2x por semana, de preferência em dias sem piscina.",
      ],
    },
    recuperatorio: {
      title: "Recuperatório",
      method:
        "Recuperação ativa e mobilidade de ombro para manter o nadador treinando sem dor. Liberação miofascial, mobilidade articular e alongamento — o que devolve amplitude e previne a síndrome do ombro do nadador.",
      movements: [
        {
          name: "Mobilidade de ombro com band",
          image: IMG("4e0a50547"),
          steps: [
            "Segure uma faixa elástica com pegada larga à frente.",
            "Eleve os braços e leve a faixa por cima da cabeça até as costas.",
            "Volte devagar, mantendo os braços esticados.",
            "Aproxime as mãos na faixa se for difícil, afaste se for fácil.",
          ],
          tip: "Esse drill devolve mobilidade ao ombro e previne a rigidez que trava a braçada.",
        },
        {
          name: "Alongamento de peito na parede",
          image: IMG("665900c47"),
          steps: [
            "Apoie o antebraço na parede a 90°, cotovelo na altura do ombro.",
            "Gire o corpo para o lado oposto, sentindo alongar o peito.",
            "Mantenha 30-45s e troque de lado.",
            "Não force — alongue até sentir tensão leve.",
          ],
          tip: "Peito encurtado afunda o ombro do nadador. Alongar devolve a postura e a braçada longa.",
        },
      ],
      tips: [
        "Faça mobilidade de ombro antes de toda sessão de piscina.",
        "Foam roller no dorsal e lombar após o treino.",
        "Se o ombro doer ao nadar, pare e foque na recuperação antes de voltar.",
      ],
    },
  },
  ciclismo: {
    forca: {
      title: "Força",
      method:
        "Força máxima para potência nos pedais e subidas. Cargas altas (4-6 repetições), foco em pernas e core — o que gera watts a mais na subida e no sprint.",
      movements: [
        {
          name: "Agachamento livre",
          image: IMG("ec7ca8477"),
          steps: [
            "Barra no trapézio, pés na largura dos ombros.",
            "Desça como sentar, joelhos seguindo os pés.",
            "Mantenha o peito erguido e o core contraído.",
            "Suba empurrando o chão, glúteos contraídos.",
          ],
          tip: "Agachamento constrói a potência das pernas — a base dos watts no ciclismo.",
        },
        {
          name: "Leg press",
          image: IMG("306deedc0"),
          steps: [
            "Pés na plataforma na largura dos ombros.",
            "Solte a trava e desça controlado até 90°.",
            "Empurre a plataforma esticando as pernas, sem travar os joelhos.",
            "Mantenha o core contraído e a lombar apoiada.",
          ],
          tip: "Leg press permite carga alta com segurança — ideal para construir força de pedal.",
        },
      ],
      tips: [
        "Priorize agachamento e leg press — são os exercícios de potência do ciclista.",
        "Cargas altas (4-6 reps) com 2-3 min de descanso.",
        "Inclua core forte para estabilizar o tronco na bike.",
      ],
    },
    resistencia: {
      title: "Resistência",
      method:
        "Resistência muscular para aguentar longas distâncias sem perder cadência. Cargas moderadas, repetições altas (15-20), foco em pernas e core — a fadiga que derruba o ritmo nas últimas horas.",
      movements: [
        {
          name: "Step up (subida no banco)",
          image: IMG("80b20221d"),
          steps: [
            "Suba num banco com um pé, empurrando pelo calcanhar.",
            "Estique a perna no topo, sem impulso da perna de trás.",
            "Desça controlado e repita.",
            "Faça 3 séries de 16 repetições (8 por perna).",
          ],
          tip: "Step up imita o movimento do pedal e constrói resistência unilateral nas pernas.",
        },
        {
          name: "Prancha frontal",
          image: IMG("994860560"),
          steps: [
            "Apoie antebraços e pontas dos pés, corpo alinhado.",
            "Contraia abdômen e glúteo, quadril neutro.",
            "Respire normal e mantenha a posição.",
            "Evolua de 30s até 90s por série.",
          ],
          tip: "Core forte sustenta a postura aerodinâmica por horas na bike sem dor lombar.",
        },
      ],
      tips: [
        "Repetições altas (15-20) com descanso curto (45-60s).",
        "Inclua exercícios unilaterais para equilibrar as pernas.",
        "Treine resistência 1-2x por semana, em dias sem bike.",
      ],
    },
    recuperatorio: {
      title: "Recuperatório",
      method:
        "Recuperação ativa e mobilidade para rodar treinos longos sem dor. Liberação miofascial, mobilidade de quadril e lombar — o que devolve qualidade às pernas e mantém você pedalando.",
      movements: [
        {
          name: "Foam roller no quadríceps e ITB",
          image: IMG("53ba418e6"),
          steps: [
            "Apoie o rolo sob a coxa, de bruços.",
            "Role do quadril ao joelho, lentamente.",
            "Pare nos pontos de tensão e respire fundo.",
            "Evite rolar diretamente sobre o joelho.",
          ],
          tip: "Foam roller alivia a tensão do quadríceps e da banda iliotibial — dor comum no ciclista.",
        },
        {
          name: "Mobilidade de lombar e quadril (gato-camelo)",
          image: IMG("5a6e0a942"),
          steps: [
            "Em quatro apoios, mãos sob os ombros.",
            "Arqueie a coluna para cima (gato), contraindo o abdômen.",
            "Depois desça a barriga e levante a cabeça (camelo).",
            "Alterne lentamente, 10 repetições.",
          ],
          tip: "Mobilidade lombar previne a dor nas costas após longas pedaladas.",
        },
      ],
      tips: [
        "Faça recuperação ativa nos dias de descanso ou treino leve.",
        "Alongamento de quadríceps e panturrilha após cada pedal.",
        "Durma 7-9h — a recuperação real acontece no descanso.",
      ],
    },
  },
};
