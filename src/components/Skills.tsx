import { useEffect, useRef, useState } from 'react'

type Skill = { id: number; name: string; level: number; color?: string }

const skillsData: Record<string, Skill[]> = {
  Backend: [
    { id: 1, name: 'Laravel', level: 92, color: '#FF2D20' },
    { id: 2, name: 'PHP',     level: 90, color: '#777BB4' },
    { id: 3, name: 'MySQL',   level: 85, color: '#4479A1' },
    { id: 4, name: 'Node.js', level: 75, color: '#339933' },
  ],
  Frontend: [
    { id: 5, name: 'TailwindCSS', level: 95, color: '#38BDF8' },
    { id: 6, name: 'Vue.js',      level: 88, color: '#42B883' },
    { id: 7, name: 'React',       level: 80, color: '#61DAFB' },
    { id: 8, name: 'TypeScript',  level: 78, color: '#3178C6' },
  ],
  DevOps: [
    { id: 9,  name: 'Git',    level: 90, color: '#F05032' },
    { id: 10, name: 'Docker', level: 70, color: '#2496ED' },
  ],
  Design: [
    { id: 11, name: 'Figma',      level: 80, color: '#F24E1E' },
    { id: 12, name: 'Photoshop',  level: 65, color: '#31A8FF' },
  ],
}

function SkillItem({ skill, visible }: { skill: Skill; visible: boolean }) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: skill.color || '#5c5cff' }} />
          <span className="text-sm font-medium text-white">{skill.name}</span>
        </div>
        <span className="text-xs font-mono text-slate-500">{skill.level}%</span>
      </div>
      <div className="skill-bar">
        <div className="skill-bar-fill" style={{ width: visible ? `${skill.level}%` : '0%' }} />
      </div>
    </div>
  )
}

export default function Skills() {
  const [visible, setVisible] = useState(false)
  const [activeTab, setActiveTab] = useState('Backend')
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true) },
      { threshold: 0.2 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const categories = Object.keys(skillsData)

  return (
    <section id="skills" className="section" ref={sectionRef}>
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="section-label mb-3">Keahlian</p>
          <h2 className="section-title mb-4">
            Tech Stack & <span className="gradient-text">Kemampuan</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Kombinasi keahlian teknis dan kreativitas untuk membangun produk digital berkualitas tinggi.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map(cat => (
            <button key={cat} onClick={() => setActiveTab(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                activeTab === cat
                  ? 'bg-brand-600 text-white shadow-lg shadow-brand-600/30'
                  : 'text-slate-400 hover:text-white border border-surface-border hover:border-brand-500/40'
              }`}>
              {cat}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <div className="max-w-3xl mx-auto glass-card p-8">
          <div className="grid sm:grid-cols-2 gap-x-12 gap-y-6">
            {skillsData[activeTab]?.map(skill => (
              <SkillItem key={skill.id} skill={skill} visible={visible} />
            ))}
          </div>
        </div>

        {/* Tech badges row */}
        <div className="mt-14">
          <p className="text-center text-xs font-mono text-slate-600 mb-6 tracking-widest">SEMUA TEKNOLOGI</p>
          <div className="flex flex-wrap justify-center gap-2">
            {Object.values(skillsData).flat().map(skill => (
              <span key={skill.id} className="px-3 py-1.5 rounded-lg text-xs font-semibold border border-surface-border text-slate-400 hover:border-brand-500/40 hover:text-white transition-colors cursor-default">
                {skill.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
