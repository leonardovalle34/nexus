type Servico = { icon: string; title: string; desc: string };

const servicos: Servico[] = [
  {
    icon: "📱",
    title: "App sob medida",
    desc: "Sistemas e aplicativos personalizados para o seu negócio.",
  },
  {
    icon: "🌐",
    title: "Criação de site",
    desc: "Sites modernos, rápidos e otimizados para o Google. Logo inclusa.",
  },
  {
    icon: "📸",
    title: "Gestão Instagram",
    desc: "Conteúdo estratégico que engaja e converte. Logo inclusa.",
  },
  {
    icon: "👍",
    title: "Gestão Facebook",
    desc: "Presença ativa e profissional no Facebook. Logo inclusa.",
  },
  {
    icon: "🔍",
    title: "SEO",
    desc: "Apareça no topo do Google e atraia clientes organicamente.",
  },
  {
    icon: "📍",
    title: "Google Maps",
    desc: "Otimização do Google Minha Empresa para clientes locais.",
  },
  {
    icon: "▶️",
    title: "YouTube",
    desc: "Criação e gestão de canal com estratégia de conteúdo.",
  },
  {
    icon: "🔧",
    title: "Manutenção de site",
    desc: "Seu site sempre atualizado, seguro e funcionando.",
  },
  {
    icon: "🎨",
    title: "Criação de redes",
    desc: "Setup completo das suas redes sociais do zero. Logo inclusa.",
  },
];

export default function Servicos() {
  return (
    <section
      id="servicos"
      aria-labelledby="servicos-title"
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
          O que oferecemos
        </p>
        <h2
          id="servicos-title"
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
          Serviços
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
          Tudo que sua empresa precisa para crescer no ambiente digital.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
            gap: 12,
          }}
        >
          {servicos.map((s) => (
            <article
              key={s.title}
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "0.5px solid rgba(255,255,255,0.09)",
                borderRadius: 10,
                padding: "20px 16px",
              }}
            >
              <span
                style={{ fontSize: 24, display: "block", marginBottom: 10 }}
                aria-hidden="true"
              >
                {s.icon}
              </span>
              <h3
                style={{
                  fontSize: 13,
                  fontWeight: 700,
                  color: "#fff",
                  marginBottom: 6,
                }}
              >
                {s.title}
              </h3>
              <p
                style={{
                  fontSize: 11,
                  color: "rgba(255,255,255,0.4)",
                  lineHeight: 1.55,
                }}
              >
                {s.desc}
              </p>
              <p
                style={{
                  fontSize: 11,
                  color: "rgba(255,255,255,0.25)",
                  marginTop: 10,
                  fontStyle: "italic",
                }}
              >
                Consultar
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
