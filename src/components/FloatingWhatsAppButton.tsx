import { useLang } from "@/lib/LangContext";
import { MessageCircle } from "lucide-react";

export function FloatingWhatsAppButton() {
  const { lang } = useLang();

  const messages: Record<string, string> = {
    fr: "Bonjour, je suis intéressé par votre service",
    en: "Hello, I'm interested in your service",
    ar: "مرحباً، أنا مهتم بخدماتكم",
  };

  const message = messages[lang] || messages.en;
  const waUrl = `https://wa.me/212615101156?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={waUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg flex items-center justify-center hover:scale-110 transition-transform duration-200 animate-pulse"
      aria-label="Contact on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 fill-white" />
    </a>
  );
}
