"use client";

import { motion } from "framer-motion";
import {
  HeartHandshake,
  Laptop,
  Search,
  MessageSquareText,
  Scale,
  ShieldCheck,
} from "lucide-react";

const ITEMS = [
  {
    icon: HeartHandshake,
    title: "Atendimento Humanizado",
    text: "Cada conversa começa pela escuta, não pelo processo.",
  },
  {
    icon: Laptop,
    title: "Atendimento Online",
    text: "Converse de onde estiver, sem burocracia para começar.",
  },
  {
    icon: Search,
    title: "Análise Individual",
    text: "Nenhum caso é tratado como padrão. Cada história é única.",
  },
  {
    icon: MessageSquareText,
    title: "Comunicação Clara",
    text: "Explicações em linguagem acessível, sem juridiquês desnecessário.",
  },
  {
    icon: Scale,
    title: "Ética Profissional",
    text: "Orientação honesta, mesmo quando a resposta não é a esperada.",
  },
  {
    icon: ShieldCheck,
    title: "Compromisso com o Cliente",
    text: "Acompanhamento presente do início ao fim do caso.",
  },
];

export default function Differentials() {
  return (
    <section className="py-24 md:py-32 bg-paper">
      <div className="container-xl">
        <div className="max-w-xl mb-16">
          <p className="eyebrow text-gold-dim mb-4">Diferenciais</p>
          <h2 className="font-display text-4xl md:text-5xl text-navy-900 leading-tight">
            O motivo pelo qual clientes{" "}
            <span className="italic">permanecem</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
          {ITEMS.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
            >
              <item.icon size={26} strokeWidth={1.5} className="text-gold-dim mb-4" />
              <h3 className="font-display text-xl text-navy-900 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-ink/65 leading-relaxed max-w-xs">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
