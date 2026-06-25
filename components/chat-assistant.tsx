"use client";

import { whatsappUrl } from "@/lib/contact";

export function ChatAssistant() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      className="group fixed bottom-5 right-5 z-[70] flex h-14 w-14 items-center justify-center rounded-full border border-[#25d366]/30 bg-[#25d366] text-white shadow-[0_18px_48px_rgba(7,26,56,0.22)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#1fbd5a]"
      aria-label="Contactar por WhatsApp"
    >
      <WhatsAppIcon />
    </a>
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
