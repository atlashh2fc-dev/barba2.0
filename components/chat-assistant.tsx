"use client";

import { MessageCircle, Send, X } from "lucide-react";
import { FormEvent, useState } from "react";
import { whatsappUrl } from "@/lib/contact";

type Message = {
  role: "assistant" | "user";
  content: string;
};

const initialMessages: Message[] = [
  {
    role: "assistant",
    content: "Hola. Cuéntanos brevemente tu consulta y te orientamos de forma inicial.",
  },
];

export function ChatAssistant() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const value = input.trim();
    if (!value || loading) return;

    const nextMessages: Message[] = [...messages, { role: "user", content: value }];
    setMessages(nextMessages);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nextMessages }),
      });
      const data = (await response.json()) as { reply?: string };
      setMessages([
        ...nextMessages,
        {
          role: "assistant",
          content:
            data.reply ||
            "Gracias. Para revisar tu caso con precision, te sugerimos agendar una reunion con el equipo.",
        },
      ]);
    } catch {
      setMessages([
        ...nextMessages,
        {
          role: "assistant",
          content:
            "No pude responder en este momento. Puedes escribirnos por WhatsApp y el equipo tomara contacto contigo.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed bottom-5 right-5 z-[70] flex flex-col items-end gap-3">
      {open ? (
        <div className="w-[min(360px,calc(100vw-2rem))] overflow-hidden rounded-[22px] border border-white/35 bg-[#071a38]/46 text-white shadow-[0_24px_80px_rgba(0,0,0,0.24)] backdrop-blur-2xl">
          <div className="flex items-center justify-between border-b border-white/14 bg-white/8 px-4 py-3">
            <div>
              <p className="text-sm font-semibold">Asistente legal</p>
              <p className="text-xs text-white/56">Orientación inicial</p>
            </div>
            <button
              type="button"
              aria-label="Cerrar asistente"
              onClick={() => setOpen(false)}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-white/18 bg-white/8 text-white/76 transition hover:bg-white/15 hover:text-white"
            >
              <X size={16} />
            </button>
          </div>
          <div className="max-h-[300px] space-y-3 overflow-y-auto px-4 py-4">
            {messages.map((message, index) => (
              <div
                key={`${message.role}-${index}`}
                className={`max-w-[86%] rounded-2xl px-3.5 py-2.5 text-sm leading-6 ${
                  message.role === "user"
                    ? "ml-auto bg-[#d4af37]/95 text-[#071a38]"
                    : "border border-white/14 bg-white/12 text-white/84 backdrop-blur-xl"
                }`}
              >
                {message.content}
              </div>
            ))}
            {loading ? (
              <div className="inline-flex rounded-2xl border border-white/14 bg-white/12 px-3 py-2 text-sm text-white/60">
                Redactando respuesta...
              </div>
            ) : null}
          </div>
          <form onSubmit={submit} className="border-t border-white/14 bg-white/8 p-3">
            <div className="flex gap-2">
              <input
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Cuéntanos brevemente tu consulta"
                className="min-w-0 flex-1 rounded-full border border-white/14 bg-white/12 px-4 py-2 text-sm text-white outline-none placeholder:text-white/42 focus:border-[#d4af37]/70"
              />
              <button
                type="submit"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#d4af37] text-[#071a38] transition hover:bg-white"
                aria-label="Enviar mensaje"
              >
                <Send size={16} />
              </button>
            </div>
          </form>
        </div>
      ) : null}

      <div className="flex items-center gap-1.5 rounded-full border border-white/40 bg-[#06162d]/82 p-1.5 shadow-[0_18px_55px_rgba(2,12,27,0.28)] backdrop-blur-xl">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="group relative flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.07] text-[#25d366] transition duration-300 hover:-translate-y-0.5 hover:border-[#25d366]/55 hover:bg-[#25d366]/10"
          aria-label="Contactar por WhatsApp"
        >
          <span className="absolute inset-1 rounded-full border border-[#25d366]/0 transition duration-300 group-hover:border-[#25d366]/20" />
          <WhatsAppIcon />
        </a>
        <span aria-hidden="true" className="h-5 w-px bg-white/13" />
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className={`flex h-10 w-10 items-center justify-center rounded-full border transition duration-300 hover:-translate-y-0.5 ${
            open
              ? "border-[#d4af37]/70 bg-[#d4af37] text-[#071a38]"
              : "border-white/10 bg-white/[0.07] text-[#d4af37] hover:border-[#d4af37]/45 hover:bg-[#d4af37]/10"
          }`}
          aria-label="Abrir asistente"
        >
          <MessageCircle size={18} strokeWidth={1.8} />
        </button>
      </div>
    </div>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 32 32"
      className="relative h-[21px] w-[21px] transition-transform duration-300 group-hover:scale-105"
      fill="currentColor"
    >
      <path d="M16.02 3.2A12.6 12.6 0 0 0 5.3 22.42L4 29l6.73-1.24A12.6 12.6 0 1 0 16.02 3.2Zm0 2.35a10.25 10.25 0 0 1 8.68 15.7 10.25 10.25 0 0 1-12.95 4.05l-.4-.19-4.04.75.78-3.94-.24-.42A10.25 10.25 0 0 1 16.02 5.55Zm-4.1 5.53c-.23 0-.6.08-.91.43-.31.34-1.2 1.17-1.2 2.86 0 1.68 1.23 3.31 1.4 3.54.17.23 2.38 3.8 5.86 5.18 2.9 1.15 3.49.92 4.12.86.63-.06 2.03-.83 2.32-1.63.28-.8.28-1.49.2-1.63-.09-.14-.31-.23-.66-.4-.34-.17-2.03-1-2.35-1.12-.31-.11-.54-.17-.77.17-.23.34-.89 1.12-1.09 1.35-.2.23-.4.26-.74.09-.34-.17-1.45-.53-2.76-1.7-1.02-.91-1.7-2.03-1.9-2.37-.2-.34-.02-.53.15-.7.16-.15.34-.4.51-.6.17-.2.23-.34.34-.57.11-.23.06-.43-.03-.6-.09-.17-.77-1.86-1.06-2.55-.28-.67-.56-.58-.77-.59h-.66Z" />
    </svg>
  );
}
