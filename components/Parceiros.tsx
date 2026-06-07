"use client";

type Parceiro = { label: [string, string]; small?: boolean };

const parceiros: Parceiro[] = [
  { label: ["SC.GOV", ".BR"], small: true },
  { label: ["2", "MUNDOS"] },
  { label: ["RT", "SYS"] },
  { label: ["MORADA ", "CARMEM"], small: true },
  { label: ["FAST", "ENGLISH"], small: true },
  { label: ["DRENA", "APP"] },
  { label: ["HIRE", "UP"] },
];

export default function Parceiros() {
  return (
    <section
      id="parceiros"
      aria-labelledby="parceiros-title"
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
          Quem confia na Nexus
        </p>
        <h2
          id="parceiros-title"
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
          Parceiros
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
          Empresas e organizações que já transformaram sua presença digital com
          a Nexus.
        </p>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 14,
          }}
        >
          {parceiros.map((p, i) => (
            <div
              key={i}
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "0.5px solid rgba(255,255,255,0.09)",
                borderRadius: 10,
                padding: "18px 28px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minWidth: 130,
                minHeight: 70,
                filter: "grayscale(1) brightness(0.65)",
                transition: "filter 0.2s",
                cursor: "default",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.filter = "grayscale(0) brightness(1)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.filter = "grayscale(1) brightness(0.65)")
              }
            >
              <p
                style={{
                  fontSize: p.small ? 13 : 15,
                  fontWeight: 800,
                  color: "#fff",
                  letterSpacing: "0.04em",
                  textAlign: "center",
                }}
              >
                {p.label[0]}
                <span style={{ color: "#2d8cff" }}>{p.label[1]}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
