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
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (href: string) => {
    setOpen(false);
    setActive(href.replace("#", ""));
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-surface/80 backdrop-blur-xl border-b border-surface-border/50"
          : "py-5"
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={() => handleClick("#home")}
          className="flex items-center gap-2 font-mono font-bold text-lg group"
        >
          <span className="p-1.5 rounded-lg bg-brand-600/20 text-brand-400 group-hover:bg-brand-600/40 transition-colors">
            <Code2 size={18} />
          </span>
          <span className="gradient-text">Adnan.dev</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map(({ href, label }) => (
            <button
              key={href}
              onClick={() => handleClick(href)}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                active === href.replace("#", "")
                  ? "text-white bg-brand-600/20"
                  : "text-slate-400 hover:text-white hover:bg-white/5"
              }`}
            >
              {label}
            </button>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a href="#" className="btn-primary text-xs px-4 py-2">
            <Download size={14} /> Unduh CV
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <nav className="container-custom py-4 flex flex-col gap-1 border-t border-surface-border/50">
          {navLinks.map(({ href, label }) => (
            <button
              key={href}
              onClick={() => handleClick(href)}
              className="px-4 py-2.5 rounded-xl text-sm font-medium text-slate-400 hover:text-white hover:bg-white/5 text-left transition-colors"
            >
              {label}
            </button>
          ))}
          <a href="#" className="btn-primary mt-2 justify-center text-sm">
            <Download size={14} /> Unduh CV
          </a>
        </nav>
      </div>
    </header>
  );
}
