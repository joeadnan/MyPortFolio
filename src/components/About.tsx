import { CheckCircle2, Target, Lightbulb } from "lucide-react";

const values = ["Inovasi", "Kualitas", "Kolaborasi", "Transparansi"];
const funFacts = [
  "☕ Pecinta kopi sejati",
  "🌐 Open source contributor",
  "🎤 Speaker di 3+ tech conference",
  "📚 500+ jam belajar online",
];

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Image mosaic */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden h-48 bg-surface-card border border-surface-border">
                  <img
                    src="https://picsum.photos/seed/about1/300/200"
                    alt=""
                    className="w-full h-full object-cover opacity-70"
                  />
                </div>
                <div className="glass-card p-5 space-y-2">
                  <Target size={24} className="text-brand-400" />
                  <p className="font-semibold text-white text-sm">Misi Saya</p>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Menciptakan solusi digital yang berdampak nyata
                  </p>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="glass-card p-5 space-y-2">
                  <Lightbulb size={24} className="text-yellow-400" />
                  <p className="font-semibold text-white text-sm">Fun Facts</p>
                  <ul className="space-y-1">
                    {funFacts.slice(0, 2).map((f) => (
                      <li key={f} className="text-xs text-slate-400">
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-2xl overflow-hidden h-48 bg-surface-card border border-surface-border">
                  <img
                    src="https://picsum.photos/seed/about2/300/200"
                    alt=""
                    className="w-full h-full object-cover opacity-70"
                  />
                </div>
              </div>
            </div>

            {/* Decorative badge */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 glass-card px-6 py-3 text-center whitespace-nowrap animate-glow">
              <p className="text-xs text-slate-400 font-mono">PENGALAMAN</p>
              <p className="text-xl font-display font-bold gradient-text">
                5+ Tahun
              </p>
            </div>
          </div>

          {/* Right — Content */}
          <div className="space-y-8 lg:pl-6">
            <div>
              <p className="section-label mb-3">Tentang Saya</p>
              <h2 className="section-title mb-6">
                Membangun Insight{" "}
                <span className="gradient-text">
                  dan Menjaga Keandalan Sistem
                </span>
              </h2>
              <div className="space-y-4 text-slate-400 leading-relaxed">
                <p>
                  Saya memulai perjalanan di dunia teknologi sejak 2018, dengan
                  fokus pada analisis data dan dukungan IT. Saya terbiasa
                  mengolah data menjadi insight yang berguna sekaligus
                  memastikan sistem dan perangkat berjalan dengan stabil dan
                  efisien.
                </p>
                <p>
                  Keahlian saya{" "}
                  {/* <span className="text-white font-medium">
                    Full Stack Development
                  </span>{" "} */}
                  meliputi analisis data (Excel, SQL, Python) serta IT Support
                  seperti troubleshooting, maintenance, dan optimasi sistem.
                </p>
              </div>
            </div>

            {/* Values */}
            <div>
              <p className="text-sm font-semibold text-white mb-3">
                Nilai-nilai Saya
              </p>
              <div className="flex flex-wrap gap-2">
                {values.map((v) => (
                  <span
                    key={v}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-brand-500/10 border border-brand-500/20 text-xs text-brand-300 font-medium"
                  >
                    <CheckCircle2 size={12} /> {v}
                  </span>
                ))}
              </div>
            </div>

            {/* Fun facts */}
            <div>
              <p className="text-sm font-semibold text-white mb-3">Fun Facts</p>
              <div className="grid grid-cols-2 gap-2">
                {funFacts.map((f) => (
                  <div
                    key={f}
                    className="glass-card px-4 py-3 text-xs text-slate-400 font-medium"
                  >
                    {f}
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() =>
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="btn-primary"
            >
              Mari Berkolaborasi →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
