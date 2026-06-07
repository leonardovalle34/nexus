import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Expertise from "@/components/Expertise";
import Servicos from "@/components/Servicos";
import Portfolio from "@/components/Portfolio";
import Parceiros from "@/components/Parceiros";
import Sobre from "@/components/Sobre";
import Contato from "@/components/Contato";
import Footer from "@/components/Footer";
import Divider from "@/components/Divider";
import ParticlesBackground from "@/components/ParticlesBackground";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Nexus Tecnologia",
  description:
    "Agência digital especializada em criação de sites, apps sob medida, gestão de redes sociais, SEO e Google Minha Empresa.",
  url: "https://nexustecnologia.online",
  email: "nexustecnologia@proton.me",
  telephone: "+5547997537883",
  address: {
    "@type": "PostalAddress",
    addressCountry: "BR",
    addressRegion: "SC",
  },
  serviceArea: { "@type": "Country", name: "Brasil" },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Serviços Digitais",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Criação de site" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "App sob medida" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Gestão de redes sociais" },
      },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "SEO" } },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Google Minha Empresa" },
      },
    ],
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ParticlesBackground />
      <div style={{ position: "relative", zIndex: 1 }}>
        <Navbar />
        <main>
          <Hero />
          <Divider />
          <Expertise />
          <Divider />
          <Servicos />
          <Divider />
          <Portfolio />
          <Divider />
          <Parceiros />
          <Divider />
          <Sobre />
          <Divider />
          <Contato />
        </main>
        <Footer />
      </div>
    </>
  );
}
