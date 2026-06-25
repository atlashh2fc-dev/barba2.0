"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { whatsappUrl } from "@/lib/contact";

export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.45, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function PageIntro({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: string;
  body: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-[#071a38]/10 px-5 py-9 sm:px-8 lg:py-10">
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/3 border-l border-[#071a38]/5 bg-[linear-gradient(90deg,transparent,rgba(212,175,55,0.08))] lg:block" />
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.68fr_0.32fr] lg:items-end">
        <div>
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.26em] text-[#9b7a24]">
            {eyebrow}
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-[1.55rem] leading-[1.16] text-[#071a38] text-balance sm:text-[1.8rem] lg:text-[2rem]">
            {title}
          </h1>
        </div>
        <p className="max-w-xl text-[0.88rem] leading-6 text-[#58606d] lg:pb-1">{body}</p>
      </div>
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  body,
  tone = "light",
}: {
  eyebrow: string;
  title: string;
  body?: string;
  tone?: "light" | "dark";
}) {
  const titleColor = tone === "dark" ? "text-white" : "text-[#071a38]";
  const bodyColor = tone === "dark" ? "text-white/62" : "text-[#58606d]";

  return (
    <div className="mb-7 max-w-3xl">
      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.26em] text-[#9b7a24]">
        {eyebrow}
      </p>
      <h2 className={`mt-3 font-display text-[1.28rem] leading-tight text-balance sm:text-[1.5rem] ${titleColor}`}>
        {title}
      </h2>
      {body ? <p className={`mt-3 max-w-xl text-[0.88rem] leading-6 ${bodyColor}`}>{body}</p> : null}
    </div>
  );
}

export function CtaLink({
  href,
  children,
  variant = "dark",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "dark" | "light" | "gold";
}) {
  const styles = {
    dark: "border-[#071a38] bg-[#071a38] text-white hover:bg-transparent hover:text-[#071a38]",
    light: "border-white/35 text-white hover:border-[#d4af37] hover:text-[#d4af37]",
    gold: "border-[#d4af37] bg-[#d4af37] text-[#071a38] hover:bg-transparent",
  };

  return (
    <Link
      href={href}
      className={`group relative inline-flex items-center justify-center gap-2 overflow-hidden border px-4 py-2.5 text-[0.72rem] font-semibold uppercase tracking-[0.16em] transition duration-300 ${styles[variant]}`}
    >
      <span className="absolute inset-y-0 left-0 w-0 bg-white/18 transition-all duration-500 group-hover:w-full" />
      <span className="relative">{children}</span>
      <ArrowRight size={16} className="relative transition-transform duration-300 group-hover:translate-x-1" />
    </Link>
  );
}

export function PracticeCard({
  area,
  compact = false,
}: {
  area: {
    slug: string;
    number: string;
    kicker: string;
    title: string;
    subtitle: string;
    summary: string;
  };
  compact?: boolean;
}) {
  return (
    <motion.article
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 260, damping: 24 }}
      className="group relative overflow-hidden border border-[#071a38]/10 bg-white p-5 shadow-[0_18px_50px_rgba(7,26,56,0.06)]"
    >
      <div className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-[#d4af37] transition-transform duration-500 group-hover:scale-x-100" />
      <div className="absolute left-0 top-0 h-full w-px bg-[#d4af37] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="flex items-start justify-between gap-4">
        <span className="text-lg font-semibold leading-none text-[#d4af37]">
          {area.number}
        </span>
        <span className="border border-[#071a38]/10 px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[#6c7481]">
          {area.kicker}
        </span>
      </div>
      <h3 className="mt-7 font-display text-[1.25rem] leading-tight text-[#071a38]">
        {area.title}
      </h3>
      <p className="mt-3 text-sm leading-6 text-[#58606d]">
        {compact ? area.subtitle : area.summary}
      </p>
      <Link
        href={`/areas/${area.slug}`}
        className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-[#071a38]/74 transition hover:text-[#9b7a24]"
      >
        Detalle
        <span className="flex h-5 w-5 items-center justify-center rounded-full border border-[#071a38]/12 text-[#9b7a24] transition group-hover:border-[#9b7a24]/45 group-hover:bg-[#9b7a24] group-hover:text-white">
          <ArrowRight size={11} />
        </span>
      </Link>
    </motion.article>
  );
}

export function ContactBand() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-7%", "7%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.09, 1.02]);

  return (
    <section ref={sectionRef} className="px-5 py-12 sm:px-8">
      <div className="group relative mx-auto min-h-[260px] max-w-7xl overflow-hidden border border-[#d4af37]/30 bg-[#071a38] text-white shadow-[0_34px_90px_rgba(7,26,56,0.18)]">
        <motion.div
          aria-hidden="true"
          className="absolute -inset-y-[12%] inset-x-0"
          style={{ y: imageY, scale: imageScale }}
        >
          <Image
            src="/images/cta/legal-depth.png"
            alt=""
            fill
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="object-cover object-center"
          />
        </motion.div>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,18,41,0.97)_0%,rgba(5,18,41,0.88)_43%,rgba(5,18,41,0.48)_72%,rgba(5,18,41,0.62)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),transparent_35%,rgba(3,13,30,0.35))]" />
        <div className="footer-gradient-line absolute inset-x-0 top-0 z-10 h-px" />

        <div className="relative z-10 grid min-h-[260px] gap-8 p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center lg:p-10">
          <div>
            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-8 bg-[#d4af37]" />
              <p className="text-[0.66rem] font-semibold uppercase tracking-[0.26em] text-[#e0bc42]">
                Siguiente paso
              </p>
            </div>
            <h2 className="max-w-[620px] font-display text-[1.35rem] leading-[1.18] text-balance sm:text-[1.6rem]">
              Conversemos sobre el riesgo legal que hoy necesita una decision.
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-6 text-white/68">
              Una primera conversacion confidencial para ordenar antecedentes, urgencia y curso de accion.
            </p>
          </div>

          <div className="flex flex-col items-start gap-5 lg:items-end">
            <div className="hidden items-center gap-5 border border-white/15 bg-[#071a38]/32 px-5 py-3 text-[0.62rem] uppercase tracking-[0.18em] text-white/62 backdrop-blur-xl sm:flex">
              <span>Diagnostico</span>
              <span className="h-1 w-1 rounded-full bg-[#d4af37]" />
              <span>Estrategia</span>
              <span className="h-1 w-1 rounded-full bg-[#d4af37]" />
              <span>Accion</span>
            </div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="group/button inline-flex items-center justify-center gap-3 border border-[#d4af37] bg-[#d4af37] px-5 py-3 text-[0.7rem] font-semibold uppercase tracking-[0.15em] text-[#071a38] transition duration-300 hover:bg-white"
            >
              Agendar reunion
              <ArrowRight
                size={15}
                className="transition-transform duration-300 group-hover/button:translate-x-1"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
