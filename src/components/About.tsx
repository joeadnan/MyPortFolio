import {
  CheckCircle2,
  Target,
  Lightbulb,
  Sparkles,
  Database,
  ServerCog,
  BarChart3,
  ArrowRight,
} from "lucide-react";

const values = ["Inovasi", "Kualitas", "Kolaborasi", "Transparansi"];

const funFacts = [
  "☕ Pecinta kopi sejati",
  "🌐 Open source contributor",
  "🎤 Speaker di 3+ tech conference",
  "📚 500+ jam belajar online",
];

const highlights = [
  {
    icon: <BarChart3 size={20} />,
    title: "Data Analyst",
    desc: "Mengolah data menjadi insight yang mudah dipahami.",
  },
  {
    icon: <ServerCog size={20} />,
    title: "IT Support",
    desc: "Troubleshooting, maintenance, dan optimasi sistem.",
  },
  {
    icon: <Database size={20} />,
    title: "Database",
    desc: "Terbiasa bekerja dengan SQL, Excel, dan data report.",
  },
];

export default function About() {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-slate-950 px-4 py-24 text-white"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(16,185,129,0.14),transparent_32%),radial-gradient(circle_at_80%_70%,rgba(20,184,166,0.12),transparent_35%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(16,185,129,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(16,185,129,0.05)_1px,transparent_1px)] bg-[size:64px_64px] opacity-25" />

      <div className="container-custom relative z-10 mx-auto">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left */}
          <div className="relative">
            <div className="absolute -inset-6 rounded-[2rem] bg-emerald-400/10 blur-3xl" />

            <div className="relative grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="h-52 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] shadow-[0_0_40px_rgba(16,185,129,0.08)] backdrop-blur-xl">
                  <img
                    src="../images/Asietex.jpg"
                    alt="Workspace"
                    className="h-full w-full object-cover opacity-70 transition duration-500 hover:scale-105"
                  />
                </div>

                <div className="rounded-3xl border border-emerald-400/20 bg-slate-950/70 p-5 shadow-[0_0_35px_rgba(16,185,129,0.12)] backdrop-blur-xl">
                  <Target size={24} className="mb-3 text-emerald-300" />
                  <p className="text-sm font-semibold text-white">Misi Saya</p>
                  <p className="mt-2 text-xs leading-relaxed text-slate-400">
                    Mengoptimalkan ekosistem teknologi dan menggerakkan
                    keputusan berbasis data untuk solusi digital yang berdampak
                  </p>
                </div>
              </div>

              <div className="mt-10 space-y-4">
                <div className="rounded-3xl border border-teal-400/20 bg-slate-950/70 p-5 shadow-[0_0_35px_rgba(20,184,166,0.12)] backdrop-blur-xl">
                  <Lightbulb size={24} className="mb-3 text-teal-300" />
                  <p className="text-sm font-semibold text-white">Fun Facts</p>
                  <ul className="mt-2 space-y-1">
                    {funFacts.slice(0, 2).map((item) => (
                      <li key={item} className="text-xs text-slate-400">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="h-52 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] shadow-[0_0_40px_rgba(20,184,166,0.08)] backdrop-blur-xl">
                  <img
                    src="../images/CCTV.jpg"
                    alt="Data analytics"
                    className="h-full w-full object-cover opacity-70 transition duration-500 hover:scale-105"
                  />
                </div>
              </div>
            </div>

            <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 rounded-2xl border border-emerald-400/20 bg-slate-950/90 px-7 py-4 text-center shadow-[0_0_40px_rgba(16,185,129,0.18)] backdrop-blur-xl">
              <p className="font-mono text-xs tracking-[0.3em] text-slate-500">
                PENGALAMAN
              </p>
              <p className="mt-1 bg-gradient-to-r from-emerald-300 via-teal-300 to-cyan-300 bg-clip-text text-2xl font-bold text-transparent">
                5+ Tahun
              </p>
            </div>
          </div>

          {/* Right */}
          <div className="space-y-8 lg:pl-6">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-300">
                <Sparkles size={15} />
                Tentang Saya
              </div>

              <h2 className="max-w-2xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                Menjaga Performa Sistem dan{" "}
                <span className="bg-gradient-to-r from-emerald-300 via-teal-300 to-cyan-300 bg-clip-text text-transparent">
                  Mengolah Data Menjadi Solusi Digital
                </span>
              </h2>

              <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-400">
                <p>
                  Berpengalaman sejak 2024 dalam menjembatani kebutuhan teknis
                  dan analisis data. Saya ahli dalam mentransformasi data mentah
                  menjadi insight strategis sekaligus memastikan stabilitas
                  infrastruktur IT tetap optimal.Dengan penguasaan alat seperti
                  Excel, SQL, dan Python, saya fokus pada akurasi data.
                </p>

                <p>
                  Di sisi lain, keahlian IT Support saya menjamin sistem tetap
                  efisien melalui troubleshooting proaktif, maintenance rutin,
                  dan optimasi sistem yang berkelanjutan.
                </p>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-xl transition hover:-translate-y-1 hover:border-emerald-400/30 hover:bg-emerald-400/10"
                >
                  <div className="mb-3 text-emerald-300">{item.icon}</div>
                  <p className="text-sm font-semibold text-white">
                    {item.title}
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-slate-500">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <div>
              <p className="mb-3 text-sm font-semibold text-white">
                Nilai-nilai Saya
              </p>

              <div className="flex flex-wrap gap-2">
                {values.map((value) => (
                  <span
                    key={value}
                    className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 text-xs font-medium text-emerald-300"
                  >
                    <CheckCircle2 size={13} />
                    {value}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <p className="mb-3 text-sm font-semibold text-white">Fun Facts</p>

              <div className="grid grid-cols-2 gap-3">
                {funFacts.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-xs font-medium text-slate-400 backdrop-blur-xl"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={scrollToContact}
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_35px_rgba(16,185,129,0.28)] transition hover:scale-105"
            >
              Mari Berkolaborasi
              <ArrowRight
                size={16}
                className="transition group-hover:translate-x-1"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
