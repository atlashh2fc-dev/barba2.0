import { ContactExperience } from "@/components/contact-experience";
import { PageIntro } from "@/components/ui";

export const metadata = {
  title: "Contacto | Barba & Cía. Abogados",
  description:
    "Contacte a Barba & Cía. Abogados para asesoría legal estratégica empresarial.",
};

export default function ContactoPage() {
  return (
    <>
      <PageIntro
        eyebrow="Contacto"
        title="Hablemos con claridad desde el primer contacto."
        body="Comparta el contexto del asunto y el equipo responderá con una próxima acción concreta."
      />
      <ContactExperience />
    </>
  );
}
