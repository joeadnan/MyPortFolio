import { Briefcase, GraduationCap, MapPin, Calendar } from "lucide-react";

const experiences = [
  {
    id: 1,
    type: "work",
    company: "PT. Asietex Sinar Indopratama",
    position: "IT Support Specialist",
    period: "Des 2025 — Apr 2026",
    location: "Jawilan, Serang",
    description:
      "Menangani dukungan teknis harian untuk memastikan sistem dan perangkat berjalan optimal. Melakukan troubleshooting hardware, software, dan jaringan, serta memberikan solusi cepat untuk meningkatkan produktivitas tim. Berkontribusi dalam maintenance sistem, instalasi perangkat, dan monitoring infrastruktur IT.",
    tech: ["Windows", "Linux", "Networking", "Hardware", "Helpdesk"],
    isCurrent: true,
  },
  {
    id: 2,
    type: "work",
    company: "Digital Agency Jakarta",
    position: "SEO Specialist",
    period: "Jul 2023 — Sekarang",
    location: "Jakarta, Remote",
    description:
      "Mengoptimalkan performa website untuk 20+ klien korporat melalui strategi SEO on-page dan off-page. Berfokus pada peningkatan peringkat di mesin pencari, analisis keyword, serta optimasi konten dan technical SEO untuk meningkatkan traffic organik.",
    tech: [
      "Google Analytics",
      "Google Search Console",
      "Ahrefs",
      "SEMrush",
      "Screaming Frog",
    ],
    isCurrent: false,
  },
  {
    id: 3,
    type: "education",
    company: "Universitas Indonesia",
    position: "S1 Ilmu Komputer",
    period: "Agu 2015 — Jun 2019",
    location: "Depok, Jawa Barat",
    description:
      "Lulus dengan predikat Cum Laude (IPK 3.82). Fokus pada rekayasa perangkat lunak dan kecerdasan buatan. Aktif sebagai asisten laboratorium pemrograman.",
    tech: ["Algoritma", "Software Engineering", "AI", "Jaringan"],
    isCurrent: false,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-label mb-3">Perjalanan</p>
          <h2 className="section-title mb-4">
            Pengalaman & <span className="gradient-text">Pendidikan</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Rekam jejak profesional yang terus berkembang dalam dunia teknologi.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-brand-600 via-surface-border to-transparent" />

            <div className="space-y-8">
              {experiences.map((exp, i) => (
                <div
                  key={exp.id}
                  className="relative flex gap-8 animate-fade-up"
                  style={{ animationDelay: `${i * 0.15}s` }}
                >
                  {/* Icon */}
                  <div
                    className={`relative z-10 flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center border ${
                      exp.isCurrent
                        ? "bg-brand-600 border-brand-500 shadow-lg shadow-brand-600/30 animate-glow"
                        : exp.type === "education"
                          ? "bg-purple-900/50 border-purple-500/30"
                          : "bg-surface-card border-surface-border"
                    }`}
                  >
                    {exp.type === "education" ? (
                      <GraduationCap
                        size={20}
                        className={
                          exp.type === "education"
                            ? "text-purple-400"
                            : "text-slate-400"
                        }
                      />
                    ) : (
                      <Briefcase
                        size={20}
                        className={
                          exp.isCurrent ? "text-white" : "text-slate-400"
                        }
                      />
                    )}
                  </div>

                  {/* Card */}
                  <div className="flex-1 glass-card p-6 hover:border-brand-500/30 transition-colors">
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                      <div>
                        <h3 className="font-bold text-white text-lg">
                          {exp.position}
                        </h3>
                        <p className="text-brand-400 font-semibold text-sm">
                          {exp.company}
                        </p>
                      </div>
                      {exp.isCurrent && (
                        <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          Aktif
                        </span>
                      )}
                    </div>

                    <div className="flex flex-wrap gap-4 mb-4 text-xs text-slate-500">
                      <span className="flex items-center gap-1.5">
                        <Calendar size={12} /> {exp.period}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin size={12} /> {exp.location}
                      </span>
                    </div>

                    <p className="text-sm text-slate-400 leading-relaxed mb-4">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5">
                      {exp.tech.map((t) => (
                        <span key={t} className="tag">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
