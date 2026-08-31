import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Footprints, Waves, Bike, ArrowRight, Dumbbell, HeartPulse, Timer } from "lucide-react";
import { sports } from "@/data/trainingData";
import { Image } from "@/components/ui/image";

const iconMap = { Footprints, Waves, Bike };

export default function Home() {
  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900" />
        <div className="absolute inset-0 opacity-30">
          <Image
            src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1600&q=80"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-6xl mx-auto px-6 py-24 md:py-36 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/80 text-sm mb-6"
          >
            <Dumbbell className="w-4 h-4" />
            Treinos completos e progressivos
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-tight"
          >
            Sua planilha de treinos<br />
            <span className="bg-gradient-to-r from-orange-400 via-rose-400 to-sky-400 bg-clip-text text-transparent">
              por modalidade e nível
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg md:text-xl text-stone-300 max-w-2xl mx-auto"
          >
            Corrida, natação e ciclismo — com instruções de movimento, métodos,
            fotos e planos semanais para iniciantes, intermediários e profissionais.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-wrap justify-center gap-4 text-white/80 text-sm"
          >
            <span className="inline-flex items-center gap-2"><HeartPulse className="w-4 h-4" /> 3 modalidades</span>
            <span className="inline-flex items-center gap-2"><Timer className="w-4 h-4" /> 3 níveis cada</span>
            <span className="inline-flex items-center gap-2"><Dumbbell className="w-4 h-4" /> Métodos explicados</span>
          </motion.div>
        </div>
      </section>

      {/* Sports grid */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 tracking-tight">
            Escolha sua modalidade
          </h2>
          <p className="mt-3 text-stone-500 max-w-xl mx-auto">
            Selecione o esporte e depois o nível que combina com você. Cada plano é completo, explicativo e visual.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {sports.map((sport, i) => {
            const Icon = iconMap[sport.icon];
            return (
              <motion.div
                key={sport.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link
                  to={`/esporte/${sport.id}`}
                  className="group block h-full rounded-3xl overflow-hidden bg-white shadow-sm hover:shadow-2xl transition-all duration-500 border border-stone-100"
                >
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={sport.image}
                      alt={sport.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${sport.color} opacity-60 mix-blend-multiply`} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className="absolute top-5 left-5">
                      <div className="w-12 h-12 rounded-2xl bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
                        <Icon className="w-6 h-6 text-stone-900" />
                      </div>
                    </div>
                    <h3 className="absolute bottom-5 left-5 text-3xl font-bold text-white drop-shadow-lg">
                      {sport.name}
                    </h3>
                  </div>
                  <div className="p-6">
                    <p className="text-sm font-medium text-stone-400 uppercase tracking-wide">
                      {sport.tagline}
                    </p>
                    <p className="mt-3 text-stone-600 leading-relaxed">
                      {sport.description}
                    </p>
                    <div className="mt-5 inline-flex items-center gap-2 text-stone-900 font-medium group-hover:gap-3 transition-all">
                      Ver planos de treino
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* How it works */}
      <section className="bg-white border-t border-stone-100">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <h2 className="text-3xl font-bold text-stone-900 text-center mb-12">
            Como funciona
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { n: "01", t: "Escolha a modalidade", d: "Corrida, natação ou ciclismo — o esporte que você quer dominar." },
              { n: "02", t: "Selecione o nível", d: "Iniciante, intermediário ou pro, conforme seu momento atual." },
              { n: "03", t: "Treine com método", d: "Siga o plano semanal, leia as instruções de movimento e evolua." },
            ].map((step) => (
              <div key={step.n} className="text-center">
                <div className="text-5xl font-bold text-stone-200">{step.n}</div>
                <h3 className="mt-2 text-xl font-semibold text-stone-900">{step.t}</h3>
                <p className="mt-2 text-stone-500">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-stone-900 text-stone-400 py-10 text-center text-sm">
        Planilha de Treinos · Corrida · Natação · Ciclismo
      </footer>
    </div>
  );
}
