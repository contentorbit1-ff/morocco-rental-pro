import { useLang } from "@/lib/LangContext";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle2, MessageCircle, Mail } from "lucide-react";

export default function ThankYouPage() {
  const { t } = useLang();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-20 px-6">
        <div className="max-w-lg mx-auto text-center">
          <div className="w-20 h-20 rounded-full bg-accent flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-4">{t("thankTitle")}</h1>
          <p className="text-muted-foreground mb-3 leading-relaxed">{t("thankMessage")}</p>
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-10">
            <Mail className="w-4 h-4" />
            <span>{t("thankEmail")}</span>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <Button
              variant="default"
              size="lg"
              className="gap-2"
              onClick={() => window.open(`https://wa.me/212615101156?text=${encodeURIComponent("Hello, I'm interested in your service")}`, "_blank", "noopener,noreferrer")}
            >
              <MessageCircle className="w-5 h-5" />
              {t("whatsappBtn")}
            </Button>
            <Link to="/">
              <Button variant="outline" size="lg">{t("thankBack")}</Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
