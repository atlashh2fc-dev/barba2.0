import { ContactBand, PageIntro, Reveal, SectionHeader } from "@/components/ui";
import { ClientLogoCarousel } from "@/components/client-logo-carousel";

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
          <Reveal delay={0.05}>
            <ClientLogoCarousel />
          </Reveal>
        </div>
      </section>
      <ContactBand />
    </>
  );
}
