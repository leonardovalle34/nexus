const WA_URL =
  "https://wa.me/5547997537883?text=Olá!%20Vim%20pelo%20site%20da%20Nexus%20e%20gostaria%20de%20conversar.";

const stats = [
  { num: "47+", label: "Projetos entregues" },
  { num: "30d", label: "App entregue" },
  { num: "100%", label: "Comprometimento" },
  { num: "∞", label: "Suporte" },
];

export default function Sobre() {
  return (
    <section id="sobre" aria-labelledby="sobre-title" className="nx-section">
      <div className="nx-container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 48,
            alignItems: "center",
          }}
        >
          <div>
            <p
              style={{
                fontSize: 11,
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                color: "#2d8cff",
                marginBottom: 8,
              }}
            >
              Quem somos
            </p>
            <h2
              id="sobre-title"
              style={{
                fontSize: "clamp(22px, 3vw, 28px)",
                fontWeight: 800,
                color: "#fff",
                marginBottom: 18,
                lineHeight: 1.25,
              }}
            >
              Tecnologia que trabalha
              <br />
              pelo seu negócio
            </h2>
            <p
              style={{
                fontSize: 14,
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.85,
                marginBottom: 14,
              }}
            >
              A Nexus Tecnologia é uma agência digital especializada em
              transformar pequenas e médias empresas em referências no ambiente
              digital.
            </p>
            <p
              style={{
                fontSize: 14,
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.85,
                marginBottom: 24,
              }}
            >
              Combinamos design moderno, desenvolvimento ágil e estratégia de
              conteúdo para entregar resultados reais — do primeiro site ao app
              mais complexo.
            </p>
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                background: "#2d8cff",
                color: "#fff",
                padding: "11px 24px",
                borderRadius: 6,
                fontSize: 13,
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              Falar com a gente
            </a>
          </div>

          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}
          >
            {stats.map((s) => (
              <div
                key={s.label}
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "0.5px solid rgba(255,255,255,0.09)",
                  borderRadius: 10,
                  padding: 20,
                  textAlign: "center",
                }}
              >
                <p style={{ fontSize: 30, fontWeight: 800, color: "#2d8cff" }}>
                  {s.num}
                </p>
                <p
                  style={{
                    fontSize: 11,
                    color: "rgba(255,255,255,0.4)",
                    marginTop: 4,
                  }}
                >
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
