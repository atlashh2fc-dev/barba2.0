import Image from "next/image";
import { clientLogos } from "@/lib/content";

export function ClientLogoCarousel() {
  return (
    <div className="client-logo-carousel overflow-hidden border border-[#071a38]/10 bg-white">
      <div className="client-logo-track flex w-max">
        {[...clientLogos, ...clientLogos].map((client, index) => (
          <div
            key={`${client.name}-${index}`}
            aria-hidden={index >= clientLogos.length}
            className="flex h-28 w-[220px] shrink-0 items-center justify-center border-r border-[#071a38]/8 px-7 sm:h-32 sm:w-[260px]"
          >
            <Image
              src={client.image}
              alt={index < clientLogos.length ? client.name : ""}
              width={220}
              height={120}
              sizes="(max-width: 640px) 220px, 260px"
              className="max-h-20 w-auto max-w-full object-contain sm:max-h-24"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
