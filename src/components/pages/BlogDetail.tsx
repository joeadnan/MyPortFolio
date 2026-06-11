import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getBlog } from "../../services/api";

type BlogPost = {
  id: number;
  title: string;
  slug: string;
  excerpt?: string;
  content?: string;
  cover_url?: string;
  status: "draft" | "published";
  created_at?: string;
};

export default function BlogDetail() {
  const { slug } = useParams();
  const [blog, setBlog] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadBlog() {
      if (!slug) return;

      setLoading(true);
      setError("");

      try {
        const res = await getBlog(slug);
        if (res.error) throw res.error;

        setBlog(res.data);
        console.log(res.data);
      } catch (err) {
        console.error("Gagal mengambil artikel:", err);
        setError("Artikel tidak ditemukan atau belum dipublish.");
      } finally {
        setLoading(false);
      }
    }

    loadBlog();
  }, [slug]);

  if (loading) {
    return (
      <section className="min-h-screen bg-slate-950 px-4 py-24 text-white">
        <div className="mx-auto max-w-3xl text-slate-400">
          Memuat artikel...
        </div>
      </section>
    );
  }

  if (error || !blog) {
    return (
      <section className="min-h-screen bg-slate-950 px-4 py-24 text-white">
        <div className="mx-auto max-w-3xl rounded-2xl border border-red-400/20 bg-red-400/10 p-5 text-red-300">
          {error || "Artikel tidak ditemukan."}
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-slate-950 px-4 py-24 text-white">
      <article className="mx-auto max-w-4xl">
        <Link
          to="/"
          className="mb-8 inline-flex text-sm font-semibold text-cyan-300 hover:text-cyan-200"
        >
          ← Kembali ke Home
        </Link>

        {blog.cover_url ? (
          <img
            src={blog.cover_url}
            alt={blog.title}
            className="mb-8 h-[280px] w-full rounded-[2rem] object-cover md:h-[420px]"
            onError={(e) => {
              console.error("Gambar gagal load:", blog.cover_url);
              e.currentTarget.style.display = "none";
            }}
          />
        ) : (
          <div className="mb-8 rounded-2xl bg-red-500/10 p-4 text-red-300">
            cover_url kosong
          </div>
        )}

        <div className="mb-8">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-cyan-300">
            Blog
          </p>

          <h1 className="text-3xl font-bold leading-tight md:text-5xl">
            {blog.title}
          </h1>

          {blog.excerpt && (
            <p className="mt-5 text-lg leading-8 text-slate-400">
              {blog.excerpt}
            </p>
          )}
        </div>

        <div className="prose prose-invert max-w-none prose-headings:text-white prose-p:text-slate-300 prose-p:leading-8 prose-a:text-cyan-300 prose-strong:text-white prose-li:text-slate-300">
          {blog.content?.split("\n").map((paragraph, index) => {
            if (!paragraph.trim()) return null;

            return (
              <p
                key={index}
                className="mb-5 text-base leading-8 text-slate-300"
              >
                {paragraph}
              </p>
            );
          })}
        </div>
      </article>
    </section>
  );
}
