import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, ChevronDown } from "lucide-react";
import { Logo } from "./Logo";

const navItems = [
  { label: "Início", to: "/" },
  { label: "Para Empresas", to: "/empresas" },
  { label: "Serviços", to: "/servicos" },
  { label: "Projetos", to: "/projetos" },
  { label: "JENews™", to: "/jenews" },
  { label: "FAQs", to: "/faqs" },
  { label: "Recrutamento", to: "/recrutamento" },
];

const sobreItems = [
  { label: "Sobre Nós", to: "/sobre" },
  { label: "Equipa", to: "/sobre#equipa" },
  { label: "Cultura", to: "/sobre#cultura" },
  { label: "Impacto Social", to: "/sobre#impacto" },
  { label: "Movimento Júnior", to: "/sobre#movimento" },
];


export function Header() {
  const [open, setOpen] = useState(false);
  const [sobreOpen, setSobreOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-white">
      <div className="container-page flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center" aria-label="JEnius - Início">
          <Logo />
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => {
            const active = pathname === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  active
                    ? "text-brand"
                    : "text-foreground/70 hover:text-brand hover:bg-secondary"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <div
            className="relative"
            onMouseEnter={() => setSobreOpen(true)}
            onMouseLeave={() => setSobreOpen(false)}
          >
            <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md text-foreground/70 hover:text-brand hover:bg-secondary transition-colors">
              Sobre Nós <ChevronDown size={14} />
            </button>
            {sobreOpen && (
              <div className="absolute right-0 top-full pt-2 w-56">
                <div className="rounded-lg border border-border bg-card shadow-[var(--shadow-card)] p-2">
                  {sobreItems.map((s) => (
                    <Link
                      key={s.to}
                      to={s.to}
                      className="block px-3 py-2 text-sm rounded-md text-foreground/80 hover:bg-secondary hover:text-brand"
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </nav>

        <div className="hidden lg:block">
          <Link
            to="/contacto"
            className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-bold uppercase tracking-wider rounded-md border-2 border-brand-dark text-brand-dark bg-background hover:bg-brand-dark hover:text-primary-foreground transition-all"
          >
            Contacto
          </Link>
        </div>

        <button
          className="lg:hidden p-2 rounded-md text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="container-page py-4 flex flex-col gap-1">
            {[...navItems, ...sobreItems].map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="px-3 py-3 rounded-md text-sm font-medium text-foreground/80 hover:bg-secondary"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contacto"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center px-6 py-3 text-sm font-bold uppercase tracking-wider rounded-md border-2 border-brand-dark text-brand-dark"
            >
              Contacto
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
