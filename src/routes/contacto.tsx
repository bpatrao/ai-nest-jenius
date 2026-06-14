import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SectionHeader } from "@/components/SectionHeader";
import { Mail, MapPin, Linkedin, Instagram, Send } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";
import logoAsset from "@/assets/jenius-logo.png.asset.json";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto — JEnius Logística" },
      { name: "description", content: "Entre em contacto com a JEnius. Estamos aqui para ajudar com soluções logísticas em Coimbra." },
      { property: "og:title", content: "Contacto — JEnius" },
      { property: "og:description", content: "Estamos aqui para ajudar!" },
    ],
  }),
  component: ContactoPage,
});

const schema = z.object({
  nome: z.string().trim().min(2, "Nome obrigatório").max(100),
  email: z.string().trim().email("Email inválido").max(255),
  telemovel: z.string().trim().max(30).optional().or(z.literal("")),
  assunto: z.string().min(1, "Selecione um assunto"),
  mensagem: z.string().trim().min(10, "Mensagem muito curta").max(2000),
  origem: z.string().min(1, "Selecione uma opção"),
  consent: z.literal(true, { errorMap: () => ({ message: "É necessário autorizar" }) }),
});

function ContactoPage() {
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    const parsed = schema.safeParse({ ...data, consent: data.consent === "on" });
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Verifique o formulário");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Mensagem enviada! Entraremos em contacto em breve.");
      (e.target as HTMLFormElement).reset();
    }, 700);
  }

  return (
    <section className="section-pad">
      <div className="container-page grid lg:grid-cols-5 gap-10">
        <div className="lg:col-span-2">
          <SectionHeader align="left" eyebrow="Contacto" title="Entre em contacto" subtitle="Estamos aqui para ajudar!" />
          <ul className="space-y-5 text-sm">
            <li className="flex items-start gap-3">
              <div className="size-10 grid place-items-center rounded-lg bg-brand/10 text-brand shrink-0"><Mail size={18}/></div>
              <div>
                <p className="font-semibold">Email</p>
                <a href="mailto:jenius.logistics@gmail.com" className="text-muted-foreground hover:text-brand">jenius.logistics@gmail.com</a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="size-10 grid place-items-center rounded-lg bg-brand/10 text-brand shrink-0"><MapPin size={18}/></div>
              <div>
                <p className="font-semibold">Localização</p>
                <p className="text-muted-foreground">R. Luis Reis dos Santos 290, 3030-790 Coimbra</p>
              </div>
            </li>
          </ul>
          <div className="mt-6 flex gap-3">
            <a href="https://www.linkedin.com/company/jenius-associa%C3%A7%C3%A3o-j%C3%BAnior-de-log%C3%ADstica/" target="_blank" rel="noreferrer" className="size-11 grid place-items-center rounded-full bg-background border border-border text-brand hover:bg-brand hover:text-primary-foreground" aria-label="LinkedIn"><Linkedin size={18}/></a>
            <a href="https://www.instagram.com/jenius_uc/" target="_blank" rel="noreferrer" className="size-11 grid place-items-center rounded-full bg-background border border-border text-brand hover:bg-brand hover:text-primary-foreground" aria-label="Instagram"><Instagram size={18}/></a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="lg:col-span-3 rounded-2xl border border-border bg-card p-6 md:p-8 space-y-5">
          <div className="grid md:grid-cols-2 gap-4">
            <Field label="Nome" name="nome" required />
            <Field label="Email" name="email" type="email" required />
            <Field label="Telemóvel" name="telemovel" type="tel" />
            <SelectField label="Assunto" name="assunto" options={["Pedir orçamento", "Propor projeto", "Parceria", "Candidatura", "Pedido de reunião / apresentação institucional", "Pedido de informação", "Evento / convite para participação", "Comunicação / imprensa", "Outro"]} required />
          </div>
          <SelectField label="Como nos encontrou?" name="origem" options={["Redes sociais", "Recomendação", "Pesquisa online", "Evento", "Outro"]} required />
          <div>
            <label className="block text-sm font-medium mb-1.5">Mensagem <span className="text-destructive">*</span></label>
            <textarea name="mensagem" required maxLength={2000} rows={5} className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
          </div>
          <label className="flex items-start gap-2 text-sm text-muted-foreground">
            <input type="checkbox" name="consent" className="mt-1 size-4 accent-brand" required />
            <span>Autorizo a JEnius a armazenar esta mensagem para responder ao meu pedido.</span>
          </label>
          <button type="submit" disabled={loading} className="inline-flex items-center justify-center gap-2 w-full md:w-auto rounded-md bg-brand-dark px-7 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-elegant)] hover:opacity-95 disabled:opacity-60">
            {loading ? "A enviar..." : <>Submeter <Send size={15}/></>}
          </button>
        </form>
      </div>

      {/* Mapa — Sede JEnius Polo 2 */}
      <div className="container-page mt-16 relative">
        <div className="mb-6">
          <div className="flex items-center gap-3">
            <img
              src={logoAsset.url}
              alt=""
              className="size-8 opacity-60"
              aria-hidden="true"
            />
            <div>
              <p className="eyebrow">Sede</p>
              <h2 className="mt-1 text-2xl font-semibold tracking-tight">Onde estamos</h2>
            </div>
          </div>
          <p className="mt-1 text-muted-foreground text-sm">R. Luis Reis dos Santos 290, 3030-790 Coimbra — Polo 2 da Universidade de Coimbra</p>
        </div>
        <div className="w-full rounded-2xl overflow-hidden border border-border shadow-[var(--shadow-elegant)]">
          <iframe
            title="Localização JEnius Polo 2"
            src="https://www.google.com/maps?q=40.1856436,-8.415095&z=18&output=embed"
            width="100%"
            height="420"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1.5">{label} {required && <span className="text-destructive">*</span>}</label>
      <input name={name} type={type} required={required} maxLength={255} className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
    </div>
  );
}

function SelectField({ label, name, options, required }: { label: string; name: string; options: string[]; required?: boolean }) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1.5">{label} {required && <span className="text-destructive">*</span>}</label>
      <select name={name} required={required} defaultValue="" className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring">
        <option value="" disabled>Selecione uma opção</option>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  );
}
