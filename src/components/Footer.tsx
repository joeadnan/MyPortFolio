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
    <footer className="border-t border-surface-border py-10">
      <div className="container-custom">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2 font-mono font-bold">
            <span className="p-1.5 rounded-lg bg-brand-600/20 text-brand-400">
              <Code2 size={16} />
            </span>
            <span className="gradient-text">Adnan.dev</span>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {footerLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="text-sm text-slate-500 hover:text-white transition-colors"
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Back to top */}
          <button
            onClick={scrollTop}
            className="p-2 rounded-lg border border-surface-border text-slate-500 hover:text-white hover:border-brand-500/40 hover:bg-brand-500/10 transition-all"
          >
            <ArrowUp size={18} />
          </button>
        </div>

        <div className="mt-8 pt-6 border-t border-surface-border/50 text-center">
          <p className="text-xs text-slate-600 flex items-center justify-center gap-1.5">
            Dibuat dengan{" "}
            <Heart size={12} className="text-red-500 fill-red-500" />{" "}
            menggunakan
            <span className="text-brand-400 font-mono">Laravel 12</span> +
            <span className="text-brand-400 font-mono">React</span> +
            <span className="text-brand-400 font-mono">TailwindCSS</span>
          </p>
          <p className="text-xs text-slate-700 mt-1">
            © {new Date().getFullYear()} Hasim Adnan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
