import { ContactExperience } from "@/components/contact-experience";
import { PageIntro } from "@/components/ui";

export const metadata = {
  title: "Contacto | Barba & Cia Abogados",
  description:
    "Contacte a Barba & Cia Abogados para asesoria legal estrategica empresarial.",
};

export default function ContactoPage() {
  return (
    <>
      <PageIntro
        eyebrow="Contacto"
        title="Hablemos con claridad desde el primer contacto."
        body="Comparta el contexto del asunto y el equipo respondera con una proxima accion concreta."
      />
      <ContactExperience />
    </>
  );
}
