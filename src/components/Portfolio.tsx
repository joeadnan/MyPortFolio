import { useState } from 'react'
import { ExternalLink, Github, Star } from 'lucide-react'

const projects = [
  {
    id: 1, category: 'Web App', isFeatured: true,
    title: 'SaaS Manajemen Inventori',
    description: 'Platform manajemen inventori real-time untuk bisnis retail dengan laporan otomatis dan integrasi marketplace.',
    thumbnail: 'https://picsum.photos/seed/inv/600/400',
    tech: ['Laravel', 'Vue.js', 'MySQL', 'Redis'],
    demoUrl: '#', sourceUrl: '#',
  },
  {
    id: 2, category: 'E-Commerce', isFeatured: true,
    title: 'E-Commerce Platform',
    description: 'Platform belanja online lengkap dengan payment gateway, manajemen produk, dan dashboard analitik.',
    thumbnail: 'https://picsum.photos/seed/ecom/600/400',
    tech: ['Laravel', 'React', 'PostgreSQL', 'Stripe'],
    demoUrl: '#', sourceUrl: '#',
  },
  {
    id: 3, category: 'Mobile', isFeatured: true,
    title: 'Mobile App Keuangan',
    description: 'Aplikasi manajemen keuangan pribadi dengan budgeting, pencatatan transaksi, dan laporan visual.',
    thumbnail: 'https://picsum.photos/seed/fin/600/400',
    tech: ['React Native', 'Node.js', 'MongoDB'],
    demoUrl: '#', sourceUrl: '#',
  },
  {
    id: 4, category: 'Website', isFeatured: false,
    title: 'Company Profile Website',
    description: 'Website company profile modern dengan CMS custom, blog, dan formulir kontak terintegrasi.',
    thumbnail: 'https://picsum.photos/seed/corp/600/400',
    tech: ['Laravel', 'TailwindCSS', 'Alpine.js'],
    demoUrl: '#', sourceUrl: '#',
  },
  {
    id: 5, category: 'Web App', isFeatured: false,
    title: 'LMS Platform',
    description: 'Platform belajar online dengan video streaming, quiz interaktif, dan sertifikasi otomatis.',
    thumbnail: 'https://picsum.photos/seed/lms/600/400',
    tech: ['Laravel', 'Vue.js', 'FFmpeg'],
    demoUrl: '#', sourceUrl: '#',
  },
  {
    id: 6, category: 'API', isFeatured: false,
    title: 'Payment Gateway API',
    description: 'Wrapper API payment gateway multi-provider dengan rekonsiliasi otomatis dan webhook handler.',
    thumbnail: 'https://picsum.photos/seed/pay/600/400',
    tech: ['Laravel', 'Redis', 'Queue'],
    demoUrl: '#', sourceUrl: '#',
  },
]

const categories = ['Semua', 'Web App', 'E-Commerce', 'Mobile', 'Website', 'API']

export default function Portfolio() {
  const [filter, setFilter] = useState('Semua')

  const filtered = filter === 'Semua' ? projects : projects.filter(p => p.category === filter)

  return (
    <section id="portfolio" className="section">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="section-label mb-3">Portfolio</p>
          <h2 className="section-title mb-4">
            Proyek <span className="gradient-text">Terpilih</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Koleksi proyek yang mencerminkan kemampuan teknis dan kreativitas dalam memecahkan masalah nyata.
          </p>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map(cat => (
            <button key={cat} onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                filter === cat
                  ? 'bg-brand-600 text-white shadow-lg shadow-brand-600/30'
                  : 'text-slate-400 hover:text-white border border-surface-border hover:border-brand-500/40'
              }`}>
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <div key={project.id}
              className="group glass-card overflow-hidden hover:border-brand-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-600/10 animate-fade-up"
              style={{ animationDelay: `${i * 0.1}s` }}>
              {/* Thumbnail */}
              <div className="relative overflow-hidden h-48">
                <img src={project.thumbnail} alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-card via-transparent to-transparent" />
                {project.isFeatured && (
                  <span className="absolute top-3 right-3 flex items-center gap-1 px-2.5 py-1 rounded-full bg-brand-600/90 text-xs font-semibold text-white">
                    <Star size={10} /> Featured
                  </span>
                )}
                <span className="absolute top-3 left-3 tag">{project.category}</span>
              </div>

              {/* Content */}
              <div className="p-5 space-y-4">
                <div>
                  <h3 className="font-bold text-white text-lg leading-tight">{project.title}</h3>
                  <p className="text-sm text-slate-400 mt-2 leading-relaxed">{project.description}</p>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map(t => (
                    <span key={t} className="px-2 py-1 rounded-md text-xs font-medium bg-surface-border/50 text-slate-400">{t}</span>
                  ))}
                </div>

                <div className="flex gap-3 pt-1">
                  <a href={project.demoUrl}
                    className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-sm font-semibold bg-brand-600/20 text-brand-300 hover:bg-brand-600/40 hover:text-white transition-colors">
                    <ExternalLink size={14} /> Demo
                  </a>
                  <a href={project.sourceUrl}
                    className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-sm font-semibold border border-surface-border text-slate-400 hover:text-white hover:border-brand-500/40 transition-colors">
                    <Github size={14} /> Source
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
