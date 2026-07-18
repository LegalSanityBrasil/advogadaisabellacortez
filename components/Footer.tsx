import Image from "next/image";
import { Instagram, Mail, MessageCircle } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/constants";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-white/50 py-14 border-t border-white/5">
      <div className="container-xl flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col items-center md:items-start gap-4">
          <Image
            src="/logo-full.png"
            alt="Isabella Cortez Advocacia"
            width={168}
            height={168}
            className="rounded-2xl"
          />
          <p className="text-xs text-center md:text-left max-w-xs">
            Soluções Jurídicas para Pessoas e Empresas
            <br />
            <span className="text-gold-light/80">OAB/SP 525.315</span>
          </p>
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
