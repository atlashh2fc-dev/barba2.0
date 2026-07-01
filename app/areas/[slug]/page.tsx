import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ContactBand, PageIntro, Reveal, SectionHeader } from "@/components/ui";
import { practiceAreas } from "@/lib/content";

export function generateStaticParams() {
  return practiceAreas.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const area = practiceAreas.find((item) => item.slug === slug);
  if (!area) return {};
  return {
    title: `${area.title} | Barba & Cía. Abogados`,
    description: area.summary,
  };
}

export default async function AreaDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const area = practiceAreas.find((item) => item.slug === slug);
  if (!area) notFound();

  return (
    <>
      <PageIntro eyebrow={area.kicker} title={area.title} body={area.subtitle} />
      <section className="px-5 py-12 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.36fr_0.64fr]">
          <aside>
            <Link
              href="/areas"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#071a38] transition hover:text-[#9b7a24]"
            >
              <ArrowLeft size={16} />
              Volver a áreas
            </Link>
            <div className="mt-10 border-l border-[#d4af37] pl-5">
              <p className="text-xl font-semibold text-[#d4af37]">{area.number}</p>
              <p className="mt-3 text-sm leading-6 text-[#58606d]">{area.summary}</p>
            </div>
          </aside>
          <div>
            <SectionHeader
              eyebrow="Alcance"
              title="Cómo intervenimos"
              body="El foco está en ordenar información, reducir incertidumbre y sostener la decisión con evidencia jurídica y operacional."
            />
            <div className="grid gap-4">
              {area.points.map((point, index) => (
                <Reveal key={point} delay={index * 0.04}>
                  <article className="group border-b border-[#071a38]/12 py-4 transition hover:border-[#d4af37]/70">
                    <div className="flex gap-5">
                      <span className="text-sm font-semibold leading-none text-[#d4af37]">
                        0{index + 1}
                      </span>
                      <p className="leading-7 text-[#313844]">{point}</p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
      <ContactBand />
    </>
  );
}
