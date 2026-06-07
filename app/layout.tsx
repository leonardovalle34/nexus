import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nexus Tecnologia | Agência Digital — Sites, Apps e Social Media",
  description:
    "Agência digital especializada em criação de sites, apps sob medida, gestão de redes sociais, SEO e Google Minha Empresa. Atendemos empresas de todo o Brasil.",
  keywords:
    "agência digital, criação de site, app sob medida, gestão de redes sociais, SEO, Google Minha Empresa, Instagram, Facebook, YouTube",
  authors: [{ name: "Nexus Tecnologia" }],
  metadataBase: new URL("https://nexustecnologia.online"),
  alternates: { canonical: "https://nexustecnologia.online" },
  openGraph: {
    title: "Nexus Tecnologia | Agência Digital",
    description:
      "Sites, apps, redes sociais e SEO para pequenas e médias empresas.",
    url: "https://nexustecnologia.online",
    siteName: "Nexus Tecnologia",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nexus Tecnologia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexus Tecnologia | Agência Digital",
    description:
      "Sites, apps, redes sociais e SEO para pequenas e médias empresas.",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
