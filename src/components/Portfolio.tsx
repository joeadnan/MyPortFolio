import { useState } from "react";
import {
  ExternalLink,
  Github,
  Star,
  Sparkles,
  Layers3,
  TvIcon,
} from "lucide-react";

type Project = {
  id: number;
  category: string;
  isFeatured: boolean;
  title: string;
  description: string;
  thumbnail: string;
  tech: string[];
  demoUrl: string;
  sourceUrl: string;
};

const projects: Project[] = [
  {
    id: 1,
    category: "AI Project",
    isFeatured: true,
    title: "Whatapp AI Chatbot",
    description:
      "Sistem integrasi WhatsApp untuk otomatisasi pesan, notifikasi, chatbot, dan komunikasi bisnis berbasis API.",
    thumbnail: "images/WhatappIntegration.png",
    tech: ["Api Whatapp", "Gemini", "N8N", "MySQL"],
    demoUrl: "#",
    sourceUrl: "https://github.com/joeadnan/Project-Ai",
  },
  {
    id: 2,
    category: "Website",
    isFeatured: true,
    title: "Website Portfolio",
    description:
      "Platform belanja online lengkap dengan payment gateway, manajemen produk, dan dashboard analitik.",
    thumbnail: "images/Website.jpg",
    tech: ["Nuxt.js", "TailwindCSS"],
    demoUrl: "https://baja-k.vercel.app/",
    sourceUrl: "https://github.com/joeadnan/BajaK",
  },
  // {
  //   id: 3,
  //   category: "Mobile",
  //   isFeatured: true,
  //   title: "Mobile App Keuangan",
  //   description:
  //     "Aplikasi manajemen keuangan pribadi dengan budgeting, pencatatan transaksi, dan laporan visual.",
  //   thumbnail: "https://picsum.photos/seed/fin/600/400",
  //   tech: ["React Native", "Node.js", "MongoDB"],
  //   demoUrl: "#",
  //   sourceUrl: "#",
  // },
  // {
  //   id: 4,
  //   category: "Website",
  //   isFeatured: false,
  //   title: "Company Profile Website",
  //   description:
  //     "Website company profile modern dengan CMS custom, blog, dan formulir kontak terintegrasi.",
  //   thumbnail: "https://picsum.photos/seed/corp/600/400",
  //   tech: ["Laravel", "TailwindCSS", "Alpine.js"],
  //   demoUrl: "#",
  //   sourceUrl: "#",
  // },
  // {
  //   id: 5,
  //   category: "Web App",
  //   isFeatured: false,
  //   title: "LMS Platform",
  //   description:
  //     "Platform belajar online dengan video streaming, quiz interaktif, dan sertifikasi otomatis.",
  //   thumbnail: "https://picsum.photos/seed/lms/600/400",
  //   tech: ["Laravel", "Vue.js", "FFmpeg"],
  //   demoUrl: "#",
  //   sourceUrl: "#",
  // },
  {
    id: 6,
    category: "API",
    isFeatured: false,
    title: "Payment Gateway API",
    description:
      "Wrapper API payment gateway multi-provider dengan rekonsiliasi otomatis dan webhook handler.",
    thumbnail: "images/TCV.jpg",
    tech: ["Laravel", "MySQL", "Queue"],
    demoUrl: "#",
    sourceUrl: "https://github.com/joeadnan/project",
  },
];

const categories = [
  "Semua",
  "Web App",
  "E-Commerce",
  "AI Project",
  "Website",
  "API",
];

export default function Portfolio() {
  const [filter, setFilter] = useState("Semua");

  const filtered =
    filter === "Semua"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section
      id="portfolio"
      className="relative overflow-hidden bg-slate-950 px-4 py-24 text-white"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(16,185,129,0.14),transparent_32%),radial-gradient(circle_at_80%_70%,rgba(20,184,166,0.12),transparent_35%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(16,185,129,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(16,185,129,0.05)_1px,transparent_1px)] bg-[size:64px_64px] opacity-25" />

      <div className="container-custom relative z-10 mx-auto">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-300">
            <Sparkles size={15} />
            Portfolio
          </div>

          <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Proyek{" "}
            <span className="bg-gradient-to-r from-emerald-300 via-teal-300 to-cyan-300 bg-clip-text text-transparent">
              Terpilih
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-slate-400">
            Koleksi proyek yang mencerminkan kemampuan teknis dan kreativitas
            dalam memecahkan masalah nyata.
          </p>
        </div>

        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {categories.map((cat) => {
            const isActive = filter === cat;

            return (
              <button
                key={cat}
                type="button"
                onClick={() => setFilter(cat)}
                className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-[0_0_28px_rgba(16,185,129,0.28)]"
                    : "border border-white/10 bg-white/[0.03] text-slate-400 hover:border-emerald-400/30 hover:bg-emerald-400/10 hover:text-white"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project, index) => (
            <article
              key={project.id}
              className="group overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/70 shadow-[0_0_40px_rgba(16,185,129,0.08)] backdrop-blur-2xl transition duration-300 hover:-translate-y-2 hover:border-emerald-400/30 hover:bg-emerald-400/5"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="h-full w-full object-cover opacity-75 transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-slate-950/70 px-3 py-1.5 text-xs font-semibold text-slate-300 backdrop-blur-xl">
                  <Layers3 size={12} className="text-emerald-300" />
                  {project.category}
                </span>

                {project.isFeatured && (
                  <span className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 px-3 py-1.5 text-xs font-semibold text-white shadow-[0_0_20px_rgba(16,185,129,0.28)]">
                    <Star size={12} />
                    Featured
                  </span>
                )}
              </div>

              <div className="space-y-5 p-6">
                <div>
                  <h3 className="text-lg font-bold leading-tight text-white">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-slate-400">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs font-semibold text-slate-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  <a
                    href={project.demoUrl}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-400/10 px-4 py-2.5 text-sm font-semibold text-emerald-300 transition hover:bg-emerald-400/20 hover:text-white"
                  >
                    <ExternalLink size={15} />
                    Demo
                  </a>

                  <a
                    href={project.sourceUrl}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm font-semibold text-slate-400 transition hover:border-emerald-400/30 hover:bg-emerald-400/10 hover:text-white"
                  >
                    <Github size={15} />
                    Source
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
