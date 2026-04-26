import { useLang } from "@/lib/LangContext";
import { Button } from "@/components/ui/button";
import { Home, Clock, TrendingUp, CheckCircle2, MessageCircle, Star } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/morocco-hero.jpg";

const WA_NUMBER = "212615101156";
const WA_MESSAGE = "Salam, bghit nstafser ala l-formation dial Airbnb";
const WA_URL = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_MESSAGE)}`;

function WhatsAppCTA({ className = "", size = "lg" }: { className?: string; size?: "lg" | "xl" }) {
  return (
    <a
      href={WA_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold shadow-lg transition-colors ${
        size === "xl" ? "px-8 py-4 text-base" : "px-6 py-3 text-sm sm:text-base"
      } ${className}`}
      aria-label="Contact on WhatsApp"
    >
      <MessageCircle className="w-5 h-5 fill-white" />
      <span>WhatsApp</span>
    </a>
  );
}

function HeroSection() {
  const { t } = useLang();
  return (
    <section className="py-12 sm:py-20 md:py-28 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight mb-4 sm:mb-6 text-foreground leading-tight">
          {t("heroTitle")}
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed">
          {t("heroSub")}
        </p>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4">
          <Link to="/checkout" className="w-full sm:w-auto">
            <Button variant="hero" size="lg" className="w-full sm:w-auto">{t("ctaJoin")}</Button>
          </Link>
          <WhatsAppCTA className="w-full sm:w-auto" />
        </div>
      </div>
    </section>
  );
}

function OpportunitySection() {
  const { t } = useLang();
  return (
    <section className="py-14 sm:py-20 bg-secondary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-foreground">{t("oppTitle")}</h2>
            <p className="text-muted-foreground mb-6 sm:mb-8 leading-relaxed">{t("oppText")}</p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-5 bg-background rounded-xl shadow-layered">
                <div className="text-2xl font-bold text-primary">10M+</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mt-1">{t("stat1Label")}</div>
              </div>
              <div className="p-5 bg-background rounded-xl shadow-layered">
                <div className="text-2xl font-bold text-primary">2030</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mt-1">{t("stat2Label")}</div>
              </div>
            </div>
          </div>
          <div className="relative aspect-video w-full max-w-full bg-muted rounded-2xl overflow-hidden shadow-elevated">
            <img src={heroImage} alt="Morocco Tourism" className="object-cover w-full h-full" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
}

function LearnSection() {
  const { t } = useLang();
  const cards = [
    { icon: Home, titleKey: "learn1Title" as const, descKey: "learn1Desc" as const },
    { icon: Clock, titleKey: "learn2Title" as const, descKey: "learn2Desc" as const },
    { icon: TrendingUp, titleKey: "learn3Title" as const, descKey: "learn3Desc" as const },
  ];
  return (
    <section className="py-14 sm:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center text-foreground">{t("learnTitle")}</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {cards.map((c) => (
            <div key={c.titleKey} className="p-6 sm:p-8 rounded-2xl bg-background shadow-layered border border-border/50 hover-lift transition-custom">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center text-accent-foreground mb-6">
                <c.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 text-foreground">{t(c.titleKey)}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{t(c.descKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProgramSection() {
  const { t } = useLang();
  const modules = ["mod1", "mod2", "mod3", "mod4", "mod5", "mod6", "mod7", "mod8"] as const;
  return (
    <section id="programme" className="py-14 sm:py-20 bg-secondary px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-10 text-center text-foreground">{t("programTitle")}</h2>
        <div className="space-y-3">
          {modules.map((m, i) => (
            <div key={m} className="flex items-start gap-3 sm:gap-4 p-4 sm:p-5 bg-background rounded-xl shadow-layered">
              <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
              <span className="text-foreground font-medium text-sm sm:text-base">{t(m)}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const { t } = useLang();
  const testimonials = [
    { name: "t1Name" as const, city: "t1City" as const, text: "t1Text" as const },
    { name: "t2Name" as const, city: "t2City" as const, text: "t2Text" as const },
    { name: "t3Name" as const, city: "t3City" as const, text: "t3Text" as const },
  ];
  return (
    <section className="py-14 sm:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center text-foreground">{t("testimonialsTitle")}</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((tm) => (
            <div key={tm.name} className="p-6 sm:p-8 rounded-2xl bg-background shadow-layered border border-border/50">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">"{t(tm.text)}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-bold text-sm">
                  {t(tm.name).charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-foreground text-sm">{t(tm.name)}</div>
                  <div className="text-muted-foreground text-xs">{t(tm.city)}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-xs text-muted-foreground mt-8">{t("earningsNote")}</p>
      </div>
    </section>
  );
}

function PricingSection() {
  const { t } = useLang();
  return (
    <section className="py-14 sm:py-20 px-4 sm:px-6">
      <div className="bg-pricing text-pricing-foreground rounded-3xl max-w-6xl mx-auto overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-20 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">{t("priceTitle")}</h2>
          <div className="text-5xl sm:text-6xl font-bold mb-4">
            750 <span className="text-xl sm:text-2xl font-medium text-pricing-muted">MAD</span>
          </div>
          <p className="text-pricing-muted mb-8 sm:mb-10 text-sm sm:text-base">{t("priceSub")}</p>
          <Link to="/checkout"><Button variant="pricing" size="xl">{t("ctaBuy")}</Button></Link>
          <div className="mt-8 sm:mt-10 flex flex-wrap justify-center gap-4 sm:gap-8 text-pricing-muted">
            <span className="text-sm">{t("paymentLabel")}</span>
            <span className="font-bold text-sm sm:text-base">CIH Bank</span>
            <span className="font-bold text-sm sm:text-base">Attijari Wafa Bank</span>
            <span className="font-bold text-sm sm:text-base">PayPal</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhatsAppSection() {
  const { t } = useLang();
  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6">
      <div className="max-w-2xl mx-auto text-center">
        <MessageCircle className="w-12 h-12 text-primary mx-auto mb-4" />
        <h2 className="text-xl sm:text-2xl font-bold mb-3 text-foreground">{t("whatsappTitle")}</h2>
        <p className="text-muted-foreground mb-6 sm:mb-8 text-sm sm:text-base">{t("whatsappText")}</p>
        <WhatsAppCTA size="xl" />
      </div>
    </section>
  );
}

function FinalCTA() {
  const { t } = useLang();
  return (
    <section className="py-14 sm:py-20 bg-secondary px-4 sm:px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-foreground">{t("finalCtaTitle")}</h2>
        <p className="text-muted-foreground mb-8 sm:mb-10 text-sm sm:text-base">{t("finalCtaSub")}</p>
        <Link to="/checkout"><Button variant="hero" size="xl">{t("finalCtaBtn")}</Button></Link>
      </div>
    </section>
  );
}

function Footer() {
  const { t } = useLang();
  return (
    <footer className="py-10 px-4 sm:px-6 border-t border-border text-center text-muted-foreground text-sm">
      <div className="flex justify-center mb-6">
        <WhatsAppCTA size="lg" />
      </div>
      <p>{t("footer")}</p>
    </footer>
  );
}

export default function LandingPage() {
  return (
    <main>
      <HeroSection />
      <OpportunitySection />
      <LearnSection />
      <ProgramSection />
      <TestimonialsSection />
      <PricingSection />
      <WhatsAppSection />
      <FinalCTA />
      <Footer />
    </main>
  );
}
