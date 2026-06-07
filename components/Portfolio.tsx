type Projeto = {
  nome: string;
  tag: string;
  url: string;
  label: [string, string];
  small?: boolean;
};

const projetos: Projeto[] = [
  {
    nome: "DrenaApp",
    tag: "SaaS · Engenharia",
    url: "https://drenaapp.online",
    label: ["DRENA", "APP"],
  },
  {
    nome: "HireUp",
    tag: "Edtech · App Web",
    url: "https://hireup.online",
    label: ["HIRE", "UP"],
  },
  {
    nome: "FastEnglish",
    tag: "Edtech · Site",
    url: "https://fastenglish.fun",
    label: ["FAST", "ENGLISH"],
    small: true,
  },
  {
    nome: "Morada Carmem",
    tag: "Turismo · Site",
    url: "https://moradacarmem.netlify.app",
    label: ["MORADA ", "CARMEM"],
    small: true,
  },
];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      aria-labelledby="portfolio-title"
      className="nx-section"
    >
      <div className="nx-container">
        <p
          style={{
            fontSize: 11,
            textTransform: "uppercase",
            letterSpacing: "0.12em",
            color: "#2d8cff",
            textAlign: "center",
            marginBottom: 8,
          }}
        >
          Cases
        </p>
        <h2
          id="portfolio-title"
          style={{
            fontSize: "clamp(24px, 4vw, 32px)",
            fontWeight: 800,
            color: "#fff",
            textAlign: "center",
            textTransform: "uppercase",
            letterSpacing: "0.04em",
            marginBottom: 6,
          }}
        >
          Portfólio
        </h2>
        <div
          style={{
            width: 56,
            height: 3,
            background: "#2d8cff",
            margin: "0 auto 14px",
            borderRadius: 2,
          }}
        />
        <p
          style={{
            fontSize: 14,
            color: "rgba(255,255,255,0.45)",
            textAlign: "center",
            maxWidth: 520,
            margin: "0 auto 48px",
            lineHeight: 1.75,
          }}
        >
          Projetos reais entregues com qualidade e agilidade.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
            gap: 14,
          }}
        >
          {projetos.map((p) => (
            <a
              key={p.nome}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Ver projeto ${p.nome}`}
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "0.5px solid rgba(255,255,255,0.09)",
                borderRadius: 12,
                padding: "36px 20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textDecoration: "none",
                minHeight: 120,
                transition: "border-color 0.2s, transform 0.2s",
              }}
            >
              <div style={{ textAlign: "center" }}>
                <p
                  style={{
                    fontSize: p.small ? 15 : 20,
                    fontWeight: 800,
                    color: "rgba(255,255,255,0.75)",
                    letterSpacing: "0.04em",
                  }}
                >
                  {p.label[0]}
                  <span style={{ color: "#2d8cff" }}>{p.label[1]}</span>
                </p>
                <p
                  style={{
                    fontSize: 10,
                    color: "rgba(255,255,255,0.3)",
                    marginTop: 6,
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                  }}
                >
                  {p.tag}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
