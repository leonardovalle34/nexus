import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ParticlesBackground from "@/components/ParticlesBackground";
import { posts } from "./data/posts";

export const metadata: Metadata = {
  title:
    "Blog | Nexus Tecnologia — Marketing Digital e Tecnologia para Empresas",
  description:
    "Dicas de marketing digital, SEO, redes sociais, criação de sites e tecnologia para pequenas e médias empresas crescerem no digital.",
  alternates: { canonical: "https://nexustecnologia.online/blog" },
  openGraph: {
    title: "Blog | Nexus Tecnologia",
    description:
      "Dicas de marketing digital, SEO e tecnologia para o seu negócio.",
    url: "https://nexustecnologia.online/blog",
  },
};

export default function BlogPage() {
  const sorted = [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  return (
    <>
      <ParticlesBackground />
      <div style={{ position: "relative", zIndex: 1 }}>
        <Navbar />
        <main>
          <section className="nx-section">
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
                Conteúdo
              </p>
              <h1
                style={{
                  fontSize: "clamp(28px, 4vw, 40px)",
                  fontWeight: 800,
                  color: "#fff",
                  textAlign: "center",
                  textTransform: "uppercase",
                  letterSpacing: "0.04em",
                  marginBottom: 6,
                }}
              >
                Blog
              </h1>
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
                  margin: "0 auto 56px",
                  lineHeight: 1.75,
                }}
              >
                Dicas de marketing digital, SEO, redes sociais e tecnologia para
                o seu negócio crescer.
              </p>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                  gap: 20,
                }}
              >
                {sorted.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    style={{ textDecoration: "none" }}
                  >
                    <article
                      style={{
                        background: "rgba(255,255,255,0.04)",
                        border: "0.5px solid rgba(255,255,255,0.09)",
                        borderRadius: 12,
                        padding: 24,
                        height: "100%",
                        transition: "border-color 0.2s",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          gap: 8,
                          flexWrap: "wrap",
                          marginBottom: 14,
                        }}
                      >
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            style={{
                              fontSize: 10,
                              background: "rgba(45,140,255,0.15)",
                              color: "#2d8cff",
                              border: "1px solid rgba(45,140,255,0.2)",
                              padding: "3px 10px",
                              borderRadius: 20,
                              letterSpacing: "0.05em",
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h2
                        style={{
                          fontSize: 16,
                          fontWeight: 700,
                          color: "#fff",
                          marginBottom: 10,
                          lineHeight: 1.4,
                        }}
                      >
                        {post.title}
                      </h2>
                      <p
                        style={{
                          fontSize: 13,
                          color: "rgba(255,255,255,0.45)",
                          lineHeight: 1.65,
                          marginBottom: 16,
                        }}
                      >
                        {post.description}
                      </p>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          fontSize: 11,
                          color: "rgba(255,255,255,0.3)",
                        }}
                      >
                        <span>
                          {new Date(post.date).toLocaleDateString("pt-BR", {
                            day: "2-digit",
                            month: "long",
                            year: "numeric",
                          })}
                        </span>
                        <span>{post.readingTime}</span>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
