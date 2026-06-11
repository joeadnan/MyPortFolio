import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Lock, Mail } from "lucide-react";
import { loginAdmin } from "../../services/auth";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      const { error } = await loginAdmin(email, password);

      if (error) throw error;

      navigate("/admin/blog");
    } catch (err) {
      console.error(err);
      setError("Email atau password salah.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="min-h-screen bg-slate-950 px-4 py-20 text-white">
      <div className="mx-auto flex min-h-[70vh] max-w-md items-center">
        <div className="w-full rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 shadow-2xl">
          <div className="mb-8 text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500">
              <Lock size={24} />
            </div>

            <h1 className="text-3xl font-bold">Admin Login</h1>
            <p className="mt-2 text-sm text-slate-400">
              Masuk untuk mengelola artikel blog.
            </p>
          </div>

          {error && (
            <div className="mb-5 rounded-2xl border border-red-400/20 bg-red-400/10 px-4 py-3 text-sm text-red-300">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-900 px-4">
              <Mail size={18} className="text-slate-500" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email admin"
                className="h-12 w-full bg-transparent text-sm outline-none placeholder:text-slate-500"
              />
            </div>

            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-900 px-4">
              <Lock size={18} className="text-slate-500" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="h-12 w-full bg-transparent text-sm outline-none placeholder:text-slate-500"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="h-12 w-full rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Memproses..." : "Login"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
