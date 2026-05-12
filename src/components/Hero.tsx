import { useEffect, useRef, type ReactNode, type CSSProperties } from "react";
import {
  ArrowDown,
  Github,
  Linkedin,
  Twitter,
  Mail,
  Sparkles,
  Database,
  ServerCog,
  BarChart3,
} from "lucide-react";
import profileImage from "../../public/images/Fotojas.jpeg";

interface Particle {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
}

interface OrbitRingProps {
  size: string;
  duration: number;
  delay?: number;
  reverse?: boolean;
}

interface FloatingBadgeProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let frame = 0;
    const dpr = window.devicePixelRatio || 1;

    const resize = () => {
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener("resize", resize);

    const particles: Particle[] = Array.from({ length: 75 }, () => ({
      x: Math.random() * 1920,
      y: Math.random() * 1080,
      z: Math.random() * 900,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      vz: -0.45 - Math.random() * 0.35,
    }));

    const project = (p: Particle) => {
      const fov = 800;
      const scale = fov / (fov + p.z);

      return {
        sx: (p.x - 960) * scale + width / 2,
        sy: (p.y - 540) * scale + height / 2,
        scale,
      };
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.z += p.vz;

        if (p.z < -700) {
          p.z = 900;
          p.x = Math.random() * 1920;
          p.y = Math.random() * 1080;
        }
      });

      particles.forEach((p, i) => {
        const { sx, sy, scale } = project(p);

        if (sx < 0 || sx > width || sy < 0 || sy > height) return;

        const alpha = Math.max(0, Math.min(1, scale * 1.25));

        ctx.beginPath();
        ctx.arc(sx, sy, scale * 2.2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(16,185,129,${alpha * 0.65})`;
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const { sx: qx, sy: qy, scale: qs } = project(q);

          const dx = sx - qx;
          const dy = sy - qy;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 115) {
            ctx.beginPath();
            ctx.moveTo(sx, sy);
            ctx.lineTo(qx, qy);
            ctx.strokeStyle = `rgba(20,184,166,${
              (1 - distance / 115) * alpha * qs * 0.28
            })`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      });

      frame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full opacity-50 pointer-events-none"
    />
  );
}

function OrbitRing({
  size,
  duration,
  delay = 0,
  reverse = false,
}: OrbitRingProps) {
  return (
    <div
      className="absolute left-1/2 top-1/2 rounded-full border border-emerald-400/20"
      style={{
        width: size,
        height: size,
        animation: `${
          reverse ? "spinReverse" : "spin"
        } ${duration}s linear infinite`,
        animationDelay: `${delay}s`,
      }}
    >
      <span className="absolute left-1/2 -top-1.5 h-3 w-3 -translate-x-1/2 rounded-full bg-emerald-400 shadow-[0_0_14px_rgba(52,211,153,0.9)]" />
    </div>
  );
}

function FloatingBadge({
  children,
  className = "",
  style,
}: FloatingBadgeProps) {
  return (
    <div
      className={`absolute rounded-2xl border border-emerald-400/20 bg-slate-950/70 px-4 py-3 shadow-[0_0_30px_rgba(16,185,129,0.12)] backdrop-blur-xl ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}

export default function Hero() {
  const scrollTo = (selector: string) => {
    document.querySelector(selector)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const stats = [
    { value: "3+", label: "Tahun Exp" },
    { value: "10+", label: "Proyek" },
    { value: "97%", label: "Kepuasan" },
  ];

  const socialLinks = [
    { icon: <Github size={18} />, href: "#", label: "GitHub" },
    { icon: <Linkedin size={18} />, href: "#", label: "LinkedIn" },
    { icon: <Twitter size={18} />, href: "#", label: "Twitter" },
  ];

  return (
    <>
      <style>{`
        @keyframes spin {
          from { transform: translate(-50%, -50%) rotateX(70deg) rotateZ(0deg); }
          to { transform: translate(-50%, -50%) rotateX(70deg) rotateZ(360deg); }
        }

        @keyframes spinReverse {
          from { transform: translate(-50%, -50%) rotateX(70deg) rotateZ(0deg); }
          to { transform: translate(-50%, -50%) rotateX(70deg) rotateZ(-360deg); }
        }

        @keyframes scanline {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(220%); }
        }

        @keyframes floatSoft {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
      `}</style>

      <section
        id="home"
        className="relative flex min-h-screen items-center overflow-hidden bg-slate-950 px-4 pt-28 pb-16 text-white"
      >
        <ParticleCanvas />

        {/* Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.16),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(20,184,166,0.14),transparent_35%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(16,185,129,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(16,185,129,0.06)_1px,transparent_1px)] bg-[size:64px_64px] opacity-30" />

        <div className="container-custom relative z-10 mx-auto w-full">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            {/* Text */}
            <div className="text-center lg:text-left">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-300 shadow-[0_0_30px_rgba(16,185,129,0.14)]">
                <Sparkles size={15} />
                Tersedia untuk proyek baru
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              </div>

              <p className="mb-3 font-mono text-xs uppercase tracking-[0.35em] text-slate-500">
                &gt; Hello, saya
              </p>

              <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-7xl">
                <span className="block text-white">M. Hasim</span>
                <span className="block bg-gradient-to-r from-emerald-300 via-teal-300 to-cyan-300 bg-clip-text text-transparent">
                  Adnan
                </span>
              </h1>

              <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg lg:mx-0">
                Mengubah data menjadi insight dan memastikan sistem berjalan
                optimal sebagai{" "}
                <span className="font-semibold text-white">
                  Data Analyst & IT Support
                </span>
                .
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-300">
                  <BarChart3 size={16} className="text-emerald-300" />
                  Data Analytics
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-300">
                  <ServerCog size={16} className="text-teal-300" />
                  IT Support
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-300">
                  <Database size={16} className="text-cyan-300" />
                  Database
                </div>
              </div>

              <div className="mt-9 grid grid-cols-3 gap-4 sm:max-w-md lg:max-w-lg">
                {stats.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-xl"
                  >
                    <p className="text-2xl font-bold text-emerald-300 sm:text-3xl">
                      {item.value}
                    </p>
                    <p className="mt-1 text-xs font-medium text-slate-500">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
                <button
                  onClick={() => scrollTo("#portfolio")}
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_35px_rgba(16,185,129,0.28)] transition hover:scale-105"
                >
                  Lihat Portfolio
                  <ArrowDown
                    size={16}
                    className="transition group-hover:translate-y-0.5"
                  />
                </button>

                <button
                  onClick={() => scrollTo("#contact")}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-white backdrop-blur-xl transition hover:border-emerald-400/30 hover:bg-emerald-400/10"
                >
                  <Mail size={16} />
                  Hubungi Saya
                </button>
              </div>

              <div className="mt-8 flex items-center justify-center gap-4 lg:justify-start">
                <span className="font-mono text-xs tracking-[0.3em] text-slate-600">
                  SOCIAL
                </span>

                <span className="h-px w-10 bg-gradient-to-r from-emerald-400/60 to-transparent" />

                {socialLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    aria-label={item.label}
                    className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-500 transition hover:-translate-y-1 hover:border-emerald-400/30 hover:bg-emerald-400/10 hover:text-emerald-300"
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Avatar */}
            <div className="relative mx-auto flex justify-center lg:justify-end">
              <div className="relative h-64 w-64 sm:h-80 sm:w-80 lg:h-[420px] lg:w-[420px]">
                <OrbitRing size="calc(100% + 70px)" duration={20} />
                <OrbitRing
                  size="calc(100% + 125px)"
                  duration={30}
                  delay={-8}
                  reverse
                />
                <OrbitRing size="calc(100% + 180px)" duration={24} delay={-5} />

                <div className="absolute inset-0 rounded-full bg-emerald-400/10 blur-3xl" />

                <div
                  className="relative h-full w-full overflow-hidden rounded-full border-2 border-emerald-400/30 bg-slate-900 shadow-[0_0_70px_rgba(16,185,129,0.22)]"
                  style={{ animation: "floatSoft 6s ease-in-out infinite" }}
                >
                  <img
                    src={profileImage}
                    alt="M. Hasim Adnan"
                    className="h-full w-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 via-transparent to-emerald-400/10" />

                  <div
                    className="absolute left-0 right-0 h-20 bg-gradient-to-b from-transparent via-emerald-400/10 to-transparent"
                    style={{ animation: "scanline 3s linear infinite" }}
                  />
                </div>

                <FloatingBadge
                  className="-left-8 bottom-6"
                  style={{ animation: "floatSoft 5s ease-in-out infinite" }}
                >
                  <p className="font-mono text-xs text-slate-500">
                    Project Done
                  </p>
                  <p className="text-2xl font-bold text-emerald-300">10+</p>
                </FloatingBadge>

                <FloatingBadge
                  className="-right-8 top-8"
                  style={{ animation: "floatSoft 6s ease-in-out infinite" }}
                >
                  <p className="font-mono text-xs text-slate-500">
                    Client Score
                  </p>
                  <p className="text-2xl font-bold text-teal-300">97%</p>
                </FloatingBadge>
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={() => scrollTo("#about")}
          className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-slate-600 transition hover:text-emerald-300 md:flex"
        >
          <span className="font-mono text-xs tracking-[0.35em]">SCROLL</span>
          <ArrowDown size={16} />
        </button>
      </section>
    </>
  );
}
