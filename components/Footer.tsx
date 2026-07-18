import Image from "next/image";
import { Instagram, Mail, MessageCircle } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/constants";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-white/50 py-14 border-t border-white/5">
      <div className="container-xl flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col items-center md:items-start gap-3">
          <span className="relative w-12 h-12 rounded-full overflow-hidden ring-1 ring-gold/30">
            <Image
              src="/logo-mark.png"
              alt="Isabella Cortez"
              fill
              sizes="48px"
              className="object-cover scale-125"
            />
          </span>
          <div className="text-center md:text-left">
            <span className="font-display text-2xl text-white">
              Isabella Cortez
            </span>
            <p className="text-xs mt-2 max-w-xs">
              Soluções Jurídicas para Pessoas e Empresas
            </p>
          </div>
        </div>

        <div className="flex items-center gap-5">
          <a
            href={buildWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="hover:text-gold-light transition-colors"
          >
            <MessageCircle size={19} />
          </a>
          <a
            href="https://instagram.com/advogadaisabellacortez"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-gold-light transition-colors"
          >
            <Instagram size={19} />
          </a>
          <a
            href="mailto:isabellacortez@legalsanitybrasil.com.br"
            aria-label="E-mail"
            className="hover:text-gold-light transition-colors"
          >
            <Mail size={19} />
          </a>
        </div>

        <p className="text-xs text-center md:text-right">
          © {year} Isabella Cortez Advocacia.
          <br className="hidden md:block" /> Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
