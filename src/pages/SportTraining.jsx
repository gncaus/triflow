import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Footprints, Waves, Bike, Dumbbell, ArrowLeft, Target, CalendarDays,
  Clock, Layers, Lightbulb, CheckCircle2, ListChecks,
} from "lucide-react";
import { sports, trainingPlans } from "@/data/trainingData";
import ComplementTraining from "@/components/ComplementTraining";
import { Image } from "@/components/ui/image";

const iconMap = { Footprints, Waves, Bike, Dumbbell };

export default function SportTraining() {
  const { sportId } = useParams();
  const sport = sports.find((s) => s.id === sportId);
  const [activeLevel, setActiveLevel] = useState(() =>
    sport ? Object.keys(trainingPlans[sportId])[0] : "iniciante"
  );

  if (!sport) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-stone-50">
        <div className="text-center">
          <p className="text-stone-500 mb-4">Modalidade não encontrada.</p>
          <Link to="/" className="text-stone-900 font-medium underline">Voltar ao início</Link>
        </div>
      </div>
    );
  }

  const Icon = iconMap[sport.icon];
  const levelKeys = Object.keys(trainingPlans[sportId]);
  const plan = trainingPlans[sportId][activeLevel];

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Header */}
      <div className="relative h-72 md:h-80 overflow-hidden">
        <Image src={sport.image} alt={sport.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/60 to-stone-900/20" />
        <div className="absolute inset-0 max-w-6xl mx-auto px-6 flex flex-col justify-between py-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-white/90 hover:text-white text-sm w-fit"
          >
            <ArrowLeft className="w-4 h-4" /> Voltar
          </Link>
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 rounded-2xl bg-white/90 flex items-center justify-center">
                <Icon className="w-6 h-6 text-stone-900" />
              </div>
              <span className="text-white/80 text-sm uppercase tracking-widest">{sport.tagline}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              Treino de {sport.name}
            </h1>
          </div>
        </div>
      </div>

      {/* Level tabs */}
      <div className="sticky top-0 z-20 bg-stone-50/90 backdrop-blur-md border-b border-stone-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex gap-1 md:gap-2 py-3">
            {levelKeys.map((key) => {
              const lvl = trainingPlans[sportId][key];
              const active = activeLevel === key;
              return (
                <button
                  key={key}
                  onClick={() => setActiveLevel(key)}
                  className={`flex-1 md:flex-none md:px-8 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                    active
                      ? "bg-stone-900 text-white shadow-md"
                      : "text-stone-600 hover:bg-stone-200/60"
                  }`}
                >
                  {lvl.title}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Plan content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeLevel}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.35 }}
          className="max-w-6xl mx-auto px-6 py-12"
        >
          {/* Goal card */}
          <div className="grid md:grid-cols-4 gap-4 mb-10">
            <div className="md:col-span-2 rounded-2xl bg-white border border-stone-100 p-6 shadow-sm">
              <div className="flex items-center gap-2 text-stone-400 text-sm mb-2">
                <Target className="w-4 h-4" /> Objetivo
              </div>
              <p className="text-lg font-semibold text-stone-900">{plan.goal}</p>
            </div>
            <div className="rounded-2xl bg-white border border-stone-100 p-6 shadow-sm">
              <div className="flex items-center gap-2 text-stone-400 text-sm mb-2">
                <CalendarDays className="w-4 h-4" /> Frequência
              </div>
              <p className="text-lg font-semibold text-stone-900">{plan.frequency}</p>
            </div>
            <div className="rounded-2xl bg-white border border-stone-100 p-6 shadow-sm">
              <div className="flex items-center gap-2 text-stone-400 text-sm mb-2">
                <Clock className="w-4 h-4" /> Duração
              </div>
              <p className="text-lg font-semibold text-stone-900">{plan.duration}</p>
            </div>
          </div>

          {/* Method */}
          <div className="rounded-2xl bg-gradient-to-br from-stone-900 to-stone-800 p-8 text-white mb-10">
            <div className="flex items-center gap-2 text-white/60 text-sm mb-3">
              <Layers className="w-4 h-4" /> Método de treino
            </div>
            <h2 className="text-2xl font-bold mb-3">{plan.method.name}</h2>
            <p className="text-stone-300 leading-relaxed max-w-3xl">{plan.method.description}</p>
          </div>

          {/* Weekly schedule */}
          <h2 className="text-2xl font-bold text-stone-900 mb-5 flex items-center gap-2">
            <ListChecks className="w-6 h-6" /> Plano semanal
          </h2>
          <div className="space-y-3 mb-12">
            {plan.schedule.map((day, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 rounded-xl bg-white border border-stone-100 p-5 shadow-sm"
              >
                <div className="md:w-32 flex-shrink-0">
                  <span className="inline-block px-3 py-1 rounded-lg bg-stone-900 text-white text-sm font-medium">
                    {day.day}
                  </span>
                </div>
                <div className="md:w-48 font-semibold text-stone-900">{day.focus}</div>
                <div className="text-stone-600 flex-1">{day.detail}</div>
              </motion.div>
            ))}
          </div>

          {/* Movements with photos */}
          <h2 className="text-2xl font-bold text-stone-900 mb-5 flex items-center gap-2">
            <Footprints className="w-6 h-6" /> Instruções de movimento
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {plan.movements.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl overflow-hidden bg-white border border-stone-100 shadow-sm"
              >
                <div className="relative h-52">
                  <Image src={m.image} alt={m.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <h3 className="absolute bottom-4 left-5 text-xl font-bold text-white drop-shadow-lg">
                    {m.name}
                  </h3>
                </div>
                <div className="p-6">
                  <ol className="space-y-3">
                    {m.steps.map((step, j) => (
                      <li key={j} className="flex gap-3 text-stone-700">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-stone-900 text-white text-xs flex items-center justify-center font-medium">
                          {j + 1}
                        </span>
                        <span className="leading-relaxed">{step}</span>
                      </li>
                    ))}
                  </ol>
                  <div className="mt-5 flex gap-3 items-start rounded-xl bg-amber-50 border border-amber-100 p-4">
                    <Lightbulb className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-amber-900">{m.tip}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Tips */}
          <h2 className="text-2xl font-bold text-stone-900 mb-5 flex items-center gap-2">
            <CheckCircle2 className="w-6 h-6" /> Dicas essenciais
          </h2>
          <div className="grid md:grid-cols-2 gap-3 mb-8">
            {plan.tips.map((tip, i) => (
              <div key={i} className="flex gap-3 items-start rounded-xl bg-white border border-stone-100 p-4 shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                <p className="text-stone-700 leading-relaxed">{tip}</p>
              </div>
            ))}
          </div>

          {/* Treino complementar de hipertrofia */}
          <ComplementTraining sportId={sportId} />

          {/* Level switcher */}
          <div className="flex flex-wrap gap-3 justify-center pt-6 border-t border-stone-200">
            <span className="text-stone-500 self-center">Trocar de nível:</span>
            {levelKeys
              .filter((k) => k !== activeLevel)
              .map((k) => (
                <button
                  key={k}
                  onClick={() => setActiveLevel(k)}
                  className="px-5 py-2 rounded-lg bg-white border border-stone-200 text-stone-700 hover:bg-stone-900 hover:text-white transition-colors text-sm font-medium"
                >
                  {trainingPlans[sportId][k].title}
                </button>
              ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
