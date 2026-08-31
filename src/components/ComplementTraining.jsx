import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Dumbbell, Layers, Lightbulb, CheckCircle2 } from "lucide-react";
import { complements, complementIntro } from "@/data/complementData";
import { Image } from "@/components/ui/image";

const typeKeys = ["forca", "resistencia", "recuperatorio"];

export default function ComplementTraining({ sportId }) {
  const complement = complements[sportId];
  const [active, setActive] = useState("forca");
  if (!complement) return null;
  const plan = complement[active];

  return (
    <div className="mt-16 pt-10 border-t border-stone-200">
      {/* Intro */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-100 text-violet-700 text-sm font-medium mb-4">
          <Dumbbell className="w-4 h-4" /> Complementar
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-stone-900 tracking-tight">
          {complementIntro.title}
        </h2>
        <p className="mt-2 text-stone-500">{complementIntro.subtitle}</p>
        <p className="mt-3 text-stone-600 max-w-3xl mx-auto leading-relaxed">
          {complementIntro.description}
        </p>
      </div>

      {/* Type tabs */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex gap-1 p-1 rounded-xl bg-stone-100">
          {typeKeys.map((key) => {
            const activeTab = active === key;
            return (
              <button
                key={key}
                onClick={() => setActive(key)}
                className={`px-5 md:px-8 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  activeTab
                    ? "bg-white text-violet-700 shadow-sm"
                    : "text-stone-600 hover:text-stone-900"
                }`}
              >
                {complement[key].title}
              </button>
            );
          })}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          {/* Method */}
          <div className="rounded-2xl bg-gradient-to-br from-violet-600 to-indigo-600 p-6 text-white mb-8">
            <div className="flex items-center gap-2 text-white/70 text-sm mb-2">
              <Layers className="w-4 h-4" /> Método
            </div>
            <p className="leading-relaxed">{plan.method}</p>
          </div>

          {/* Movements */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {plan.movements.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl overflow-hidden bg-white border border-stone-100 shadow-sm"
              >
                <div className="relative h-48">
                  <Image src={m.image} alt={m.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <h3 className="absolute bottom-3 left-5 text-lg font-bold text-white drop-shadow-lg">
                    {m.name}
                  </h3>
                </div>
                <div className="p-5">
                  <ol className="space-y-2.5">
                    {m.steps.map((step, j) => (
                      <li key={j} className="flex gap-3 text-stone-700">
                        <span className="flex-shrink-0 w-5 h-5 rounded-full bg-violet-600 text-white text-xs flex items-center justify-center font-medium">
                          {j + 1}
                        </span>
                        <span className="text-sm leading-relaxed">{step}</span>
                      </li>
                    ))}
                  </ol>
                  <div className="mt-4 flex gap-2 items-start rounded-lg bg-amber-50 border border-amber-100 p-3">
                    <Lightbulb className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-amber-900">{m.tip}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Tips */}
          <div className="grid md:grid-cols-3 gap-3">
            {plan.tips.map((tip, i) => (
              <div key={i} className="flex gap-3 items-start rounded-xl bg-white border border-stone-100 p-4 shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-stone-700 leading-relaxed">{tip}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
