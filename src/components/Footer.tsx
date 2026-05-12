import { Code2, Heart, ArrowUp } from "lucide-react";

const footerLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#blog", label: "Blog" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-slate-950 px-4 py-10 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(16,185,129,0.12),transparent_35%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(16,185,129,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(16,185,129,0.04)_1px,transparent_1px)] bg-[size:64px_64px] opacity-20" />

      <div className="container-custom relative z-10 mx-auto">
        <div className="flex flex-col items-center justify-between gap-6 rounded-[2rem] border border-white/10 bg-slate-950/70 p-6 shadow-[0_0_40px_rgba(16,185,129,0.08)] backdrop-blur-2xl sm:flex-row">
          <div className="flex items-center gap-3 font-mono font-bold">
            <span className="grid h-10 w-10 place-items-center rounded-xl border border-emerald-400/20 bg-emerald-400/10 text-emerald-300 shadow-[0_0_20px_rgba(16,185,129,0.15)]">
              <Code2 size={18} />
            </span>

            <span className="bg-gradient-to-r from-emerald-300 via-teal-300 to-cyan-300 bg-clip-text text-lg text-transparent">
              Adnan.dev
            </span>
          </div>

          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {footerLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="text-sm font-medium text-slate-500 transition hover:text-emerald-300"
              >
                {label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            onClick={scrollTop}
            aria-label="Back to top"
            className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-500 transition hover:-translate-y-1 hover:border-emerald-400/30 hover:bg-emerald-400/10 hover:text-emerald-300"
          >
            <ArrowUp size={18} />
          </button>
        </div>

        <div className="mt-8 border-t border-white/10 pt-6 text-center">
          <p className="flex flex-wrap items-center justify-center gap-1.5 text-xs text-slate-500">
            Dibuat dengan
            <Heart size={12} className="fill-red-500 text-red-500" />
            menggunakan
            <span className="font-mono text-emerald-300">TypeScript</span>+
            <span className="font-mono text-teal-300">React</span>+
            <span className="font-mono text-cyan-300">TailwindCSS</span>
          </p>

          <p className="mt-2 text-xs text-slate-700">
            © {new Date().getFullYear()} Hasim Adnan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
