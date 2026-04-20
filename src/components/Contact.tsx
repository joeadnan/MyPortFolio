import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  CheckCircle2,
} from "lucide-react";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};
type Status = "idle" | "loading" | "success" | "error";

const contactInfo = [
  {
    icon: <Mail size={18} />,
    label: "Email",
    value: "andi@example.com",
    href: "mailto:andi@example.com",
  },
  {
    icon: <Phone size={18} />,
    label: "Telepon",
    value: "+62 812 3456 7890",
    href: "tel:+6281234567890",
  },
  {
    icon: <MapPin size={18} />,
    label: "Lokasi",
    value: "Jakarta, Indonesia",
    href: "#",
  },
];

const socials = [
  { icon: <Github size={18} />, label: "GitHub", href: "#" },
  { icon: <Linkedin size={18} />, label: "LinkedIn", href: "#" },
  { icon: <Twitter size={18} />, label: "Twitter", href: "#" },
  { icon: <Instagram size={18} />, label: "Instagram", href: "#" },
];

export default function Contact() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    // Simulate API call
    await new Promise((r) => setTimeout(r, 1500));
    setStatus("success");
    setForm({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setStatus("idle"), 4000);
  };

  const inputClass = `w-full px-4 py-3 rounded-xl bg-surface-card border border-surface-border text-white placeholder-slate-600
    text-sm focus:outline-none focus:border-brand-500/60 focus:ring-1 focus:ring-brand-500/30 transition-colors`;

  return (
    <section id="contact" className="section">
      <div className="container-custom">
        {/* Header */}
        {/* <div className="text-center mb-14">
          <p className="section-label mb-3">Kontak</p>
          <h2 className="section-title mb-4">
            Mari <span className="gradient-text">Berkolaborasi</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Punya proyek menarik? Saya siap mendengar ide Anda dan mewujudkannya menjadi produk digital yang luar biasa.
          </p>
        </div> */}

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Left info panel */}
          <div className="lg:col-span-2 space-y-6">
            <div className="glass-card p-7 space-y-6">
              <div>
                <h3 className="font-bold text-white text-lg mb-1">
                  Hubungi Saya
                </h3>
                <p className="text-slate-500 text-sm">
                  Saya akan membalas dalam 24 jam.
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map(({ icon, label, value, href }) => (
                  <a
                    key={label}
                    href={href}
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-400 group-hover:bg-brand-500/20 transition-colors shrink-0">
                      {icon}
                    </div>
                    <div>
                      <p className="text-xs text-slate-600 font-mono">
                        {label}
                      </p>
                      <p className="text-sm text-white font-medium group-hover:text-brand-300 transition-colors">
                        {value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="pt-4 border-t border-surface-border">
                <p className="text-xs font-mono text-slate-600 mb-3">
                  FOLLOW ME
                </p>
                <div className="flex gap-2">
                  {socials.map(({ icon, label, href }) => (
                    <a
                      key={label}
                      href={href}
                      aria-label={label}
                      className="w-9 h-9 rounded-lg border border-surface-border flex items-center justify-center text-slate-500 hover:text-white hover:border-brand-500/40 hover:bg-brand-500/10 transition-all"
                    >
                      {icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Availability badge */}
            <div className="glass-card p-5 flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse shrink-0" />
              <div>
                <p className="text-sm font-semibold text-white">
                  Tersedia untuk Proyek Baru
                </p>
                <p className="text-xs text-slate-500">
                  Freelance & Full-time Welcome
                </p>
              </div>
            </div>
          </div>

          {/* Right form */}
          <div className="lg:col-span-3">
            <div className="glass-card p-8">
              {status === "success" ? (
                <div className="flex flex-col items-center justify-center py-12 space-y-4 text-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
                    <CheckCircle2 size={32} className="text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    Pesan Terkirim!
                  </h3>
                  <p className="text-slate-400 text-sm">
                    Terima kasih! Saya akan segera menghubungi Anda.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-400">
                        Nama Lengkap
                      </label>
                      <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Nama Anda"
                        required
                        className={inputClass}
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-400">
                        Email
                      </label>
                      <input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="email@anda.com"
                        required
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-400">
                      Subjek
                    </label>
                    <input
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="Topik pesan Anda"
                      required
                      className={inputClass}
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-400">
                      Pesan
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Ceritakan proyek atau pertanyaan Anda..."
                      required
                      rows={5}
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === "loading" ? (
                      <>
                        <span className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                        Mengirim...
                      </>
                    ) : (
                      <>
                        <Send size={16} /> Kirim Pesan
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
