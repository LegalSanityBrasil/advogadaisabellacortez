"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CalendarCheck, MessageCircle, Check } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/constants";

const TRUST_ITEMS = [
  "Atendimento personalizado",
  "Atendimento online",
  "Transparência",
  "Segurança jurídica",
];

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative pt-32 pb-24 md:pt-44 md:pb-32 overflow-hidden bg-white"
    >
      {/* Ambient background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -right-40 w-[520px] h-[520px] rounded-full bg-navy-900/[0.03] blur-3xl" />
        <div className="absolute top-1/3 -left-32 w-[380px] h-[380px] rounded-full bg-gold/[0.06] blur-3xl" />
      </div>

      <div className="container-xl relative grid lg:grid-cols-[1.05fr_0.95fr] gap-16 items-center">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative block w-14 h-14 rounded-full overflow-hidden ring-1 ring-gold/30 mb-8"
          >
            <Image
              src="/logo-mark.png"
              alt="Isabella Cortez"
              fill
              sizes="56px"
              className="object-cover scale-125"
              priority
            />
          </motion.span>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="eyebrow text-gold-dim mb-6"
          >
            Advocacia Previdenciária · Trabalhista · Empresarial
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-navy-900 leading-[1.05] text-5xl sm:text-6xl lg:text-[4.2rem]"
          >
            Isabella
            <br />
            <span className="italic">Cortez</span>
          </motion.h1>

          {/* Signature flourish — draws itself in, evoking a lawyer's own signature */}
          <motion.svg
            viewBox="0 0 280 40"
            className="w-56 h-8 mt-2 mb-6"
            fill="none"
            initial="hidden"
            animate="show"
          >
            <motion.path
              d="M4 28 C 30 6, 46 34, 70 16 S 118 4, 132 22 S 168 32, 190 12 S 236 6, 260 20 C 268 24, 272 22, 276 16"
              stroke="#C9A227"
              strokeWidth="2"
              strokeLinecap="round"
              variants={{
                hidden: { pathLength: 0, opacity: 0 },
                show: {
                  pathLength: 1,
                  opacity: 1,
                  transition: { duration: 1.4, delay: 0.6, ease: "easeInOut" },
                },
              }}
            />
          </motion.svg>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg text-ink/70 max-w-md mb-10 leading-relaxed"
          >
            Soluções jurídicas com atendimento humanizado para pessoas e
            empresas.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <a
              href={buildWhatsAppLink(
                "Olá, Dra. Isabella. Gostaria de agendar um atendimento."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-navy-900 text-white text-sm font-medium px-7 py-4 hover:bg-navy-800 transition-colors"
            >
              <CalendarCheck size={17} />
              Agendar atendimento
            </a>
            <a
              href={buildWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-navy-900/20 text-navy-900 text-sm font-medium px-7 py-4 hover:border-navy-900/50 transition-colors"
            >
              <MessageCircle size={17} />
              Falar pelo WhatsApp
            </a>
          </motion.div>

          <motion.ul
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.08, delayChildren: 0.5 } },
            }}
            className="grid grid-cols-2 gap-x-6 gap-y-3 max-w-md"
          >
            {TRUST_ITEMS.map((item) => (
              <motion.li
                key={item}
                variants={{
                  hidden: { opacity: 0, x: -8 },
                  show: { opacity: 1, x: 0 },
                }}
                className="flex items-center gap-2 text-sm text-ink/70"
              >
                <Check size={15} className="text-gold-dim shrink-0" />
                {item}
              </motion.li>
            ))}
          </motion.ul>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative mx-auto lg:mx-0"
        >
          <div className="absolute -inset-4 border border-gold/40 rounded-[2rem] -z-10" />
          <div className="relative w-[300px] h-[380px] sm:w-[360px] sm:h-[460px] rounded-[1.75rem] overflow-hidden shadow-soft bg-gradient-to-b from-navy-800 to-navy-950">
            {/* Portrait placeholder — substitua por foto profissional real */}
            <svg
              viewBox="0 0 360 460"
              className="absolute inset-0 w-full h-full"
              preserveAspectRatio="xMidYMax slice"
            >
              <rect width="360" height="460" fill="#0F2343" />
              <circle cx="180" cy="190" r="72" fill="#1C3A66" />
              <path
                d="M60 460 C 60 330 300 330 300 460 Z"
                fill="#1C3A66"
              />
              <circle cx="180" cy="185" r="70" fill="none" stroke="#C9A227" strokeOpacity="0.35" strokeWidth="1" />
            </svg>
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-navy-950/90 to-transparent">
              <p className="text-white/90 font-display italic text-lg">
                Dra. Isabella Cortez
              </p>
              <p className="text-white/50 text-xs tracking-wide mt-1">
                OAB — Advocacia Previdenciária, Trabalhista e Empresarial
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
