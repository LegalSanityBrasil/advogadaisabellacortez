"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";

const FAQS = [
  {
    q: "O atendimento é feito somente online?",
    a: "O primeiro contato e grande parte do acompanhamento podem ser feitos de forma online, pelo WhatsApp, o que agiliza o processo. Quando necessário, atendimentos presenciais também podem ser combinados.",
  },
  {
    q: "Quanto custa uma consulta inicial?",
    a: "O valor da análise inicial varia conforme a complexidade do caso e é informado com transparência já na primeira conversa, antes de qualquer compromisso.",
  },
  {
    q: "Quanto tempo leva um processo?",
    a: "O prazo depende da natureza do caso e da instância envolvida. Após a análise inicial, você recebe uma estimativa realista sobre os próximos passos.",
  },
  {
    q: "Posso enviar meus documentos pelo WhatsApp?",
    a: "Sim. Documentos podem ser enviados com segurança pelo WhatsApp para agilizar a análise preliminar do seu caso.",
  },
  {
    q: "Como sei se meu caso tem chances de sucesso?",
    a: "Isso só pode ser avaliado após a análise individual do seu caso. Você receberá uma orientação honesta sobre as possibilidades reais antes de seguir adiante.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 md:py-32 bg-white">
      <div className="container-xl grid lg:grid-cols-[0.7fr_1.3fr] gap-16">
        <div>
          <p className="eyebrow text-gold-dim mb-4">Perguntas Frequentes</p>
          <h2 className="font-display text-4xl md:text-5xl text-navy-900 leading-tight">
            Dúvidas <span className="italic">comuns</span>
          </h2>
        </div>

        <div className="divide-y divide-navy-900/10 border-t border-b border-navy-900/10">
          {FAQS.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={item.q}>
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-6 py-6 text-left"
                >
                  <span className="font-display text-xl text-navy-900">
                    {item.q}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="shrink-0 text-gold-dim"
                  >
                    <Plus size={20} />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="text-ink/65 leading-relaxed pb-6 max-w-xl">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
