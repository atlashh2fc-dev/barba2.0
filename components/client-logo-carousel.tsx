import Image from "next/image";
import { clientLogos } from "@/lib/content";

export function ClientLogoCarousel() {
  return (
    <div className="client-logo-carousel overflow-hidden">
      <div className="client-logo-track flex w-max">
        {[...clientLogos, ...clientLogos].map((client, index) => (
          <div
            key={`${client.name}-${index}`}
            aria-hidden={index >= clientLogos.length}
            className="flex h-32 w-[220px] shrink-0 flex-col items-center justify-center gap-2 px-7 sm:h-36 sm:w-[260px]"
          >
            <Image
              src={client.image}
              alt={index < clientLogos.length ? client.name : ""}
              width={220}
              height={120}
              sizes="(max-width: 640px) 220px, 260px"
              className="max-h-20 w-auto max-w-full object-contain sm:max-h-24"
            />
            {"caption" in client ? (
              <span className="max-w-[190px] text-center text-[0.62rem] font-semibold uppercase leading-tight tracking-[0.08em] text-[#071a38]/68 sm:max-w-[220px]">
                {client.caption}
              </span>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}
