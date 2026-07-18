"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MessageCircle } from "lucide-react";
import { NAV_LINKS, buildWhatsAppLink } from "@/lib/constants";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-[0_1px_0_0_rgba(15,35,67,0.08)]"
          : "bg-transparent"
      }`}
    >
      <div className="container-xl flex items-center justify-between h-20">
        <a href="#inicio" className="flex items-center gap-3 group">
          <span className="relative w-10 h-10 rounded-full overflow-hidden bg-navy-950 shrink-0 ring-1 ring-gold/30">
            <Image
              src="/logo-mark.png"
              alt="Isabella Cortez"
              fill
              sizes="40px"
              className="object-cover scale-125"
              priority
            />
          </span>
          <span className="font-display text-2xl tracking-wide text-navy-900 transition-colors">
            Isabella Cortez
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-9">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-ink/80 hover:text-navy-900 transition-colors relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href={buildWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-navy-900 text-white text-sm font-medium px-5 py-2.5 hover:bg-navy-800 transition-colors"
          >
            <MessageCircle size={16} strokeWidth={2} />
            Fale no WhatsApp
          </a>
        </div>

        <button
          aria-label="Abrir menu"
          onClick={() => setOpen(true)}
          className="lg:hidden text-navy-900"
        >
          <Menu size={26} />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-navy-950/98 backdrop-blur-sm lg:hidden"
          >
            <div className="container-xl flex items-center justify-between h-20">
              <span className="flex items-center gap-3">
                <span className="relative w-9 h-9 rounded-full overflow-hidden ring-1 ring-gold/40 shrink-0">
                  <Image
                    src="/logo-mark.png"
                    alt="Isabella Cortez"
                    fill
                    sizes="36px"
                    className="object-cover scale-125"
                  />
                </span>
                <span className="font-display text-2xl text-white">
                  Isabella Cortez
                </span>
              </span>
              <button
                aria-label="Fechar menu"
                onClick={() => setOpen(false)}
                className="text-white"
              >
                <X size={26} />
              </button>
            </div>
            <motion.nav
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
              }}
              className="flex flex-col gap-6 px-6 mt-10"
            >
              {NAV_LINKS.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  variants={{
                    hidden: { opacity: 0, y: 16 },
                    show: { opacity: 1, y: 0 },
                  }}
                  className="font-display text-3xl text-white/90"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
                href={buildWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-gold text-navy-950 text-sm font-semibold px-6 py-3.5 w-fit"
              >
                <MessageCircle size={18} />
                Fale no WhatsApp
              </motion.a>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
