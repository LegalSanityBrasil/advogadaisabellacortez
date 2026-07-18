"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="sobre" className="py-24 md:py-32 bg-navy-950 text-white relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 right-0 w-[440px] h-[440px] rounded-full bg-gold/[0.05] blur-3xl" />
      </div>

      <div className="container-xl relative grid lg:grid-cols-[0.9fr_1.1fr] gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <div className="relative w-full max-w-sm aspect-[4/5] rounded-2xl overflow-hidden mx-auto lg:mx-0">
            <Image
              src="/foto-sobre.jpg"
              alt="Dra. Isabella Cortez"
              fill
              sizes="(min-width: 1024px) 384px, 90vw"
              className="object-cover"
              style={{ objectPosition: "50% 20%" }}
            />
            <div className="absolute inset-0 border border-gold/30 rounded-2xl" />
            <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-navy-950/80 backdrop-blur-sm px-4 py-3">
              <p className="text-white/90 text-sm font-medium">
                Dra. Isabella Cortez
              </p>
              <p className="text-gold-light text-xs tracking-wide mt-0.5">
                OAB/SP 525.315
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <p className="eyebrow text-gold-light mb-4">Sobre</p>
          <h2 className="font-display text-4xl md:text-5xl leading-tight mb-8">
            Uma advocacia <span className="italic">próxima</span>, sem perder
            a técnica
          </h2>
          <div className="space-y-5 text-white/70 leading-relaxed max-w-xl">
            <p>
              A advocacia da Dra. Isabella Cortez nasce de uma convicção
              simples: questões jurídicas envolvem pessoas, e pessoas merecem
              ser ouvidas antes de serem representadas.
            </p>
            <p>
              Com atuação nas áreas Previdenciária, Trabalhista e Empresarial,
              o trabalho é conduzido com atenção aos detalhes de cada caso,
              linguagem acessível e comunicação constante — para que o
              cliente entenda exatamente onde está e para onde caminha.
            </p>
            <p>
              O compromisso é com resultados sólidos, construídos com
              seriedade, preparo técnico e respeito ao tempo e às
              particularidades de cada pessoa e empresa atendida.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
