import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react'

const blogs = [
  {
    id: 1,
    title: 'Memulai Karir sebagai Full Stack Developer di 2025',
    excerpt: 'Panduan lengkap untuk Anda yang ingin memulai karir sebagai full stack developer di era modern dengan teknologi terkini.',
    cover: 'https://picsum.photos/seed/blog1/800/450',
    tags: ['Career', 'Developer', 'Tips'],
    readingTime: 8,
    views: 1240,
    publishedAt: '15 April 2025',
  },
  {
    id: 2,
    title: 'Laravel 12: Fitur Baru yang Wajib Kamu Tahu',
    excerpt: 'Laravel 12 hadir dengan berbagai pembaruan menarik. Simak fitur-fitur terbaru yang akan mengubah cara kamu berkoding.',
    cover: 'https://picsum.photos/seed/blog2/800/450',
    tags: ['Laravel', 'PHP', 'Backend'],
    readingTime: 6,
    views: 870,
    publishedAt: '8 April 2025',
  },
  {
    id: 3,
    title: 'Tailwind CSS vs Bootstrap: Mana yang Lebih Baik?',
    excerpt: 'Perbandingan mendalam antara dua framework CSS paling populer untuk membantu Anda membuat pilihan yang tepat.',
    cover: 'https://picsum.photos/seed/blog3/800/450',
    tags: ['CSS', 'Frontend', 'Tailwind'],
    readingTime: 5,
    views: 654,
    publishedAt: '31 Maret 2025',
  },
]

export default function Blog() {
  return (
    <section id="blog" className="section">
      <div className="container-custom">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <p className="section-label mb-3">Blog</p>
            <h2 className="section-title">
              Tulisan & <span className="gradient-text">Insight</span>
            </h2>
          </div>
          <a href="#" className="btn-outline shrink-0">
            Semua Artikel <ArrowRight size={16} />
          </a>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((post, i) => (
            <article key={post.id}
              className="group glass-card overflow-hidden hover:border-brand-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-600/10 animate-fade-up cursor-pointer"
              style={{ animationDelay: `${i * 0.1}s` }}>
              {/* Cover */}
              <div className="relative overflow-hidden h-44">
                <img src={post.cover} alt={post.title}
                  className="w-full h-full object-cover opacity-75 group-hover:scale-105 group-hover:opacity-90 transition-all duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-card via-transparent to-transparent" />
                {/* Tags */}
                <div className="absolute bottom-3 left-3 flex flex-wrap gap-1.5">
                  {post.tags.slice(0, 2).map(tag => (
                    <span key={tag} className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-surface/80 backdrop-blur-sm text-xs text-brand-300 font-medium border border-brand-500/20">
                      <Tag size={9} /> {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="p-5 space-y-3">
                <h3 className="font-bold text-white text-base leading-snug group-hover:text-brand-300 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed line-clamp-2">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between pt-2 border-t border-surface-border">
                  <div className="flex items-center gap-3 text-xs text-slate-600">
                    <span className="flex items-center gap-1">
                      <Calendar size={11} /> {post.publishedAt}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={11} /> {post.readingTime} min
                    </span>
                  </div>
                  <span className="text-brand-400 group-hover:text-brand-300 transition-colors">
                    <ArrowRight size={16} />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
