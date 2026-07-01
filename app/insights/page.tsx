import { ContactBand, PageIntro, Reveal, SectionHeader } from "@/components/ui";
import { insights } from "@/lib/content";

export const metadata = {
  title: "Insights | Barba & Cía. Abogados",
  description:
    "Análisis legal para empresas: laboral, compliance, corporativo y litigios.",
};

export default function InsightsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Insights"
        title="Análisis legal para decisiones empresariales."
        body="Análisis sobre riesgos legales, cambios regulatorios y decisiones empresariales que requieren una mirada especializada."
      />
      <section className="px-5 py-12 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Publicaciones"
            title="Temas iniciales para desarrollar contenido."
          />
          <div className="grid gap-5 md:grid-cols-3">
            {insights.map((post, index) => (
              <Reveal key={post.slug} delay={index * 0.05}>
                <article className="group border-t border-[#071a38]/16 py-5 transition hover:border-[#d4af37]/70">
                  <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#9b7a24]">
                    {post.tag}
                  </span>
                  <h2 className="mt-4 font-display text-[1.15rem] leading-tight text-[#071a38]">
                    {post.title}
                  </h2>
                  <p className="mt-4 text-sm leading-6 text-[#58606d]">{post.excerpt}</p>
                  <span className="mt-7 block h-px w-10 bg-[#d4af37] transition-all duration-300 group-hover:w-20" />
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <ContactBand />
    </>
  );
}
