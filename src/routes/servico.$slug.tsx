import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { services } from "@/lib/services";
import { SectionHeader } from "@/components/SectionHeader";
import { ArrowLeft, Check, ImageIcon } from "lucide-react";

export const Route = createFileRoute("/servico/$slug")({
  loader: ({ params }) => {
    const s = services.find((x) => x.slug === params.slug);
    if (!s) throw notFound();
    return s;
  },
  notFoundComponent: () => (
    <div className="container-page section-pad text-center">
      <h1 className="text-3xl font-bold">Serviço não encontrado</h1>
      <p className="mt-2 text-muted-foreground">O serviço que procura não existe.</p>
      <Link to="/servicos" className="mt-6 inline-flex items-center gap-2 rounded-md bg-brand-dark px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-95">
        <ArrowLeft size={16} /> Ver todos os serviços
      </Link>
    </div>
  ),
  errorComponent: ({ error, reset }) => (
    <div className="container-page section-pad text-center">
      <h1 className="text-3xl font-bold">Erro ao carregar serviço</h1>
      <p className="mt-2 text-muted-foreground">{error.message}</p>
      <button onClick={reset} className="mt-6 inline-flex items-center gap-2 rounded-md bg-brand-dark px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-95">
        Tentar novamente
      </button>
    </div>
  ),
  head: ({ loaderData }) => {
    const s = loaderData!;
    return {
      meta: [
        { title: `${s.name} — JEnius Logística` },
        { name: "description", content: s.short },
        { property: "og:title", content: `${s.name} — JEnius Logística` },
        { property: "og:description", content: s.short },
      ],
    };
  },
  component: ServiceDetailPage,
});

function ServiceDetailPage() {
  const s = Route.useLoaderData();

  return (
    <>
      {/* Hero */}
      <section className={`relative overflow-hidden bg-gradient-to-br ${s.color}`}>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
        <div className="container-page relative py-16 md:py-24 text-primary-foreground">
          <Link to="/servicos" className="inline-flex items-center gap-1.5 text-sm opacity-90 hover:opacity-100 mb-6">
            <ArrowLeft size={16} /> Todos os serviços
          </Link>
          <h1 className="text-3xl md:text-5xl font-bold">{s.name}</h1>
          <p className="mt-4 max-w-2xl text-lg opacity-95">{s.description}</p>
        </div>
      </section>

      {/* Detalhes */}
      <section className="section-pad bg-secondary/40">
        <div className="container-page grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-2xl font-bold text-foreground">O que fazemos</h2>
            <ul className="mt-6 space-y-4">
              {s.details.map((d: string, i: number) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-0.5 flex-shrink-0 grid place-items-center size-5 rounded-full bg-brand/10 text-brand">
                    <Check size={12} strokeWidth={3} />
                  </span>
                  <span className="text-muted-foreground">{d}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <Link to="/contacto" className="inline-flex items-center gap-2 rounded-md bg-brand-dark px-7 py-3.5 text-sm font-semibold text-primary-foreground hover:opacity-95">
                Pedir orçamento
              </Link>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-8">
            <h3 className="text-lg font-semibold text-foreground">Fotos do serviço</h3>
            <div className="mt-4 grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((n) => (
                <div key={n} className="aspect-square rounded-xl border-2 border-dashed border-muted-foreground/25 bg-muted flex flex-col items-center justify-center text-muted-foreground">
                  <ImageIcon size={28} className="mb-2 opacity-40" />
                  <span className="text-xs">Foto {n}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Outros serviços */}
      <section className="section-pad bg-background">
        <div className="container-page">
          <SectionHeader eyebrow="Explore mais" title="Outros serviços" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services
              .filter((x) => x.slug !== s.slug)
              .map((o) => (
                <Link
                  key={o.slug}
                  to="/servico/$slug"
                  params={{ slug: o.slug }}
                  className="group rounded-xl border border-border bg-card p-5 hover:border-brand/40 hover:-translate-y-1 transition-all"
                >
                  <h4 className="font-semibold text-foreground group-hover:text-brand transition-colors">{o.name}</h4>
                  <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{o.short}</p>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
