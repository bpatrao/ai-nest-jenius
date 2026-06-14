import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Linkedin, Instagram } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-border bg-secondary/40">
      <div className="container-page py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-1">
          <Logo />
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            JEnius | Júnior Iniciativa de Logística da Universidade de Coimbra.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-foreground mb-3">Navegação</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {[
              ["Início", "/"],
              ["Serviços", "/servicos"],
              ["Projetos", "/projetos"],
              ["JENews™", "/jenews"],
              ["FAQs", "/faqs"],
              ["Recrutamento", "/recrutamento"],
              ["Sobre Nós", "/sobre"],
              ["Contacto", "/contacto"],
            ].map(([label, to]) => (
              <li key={to}>
                <Link to={to} className="hover:text-brand transition-colors">{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-foreground mb-3">Contacto</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <MapPin size={16} className="mt-0.5 text-brand shrink-0" />
              <span>Rua Luís Reis dos Santos, Coimbra, Portugal, 3030-788</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} className="text-brand shrink-0" />
              <a href="mailto:jenius.logistics@gmail.com" className="hover:text-brand">
                jenius.logistics@gmail.com
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-foreground mb-3">Segue-nos</h4>
          <div className="flex gap-3">
            <a
              href="https://www.linkedin.com/company/jenius-associa%C3%A7%C3%A3o-j%C3%BAnior-de-log%C3%ADstica/"
              target="_blank"
              rel="noreferrer"
              className="size-10 grid place-items-center rounded-full bg-background border border-border text-brand hover:bg-brand hover:text-primary-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://www.instagram.com/jenius_uc/"
              target="_blank"
              rel="noreferrer"
              className="size-10 grid place-items-center rounded-full bg-background border border-border text-brand hover:bg-brand hover:text-primary-foreground transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-border/70">
        <div className="container-page py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} JEnius. Todos os direitos reservados.</p>
          <p>JEnius - Junior Iniciativa de Logística · Universidade de Coimbra</p>
        </div>
      </div>
    </footer>
  );
}
