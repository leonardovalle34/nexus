import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ParticlesBackground from "@/components/ParticlesBackground";
import { posts, getPostBySlug } from "../data/posts";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: `${post.title} | Blog Nexus Tecnologia`,
    description: post.description,
    alternates: {
      canonical: `https://nexustecnologia.online/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://nexustecnologia.online/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default function PostPage({ params }: Props) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <>
      <ParticlesBackground />
      <div style={{ position: "relative", zIndex: 1 }}>
        <Navbar />
        <main>
          <article style={{ padding: "60px 24px 80px" }}>
            <div style={{ maxWidth: 720, margin: "0 auto" }}>
              <Link
                href="/blog"
                style={{
                  fontSize: 13,
                  color: "#2d8cff",
                  textDecoration: "none",
                  display: "inline-block",
                  marginBottom: 32,
                }}
              >
                ← Voltar ao blog
              </Link>

              <div
                style={{
                  display: "flex",
                  gap: 8,
                  flexWrap: "wrap",
                  marginBottom: 20,
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

              <h1
                style={{
                  fontSize: "clamp(24px, 4vw, 38px)",
                  fontWeight: 800,
                  color: "#fff",
                  lineHeight: 1.2,
                  marginBottom: 16,
                }}
              >
                {post.title}
              </h1>

              <div
                style={{
                  display: "flex",
                  gap: 16,
                  fontSize: 12,
                  color: "rgba(255,255,255,0.35)",
                  marginBottom: 40,
                }}
              >
                <span>
                  {new Date(post.date).toLocaleDateString("pt-BR", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                  })}
                </span>
                <span>·</span>
                <span>{post.readingTime}</span>
              </div>

              <div
                style={{
                  height: 1,
                  background: "rgba(255,255,255,0.08)",
                  marginBottom: 40,
                }}
              />

              <div className="mdx-content">{post.content}</div>

              <div
                style={{
                  height: 1,
                  background: "rgba(255,255,255,0.08)",
                  margin: "48px 0",
                }}
              />

              <div
                style={{
                  background: "rgba(45,140,255,0.08)",
                  border: "0.5px solid rgba(45,140,255,0.2)",
                  borderRadius: 12,
                  padding: 28,
                  textAlign: "center",
                }}
              >
                <p
                  style={{
                    fontSize: 18,
                    fontWeight: 700,
                    color: "#fff",
                    marginBottom: 8,
                  }}
                >
                  Precisa de ajuda com o digital?
                </p>
                <p
                  style={{
                    fontSize: 14,
                    color: "rgba(255,255,255,0.5)",
                    marginBottom: 20,
                  }}
                >
                  A Nexus Tecnologia cuida do seu site, apps e redes sociais.
                </p>
                <a
                  href="https://wa.me/5547997537883?text=Olá!%20Li%20um%20artigo%20no%20blog%20da%20Nexus%20e%20gostaria%20de%20solicitar%20um%20orçamento."
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-block",
                    background: "#2d8cff",
                    color: "#fff",
                    padding: "12px 28px",
                    borderRadius: 6,
                    fontSize: 14,
                    fontWeight: 600,
                    textDecoration: "none",
                  }}
                >
                  Solicitar orçamento
                </a>
              </div>
            </div>
          </article>
        </main>
        <Footer />
      </div>
    </>
  );
}
