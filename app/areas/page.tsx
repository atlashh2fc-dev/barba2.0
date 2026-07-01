import { PracticeGallery } from "@/components/practice-gallery";
import { ContactBand, PageIntro } from "@/components/ui";
import { practiceAreas } from "@/lib/content";

export const metadata = {
  title: "Áreas de Práctica | Barba & Cía. Abogados",
  description:
    "Servicios legales para empresas: laboral, corporativo, civil, litigios, penal empresarial, tributario, compliance e integral.",
};

export default function AreasPage() {
  return (
    <>
      <PageIntro
        eyebrow="Áreas de práctica"
        title="Soluciones legales independientes, conectadas por estrategia."
        body="Cada área responde a un problema concreto de empresa, pero todas comparten una misma lectura: riesgo, evidencia, oportunidad y continuidad."
      />
      <section className="px-5 py-12 sm:px-8">
        <PracticeGallery areas={practiceAreas} />
      </section>
      <ContactBand />
    </>
  );
}
