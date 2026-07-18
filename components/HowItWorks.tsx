"use client";

import { motion } from "framer-motion";

const STEPS = [
  {
    n: "01",
    title: "Primeiro contato",
    text: "Você entra em contato pelo WhatsApp e conta, em poucas palavras, o que está acontecendo.",
  },
  {
    n: "02",
    title: "Análise do caso",
    text: "A situação é analisada com cuidado, considerando documentos, prazos e o melhor caminho jurídico.",
  },
  {
    n: "03",
    title: "Orientação jurídica",
    text: "Você recebe uma orientação clara sobre as possibilidades, riscos e próximos passos.",
  },
  {
    n: "04",
    title: "Acompanhamento",
    text: "O processo segue com atualizações periódicas, sem deixá-lo no escuro em nenhuma etapa.",
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-24 md:py-32 bg-white">
      <div className="container-xl">
        <div className="max-w-xl mb-20">
          <p className="eyebrow text-gold-dim mb-4">Como funciona</p>
          <h2 className="font-display text-4xl md:text-5xl text-navy-900 leading-tight">
            Um caminho <span className="italic">claro</span>, do início ao fim
          </h2>
        </div>

        <div className="relative max-w-2xl">
          <div className="absolute left-[27px] top-2 bottom-2 w-px bg-navy-900/10 hidden sm:block" />

          <div className="space-y-14">
            {STEPS.map((step, i) => (
              <motion.div
                key={step.n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="relative flex gap-7 items-start"
              >
                <div className="hidden sm:flex shrink-0 w-14 h-14 rounded-full bg-navy-900 items-center justify-center relative z-10">
                  <span className="font-display text-lg text-gold-light">
                    {step.n}
                  </span>
                </div>
                <div className="pt-1">
                  <span className="sm:hidden font-display text-sm text-gold-dim">
                    {step.n}
                  </span>
                  <h3 className="font-display text-2xl text-navy-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-ink/65 leading-relaxed max-w-md">
                    {step.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
