import { useState, useEffect } from "react";
import { Menu, X, Code2, Download } from "lucide-react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#blog", label: "Blog" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (href: string) => {
    const targetId = href.replace("#", "");

    setOpen(false);
    setActive(targetId);

    document.querySelector(href)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="container-custom">
        <div
          className={`relative flex items-center justify-between rounded-2xl px-4 lg:px-6 transition-all duration-500 ${
            scrolled
              ? "bg-slate-950/75 border border-white/10 shadow-[0_0_40px_rgba(56,189,248,0.12)] backdrop-blur-2xl"
              : "bg-transparent border border-transparent"
          }`}
        >
          {/* Glow Line */}
          <div className="pointer-events-none absolute inset-x-6 -bottom-px h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />

          {/* Logo */}
          <button
            onClick={() => handleClick("#home")}
            className="flex items-center gap-3 py-3 group"
            aria-label="Go to home section"
          >
            <span className="relative grid size-10 place-items-center rounded-xl bg-cyan-500/10 text-cyan-300 border border-cyan-400/20 shadow-[0_0_24px_rgba(34,211,238,0.18)] transition-all duration-300 group-hover:bg-cyan-500/20 group-hover:scale-105">
              <Code2 size={20} />
            </span>

            <span className="font-mono text-lg font-bold tracking-tight bg-gradient-to-r from-white via-cyan-200 to-blue-400 bg-clip-text text-transparent">
              Adnan.dev
            </span>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1 rounded-full bg-white/[0.03] border border-white/10 px-1.5 py-1.5 backdrop-blur-xl">
            {navLinks.map(({ href, label }) => {
              const isActive = active === href.replace("#", "");

              return (
                <button
                  key={href}
                  onClick={() => handleClick(href)}
                  className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    isActive ? "text-white" : "text-slate-400 hover:text-white"
                  }`}
                >
                  {isActive && (
                    <span className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/25 to-blue-500/25 border border-cyan-300/20 shadow-[0_0_20px_rgba(34,211,238,0.16)]" />
                  )}
                  <span className="relative z-10">{label}</span>
                </button>
              );
            })}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://drive.google.com/file/d/1-eMrCIwfOGa4ZsoVRJjtRggoUsL-jytx/view?usp=sharing"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_0_28px_rgba(14,165,233,0.25)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_36px_rgba(14,165,233,0.4)]"
            >
              <Download size={16} />
              Unduh CV
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="lg:hidden grid size-10 place-items-center rounded-xl text-slate-300 bg-white/5 border border-white/10 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Toggle navigation menu"
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ${
            open
              ? "max-h-[520px] opacity-100 translate-y-0"
              : "max-h-0 opacity-0 -translate-y-3"
          }`}
        >
          <nav className="mt-3 rounded-2xl border border-white/10 bg-slate-950/90 p-3 backdrop-blur-2xl shadow-[0_0_40px_rgba(56,189,248,0.12)]">
            {navLinks.map(({ href, label }) => {
              const isActive = active === href.replace("#", "");

              return (
                <button
                  key={href}
                  onClick={() => handleClick(href)}
                  className={`w-full rounded-xl px-4 py-3 text-left text-sm font-medium transition-all ${
                    isActive
                      ? "bg-cyan-500/10 text-white border border-cyan-400/20"
                      : "text-slate-400 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {label}
                </button>
              );
            })}

            <a
              href="#"
              className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 text-sm font-semibold text-white"
            >
              <Download size={16} />
              Unduh CV
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
