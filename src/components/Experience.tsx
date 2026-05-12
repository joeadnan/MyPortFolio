import { Briefcase, CalendarDays, Sparkles } from "lucide-react";

type ExperienceItem = {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string[];
  tech: string[];
};

const experiences: ExperienceItem[] = [
  {
    id: 1,
    role: "SEO Specialist ( Freelance Project )",
    company: "PT. Micool Berkah Bersama",
    period: "Des 2022 - Sekarang",
    description: [
      "Melakukan instalasi, konfigurasi, dan audit berkala pada elemen SEO teknis (seperti XML sitemaps, robots.txt, dan struktur URL) serta pemeliharaan performa kecepatan situs (Core Web Vitals).",
      "Melakukan analisis masalah dan perbaikan teknis (seperti crawl errors atau penurunan trafik) untuk memastikan visibilitas situs tetap optimal dan berjalan sesuai algoritma terbaru.",
    ],
    tech: [
      "SEO Technical Audit",
      "SEO Tools Proficiency",
      "Web & Analytics Support",
      "Stakeholder Communication",
    ],
  },
  {
    id: 2,
    role: "IT Support Specialist",
    company: "PT. Asietex Sinar Indoprima",
    period: "Des 2025 - Apr 2026",
    description: [
      "Melakukan instalasi, konfigurasi, dan maintenance perangkat komputer, laptop, printer, dan perangkat IT lainnya. ",
      "Memberikan dukungan teknis kepada pengguna terkait masalah perangkat keras, perangkat lunak, jaringan, dan sistem operasi.",
      "Melakukan troubleshooting dan pemecahan masalah untuk memastikan sistem IT berjalan dengan baik.",
    ],
    tech: [
      "Hardware Troubleshooting",
      "Software Installation",
      "Network Support",
      "Customer Service",
    ],
  },
  {
    id: 3,
    role: "Tenaga Administrasi IT",
    company: "SD Negeri Baluk",
    period: "Jul 2023 - Des 2025",
    description: [
      "Tenaga administrasi sekolah bertugas mengelola administrasi dan dokumentasi sekolah, seperti data siswa, surat-menyurat, arsip, serta laporan operasional sekolah. Selain itu, tenaga administrasi juga membantu kelancaran kegiatan sekolah dengan memberikan dukungan administratif kepada kepala sekolah, guru, siswa, dan orang tua.",
    ],
    tech: ["Dapodik", "BioUN", "E-Raport", "E-Kinerja BKN"],
  },
  {
    id: 4,
    role: "Staff Warehouse",
    company: "PT. IMCP",
    period: "2019 - 2022",
    description: [
      "Membantu administrasi gudang dengan mengoperasikan sistem internal untuk pelacakan barcode atau SKU barang.",
      "Mengoperasikan sistem internal berbasis web untuk pencatatan barang masuk dan keluar (inbound/outbound).",
    ],
    tech: [
      "Stock Opname",
      "Operational Logistics",
      "Warehouse Management System",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-slate-950 px-4 py-24 text-white"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(16,185,129,0.14),transparent_32%),radial-gradient(circle_at_80%_70%,rgba(20,184,166,0.12),transparent_35%)]" />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(16,185,129,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(16,185,129,0.05)_1px,transparent_1px)] bg-[size:64px_64px] opacity-25" />

      <div className="container-custom relative z-10 mx-auto">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-300">
            <Sparkles size={15} />
            Pengalaman Kerja
          </div>

          <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Perjalanan{" "}
            <span className="bg-gradient-to-r from-emerald-300 via-teal-300 to-cyan-300 bg-clip-text text-transparent">
              Karir Saya
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-slate-400">
            Berdedikasi dalam membangun stabilitas teknologi dan mentransformasi
            data menjadi alat pengambilan keputusan yang akurat demi terciptanya
            pengalaman pengguna yang optimal..
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mx-auto max-w-4xl">
          {/* Vertical line */}
          <div className="absolute left-5 top-0 hidden h-full w-px bg-gradient-to-b from-emerald-400/50 via-teal-400/20 to-transparent md:block" />

          <div className="space-y-8">
            {experiences.map((item) => (
              <div
                key={item.id}
                className="relative rounded-[2rem] border border-white/10 bg-slate-950/70 p-6 shadow-[0_0_40px_rgba(16,185,129,0.08)] backdrop-blur-2xl transition duration-300 hover:-translate-y-1 hover:border-emerald-400/30 hover:bg-emerald-400/5"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-[42px] top-10 hidden h-5 w-5 rounded-full border-4 border-slate-950 bg-emerald-400 shadow-[0_0_20px_rgba(52,211,153,0.9)] md:block" />

                <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                  {/* Left */}
                  <div>
                    <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-300">
                      <Briefcase size={13} />
                      {item.company}
                    </div>

                    <h3 className="text-xl font-bold text-white">
                      {item.role}
                    </h3>

                    <div className="mt-2 flex items-center gap-2 text-sm text-slate-500">
                      <CalendarDays size={14} />
                      {item.period}
                    </div>

                    <p className="mt-5 max-w-2xl leading-relaxed text-slate-400">
                      {item.description.map((description, index) => (
                        <span key={index}>{description}</span>
                      ))}
                    </p>

                    {/* Tech */}
                    <div className="mt-5 flex flex-wrap gap-2">
                      {item.tech.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs font-semibold text-slate-300 transition hover:border-emerald-400/30 hover:bg-emerald-400/10 hover:text-white"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Badge */}
                  <div className="flex shrink-0 items-center justify-center">
                    <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 px-5 py-4 text-center shadow-[0_0_30px_rgba(16,185,129,0.12)]">
                      <p className="font-mono text-xs tracking-[0.3em] text-slate-500">
                        EXPERIENCE
                      </p>

                      <p className="mt-2 bg-gradient-to-r from-emerald-300 via-teal-300 to-cyan-300 bg-clip-text text-2xl font-bold text-transparent">
                        {item.period.split(" - ")[0]}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Highlight */}
        {/* <div className="mt-16 text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 backdrop-blur-xl">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />

            <p className="text-sm text-slate-400">
              Terus berkembang mengikuti teknologi modern dan kebutuhan industri
              digital.
            </p>
          </div>
        </div> */}
      </div>
    </section>
  );
}
