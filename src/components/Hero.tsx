import {
  ArrowDown,
  Github,
  Linkedin,
  Twitter,
  Mail,
  Sparkles,
} from "lucide-react";
import profileImage from "../images/Fotojas.jpeg";
export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20"
    >
      {/* Decorative blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container-custom relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Text */}
          <div className="space-y-8 animate-fade-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-500/30 bg-brand-500/5 text-sm text-brand-300">
              <Sparkles size={14} className="text-brand-400" />
              Tersedia untuk proyek baru
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            </div>

            {/* Headline */}
            <div>
              <p className="section-label mb-3">Halo, saya</p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold leading-[1.05] tracking-tight">
                <span className="text-white">M. Hasim</span>
                <br />
                <span className="gradient-text">Adnan</span>
              </h1>
              <p className="mt-5 text-xl text-slate-400 font-medium max-w-md leading-relaxed">
                Mengubah data menjadi insight & memastikan sistem berjalan
                optimal sebagai Data{" "}
                <span className="text-white">Analyst & IT Support</span>
              </p>
            </div>

            {/* Stats */}
            <div className="flex gap-8">
              {[
                { value: "5+", label: "Tahun Exp" },
                { value: "40+", label: "Proyek" },
                { value: "98%", label: "Kepuasan Klien" },
              ].map(({ value, label }) => (
                <div key={label}>
                  <p className="text-3xl font-display font-bold gradient-text">
                    {value}
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5 font-medium">
                    {label}
                  </p>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() =>
                  document
                    .querySelector("#portfolio")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="btn-primary"
              >
                Lihat Portfolio
                <ArrowDown size={16} />
              </button>
              <button
                onClick={() =>
                  document
                    .querySelector("#contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="btn-outline"
              >
                <Mail size={16} /> Hubungi Saya
              </button>
            </div>

            {/* Social */}
            <div className="flex items-center gap-4 pt-2">
              <p className="text-xs text-slate-600 font-mono">SOCIAL</p>
              <div className="h-px flex-1 max-w-[40px] bg-surface-border" />
              {[
                { icon: <Github size={18} />, href: "#", label: "GitHub" },
                { icon: <Linkedin size={18} />, href: "#", label: "LinkedIn" },
                { icon: <Twitter size={18} />, href: "#", label: "Twitter" },
              ].map(({ icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="p-2 rounded-lg text-slate-500 hover:text-white hover:bg-white/5 transition-colors"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right — Avatar / Visual */}
          <div
            className="relative flex justify-center lg:justify-end animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="relative">
              {/* Outer ring */}
              <div
                className="absolute inset-[-24px] rounded-full border border-brand-500/10 animate-spin"
                style={{ animationDuration: "20s" }}
              >
                <div className="absolute top-6 left-1/2 w-2.5 h-2.5 -translate-x-1/2 rounded-full bg-brand-500/60" />
              </div>
              {/* Mid ring */}
              <div className="absolute inset-[-8px] rounded-full border border-brand-500/20" />

              {/* Avatar container */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-2 border-brand-500/30 animate-float shadow-[0_0_60px_rgba(92,92,255,0.2)]">
                <img
                  src={profileImage}
                  alt="Andi Pratama"
                  className="w-full h-full object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-900/40 to-transparent" />
              </div>

              {/* Floating cards */}
              <div
                className="absolute -bottom-4 -left-8 glass-card px-4 py-3 animate-fade-up"
                style={{ animationDelay: "0.6s" }}
              >
                <p className="text-xs text-slate-500 font-mono">
                  Proyek Selesai
                </p>
                <p className="text-2xl font-display font-bold gradient-text">
                  40+
                </p>
              </div>
              <div
                className="absolute -top-4 -right-8 glass-card px-4 py-3 animate-fade-up"
                style={{ animationDelay: "0.8s" }}
              >
                <p className="text-xs text-slate-500 font-mono">
                  Kepuasan Klien
                </p>
                <p className="text-2xl font-display font-bold text-emerald-400">
                  98%
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600 animate-bounce">
          <p className="text-xs font-mono tracking-widest">SCROLL</p>
          <ArrowDown size={16} />
        </div>
      </div>
    </section>
  );
}
