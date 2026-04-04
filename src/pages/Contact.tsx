import { useLang } from "@/lib/LangContext";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MessageCircle } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function ContactPage() {
  const { t } = useLang();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message envoyé !");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-secondary flex flex-col">
      <Header />
      <main className="flex-grow flex items-center justify-center px-6 py-16">
        <div className="max-w-xl w-full bg-background p-8 md:p-12 rounded-3xl shadow-elevated">
          <Link to="/" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-custom inline-block mb-8">
            {t("contactBack")}
          </Link>
          <h1 className="text-3xl font-bold mb-2 text-foreground">{t("contactTitle")}</h1>
          <p className="text-muted-foreground mb-8">{t("contactSub")}</p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-semibold mb-2 text-foreground">{t("contactName")}</label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder={t("contactNamePh")}
                className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-custom"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2 text-foreground">{t("contactEmail")}</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder={t("contactEmailPh")}
                className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-custom"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2 text-foreground">{t("contactMessage")}</label>
              <textarea
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder={t("contactMsgPh")}
                className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-custom resize-none"
              />
            </div>
            <Button type="submit" variant="hero" size="lg" className="w-full">
              {t("contactSend")}
            </Button>
          </form>

          <div className="mt-10 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
            <a
              href="https://wa.me/212615101156"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-bold flex items-center gap-2 hover:opacity-80 transition-custom"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Direct
            </a>
            <span className="text-muted-foreground text-sm">support@bnbmaroc.ma</span>
          </div>
        </div>
      </main>
    </div>
  );
}
