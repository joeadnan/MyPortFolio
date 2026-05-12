import { useEffect, useRef, useState } from "react";
import {
  Code2,
  Database,
  Layers3,
  Power,
  ServerCog,
  Sparkles,
  Wrench,
} from "lucide-react";

type Skill = {
  id: number;
  name: string;
  level: number;
  color?: string;
};

const skillsData: Record<string, Skill[]> = {
  Python: [
    { id: 1, name: "Pandas", level: 92, color: "#FF2D20" },
    { id: 2, name: "NumPy", level: 90, color: "#777BB4" },
    { id: 3, name: "Matplotlib", level: 85, color: "#4479A1" },
    { id: 4, name: "Seaborn", level: 75, color: "#339933" },
  ],
  PowerBI: [
    { id: 5, name: "Integrasi Data Multi-Sumber", level: 85, color: "#38BDF8" },
    { id: 6, name: "Pemodelan Data & DAX", level: 88, color: "#42B883" },
    { id: 7, name: "Visualisasi Interaktif", level: 80, color: "#61DAFB" },
    { id: 8, name: "Otomasi Laporan", level: 78, color: "#3178C6" },
  ],
  Excell: [
    { id: 9, name: "Lookup Functions", level: 90, color: "#F05032" },
    { id: 10, name: "Pivot Tables", level: 70, color: "#2496ED" },
    { id: 11, name: "Data Validation", level: 65, color: "#31A8FF" },
    { id: 12, name: "Data Cleaning", level: 65, color: "#31A8FF" },
    { id: 13, name: "Data Visualization", level: 65, color: "#31A8FF" },
  ],
  Database: [
    { id: 11, name: "DML", level: 80, color: "#F24E1E" },
    { id: 12, name: "DDL", level: 65, color: "#31A8FF" },
    { id: 13, name: "SQL", level: 75, color: "#31A8FF" },
    { id: 14, name: "Aggregation", level: 75, color: "#31A8FF" },
    { id: 15, name: "Joins", level: 70, color: "#31A8FF" },
    { id: 16, name: "Subqueries", level: 65, color: "#31A8FF" },
    { id: 17, name: "Window Functions", level: 65, color: "#31A8FF" },
    { id: 18, name: "CTEs", level: 65, color: "#31A8FF" },
  ],
};

const categoryIcons: Record<string, React.ReactNode> = {
  Python: <ServerCog size={16} />,
  PowerBI: <ServerCog size={16} />,
  Excell: <Code2 size={16} />,
  Database: <Database size={16} />,
};

function SkillItem({ skill, visible }: { skill: Skill; visible: boolean }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-xl transition hover:-translate-y-1 hover:border-emerald-400/30 hover:bg-emerald-400/10">
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span
            className="h-2.5 w-2.5 rounded-full shadow-[0_0_12px_rgba(52,211,153,0.8)]"
            style={{ backgroundColor: skill.color || "#34d399" }}
          />
          <span className="text-sm font-semibold text-white">{skill.name}</span>
        </div>

        <span className="font-mono text-xs text-emerald-300">
          {skill.level}%
        </span>
      </div>

      <div className="h-2 overflow-hidden rounded-full bg-slate-800/80">
        <div
          className="h-full rounded-full bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 shadow-[0_0_18px_rgba(45,212,191,0.45)] transition-all duration-1000 ease-out"
          style={{ width: visible ? `${skill.level}%` : "0%" }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const [visible, setVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("Python");
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  const categories = Object.keys(skillsData);
  const allSkills = Object.values(skillsData).flat();

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative overflow-hidden bg-slate-950 px-4 py-24 text-white"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(16,185,129,0.14),transparent_32%),radial-gradient(circle_at_80%_70%,rgba(20,184,166,0.12),transparent_35%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(16,185,129,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(16,185,129,0.05)_1px,transparent_1px)] bg-[size:64px_64px] opacity-25" />

      <div className="container-custom relative z-10 mx-auto">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-300">
            <Sparkles size={15} />
            Keahlian
          </div>

          <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Tech Stack &{" "}
            <span className="bg-gradient-to-r from-emerald-300 via-teal-300 to-cyan-300 bg-clip-text text-transparent">
              Kemampuan
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-slate-400">
            Kombinasi keahlian teknis dan kreativitas untuk membangun produk
            digital yang cepat, stabil, dan mudah dikembangkan.
          </p>
        </div>

        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {categories.map((cat) => {
            const isActive = activeTab === cat;

            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveTab(cat)}
                className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-[0_0_28px_rgba(16,185,129,0.28)]"
                    : "border border-white/10 bg-white/[0.03] text-slate-400 hover:border-emerald-400/30 hover:bg-emerald-400/10 hover:text-white"
                }`}
              >
                {categoryIcons[cat]}
                {cat}
              </button>
            );
          })}
        </div>

        <div className="mx-auto max-w-4xl rounded-[2rem] border border-white/10 bg-slate-950/70 p-5 shadow-[0_0_50px_rgba(16,185,129,0.1)] backdrop-blur-2xl sm:p-8">
          <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-5">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-slate-500">
                Active Category
              </p>
              <h3 className="mt-2 flex items-center gap-2 text-xl font-bold text-white">
                <Database size={20} className="text-emerald-300" />
                {activeTab}
              </h3>
            </div>

            <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-300">
              {skillsData[activeTab]?.length || 0} Skills
            </span>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {skillsData[activeTab]?.map((skill) => (
              <SkillItem key={skill.id} skill={skill} visible={visible} />
            ))}
          </div>
        </div>

        <div className="mt-14">
          <p className="mb-6 text-center font-mono text-xs tracking-[0.35em] text-slate-600">
            SEMUA TEKNOLOGI
          </p>

          <div className="mx-auto flex max-w-4xl flex-wrap justify-center gap-2">
            {allSkills.map((skill) => (
              <span
                key={skill.id}
                className="cursor-default rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-semibold text-slate-400 backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-emerald-400/30 hover:bg-emerald-400/10 hover:text-white"
              >
                {skill.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
