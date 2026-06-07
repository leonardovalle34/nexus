"use client";

import { useState } from "react";

const links = [
  { label: "Expertise", href: "#expertise" },
  { label: "Serviços", href: "#servicos" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "Parceiros", href: "#parceiros" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

const WA_URL =
  "https://wa.me/5547997537883?text=Olá!%20Vim%20pelo%20site%20da%20Nexus%20e%20gostaria%20de%20solicitar%20um%20orçamento.";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: "rgba(8,12,20,0.97)",
        backdropFilter: "blur(10px)",
        borderBottom: "0.5px solid rgba(255,255,255,0.08)",
      }}
    >
      <nav
        aria-label="Navegação principal"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "16px 24px",
          maxWidth: 1200,
          margin: "0 auto",
        }}
      >
        <a
          href="/"
          style={{
            fontSize: 20,
            fontWeight: 800,
            letterSpacing: "0.08em",
            color: "#fff",
            textDecoration: "none",
          }}
        >
          NEXUS<span style={{ color: "#2d8cff" }}>.</span>
        </a>

        {/* Desktop */}
        <ul
          style={{
            display: "flex",
            gap: 24,
            listStyle: "none",
            margin: 0,
            padding: 0,
          }}
          className="nx-hide-mobile"
        >
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                style={{
                  fontSize: 13,
                  color: "rgba(255,255,255,0.55)",
                  textDecoration: "none",
                }}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={WA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="nx-hide-mobile"
          style={{
            background: "#2d8cff",
            color: "#fff",
            padding: "10px 20px",
            borderRadius: 6,
            fontSize: 13,
            fontWeight: 600,
            textDecoration: "none",
          }}
        >
          Solicitar orçamento
        </a>

        {/* Mobile hamburger */}
        <button
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen(!open)}
          style={{
            display: "none",
            background: "none",
            border: "none",
            color: "#fff",
            fontSize: 24,
            cursor: "pointer",
          }}
          className="nx-show-mobile"
        >
          {open ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div
          style={{
            background: "rgba(8,12,20,0.98)",
            padding: "16px 24px",
            borderTop: "0.5px solid rgba(255,255,255,0.08)",
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{
                fontSize: 15,
                color: "rgba(255,255,255,0.8)",
                textDecoration: "none",
              }}
            >
              {l.label}
            </a>
          ))}
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "#2d8cff",
              color: "#fff",
              padding: "12px 20px",
              borderRadius: 6,
              fontSize: 14,
              fontWeight: 600,
              textDecoration: "none",
              textAlign: "center",
              marginTop: 8,
            }}
          >
            Solicitar orçamento
          </a>
        </div>
      )}
    </header>
  );
}
