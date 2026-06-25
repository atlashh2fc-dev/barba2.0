import Image from "next/image";
import { ContactBand, Reveal } from "@/components/ui";
import { team, values } from "@/lib/content";

export const metadata = {
  title: "Firma | Barba & Cia Abogados",
  description:
    "Historia, filosofia, mision y valores de Barba & Cia Abogados.",
};

export default function FirmaPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#071421] px-5 py-10 text-white sm:px-8 lg:py-12">
        <Image
          src="/images/current/barba-skyline.jpg"
          alt=""
          fill
          priority
          className="object-cover opacity-32"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#071421_0%,rgba(7,20,33,0.92)_44%,rgba(7,20,33,0.68)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-[linear-gradient(180deg,transparent,rgba(7,20,33,0.86))]" />
        <div className="footer-gradient-line absolute inset-x-0 top-0 h-px" />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-9 lg:grid-cols-[0.48fr_0.52fr] lg:items-center">
            <div className="max-w-xl py-6 lg:py-10">
              <p className="text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-[#d4af37]">
                Firma
              </p>
              <h1 className="mt-5 font-display text-[1.8rem] leading-[1.08] text-white sm:text-[2.25rem]">
                Criterio legal para decisiones empresariales sensibles.
              </h1>
            </div>
            <p className="max-w-2xl text-[0.94rem] leading-7 text-white/68 lg:justify-self-end">
              Barba Gonella & Cia asesora a empresas con intervencion directa,
              estrategia juridica y seguimiento cercano en asuntos laborales,
              corporativos y litigiosos.
            </p>
          </div>

          <div className="border-t border-white/16 py-5">
            <p className="text-[0.58rem] font-semibold uppercase tracking-[0.2em] text-[#d4af37]">
              Metodo
            </p>
            <div className="mt-4 grid gap-4 lg:grid-cols-3">
              {[
                ["01", "Diagnostico", "Riesgo, evidencia y urgencia del asunto."],
                ["02", "Estrategia", "Curso de accion conectado al negocio."],
                ["03", "Ejecucion", "Defensa, negociacion y seguimiento."],
              ].map(([number, title, body]) => (
                <Reveal key={number}>
                  <div className="grid grid-cols-[34px_1fr] gap-x-4 border-t border-white/10 pt-4 lg:border-t-0 lg:border-r lg:pr-6 lg:last:border-r-0">
                    <span className="text-[0.72rem] font-semibold text-[#d4af37]">{number}</span>
                    <div>
                      <h2 className="text-[0.9rem] font-semibold text-white">{title}</h2>
                      <p className="mt-1.5 text-[0.8rem] leading-5 text-white/56">{body}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="grid border-t border-white/12 pt-4 sm:grid-cols-5">
            {values.map((value, index) => (
              <Reveal key={value} delay={index * 0.025}>
                <div className="border-b border-white/10 py-3 sm:border-b-0 sm:border-r sm:border-white/10 sm:px-5 sm:first:pl-0 sm:last:border-r-0">
                  <span className="text-[0.58rem] font-semibold text-[#d4af37]">
                    0{index + 1}
                  </span>
                  <h3 className="mt-1 text-[0.76rem] font-medium text-white/76">{value}</h3>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#eeede8] px-5 py-10 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 border-b border-[#071a38]/16 pb-7 lg:grid-cols-[0.38fr_0.62fr]">
            <div>
              <p className="text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-[#9b7a24]">
                Direccion
              </p>
              <h2 className="mt-3 font-display text-[1.35rem] leading-tight text-[#071a38]">
                Un equipo compacto, senior y directamente involucrado.
              </h2>
            </div>
            <p className="max-w-2xl text-[0.9rem] leading-6 text-[#58606d] lg:justify-self-end">
              La estructura del estudio permite mantener una relacion cercana con el
              cliente y una ejecucion juridica consistente durante todo el asunto.
            </p>
          </div>

          <div className="mt-7 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {team.map((person, index) => (
              <article
                key={person.name}
                className="group bg-[#f7f5ef] transition duration-300 hover:bg-white"
              >
                <Reveal delay={index * 0.035}>
                  <div className="border-t border-[#071a38]/14 pt-4">
                    <div className="relative h-[360px] overflow-hidden bg-[#071a38] sm:h-[420px] lg:h-[390px]">
                      <Image
                        src={person.image}
                        alt={person.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        style={{ objectPosition: person.position }}
                        className="object-cover grayscale transition duration-500 group-hover:grayscale-0"
                      />
                    </div>
                    <div className="mt-3 flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-[0.98rem] font-semibold leading-snug text-[#071a38]">
                          {person.name}
                        </h3>
                        <p className="mt-1.5 text-[0.64rem] uppercase leading-4 tracking-[0.12em] text-[#8b762f]">
                          {person.role}
                        </p>
                      </div>
                      <span className="mt-1 h-px w-9 bg-[#d4af37]/80 transition-all duration-300 group-hover:w-14" />
                    </div>
                  </div>
                </Reveal>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ContactBand />
    </>
  );
}
