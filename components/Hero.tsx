const WA_URL =
  "https://wa.me/5547997537883?text=Olá!%20Vim%20pelo%20site%20da%20Nexus%20e%20gostaria%20de%20solicitar%20um%20orçamento.";

export default function Hero() {
  return (
    <section
      id="hero"
      aria-label="Nexus Tecnologia — Agência Digital"
      style={{
        minHeight: 520,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "80px 24px",
      }}
    >
      <div style={{ maxWidth: 600, width: "100%" }}>
        <span
          style={{
            display: "inline-block",
            fontSize: 11,
            background: "rgba(45,140,255,0.12)",
            color: "#2d8cff",
            border: "1px solid rgba(45,140,255,0.25)",
            padding: "5px 14px",
            borderRadius: 20,
            marginBottom: 24,
            letterSpacing: "0.06em",
          }}
        >
          Agência Digital
        </span>

        <h1
          style={{
            fontSize: "clamp(32px, 6vw, 48px)",
            fontWeight: 800,
            lineHeight: 1.1,
            color: "#fff",
            marginBottom: 18,
            letterSpacing: "-0.02em",
          }}
        >
          Sua empresa <span style={{ color: "#2d8cff" }}>mais forte</span>
          <br />
          no digital
        </h1>

        <p
          style={{
            fontSize: "clamp(14px, 2vw, 16px)",
            color: "rgba(255,255,255,0.5)",
            lineHeight: 1.75,
            marginBottom: 32,
          }}
        >
          Sites, apps, redes sociais e SEO para pequenas e médias empresas.
          <br />
          Do zero ao ar com agilidade e qualidade.
        </p>

        <div
          style={{
            display: "flex",
            gap: 12,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "#2d8cff",
              color: "#fff",
              padding: "12px 28px",
              borderRadius: 6,
              fontSize: 14,
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            Solicitar orçamento
          </a>
          <a
            href="#portfolio"
            style={{
              background: "transparent",
              color: "#2d8cff",
              border: "1px solid #2d8cff",
              padding: "12px 28px",
              borderRadius: 6,
              fontSize: 14,
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            Ver portfólio
          </a>
        </div>
      </div>
    </section>
  );
}
