import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLang } from "@/lib/LangContext";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MessageCircle, ShieldCheck, CreditCard, CheckCircle2 } from "lucide-react";

const WHATSAPP_MESSAGES = {
  fr: "Bonjour, je suis intéressé par la formation Airbnb à 1500 MAD. Pouvez-vous m'expliquer comment m'inscrire ?",
  en: "Hello, I'm interested in the Airbnb course for 1500 MAD. Can you explain how I can enroll?",
  ar: "مرحباً، أنا مهتم بدورة Airbnb بسعر 1500 درهم. هل يمكنكم شرح كيفية التسجيل؟",
};

export default function CheckoutPage() {
  const { t, lang } = useLang();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", phone: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/thank-you");
  };

  const waMsg = encodeURIComponent(WHATSAPP_MESSAGES[lang]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-12 px-6">
        <div className="max-w-lg mx-auto">
          {/* Product info */}
          <div className="mb-8 p-6 bg-secondary rounded-2xl border border-border">
            <h1 className="text-2xl font-bold text-foreground mb-2">{t("checkoutTitle")}</h1>
            <p className="text-muted-foreground text-sm mb-4">{t("checkoutDesc")}</p>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-bold text-primary">1500</span>
              <span className="text-lg text-muted-foreground font-medium">MAD</span>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5 mb-8">
            <div className="space-y-2">
              <Label htmlFor="name">{t("checkoutName")}</Label>
              <Input
                id="name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder={t("contactNamePh")}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">{t("checkoutEmail")}</Label>
              <Input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder={t("contactEmailPh")}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">{t("checkoutPhone")}</Label>
              <Input
                id="phone"
                type="tel"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                placeholder={t("checkoutPhonePh")}
              />
            </div>

            {/* Payment methods */}
            <div className="pt-4">
              <p className="text-sm font-semibold text-foreground mb-3">{t("checkoutPaymentTitle")}</p>
              <div className="flex gap-3">
                {["CMI", "PayPal", "Stripe"].map((m) => (
                  <div
                    key={m}
                    className="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl border border-border bg-background shadow-layered text-sm font-bold text-foreground"
                  >
                    <CreditCard className="w-4 h-4 text-primary" />
                    {m}
                  </div>
                ))}
              </div>
            </div>

            {/* Secure message */}
            <div className="flex items-center gap-2 text-muted-foreground text-xs pt-2">
              <ShieldCheck className="w-4 h-4 text-primary shrink-0" />
              <span>{t("checkoutSecure")}</span>
            </div>

            <Button type="submit" variant="hero" size="xl" className="w-full">
              <CheckCircle2 className="w-5 h-5" />
              {t("checkoutPay")}
            </Button>
          </form>

          {/* WhatsApp help */}
          <div className="text-center border-t border-border pt-8">
            <p className="text-sm text-muted-foreground mb-4">{t("checkoutHelp")}</p>
            <a
              href={`https://wa.me/212615101156?text=${waMsg}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="default" className="gap-2">
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
