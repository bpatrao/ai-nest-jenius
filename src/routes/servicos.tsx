import { createFileRoute, Link } from "@tanstack/react-router";
import { Sparkles, Layers, Truck, Boxes, Target, ArrowRight } from "lucide-react";
import { services } from "@/lib/services";
import { SectionHeader } from "@/components/SectionHeader";

export const Route = createFileRoute("/servicos")({
  head: () => ({
    meta: [
      { title: "Serviços — JEnius Logística" },
      { name: "description", content: "Consultoria, layouts, transportes, stocks e processos. Soluções logísticas personalizadas." },
      { property: "og:title", content: "Serviços — JEnius Logística" },
      { property: "og:description", content: "Eficiência e inovação para a sua empresa." },
    ],
  }),
  component: ServicosPage,
});

const iconMap: Record<string, React.ElementType> = {
  consultoria: Sparkles,
  layouts: Layers,
  transportes: Truck,
  stocks: Boxes,
  processos: Target,
};

function ServicosPage() {
  return (
    <>
      <section className="section-pad bg-secondary/40">
        <div className="container-page">
          <SectionHeader eyebrow="Os nossos serviços" title="Eficiência e inovação para a sua empresa" subtitle="Soluções pensadas para empresas, associações e instituições que querem transformar a sua logística num diferencial competitivo." />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => {
              const Icon = iconMap[s.slug];
              return (
                <div key={s.slug} className="group rounded-2xl border border-border bg-card p-6 hover:border-brand/40 hover:-translate-y-1 transition-all flex flex-col">
                  <div className="size-12 grid place-items-center rounded-lg bg-brand/10 text-brand group-hover:bg-brand group-hover:text-primary-foreground transition-colors">
                    {Icon && <Icon size={22} />}
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-foreground">{s.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">{s.short}</p>
                  <Link
                    to="/servico/$slug"
                    params={{ slug: s.slug }}
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-brand hover:underline"
                  >
                    Saber mais <ArrowRight size={14} />
                  </Link>
                </div>
              );
            })}
          </div>
          <div className="mt-12 text-center">
            <Link to="/contacto" className="inline-flex items-center gap-2 rounded-md bg-brand-dark px-7 py-3.5 text-sm font-semibold text-primary-foreground hover:opacity-95">
              Pedir orçamento <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
