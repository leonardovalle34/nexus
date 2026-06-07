"use client";

import { useState } from "react";

const WA_URL = "https://wa.me/5547997537883";

type FormState = {
  nome: string;
  email: string;
  assunto: string;
  mensagem: string;
};

const inputStyle: React.CSSProperties = {
  background: "rgba(255,255,255,0.05)",
  border: "0.5px solid rgba(255,255,255,0.12)",
  borderRadius: 8,
  padding: "12px 16px",
  fontSize: 13,
  color: "#fff",
  fontFamily: "Space Grotesk, sans-serif",
  outline: "none",
  width: "100%",
};

const contactItems = [
  { label: "+55 47 99753-7883", href: `${WA_URL}` },
  {
    label: "nexustecnologia@proton.me",
    href: "mailto:nexustecnologia@proton.me",
  },
  { label: "nexustecnologia.online", href: "https://nexustecnologia.online" },
  { label: "Seg–Sex, 9h–18h", href: null },
];

export default function Contato() {
  const [form, setForm] = useState<FormState>({
    nome: "",
    email: "",
    assunto: "",
    mensagem: "",
  });
  const [sent, setSent] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Olá! Me chamo ${form.nome}.\n\nAssunto: ${form.assunto}\n\n${form.mensagem}\n\nE-mail: ${form.email}`,
    );
    window.open(`${WA_URL}?text=${msg}`, "_blank");
    setSent(true);
  };

  return (
    <section
      id="contato"
      aria-labelledby="contato-title"
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
          Fale conosco
        </p>
        <h2
          id="contato-title"
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
          Contato
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
          Pronto para transformar sua presença digital? Entre em contato agora.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 48,
          }}
        >
          <div>
            <h3
              style={{
                fontSize: 22,
                fontWeight: 700,
                color: "#fff",
                marginBottom: 12,
              }}
            >
              Vamos conversar?
            </h3>
            <p
              style={{
                fontSize: 14,
                color: "rgba(255,255,255,0.5)",
                lineHeight: 1.75,
                marginBottom: 24,
              }}
            >
              Resposta rápida via WhatsApp ou e-mail. Atendemos empresas de todo
              o Brasil.
            </p>
            {contactItems.map((item) => (
              <div
                key={item.label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  marginBottom: 14,
                }}
              >
                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontSize: 13,
                      color: "rgba(255,255,255,0.65)",
                      textDecoration: "none",
                    }}
                  >
                    {item.label}
                  </a>
                ) : (
                  <span
                    style={{ fontSize: 13, color: "rgba(255,255,255,0.65)" }}
                  >
                    {item.label}
                  </span>
                )}
              </div>
            ))}
            <a
              href={`${WA_URL}?text=Olá!%20Vim%20pelo%20site%20da%20Nexus%20e%20gostaria%20de%20solicitar%20um%20orçamento.`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 10,
                background: "#25d366",
                color: "#fff",
                padding: "14px 28px",
                borderRadius: 8,
                fontSize: 14,
                fontWeight: 700,
                textDecoration: "none",
                marginTop: 20,
              }}
            >
              Chamar no WhatsApp agora
            </a>
          </div>

          <form
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column", gap: 12 }}
          >
            <input
              style={inputStyle}
              type="text"
              name="nome"
              placeholder="Seu nome"
              value={form.nome}
              onChange={handleChange}
              required
              aria-label="Seu nome"
            />
            <input
              style={inputStyle}
              type="email"
              name="email"
              placeholder="Seu e-mail"
              value={form.email}
              onChange={handleChange}
              required
              aria-label="Seu e-mail"
            />
            <input
              style={inputStyle}
              type="text"
              name="assunto"
              placeholder="Assunto (ex: Criação de site)"
              value={form.assunto}
              onChange={handleChange}
              required
              aria-label="Assunto"
            />
            <textarea
              style={{ ...inputStyle, resize: "vertical", minHeight: 120 }}
              name="mensagem"
              placeholder="Conta um pouco sobre o seu projeto..."
              value={form.mensagem}
              onChange={handleChange}
              required
              aria-label="Mensagem"
            />
            <button
              type="submit"
              style={{
                background: "#2d8cff",
                color: "#fff",
                border: "none",
                padding: 14,
                borderRadius: 8,
                fontSize: 14,
                fontWeight: 600,
                cursor: "pointer",
                fontFamily: "Space Grotesk, sans-serif",
              }}
            >
              {sent ? "✓ Mensagem enviada!" : "Enviar mensagem"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
