"use client";

import { useState } from "react";

type Pillar = {
  num: string;
  title: string;
  desc: string;
  icon: string;
  height: number;
  bg: string;
};

const pillars: Pillar[] = [
  {
    num: "01",
    title: "Sites",
    desc: "Institucionais e landing pages modernos e otimizados.",
    icon: "ti-world",
    height: 160,
    bg: "#1a3a8c",
  },
  {
    num: "02",
    title: "Apps",
    desc: "Sistemas e aplicativos web sob medida.",
    icon: "ti-device-mobile",
    height: 220,
    bg: "#1e4db7",
  },
  {
    num: "03",
    title: "Social Media",
    desc: "Instagram, Facebook e YouTube estratégicos.",
    icon: "ti-brand-instagram",
    height: 190,
    bg: "#2563eb",
  },
  {
    num: "04",
    title: "SEO",
    desc: "Tráfego orgânico e Google Minha Empresa.",
    icon: "ti-search",
    height: 150,
    bg: "#3b82f6",
  },
  {
    num: "05",
    title: "Identidade",
    desc: "Logo e identidade visual da sua marca.",
    icon: "ti-palette",
    height: 205,
    bg: "#1d4ed8",
  },
  {
    num: "06",
    title: "Suporte",
    desc: "Manutenção contínua e evolução do projeto.",
    icon: "ti-tools",
    height: 165,
    bg: "#2d8cff",
  },
];

function DesktopPillars({
  active,
  setActive,
}: {
  active: number;
  setActive: (i: number) => void;
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "center",
        gap: 6,
        position: "relative",
        paddingBottom: 50,
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: "-24px",
          right: "-24px",
          height: 50,
          background:
            "linear-gradient(to bottom, transparent, rgba(10,20,80,0.45))",
          borderTop: "1px solid rgba(45,140,255,0.15)",
        }}
      />
      {pillars.map((p, i) => {
        const isActive = active === i;
        return (
          <div
            key={p.num}
            role="button"
            tabIndex={0}
            aria-label={p.title}
            onMouseEnter={() => setActive(i)}
            onClick={() => setActive(i)}
            onKeyDown={(e) => e.key === "Enter" && setActive(i)}
            style={{
              position: "relative",
              zIndex: 2,
              cursor: "pointer",
              flex: 1,
              minWidth: 0,
            }}
          >
            <div
              style={{
                clipPath:
                  "polygon(12% 0%, 88% 0%, 100% 14%, 100% 100%, 0% 100%, 0% 14%)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                padding: "14px 10px",
                background: p.bg,
                height: isActive ? p.height + 40 : p.height,
                width: "100%",
                filter: isActive ? "brightness(1.25)" : "brightness(1)",
                transition: "all 0.3s ease",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: "12%",
                  right: 0,
                  height: 1.5,
                  background: "rgba(255,255,255,0.3)",
                }}
              />
              <p
                style={{
                  fontSize: 9,
                  color: "rgba(255,255,255,0.45)",
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                  marginBottom: 5,
                }}
              >
                {p.num}
              </p>
              <p
                style={{
                  fontSize: 10,
                  fontWeight: 800,
                  color: "#fff",
                  textTransform: "uppercase",
                  letterSpacing: "0.04em",
                  lineHeight: 1.2,
                }}
              >
                {p.title}
              </p>
              {isActive && (
                <>
                  <i
                    className={`ti ${p.icon}`}
                    aria-hidden="true"
                    style={{
                      fontSize: 22,
                      color: "rgba(255,255,255,0.9)",
                      margin: "8px 0 6px",
                    }}
                  />
                  <p
                    style={{
                      fontSize: 10,
                      color: "rgba(255,255,255,0.75)",
                      lineHeight: 1.5,
                    }}
                  >
                    {p.desc}
                  </p>
                </>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

function MobileCards({
  active,
  setActive,
}: {
  active: number;
  setActive: (i: number) => void;
}) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 10,
      }}
    >
      {pillars.map((p, i) => {
        const isActive = active === i;
        return (
          <div
            key={p.num}
            role="button"
            tabIndex={0}
            aria-label={p.title}
            onClick={() => setActive(i)}
            onKeyDown={(e) => e.key === "Enter" && setActive(i)}
            style={{
              background: isActive ? p.bg : "rgba(255,255,255,0.04)",
              border: isActive
                ? `1px solid ${p.bg}`
                : "0.5px solid rgba(255,255,255,0.09)",
              borderRadius: 12,
              padding: "16px 14px",
              cursor: "pointer",
              transition: "all 0.25s ease",
              textAlign: "left",
            }}
          >
            <p
              style={{
                fontSize: 9,
                color: isActive
                  ? "rgba(255,255,255,0.6)"
                  : "rgba(255,255,255,0.3)",
                fontWeight: 700,
                letterSpacing: "0.06em",
                marginBottom: 6,
              }}
            >
              {p.num}
            </p>
            <i
              className={`ti ${p.icon}`}
              aria-hidden="true"
              style={{
                fontSize: 20,
                color: isActive ? "#fff" : "#2d8cff",
                display: "block",
                marginBottom: 8,
              }}
            />
            <p
              style={{
                fontSize: 12,
                fontWeight: 800,
                color: "#fff",
                textTransform: "uppercase",
                letterSpacing: "0.03em",
                marginBottom: 6,
              }}
            >
              {p.title}
            </p>
            {isActive && (
              <p
                style={{
                  fontSize: 11,
                  color: "rgba(255,255,255,0.7)",
                  lineHeight: 1.5,
                }}
              >
                {p.desc}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default function Expertise() {
  const [active, setActive] = useState<number>(1);

  return (
    <section
      id="expertise"
      aria-labelledby="expertise-title"
      className="nx-section"
    >
      <div className="nx-container" style={{ textAlign: "center" }}>
        <p
          style={{
            fontSize: 11,
            textTransform: "uppercase",
            letterSpacing: "0.12em",
            color: "#2d8cff",
            marginBottom: 8,
          }}
        >
          O que entregamos
        </p>
        <h2
          id="expertise-title"
          style={{
            fontSize: "clamp(24px, 4vw, 32px)",
            fontWeight: 800,
            color: "#fff",
            textTransform: "uppercase",
            letterSpacing: "0.04em",
            marginBottom: 6,
          }}
        >
          Expertise
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
            maxWidth: 520,
            margin: "0 auto 56px",
            lineHeight: 1.75,
          }}
        >
          Soluções digitais completas — do conceito ao lançamento — com
          agilidade, design moderno e foco em resultados reais.
        </p>

        {/* Desktop */}
        <div className="nx-hide-mobile">
          <DesktopPillars active={active} setActive={setActive} />
        </div>

        {/* Mobile */}
        <div className="nx-show-mobile">
          <MobileCards active={active} setActive={setActive} />
        </div>
      </div>
    </section>
  );
}
