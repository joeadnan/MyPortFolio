import { Calendar, Clock, ArrowRight, Tag, Sparkles, Eye } from "lucide-react";

type BlogPost = {
  id: number;
  title: string;
  excerpt: string;
  cover: string;
  tags: string[];
  readingTime: number;
  views: number;
  publishedAt: string;
};

const blogs: BlogPost[] = [
  {
    id: 1,
    title: "Memulai Karir sebagai Full Stack Developer di 2025",
    excerpt:
      "Panduan lengkap untuk Anda yang ingin memulai karir sebagai full stack developer di era modern dengan teknologi terkini.",
    cover: "https://picsum.photos/seed/blog1/800/450",
    tags: ["Career", "Developer", "Tips"],
    readingTime: 8,
    views: 1240,
    publishedAt: "15 April 2025",
  },
  {
    id: 2,
    title: "Laravel 12: Fitur Baru yang Wajib Kamu Tahu",
    excerpt:
      "Laravel 12 hadir dengan berbagai pembaruan menarik. Simak fitur-fitur terbaru yang akan mengubah cara kamu berkoding.",
    cover: "https://picsum.photos/seed/blog2/800/450",
    tags: ["Laravel", "PHP", "Backend"],
    readingTime: 6,
    views: 870,
    publishedAt: "8 April 2025",
  },
  {
    id: 3,
    title: "Tailwind CSS vs Bootstrap: Mana yang Lebih Baik?",
    excerpt:
      "Perbandingan mendalam antara dua framework CSS paling populer untuk membantu Anda membuat pilihan yang tepat.",
    cover: "https://picsum.photos/seed/blog3/800/450",
    tags: ["CSS", "Frontend", "Tailwind"],
    readingTime: 5,
    views: 654,
    publishedAt: "31 Maret 2025",
  },
];

export default function Blog() {
  return (
    <section
      id="blog"
      className="relative overflow-hidden bg-slate-950 px-4 py-24 text-white"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(16,185,129,0.14),transparent_32%),radial-gradient(circle_at_80%_70%,rgba(20,184,166,0.12),transparent_35%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(16,185,129,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(16,185,129,0.05)_1px,transparent_1px)] bg-[size:64px_64px] opacity-25" />

      <div className="container-custom relative z-10 mx-auto">
        <div className="mb-14 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-300">
              <Sparkles size={15} />
              Blog
            </div>

            <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Tulisan &{" "}
              <span className="bg-gradient-to-r from-emerald-300 via-teal-300 to-cyan-300 bg-clip-text text-transparent">
                Insight
              </span>
            </h2>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-400">
              Catatan, panduan, dan insight seputar teknologi, karir developer,
              dan pengembangan produk digital.
            </p>
          </div>

          <a
            href="#"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-slate-300 backdrop-blur-xl transition hover:border-emerald-400/30 hover:bg-emerald-400/10 hover:text-white"
          >
            Semua Artikel
            <ArrowRight size={16} />
          </a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((post, index) => (
            <article
              key={post.id}
              className="group cursor-pointer overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/70 shadow-[0_0_40px_rgba(16,185,129,0.08)] backdrop-blur-2xl transition duration-300 hover:-translate-y-2 hover:border-emerald-400/30 hover:bg-emerald-400/5"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={post.cover}
                  alt={post.title}
                  className="h-full w-full object-cover opacity-75 transition duration-700 group-hover:scale-110 group-hover:opacity-90"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                <div className="absolute bottom-4 left-4 flex flex-wrap gap-1.5">
                  {post.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1 rounded-full border border-emerald-400/20 bg-slate-950/70 px-3 py-1.5 text-xs font-semibold text-emerald-300 backdrop-blur-xl"
                    >
                      <Tag size={10} />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-4 p-6">
                <h3 className="line-clamp-2 text-lg font-bold leading-snug text-white transition group-hover:text-emerald-300">
                  {post.title}
                </h3>

                <p className="line-clamp-2 text-sm leading-relaxed text-slate-400">
                  {post.excerpt}
                </p>

                <div className="flex flex-wrap items-center gap-3 border-t border-white/10 pt-4 text-xs text-slate-500">
                  <span className="inline-flex items-center gap-1">
                    <Calendar size={12} />
                    {post.publishedAt}
                  </span>

                  <span className="inline-flex items-center gap-1">
                    <Clock size={12} />
                    {post.readingTime} min
                  </span>

                  <span className="inline-flex items-center gap-1">
                    <Eye size={12} />
                    {post.views.toLocaleString("id-ID")}
                  </span>
                </div>

                <div className="flex items-center justify-between pt-1">
                  <span className="text-sm font-semibold text-emerald-300">
                    Baca Artikel
                  </span>

                  <span className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-emerald-300 transition group-hover:border-emerald-400/30 group-hover:bg-emerald-400/10 group-hover:translate-x-1">
                    <ArrowRight size={16} />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
