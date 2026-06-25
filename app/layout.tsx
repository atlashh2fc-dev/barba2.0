import type { Metadata } from "next";
import { SiteShell } from "@/components/site-shell";
import "./globals.css";

export const metadata: Metadata = {
  title: "Barba Gonella & Cia | Abogados Laborales para Empresas",
  description:
    "Estudio juridico boutique en Chile enfocado en proteger y defender empresas mediante derecho laboral empresarial, compliance, litigios y asesoria corporativa.",
  keywords: [
    "abogados laborales para empresas",
    "derecho laboral empresas Chile",
    "asesoria juridica empresarial",
    "compliance para empresas",
    "abogados corporativos Santiago",
    "litigios empresariales",
    "asesoria legal contabilidad recursos humanos",
    "estudio juridico boutique Chile",
    "defensa legal empresas",
    "abogados empresa Las Condes",
  ],
  openGraph: {
    title: "Barba Gonella & Cia Abogados",
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
