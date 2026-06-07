"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { label: "Expertise", href: "/#expertise" },
  { label: "Serviços", href: "/#servicos" },
  { label: "Portfólio", href: "/#portfolio" },
  { label: "Parceiros", href: "/#parceiros" },
  { label: "Sobre", href: "/#sobre" },
  { label: "Contato", href: "/#contato" },
  { label: "Blog", href: "/blog" },
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
        {/* Logo */}
        <Link
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
        </Link>

        {/* Desktop links */}
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
              <Link
                href={l.href}
                style={{
                  fontSize: 13,
                  color: "rgba(255,255,255,0.55)",
                  textDecoration: "none",
                }}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
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
            whiteSpace: "nowrap",
          }}
        >
          Solicitar orçamento
        </a>

        {/* Mobile burger */}
        <button
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen(!open)}
          className="nx-show-mobile"
          style={{
            background: "none",
            border: "none",
            color: "#fff",
            fontSize: 26,
            cursor: "pointer",
            lineHeight: 1,
            padding: 4,
          }}
        >
          {open ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div
          style={{
            background: "rgba(8,12,20,0.99)",
            borderTop: "0.5px solid rgba(255,255,255,0.08)",
            padding: "16px 24px 24px",
            display: "flex",
            flexDirection: "column",
            gap: 0,
          }}
        >
          {links.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{
                fontSize: 15,
                color: "rgba(255,255,255,0.8)",
                textDecoration: "none",
                padding: "12px 0",
                borderBottom: "0.5px solid rgba(255,255,255,0.06)",
              }}
            >
              {l.label}
            </Link>
          ))}
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            style={{
              background: "#2d8cff",
              color: "#fff",
              padding: "14px 20px",
              borderRadius: 6,
              fontSize: 14,
              fontWeight: 600,
              textDecoration: "none",
              textAlign: "center",
              marginTop: 16,
            }}
          >
            Solicitar orçamento
          </a>
        </div>
      )}
    </header>
  );
}
