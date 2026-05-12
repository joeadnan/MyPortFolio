import { useState, type ChangeEvent, type FormEvent } from "react";
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
  Sparkles,
} from "lucide-react";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Status = "idle" | "loading" | "success" | "error";

const WHATSAPP_NUMBER = "6283821359370"; // 083821359370 → format internasional tanpa +

const contactInfo = [
  {
    icon: <Mail size={18} />,
    label: "Email",
    value: "hasyimjoe@gmail.com",
    href: "mailto:hasyimjoe@gmail.com",
  },
  {
    icon: <Phone size={18} />,
    label: "Telepon",
    value: "+62 83 821 359 370",
    href: "tel:+6283821359370",
  },
  {
    icon: <MapPin size={18} />,
    label: "Lokasi",
    value: "Serang, Banten, Indonesia",
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
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    // Format pesan WhatsApp
    const waText = [
      `*Pesan dari Website Portfolio*`,
      ``,
      `*Nama:* ${form.name}`,
      `*Email:* ${form.email}`,
      `*Subjek:* ${form.subject}`,
      ``,
      `*Pesan:*`,
      form.message,
    ].join("\n");

    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(waText)}`;

    // Buka WhatsApp di tab baru
    window.open(waUrl, "_blank", "noopener,noreferrer");

    // Simulasi delay singkat supaya UX terasa smooth
    await new Promise((resolve) => setTimeout(resolve, 800));

    setStatus("success");
    setForm({ name: "", email: "", subject: "", message: "" });

    setTimeout(() => setStatus("idle"), 4000);
  };

  const inputClass =
    "w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-slate-600 outline-none backdrop-blur-xl transition focus:border-emerald-400/40 focus:bg-emerald-400/5 focus:ring-2 focus:ring-emerald-400/10";

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-slate-950 px-4 py-24 text-white"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(16,185,129,0.14),transparent_32%),radial-gradient(circle_at_80%_70%,rgba(20,184,166,0.12),transparent_35%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(16,185,129,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(16,185,129,0.05)_1px,transparent_1px)] bg-[size:64px_64px] opacity-25" />

      <div className="container-custom relative z-10 mx-auto">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-300">
            <Sparkles size={15} />
            Kontak
          </div>

          <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Mari{" "}
            <span className="bg-gradient-to-r from-emerald-300 via-teal-300 to-cyan-300 bg-clip-text text-transparent">
              Berkolaborasi
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-slate-400">
            Punya proyek menarik? Saya siap mendengar ide Anda dan membantu
            mewujudkannya menjadi produk digital yang berkualitas.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-5">
          <div className="space-y-6 lg:col-span-2">
            <div className="rounded-[2rem] border border-white/10 bg-slate-950/70 p-7 shadow-[0_0_50px_rgba(16,185,129,0.1)] backdrop-blur-2xl">
              <div>
                <h3 className="text-lg font-bold text-white">Hubungi Saya</h3>
                <p className="mt-2 text-sm text-slate-500">
                  Saya akan membalas dalam 24 jam.
                </p>
              </div>

              <div className="mt-7 space-y-4">
                {contactInfo.map(({ icon, label, value, href }) => (
                  <a
                    key={label}
                    href={href}
                    className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-emerald-400/30 hover:bg-emerald-400/10"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-emerald-400/20 bg-emerald-400/10 text-emerald-300 transition group-hover:bg-emerald-400/20">
                      {icon}
                    </div>

                    <div>
                      <p className="font-mono text-xs text-slate-600">
                        {label}
                      </p>
                      <p className="mt-1 text-sm font-semibold text-white transition group-hover:text-emerald-300">
                        {value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="mt-7 border-t border-white/10 pt-6">
                <p className="mb-3 font-mono text-xs tracking-[0.3em] text-slate-600">
                  FOLLOW ME
                </p>

                <div className="flex flex-wrap gap-2">
                  {socials.map(({ icon, label, href }) => (
                    <a
                      key={label}
                      href={href}
                      aria-label={label}
                      className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-500 transition hover:-translate-y-1 hover:border-emerald-400/30 hover:bg-emerald-400/10 hover:text-emerald-300"
                    >
                      {icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-[2rem] border border-emerald-400/20 bg-emerald-400/10 p-5 shadow-[0_0_35px_rgba(16,185,129,0.12)] backdrop-blur-xl">
              <span className="h-3 w-3 shrink-0 rounded-full bg-emerald-400 shadow-[0_0_15px_rgba(52,211,153,0.9)] animate-pulse" />

              <div>
                <p className="text-sm font-semibold text-white">
                  Tersedia untuk Proyek Baru
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  Freelance & Full-time Welcome
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="rounded-[2rem] border border-white/10 bg-slate-950/70 p-6 shadow-[0_0_50px_rgba(16,185,129,0.1)] backdrop-blur-2xl sm:p-8">
              {status === "success" ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full border border-emerald-400/30 bg-emerald-400/10 shadow-[0_0_35px_rgba(16,185,129,0.18)]">
                    <CheckCircle2 size={38} className="text-emerald-300" />
                  </div>

                  <h3 className="text-2xl font-bold text-white">
                    WhatsApp Terbuka!
                  </h3>

                  <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-400">
                    Pesan sudah disiapkan di WhatsApp. Tinggal klik{" "}
                    <span className="font-semibold text-emerald-300">
                      Kirim
                    </span>{" "}
                    untuk mengirimkannya ke saya.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="space-y-2">
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

                    <div className="space-y-2">
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

                  <div className="space-y-2">
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

                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-slate-400">
                      Pesan
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Ceritakan proyek atau pertanyaan Anda..."
                      required
                      rows={6}
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_35px_rgba(16,185,129,0.28)] transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {status === "loading" ? (
                      <>
                        <span className="h-4 w-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                        Membuka WhatsApp...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Kirim via WhatsApp
                      </>
                    )}
                  </button>

                  <p className="text-center text-xs text-slate-600">
                    Pesan akan dikirim melalui WhatsApp Anda
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
