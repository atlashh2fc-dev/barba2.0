"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Mail, MapPin, Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { ChatAssistant } from "@/components/chat-assistant";
import { whatsappUrl } from "@/lib/contact";
import { navItems } from "@/lib/content";

export function SiteShell({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-[#f7f5ef] text-[#22252b]">
      <header className="sticky left-0 right-0 top-0 z-50 border-b border-[#071a38]/10 bg-[#f7f5ef]/96 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
          <Link href="/" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
            <Image
              src="/images/current/barba-logo.png"
              alt="Barba Gonella & Cía. Abogados"
              width={132}
              height={55}
              className="h-11 w-auto object-contain"
              priority
            />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Navegación principal">
            {navItems.map((item) => {
              const active =
                item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group relative px-3.5 py-3 text-[0.78rem] font-medium text-[#334055] transition hover:text-[#071a38]"
                >
                  {item.label}
                  <span
                    className={`absolute inset-x-4 bottom-2 h-px origin-left bg-[#d4af37] transition-transform duration-300 ${
                      active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          <Link
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 border border-[#071a38]/16 px-3.5 py-2 text-[0.76rem] font-semibold text-[#071a38] transition hover:border-[#d4af37] hover:bg-[#071a38] hover:text-white lg:flex"
          >
            Agenda una reunión
            <ArrowUpRight size={16} />
          </Link>

          <button
            type="button"
            aria-label="Abrir menú"
            onClick={() => setOpen(true)}
            className="flex h-8 w-8 items-center justify-center border border-[#071a38]/15 text-[#071a38] lg:hidden"
          >
            <Menu size={21} />
          </button>
        </div>
      </header>

      {open ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-[60] bg-[#071a38] px-5 py-5 text-white lg:hidden"
        >
          <div className="flex items-center justify-between">
            <span className="text-lg font-semibold">Barba & Cía.</span>
            <button
              type="button"
              aria-label="Cerrar menú"
              onClick={() => setOpen(false)}
              className="flex h-10 w-10 items-center justify-center border border-white/18"
            >
              <X size={21} />
            </button>
          </div>
          <nav className="mt-10 grid gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-white/10 py-4 text-2xl font-semibold"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </motion.div>
      ) : null}

      <div>{children}</div>
      <Footer />
      <ChatAssistant />
    </div>
  );
}

function Footer() {
  return (
    <footer className="footer-atmosphere relative overflow-hidden px-5 pb-5 pt-7 text-white sm:px-8 sm:pb-6 sm:pt-10 lg:pt-12">
      <div className="footer-gradient-line absolute inset-x-0 top-0 h-px" />
      <div aria-hidden="true" className="footer-light-sweep absolute inset-0" />

      <div className="relative mx-auto max-w-7xl">
        <div className="hidden gap-6 pb-7 sm:grid lg:grid-cols-[0.72fr_0.28fr] lg:items-end">
          <div>
            <p className="flex items-center gap-3 text-[0.58rem] font-semibold uppercase tracking-[0.22em] text-[#d9b94a]">
              <span className="h-px w-6 bg-[#d9b94a]" />
              Defensa empresarial
            </p>
            <p className="mt-3 max-w-2xl text-[0.95rem] leading-6 text-white/76">
              Criterio jurídico para decisiones empresariales sensibles.
            </p>
          </div>
          <Link
            href="/contacto"
            className="group inline-flex w-fit items-center gap-3 text-[0.64rem] font-semibold uppercase tracking-[0.14em] text-white lg:justify-self-end"
          >
            Contacto
            <span className="relative flex h-7 w-7 items-center justify-center rounded-full border border-[#d9b94a]/55 text-[#d9b94a] transition duration-300 group-hover:border-[#d9b94a] group-hover:bg-[#d9b94a] group-hover:text-[#061327]">
              <ArrowUpRight size={13} />
            </span>
          </Link>
        </div>

        <div className="hidden h-px bg-[linear-gradient(90deg,rgba(217,185,74,0.55),rgba(255,255,255,0.13)_42%,transparent)] sm:block" />

        <div className="grid grid-cols-2 gap-x-7 gap-y-6 py-5 sm:py-7 lg:grid-cols-[1.15fr_0.6fr_1fr] lg:gap-14">
          <div className="col-span-2 max-w-md lg:col-span-1">
            <Image
              src="/images/current/barba-logo.png"
              alt="Barba Gonella & Cía. Abogados"
              width={150}
              height={64}
              className="h-10 w-auto brightness-0 invert opacity-75"
            />
            <p className="mt-4 max-w-sm text-[0.78rem] leading-5 text-white/56 sm:text-[0.82rem] sm:leading-6">
              Asesoría legal estratégica para empresas, con presencia directa,
              lectura de negocio y defensa rigurosa.
            </p>
            <p className="mt-3 text-[0.55rem] uppercase leading-5 tracking-[0.14em] text-white/38 sm:mt-4 sm:text-[0.58rem]">
              Santiago <span className="mx-2 text-[#d9b94a]/65">·</span>
              Antofagasta <span className="mx-2 text-[#d9b94a]/65">·</span>
              Rancagua <span className="mx-2 text-[#d9b94a]/65">·</span>
              Viña del Mar
            </p>
          </div>

          <nav className="grid content-start gap-2 text-[0.78rem] text-white/56 sm:text-[0.82rem]">
            <p className="mb-1 text-[0.58rem] font-semibold uppercase tracking-[0.18em] text-[#d9b94a]">
              Navegación
            </p>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group inline-flex w-fit items-center gap-2 transition duration-300 hover:text-white"
              >
                <span className="h-px w-0 bg-[#d9b94a] transition-all duration-300 group-hover:w-4" />
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="grid content-start gap-3 text-[0.78rem] text-white/56 sm:text-[0.82rem]">
            <p className="mb-1 text-[0.58rem] font-semibold uppercase tracking-[0.18em] text-[#d9b94a]">
              Contacto directo
            </p>
            <a
              href="tel:+56232424673"
              className="group flex w-fit items-start gap-3 transition hover:text-white"
            >
              <Phone className="mt-0.5 shrink-0 text-[#d9b94a]" size={14} />
              +56 2 3242 4673
            </a>
            <a
              href="tel:+56934153944"
              className="group flex w-fit items-start gap-3 transition hover:text-white"
            >
              <Phone className="mt-0.5 shrink-0 text-[#d9b94a]" size={14} />
              +56 9 3415 3944
            </a>
            <a
              href="mailto:contacto@barbaycia.cl"
              className="group flex w-fit items-start gap-3 transition hover:text-white"
            >
              <Mail className="mt-0.5 shrink-0 text-[#d9b94a]" size={14} />
              contacto@barbaycia.cl
            </a>
            <p className="col-span-2 flex items-start gap-3 lg:col-span-1">
              <MapPin className="mt-0.5 shrink-0 text-[#d9b94a]" size={14} />
              Av. Apoquindo 6410, Of. 502, Las Condes
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/9 pt-5 text-[0.58rem] uppercase tracking-[0.1em] text-white/30 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 Barba & Cía. Abogados.</span>
          <span>Confidencialidad · estrategia · defensa</span>
        </div>
      </div>
    </footer>
  );
}
