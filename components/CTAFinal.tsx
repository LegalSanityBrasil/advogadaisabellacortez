"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/constants";

export default function CTAFinal() {
  return (
    <section id="contato" className="relative py-28 md:py-36 bg-navy-900 overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-gold/[0.07] blur-3xl" />
      </div>

      <div className="container-xl relative text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="eyebrow text-gold-light mb-6"
        >
          Fale com a Dra. Isabella Cortez
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-4xl md:text-6xl text-white leading-tight max-w-3xl mx-auto mb-6"
        >
          Precisa de orientação jurídica?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-white/60 text-lg max-w-lg mx-auto mb-12"
        >
          Entre em contato e receba uma análise inicial do seu caso.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <a
            href={buildWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full bg-white text-navy-900 text-base font-semibold px-9 py-5 hover:bg-gold-light transition-colors shadow-soft"
          >
            <MessageCircle size={20} />
            Falar pelo WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
