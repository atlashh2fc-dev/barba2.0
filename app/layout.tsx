import type { Metadata } from "next";
import { SiteShell } from "@/components/site-shell";
import "./globals.css";

export const metadata: Metadata = {
  title: "Barba Gonella & Cía. | Abogados Laborales para Empresas",
  description:
    "Estudio jurídico boutique en Chile enfocado en proteger y defender empresas mediante derecho laboral empresarial, compliance, litigios y asesoría corporativa.",
  keywords: [
    "abogados laborales para empresas",
    "derecho laboral empresas Chile",
    "asesoría jurídica empresarial",
    "compliance para empresas",
    "abogados corporativos Santiago",
    "litigios empresariales",
    "asesoría legal contabilidad recursos humanos",
    "estudio jurídico boutique Chile",
    "defensa legal empresas",
    "abogados empresa Las Condes",
  ],
  openGraph: {
    title: "Barba Gonella & Cía. Abogados",
    description:
      "Abogados laborales para empresas, compliance y defensa legal empresarial.",
    type: "website",
    locale: "es_CL",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
