import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Users, ImageIcon } from "lucide-react";
import { departments } from "@/lib/departments";

export const Route = createFileRoute("/estrutura/$slug")({
  head: ({ params }) => {
    const dep = departments.find((d) => d.slug === params.slug);
    const title = dep ? `${dep.name} — JEnius` : "Departamento — JEnius";
    const description = dep?.short ?? "Departamento da JEnius.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
      ],
    };
  },
  loader: ({ params }) => {
    const dep = departments.find((d) => d.slug === params.slug);
    if (!dep) throw notFound();
    return { dep };
  },
  notFoundComponent: () => (
    <section className="section-pad">
      <div className="container-page text-center">
        <h1 className="text-3xl font-bold">Departamento não encontrado</h1>
        <Link to="/" className="mt-6 inline-flex items-center gap-2 text-brand font-semibold">
          <ArrowLeft size={16} /> Voltar à página inicial
        </Link>
      </div>
    </section>
  ),
  errorComponent: ({ reset }) => (
    <section className="section-pad">
      <div className="container-page text-center">
        <h1 className="text-3xl font-bold">Ocorreu um erro</h1>
        <button onClick={() => reset()} className="mt-6 inline-flex items-center gap-2 text-brand font-semibold">
          Tentar novamente
        </button>
      </div>
    </section>
  ),
  component: DepartmentPage,
});

function DepartmentPage() {
  const { dep } = Route.useLoaderData();

  return (
    <>
      {/* Hero */}
      <section className={`relative overflow-hidden bg-gradient-to-br ${dep.color}`}>
        <div className="container-page py-16 md:py-24 text-primary-foreground">
          <Link
            to="/"
            hash="equipa"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary-foreground/80 hover:text-primary-foreground transition"
          >
            <ArrowLeft size={16} /> Voltar à estrutura
          </Link>
          <div className="mt-6 flex items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 backdrop-blur px-3 py-1 text-xs font-semibold uppercase tracking-wider">
              <Users size={14} /> Estrutura JEnius
            </span>
          </div>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">{dep.name}</h1>
          <p className="mt-4 max-w-2xl text-base md:text-lg text-primary-foreground/90 leading-relaxed whitespace-pre-line">
            {dep.desc}
          </p>
        </div>
      </section>

      {/* Fotos */}
      <section className="section-pad">
        <div className="container-page">
          <div className="flex items-end justify-between mb-8">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-orange">
                A nossa equipa
              </span>
              <h2 className="mt-2 text-2xl md:text-3xl font-bold">Membros do departamento</h2>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="group rounded-2xl border border-border bg-card overflow-hidden hover:shadow-[var(--shadow-card)] transition-all"
              >
                <div className="aspect-square bg-gradient-to-br from-secondary to-muted grid place-items-center text-muted-foreground">
                  <ImageIcon size={32} />
                </div>
                <div className="p-4">
                  <p className="font-semibold text-foreground text-sm">Em breve</p>
                  <p className="text-xs text-muted-foreground">{dep.name}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-10 text-center text-sm text-muted-foreground">
            As fotos dos membros serão adicionadas em breve.
          </p>
        </div>
      </section>

      {/* Outros departamentos */}
      <section className="section-pad bg-secondary/40">
        <div className="container-page">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Outros departamentos</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {departments
              .filter((d) => d.slug !== dep.slug)
              .map((d) => (
                <Link
                  key={d.slug}
                  to="/estrutura/$slug"
                  params={{ slug: d.slug }}
                  className="group rounded-2xl border border-border bg-card p-5 hover:border-brand/40 hover:shadow-[var(--shadow-card)] transition-all"
                >
                  <h3 className="font-bold text-foreground group-hover:text-brand transition">{d.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{d.short}</p>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
