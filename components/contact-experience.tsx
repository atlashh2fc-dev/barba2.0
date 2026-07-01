"use client";

import { FormEvent, useState } from "react";
import { ArrowUpRight, Check, Mail, MapPin, Phone } from "lucide-react";
import { whatsappUrl } from "@/lib/contact";

export function ContactExperience() {
  const [sent, setSent] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <section className="px-5 py-12 sm:px-8">
      <div className="mx-auto grid max-w-7xl overflow-hidden bg-[#071421] text-white shadow-[0_28px_80px_rgba(7,26,56,0.14)] lg:grid-cols-[0.4fr_0.6fr]">
        <aside className="relative overflow-hidden p-7 sm:p-9">
          <div className="absolute inset-0 bg-[linear-gradient(145deg,#071421,#0c2932)]" />
          <div className="footer-gradient-line absolute inset-x-0 top-0 h-px" />
          <div className="relative">
            <p className="text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-[#d4af37]">
              Contacto directo
            </p>
            <h2 className="mt-4 max-w-sm font-display text-[1.4rem] leading-tight">
              Una primera conversación confidencial y enfocada.
            </h2>
            <p className="mt-4 max-w-sm text-[0.84rem] leading-6 text-white/58">
              Comparta los antecedentes esenciales. El equipo revisará el asunto y definirá el siguiente paso.
            </p>

            <div className="mt-9 grid gap-5 border-t border-white/14 pt-7 text-[0.82rem] text-white/68">
              <ContactLine icon={<Phone size={15} />} href="tel:+56934153944">+56 9 3415 3944</ContactLine>
              <ContactLine icon={<Mail size={15} />} href="mailto:contacto@barbaycia.cl">contacto@barbaycia.cl</ContactLine>
              <ContactLine icon={<MapPin size={15} />}>Av. Apoquindo 6410, Of. 502, Las Condes</ContactLine>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-9 inline-flex items-center gap-3 text-[0.66rem] font-semibold uppercase tracking-[0.16em] text-[#d4af37]"
            >
              Continuar por WhatsApp <ArrowUpRight size={14} />
            </a>
          </div>
        </aside>

        <form onSubmit={submit} className="bg-white p-7 text-[#071a38] sm:p-9 lg:p-10">
          {sent ? (
            <div className="flex min-h-[390px] flex-col items-start justify-center">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#071a38] text-[#d4af37]">
                <Check size={18} />
              </span>
              <h2 className="mt-5 font-display text-[1.45rem]">Solicitud recibida</h2>
              <p className="mt-3 max-w-md text-sm leading-6 text-[#58606d]">
                Gracias. El equipo revisará los antecedentes y responderá por el medio indicado.
              </p>
              <button type="button" onClick={() => setSent(false)} className="mt-7 text-xs font-semibold uppercase tracking-[0.14em] text-[#9b7a24]">
                Enviar otra consulta
              </button>
            </div>
          ) : (
            <>
              <div className="flex items-start justify-between gap-5 border-b border-[#071a38]/12 pb-6">
                <div>
                  <p className="text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-[#9b7a24]">Solicitud inicial</p>
                  <h2 className="mt-2 font-display text-[1.35rem]">Cuéntenos el contexto</h2>
                </div>
                <span className="text-[0.68rem] text-[#071a38]/38">01 / 01</span>
              </div>

              <div className="mt-7 grid gap-x-6 gap-y-5 sm:grid-cols-2">
                <Field label="Nombre completo" name="name" />
                <Field label="Empresa" name="company" />
                <Field label="Email corporativo" name="email" type="email" />
                <Field label="Teléfono" name="phone" type="tel" />
              </div>
              <label className="mt-6 block">
                <span className="text-[0.72rem] font-semibold text-[#071a38]">Antecedentes principales</span>
                <textarea
                  required
                  rows={4}
                  placeholder="Describa brevemente el asunto, urgencia y contexto relevante."
                  className="mt-2 w-full resize-none border-0 border-b border-[#071a38]/18 bg-transparent px-0 py-2 text-sm leading-6 outline-none transition placeholder:text-[#071a38]/30 focus:border-[#9b7a24]"
                />
              </label>
              <div className="mt-7 flex flex-col gap-4 border-t border-[#071a38]/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
                <p className="max-w-xs text-[0.68rem] leading-5 text-[#58606d]">
                  La información será tratada de forma confidencial.
                </p>
                <button className="inline-flex items-center justify-center gap-3 bg-[#071a38] px-5 py-3 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-[#9b7a24]">
                  Enviar solicitud <ArrowUpRight size={14} />
                </button>
              </div>
            </>
          )}
        </form>
      </div>
    </section>
  );
}

function ContactLine({ icon, href, children }: { icon: React.ReactNode; href?: string; children: React.ReactNode }) {
  const content = <><span className="text-[#d4af37]">{icon}</span><span>{children}</span></>;
  return href ? <a href={href} className="flex items-center gap-3 transition hover:text-white">{content}</a> : <p className="flex items-start gap-3">{content}</p>;
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <label>
      <span className="text-[0.72rem] font-semibold text-[#071a38]">{label}</span>
      <input
        required
        name={name}
        type={type}
        className="mt-2 w-full border-0 border-b border-[#071a38]/18 bg-transparent px-0 py-2 text-sm outline-none transition focus:border-[#9b7a24]"
      />
    </label>
  );
}
