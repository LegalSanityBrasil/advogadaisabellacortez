"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ArrowUpRight } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/constants";

type Area = {
  title: string;
  description: string;
  services: string[];
};

const AREAS: Area[] = [
  {
    title: "Direito Previdenciário",
    description:
      "Orientação e defesa dos seus direitos junto ao INSS, do planejamento à concessão do benefício.",
    services: [
      "Planejamento Previdenciário",
      "Aposentadorias",
      "Revisão de Benefícios",
      "Auxílio por Incapacidade",
      "Pensão por Morte",
      "Salário-Maternidade",
      "BPC/LOAS",
      "Regularização de CNIS",
      "Recursos Administrativos",
    ],
  },
  {
    title: "Direito Trabalhista",
    description:
      "Defesa de trabalhadores e orientação preventiva para relações de trabalho mais seguras.",
    services: [
      "Verbas Rescisórias",
      "Horas Extras",
      "Reconhecimento de Vínculo",
      "FGTS",
      "Rescisão Indireta",
      "Acidente de Trabalho",
      "Consultoria Trabalhista",
    ],
  },
  {
    title: "Direito Empresarial",
    description:
      "Estrutura jurídica sólida para empresas que querem crescer com segurança.",
    services: [
      "Constituição de Empresas",
      "Contratos",
      "Alterações Contratuais",
      "Consultoria Preventiva",
      "Cobrança Extrajudicial",
      "Notificações Extrajudiciais",
      "Assessoria Jurídica Empresarial",
    ],
  },
];

function AreaCard({ area, index }: { area: Area; index: number }) {
  const [open, setOpen] = useState(false);
  const visible = open ? area.services : area.services.slice(0, 3);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative flex flex-col rounded-2xl border border-navy-900/10 bg-white p-8 hover:border-gold/50 hover:shadow-card transition-all duration-300"
    >
      <span className="font-display text-4xl text-gold/70 mb-6">
        {String(index + 1).padStart(2, "0")}
      </span>
      <h3 className="font-display text-2xl text-navy-900 mb-3">
        {area.title}
      </h3>
      <p className="text-sm text-ink/65 leading-relaxed mb-6">
        {area.description}
      </p>

      <ul className="space-y-2.5 mb-4">
        {visible.map((s) => (
          <li key={s} className="text-sm text-ink/75 flex items-start gap-2.5">
            <span className="mt-1.5 w-1 h-1 rounded-full bg-gold shrink-0" />
            {s}
          </li>
        ))}
      </ul>

      {area.services.length > 3 && (
        <button
          onClick={() => setOpen((v) => !v)}
          className="flex items-center gap-1.5 text-xs font-medium text-navy-900/60 hover:text-navy-900 transition-colors mb-6"
        >
          {open ? "Ver menos" : `+ ${area.services.length - 3} outros serviços`}
          <ChevronDown
            size={14}
            className={`transition-transform ${open ? "rotate-180" : ""}`}
          />
        </button>
      )}

      <div className="mt-auto pt-4 border-t border-navy-900/5">
        <a
          href={buildWhatsAppLink(
            `Olá, Dra. Isabella. Tenho interesse em ${area.title}.`
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-navy-900 group-hover:text-gold-dim transition-colors"
        >
          Conversar sobre este tema
          <ArrowUpRight size={15} />
        </a>
      </div>
    </motion.div>
  );
}

export default function PracticeAreas() {
  return (
    <section id="areas" className="py-24 md:py-32 bg-paper">
      <div className="container-xl">
        <div className="max-w-xl mb-16">
          <p className="eyebrow text-gold-dim mb-4">Áreas de atuação</p>
          <h2 className="font-display text-4xl md:text-5xl text-navy-900 leading-tight">
            Assessoria jurídica{" "}
            <span className="italic">focada no que importa</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {AREAS.map((area, i) => (
            <AreaCard key={area.title} area={area} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
