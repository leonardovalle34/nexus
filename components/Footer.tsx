export default function Footer() {
  const ano = new Date().getFullYear();

  return (
    <footer
      style={{
        padding: "28px 24px",
        borderTop: "0.5px solid rgba(255,255,255,0.07)",
      }}
    >
      <div
        className="nx-container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 12,
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
        <p style={{ fontSize: 11, color: "rgba(255,255,255,0.25)" }}>
          © {ano} Nexus Tecnologia · nexustecnologia.online
        </p>
        <nav aria-label="Redes sociais" style={{ display: "flex", gap: 20 }}>
          {[
            //{ label: "Instagram", href: "#" },
            {
              label: "LinkedIn",
              href: "https://www.linkedin.com/company/nexus-tecnologia-sc",
            },
            { label: "WhatsApp", href: "https://wa.me/5547997537883" },
          ].map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: 11,
                color: "rgba(255,255,255,0.35)",
                textDecoration: "none",
              }}
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
