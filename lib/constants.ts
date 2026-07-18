// Número real da Dra. Isabella Cortez, formato internacional.
export const WHATSAPP_NUMBER = "5516992631754";

export const WHATSAPP_DEFAULT_MESSAGE =
  "Olá, Dra. Isabella. Gostaria de agendar uma conversa sobre o meu caso.";

export function buildWhatsAppLink(message: string = WHATSAPP_DEFAULT_MESSAGE) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
}

export const NAV_LINKS = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Áreas de atuação", href: "#areas" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Perguntas Frequentes", href: "#faq" },
  { label: "Contato", href: "#contato" },
];

export const SITE_URL = "https://isabellacortez.adv.br";
