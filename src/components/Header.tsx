import { useLang } from "@/lib/LangContext";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Lang } from "@/lib/i18n";

export function Header() {
  const { lang, setLang, t } = useLang();

  const langs: {code: Lang;label: string;}[] = [
  { code: "ar", label: "العربية" },
  { code: "fr", label: "Français" },
  { code: "en", label: "English" }];


  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold tracking-tighter text-foreground">OPTIMAROC
          <span className="text-primary">MAROC</span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <a href="#" className="hover:text-foreground transition-custom">{t("navHome")}</a>
          <a href="#programme" className="hover:text-foreground transition-custom">{t("navProgram")}</a>
          <Link to="/contact" className="hover:text-foreground transition-custom">{t("navContact")}</Link>
        </div>

        <div className="flex items-center gap-1 bg-secondary p-1 rounded-lg border border-border">
          {langs.map((l) =>
          <button
            key={l.code}
            onClick={() => setLang(l.code)}
            className={`px-3 py-1.5 text-xs rounded-md transition-custom font-medium ${
            lang === l.code ? "bg-background shadow-layered font-bold text-foreground" : "text-muted-foreground hover:text-foreground"}`
            }>
            
              {l.label}
            </button>
          )}
        </div>
      </nav>
    </header>);

}