import { ContactBand, PageIntro, Reveal, SectionHeader } from "@/components/ui";
import { clients } from "@/lib/content";

export const metadata = {
  title: "Clientes | Barba & Cia Abogados",
  description: "Clientes y organizaciones asesoradas por Barba & Cia Abogados.",
};

export default function ClientesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Clientes"
        title="Confianza construida con empresas y organizaciones."
        body="Organizaciones que confian en una asesoria cercana, rigurosa y conectada con sus decisiones."
      />
      <section className="px-5 py-12 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Organizaciones"
            title="Relaciones que valoran precision, criterio y respuesta."
          />
          <div className="grid gap-px overflow-hidden border border-[#071a38]/10 sm:grid-cols-2 lg:grid-cols-3">
            {clients.map((client, index) => (
              <Reveal key={client} delay={index * 0.04}>
                <div className="group flex min-h-24 items-center justify-center bg-white px-5 text-center transition hover:bg-[#071a38]">
                  <span className="text-sm font-semibold text-[#071a38] transition group-hover:text-white">
                    {client}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <ContactBand />
    </>
  );
}
