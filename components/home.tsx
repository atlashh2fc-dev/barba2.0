"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SeamlessHeroVideo } from "@/components/seamless-hero-video";
import { ClientLogoCarousel } from "@/components/client-logo-carousel";
import { differentiators, practiceAreas } from "@/lib/content";
import { whatsappUrl } from "@/lib/contact";
import { ContactBand, CtaLink, Reveal, SectionHeader } from "@/components/ui";

const priorityServices = [
  {
    title: "Derecho laboral para empresas",
    body: "Asesoria preventiva, auditorias, defensa en juicios laborales y acompanamiento en decisiones vinculadas al capital humano.",
    href: "/areas/derecho-laboral",
  },
  {
    title: "Asesoria juridica, contable y RRHH",
    body: "Un servicio integral para empresas que necesitan coordinar cumplimiento legal, gestion contable y recursos humanos en una sola estrategia.",
    href: "/areas/asesoria-integral",
  },
  {
    title: "Compliance para empresas",
    body: "Diseno e implementacion de modelos de cumplimiento, prevencion de delitos, codigos de etica y politicas internas.",
    href: "/areas/compliance",
  },
];

export function Home() {
  const [activeArea, setActiveArea] = useState(0);
  const [activeMethod, setActiveMethod] = useState(0);
  const featuredAreas = [
    { title: "Abogados Laborales", href: "/areas/derecho-laboral", image: "/images/current/area-laboral.jpg" },
    { title: "Abogados Civiles", href: "/areas/derecho-civil", image: "/images/current/area-civil.jpg" },
    { title: "Abogados Penales", href: "/areas/penal-empresarial", image: "/images/current/area-penal.jpg" },
    { title: "Abogados Corporativos", href: "/areas/derecho-corporativo", image: "/images/current/area-corporativo.jpg" },
    { title: "Litigios", href: "/areas/litigios-complejos", image: "/images/current/area-laboral.jpg" },
  ];

  return (
    <>
      <section className="relative min-h-[540px] overflow-hidden bg-[#071a38] px-5 py-10 text-white sm:px-8 lg:min-h-[590px] lg:py-12">
        <SeamlessHeroVideo />
        <div className="absolute inset-0 bg-black/28" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.46)_0%,rgba(0,0,0,0.18)_50%,rgba(0,0,0,0.04)_100%)]" />

        <div className="relative mx-auto flex min-h-[470px] max-w-7xl items-center lg:min-h-[510px]">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl"
          >
            <p className="text-lg font-medium text-white/92">Barba Gonella & Cia</p>
            <h1 className="mt-4 max-w-xl text-[1.7rem] font-semibold uppercase leading-[1.16] tracking-[0.08em] text-white sm:text-[2rem] lg:text-[2.3rem]">
              Estudio de abogados boutique
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-white/82">
              Abogados laborales para empresas. Protegemos y defendemos a
              organizaciones frente a contingencias laborales, civiles,
              penales, comerciales y corporativas.
            </p>
            <div className="mt-7">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex rounded-full bg-[#8f8151] px-6 py-3 text-sm font-medium uppercase tracking-[0.04em] text-white transition hover:bg-[#74683f]"
              >
                Agenda una reunion
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-[#f7f5ef] px-5 py-11 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.34fr_0.66fr]">
            <div>
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-[#8f8151]">
                Enfoque empresarial
              </p>
              <h2 className="mt-3 max-w-sm text-[1.35rem] font-semibold leading-tight text-[#071a38]">
                Proteccion legal para empresas y equipos directivos.
              </h2>
              <p className="mt-4 text-sm leading-6 text-[#58606d]">
                La propuesta se concentra en prevenir riesgos, defender a la
                empresa y ordenar su cumplimiento laboral, corporativo y
                operacional.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {priorityServices.map((service, index) => (
                <Reveal key={service.title} delay={index * 0.04}>
                  <a
                    href={service.href}
                    className="elegant-card-shine group block min-h-full border border-[#071a38]/10 bg-white p-5 transition hover:-translate-y-1 hover:border-[#8f8151]/50 hover:shadow-[0_18px_45px_rgba(7,26,56,0.1)]"
                  >
                    <span className="text-sm font-semibold text-[#8f8151]">
                      0{index + 1}
                    </span>
                    <h3 className="mt-5 text-base font-semibold text-[#071a38]">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-[#58606d]">
                      {service.body}
                    </p>
                    <span className="mt-5 inline-flex text-xs font-semibold uppercase tracking-[0.08em] text-[#071a38]">
                      Leer mas
                    </span>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-12 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-[1.35rem] font-semibold uppercase tracking-[0.08em] text-[#071a38]">
            Areas de practica
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {featuredAreas.map((area, index) => (
              <Reveal key={area.title} delay={index * 0.04}>
                <a
                  href={area.href}
                  className="elegant-card-shine group block overflow-hidden bg-[#071a38] shadow-[0_18px_50px_rgba(7,26,56,0.12)]"
                >
                  <div className="relative aspect-[1.18] overflow-hidden xl:aspect-[0.9]">
                    <Image
                      src={area.image}
                      alt={area.title}
                      fill
                      className="object-cover opacity-78 transition duration-500 group-hover:scale-[1.04]"
                    />
                    <div className="absolute inset-0 bg-black/32 transition group-hover:bg-black/42" />
                    <div className="absolute inset-x-0 bottom-0 p-6">
                      <h3 className="text-xl font-semibold uppercase tracking-[0.04em] text-white">
                        {area.title}
                      </h3>
                      <span className="mt-4 inline-flex text-sm font-medium uppercase tracking-[0.06em] text-white/82">
                        Leer mas
                      </span>
                    </div>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-[#eeede8] px-5 py-12 sm:px-8 lg:py-14">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.47fr_0.53fr] lg:items-center lg:gap-20">
          <div className="relative min-h-[430px] overflow-hidden bg-[#071a38] shadow-[0_30px_80px_rgba(7,26,56,0.16)] sm:min-h-[500px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={practiceAreas[activeArea].slug}
                initial={{ opacity: 0, scale: 1.035 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0"
              >
                <Image
                  src={practiceAreas[activeArea].image}
                  alt={practiceAreas[activeArea].title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 47vw"
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,18,41,0.06),rgba(5,18,41,0.12)_35%,rgba(5,18,41,0.94))]" />
            <div className="footer-gradient-line absolute inset-x-0 top-0 h-px" />
            <div className="absolute inset-x-0 bottom-0 p-7 text-white sm:p-9">
              <div className="flex items-center justify-between border-b border-white/18 pb-4">
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-[#dfbd48]">
                  {practiceAreas[activeArea].kicker}
                </p>
                <span className="text-sm text-white/48">
                  {practiceAreas[activeArea].number} / 04
                </span>
              </div>
              <h3 className="mt-6 max-w-md font-display text-[1.55rem] leading-tight sm:text-[1.85rem]">
                {practiceAreas[activeArea].title}
              </h3>
              <p className="mt-4 max-w-md text-sm leading-6 text-white/68">
                {practiceAreas[activeArea].summary}
              </p>
            </div>
          </div>

          <div>
            <p className="flex items-center gap-3 text-[0.66rem] font-semibold uppercase tracking-[0.24em] text-[#8f762a]">
              <span className="h-px w-8 bg-[#b89225]" />
              Areas estrategicas
            </p>
            <h2 className="mt-5 max-w-xl font-display text-[1.5rem] leading-[1.15] text-[#071a38] sm:text-[1.75rem]">
              Asesoria especializada para proteger operacion, patrimonio y continuidad.
            </h2>
            <p className="mt-5 max-w-xl text-[0.95rem] leading-7 text-[#58606d]">
              Equipos directivos acceden a una mirada juridica integrada, preparada para anticipar contingencias y conducir decisiones sensibles.
            </p>

            <div className="mt-10 border-t border-[#071a38]/16">
              {practiceAreas.slice(0, 4).map((area, index) => {
                const active = activeArea === index;

                return (
                  <Link
                    key={area.slug}
                    href={`/areas/${area.slug}`}
                    onMouseEnter={() => setActiveArea(index)}
                    onFocus={() => setActiveArea(index)}
                    className="group grid grid-cols-[42px_1fr_auto] items-center gap-3 border-b border-[#071a38]/16 py-5"
                  >
                    <span
                      className={`text-sm font-semibold transition-colors duration-300 ${
                        active ? "text-[#b89225]" : "text-[#071a38]/35"
                      }`}
                    >
                      {area.number}
                    </span>
                    <div>
                      <h3
                        className={`text-[1rem] font-semibold transition-colors duration-300 sm:text-[1.08rem] ${
                          active ? "text-[#071a38]" : "text-[#071a38]/64"
                        }`}
                      >
                        {area.title}
                      </h3>
                      <motion.div
                        initial={false}
                        animate={{ height: active ? "auto" : 0, opacity: active ? 1 : 0 }}
                        className="overflow-hidden"
                      >
                        <p className="pt-2 text-sm leading-6 text-[#667080]">{area.subtitle}</p>
                      </motion.div>
                    </div>
                    <span
                      className={`flex h-9 w-9 items-center justify-center rounded-full border transition duration-300 ${
                        active
                          ? "border-[#b89225] bg-[#b89225] text-white"
                          : "border-[#071a38]/16 text-[#071a38]/55 group-hover:border-[#b89225]"
                      }`}
                    >
                      <ArrowUpRight size={15} />
                    </span>
                  </Link>
                );
              })}
            </div>

            <Link
              href="/areas"
              className="mt-7 inline-flex items-center gap-3 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-[#071a38]"
            >
              Ver todas las areas
              <span className="h-px w-10 bg-[#b89225]" />
            </Link>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#123653] px-5 py-12 text-white sm:px-8 lg:py-14">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeMethod}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.65 }}
            className="absolute inset-y-0 right-0 w-full lg:w-[58%]"
          >
            <Image
              src={practiceAreas[activeMethod].image}
              alt=""
              fill
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#123653_0%,rgba(18,54,83,0.96)_40%,rgba(18,54,83,0.72)_67%,rgba(18,54,83,0.42)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),transparent_48%,rgba(2,18,34,0.1))]" />

        <div className="relative mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.43fr_0.57fr] lg:items-center lg:gap-20">
          <div>
            <p className="flex items-center gap-3 text-[0.66rem] font-semibold uppercase tracking-[0.24em] text-[#dfbd48]">
              <span className="h-px w-8 bg-[#dfbd48]" />
              Modelo de trabajo
            </p>
            <h2 className="mt-5 max-w-lg font-display text-[1.55rem] leading-[1.14] sm:text-[1.8rem]">
              Direccion legal para escenarios de alta exigencia.
            </h2>
            <p className="mt-6 max-w-md text-[0.95rem] leading-7 text-white/62">
              Cada encargo combina analisis juridico, entendimiento del negocio y ejecucion coordinada con la alta administracion.
            </p>

            <div className="mt-10 flex items-end gap-5">
              <span className="font-display text-[2.35rem] leading-none text-[#dfbd48]">
                {differentiators[activeMethod].number}
              </span>
              <div className="mb-1 h-px flex-1 bg-[linear-gradient(90deg,rgba(223,189,72,0.75),transparent)]" />
            </div>
          </div>

          <div className="border-t border-white/18">
            {differentiators.map((item, index) => {
              const active = activeMethod === index;

              return (
                <button
                  key={item.title}
                  type="button"
                  onMouseEnter={() => setActiveMethod(index)}
                  onFocus={() => setActiveMethod(index)}
                  onClick={() => setActiveMethod(index)}
                  className="group grid w-full grid-cols-[42px_1fr] gap-4 border-b border-white/18 py-5 text-left sm:grid-cols-[54px_0.42fr_0.58fr] sm:items-center"
                >
                  <span
                    className={`text-sm font-semibold transition duration-300 ${
                      active ? "text-[#dfbd48]" : "text-white/28"
                    }`}
                  >
                    {item.number}
                  </span>
                  <h3
                    className={`text-base font-semibold transition duration-300 ${
                      active ? "text-white" : "text-white/58"
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={`col-start-2 text-sm leading-6 transition duration-300 sm:col-start-auto ${
                      active ? "text-white/72" : "text-white/38"
                    }`}
                  >
                    {item.body}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-5 py-14 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeader
              eyebrow="Clientes"
              title="Relaciones construidas sobre confianza y resultados."
              body="Asesoria continua para empresas, instituciones y equipos directivos en distintas etapas de crecimiento."
            />
            <CtaLink href="/clientes">Ver clientes</CtaLink>
          </div>
          <Reveal delay={0.05}>
            <ClientLogoCarousel />
          </Reveal>
        </div>
      </section>

      <ContactBand />
    </>
  );
}
