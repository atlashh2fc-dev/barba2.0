"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useState } from "react";

type Area = {
  slug: string;
  number: string;
  kicker: string;
  title: string;
  subtitle: string;
  summary: string;
  image: string;
  points: string[];
};

export function PracticeGallery({ areas }: { areas: Area[] }) {
  const [selected, setSelected] = useState<Area | null>(null);

  return (
    <>
      <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 xl:grid-cols-4">
        {areas.map((area, index) => (
          <motion.article
            key={area.slug}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-70px" }}
            transition={{ duration: 0.45, delay: index * 0.03 }}
            className="elegant-card-shine group overflow-hidden border border-[#071a38]/10 bg-white shadow-[0_18px_50px_rgba(7,26,56,0.06)]"
          >
            <div className="relative aspect-[1.24] overflow-hidden bg-[#071a38]">
              <Image
                src={area.image}
                alt={area.title}
                fill
                className="object-cover opacity-78 transition duration-700 group-hover:scale-[1.06] group-hover:opacity-95"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,26,56,0.02),rgba(7,26,56,0.72))]" />
              <span className="absolute left-4 top-4 text-sm font-semibold text-[#d4af37]">
                {area.number}
              </span>
              <span className="absolute right-4 top-4 border border-white/25 bg-white/12 px-2.5 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-md">
                {area.kicker}
              </span>
              <h3 className="absolute inset-x-4 bottom-4 text-lg font-semibold leading-tight text-white">
                {area.title}
              </h3>
            </div>
            <div className="p-5">
              <p className="min-h-20 text-sm leading-6 text-[#58606d]">{area.summary}</p>
              <button
                type="button"
                onClick={() => setSelected(area)}
                className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-[#071a38]/74 transition hover:text-[#9b7a24]"
              >
                Detalle
                <span className="flex h-5 w-5 items-center justify-center rounded-full border border-[#071a38]/12 text-[#9b7a24] transition group-hover:border-[#9b7a24]/45 group-hover:bg-[#9b7a24] group-hover:text-white">
                  <ArrowRight size={11} />
                </span>
              </button>
            </div>
          </motion.article>
        ))}
      </div>

      <AnimatePresence>
        {selected ? (
          <motion.div
            className="fixed inset-0 z-[80] grid place-items-center bg-[#061327]/58 px-4 py-8 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 22, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.98 }}
              transition={{ duration: 0.28 }}
              onClick={(event) => event.stopPropagation()}
              className="relative max-h-[88vh] w-full max-w-4xl overflow-hidden border border-white/24 bg-white/[0.08] shadow-[0_40px_120px_rgba(0,0,0,0.34)] backdrop-blur-2xl"
            >
              <button
                type="button"
                aria-label="Cerrar"
                onClick={() => setSelected(null)}
                className="absolute right-4 top-4 z-20 flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-[#071a38]/18 text-white/72 backdrop-blur-xl transition hover:bg-white/12 hover:text-white"
              >
                <span className="relative h-3.5 w-3.5">
                  <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 rotate-45 bg-current" />
                  <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 -rotate-45 bg-current" />
                </span>
              </button>
              <div className="absolute inset-0">
                <Image
                  src={selected.image}
                  alt={selected.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,18,41,0.9),rgba(5,18,41,0.58)_48%,rgba(5,18,41,0.78))]" />
              </div>
              <div className="relative overflow-y-auto p-5 text-white sm:p-7">
                <div className="ml-auto max-w-xl border border-white/18 bg-white/[0.09] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.24)] backdrop-blur-2xl sm:p-7">
                  <p className="text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-[#d4af37]">
                    {selected.kicker}
                  </p>
                  <h2 className="mt-3 text-[1.18rem] font-semibold leading-tight">
                    {selected.title}
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-white/66">{selected.subtitle}</p>
                  <div className="my-5 h-px bg-white/14" />
                  <ul className="grid gap-2.5">
                    {selected.points.map((point) => (
                      <li key={point} className="flex gap-3 text-sm leading-6 text-white/76">
                        <span className="mt-2 h-1 w-1 shrink-0 bg-[#d4af37]" />
                        {point}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contacto"
                    className="mt-6 inline-flex items-center gap-3 rounded-full border border-[#d4af37]/75 bg-[#d4af37] px-5 py-3 text-[0.68rem] font-semibold uppercase tracking-[0.13em] text-[#071a38] transition hover:bg-white"
                  >
                    Solicitar asesoria
                    <ArrowUpRight size={14} />
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
