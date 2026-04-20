import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Budi Santoso',
    position: 'CTO',
    company: 'Tokobuku.id',
    avatar: 'https://ui-avatars.com/api/?name=Budi+Santoso&size=80&background=10b981&color=fff&bold=true',
    message: 'Andi adalah developer yang luar biasa. Ia tidak hanya mengerjakan tugas dengan baik, tetapi juga proaktif memberikan solusi inovatif yang melampaui ekspektasi kami.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Siti Rahayu',
    position: 'Product Manager',
    company: 'StartupKita',
    avatar: 'https://ui-avatars.com/api/?name=Siti+Rahayu&size=80&background=f59e0b&color=fff&bold=true',
    message: 'Kerjasama dengan Andi sangat menyenangkan. Komunikasinya jelas, deadline selalu terpenuhi, dan kualitas kodenya sangat bersih dan terdokumentasi dengan baik.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Dimas Pratama',
    position: 'Founder',
    company: 'DigitalMaju',
    avatar: 'https://ui-avatars.com/api/?name=Dimas+Pratama&size=80&background=6366f1&color=fff&bold=true',
    message: 'Platform yang dibangun Andi berhasil meningkatkan efisiensi tim kami hingga 40%. Sangat direkomendasikan untuk siapapun yang membutuhkan developer handal!',
    rating: 5,
  },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={14} className={i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-slate-700'} />
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="section">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="section-label mb-3">Testimoni</p>
          <h2 className="section-title mb-4">
            Apa Kata <span className="gradient-text">Klien Saya</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Kepercayaan dan kepuasan klien adalah prioritas utama dalam setiap proyek yang saya kerjakan.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={t.id}
              className="glass-card p-7 space-y-5 hover:border-brand-500/30 transition-all duration-300 hover:-translate-y-1 animate-fade-up relative"
              style={{ animationDelay: `${i * 0.15}s` }}>
              {/* Quote icon */}
              <div className="absolute top-5 right-5 text-brand-600/20">
                <Quote size={40} />
              </div>

              <StarRating rating={t.rating} />

              <p className="text-slate-300 text-sm leading-relaxed relative z-10">
                "{t.message}"
              </p>

              <div className="flex items-center gap-3 pt-2 border-t border-surface-border">
                <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full ring-2 ring-brand-500/20" />
                <div>
                  <p className="font-semibold text-white text-sm">{t.name}</p>
                  <p className="text-xs text-slate-500">{t.position} · {t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats bar */}
        <div className="mt-14 glass-card p-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
            {[
              { value: '40+',  label: 'Proyek Selesai' },
              { value: '98%',  label: 'Kepuasan Klien' },
              { value: '5★',   label: 'Rating Rata-rata' },
              { value: '3+',   label: 'Tahun Kolaborasi' },
            ].map(({ value, label }) => (
              <div key={label}>
                <p className="text-3xl font-display font-bold gradient-text">{value}</p>
                <p className="text-xs text-slate-500 mt-1 font-medium">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
