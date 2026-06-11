import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getBlogs } from "../../services/api";

type BlogPost = {
  id: number;
  title: string;
  slug: string;
  excerpt?: string;
  cover_url?: string;
  status: "draft" | "published";
};

export default function LatestBlogs() {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadBlogs() {
      try {
        const res = await getBlogs({ status: "published" });

        if (res.error) {
          throw res.error;
        }

        setBlogs(res.data || []);
      } catch (err) {
        console.error("Gagal mengambil artikel:", err);
      } finally {
        setLoading(false);
      }
    }

    loadBlogs();
  }, []);

  return (
    <section id="blog" className="bg-slate-950 px-4 py-24 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10">
          <p className="mb-2 text-sm font-semibold text-cyan-300">Blog</p>
          <h2 className="text-3xl font-bold">Artikel Terbaru</h2>
          <p className="mt-3 max-w-2xl text-sm text-slate-400">
            Kumpulan artikel terbaru seputar teknologi, pengembangan web, AI,
            dan pengalaman project.
          </p>
        </div>

        {loading ? (
          <p className="text-slate-400">Memuat artikel...</p>
        ) : blogs.length === 0 ? (
          <p className="text-slate-400">Belum ada artikel published.</p>
        ) : (
          <div className="grid gap-6 md:grid-cols-3">
            {blogs.map((blog) => (
              <article
                key={blog.id}
                className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]"
              >
                {blog.cover_url ? (
                  <img
                    src={blog.cover_url}
                    alt={blog.title}
                    className="h-48 w-full object-cover"
                  />
                ) : (
                  <div className="h-48 w-full bg-slate-900" />
                )}

                <div className="p-5">
                  <h3 className="line-clamp-2 text-lg font-semibold">
                    {blog.title}
                  </h3>

                  <p className="mt-2 line-clamp-2 text-sm text-slate-400">
                    {blog.excerpt}
                  </p>

                  <Link
                    to={`/blog/${blog.slug}`}
                    className="mt-5 inline-flex text-sm font-semibold text-cyan-300 hover:text-cyan-200"
                  >
                    Baca Artikel
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
