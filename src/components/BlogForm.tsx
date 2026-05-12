import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { createBlogApi, getAdminBlog, updateBlogApi } from "../services/api";

export default function BlogForm() {
  const navigate = useNavigate();
  const { id } = useParams();

  const isEdit = Boolean(id);

  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [status, setStatus] = useState<"draft" | "publish">("draft");
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState("");

  useEffect(() => {
    if (!isEdit || !id) return;

    const loadBlog = async () => {
      try {
        const res = await getAdminBlog(id);
        const blog = res.data?.data;

        setTitle(blog?.title || "");
        setExcerpt(blog?.excerpt || "");
        setContent(blog?.content || "");
        setStatus(blog?.status || "draft");
        setPreview(blog?.image || blog?.cover || "");
      } catch (err) {
        console.error("Gagal mengambil detail blog:", err);
      }
    };

    loadBlog();
  }, [id, isEdit]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();

    formData.append("title", title);
    formData.append("excerpt", excerpt);
    formData.append("content", content);
    formData.append("status", status);

    if (image) {
      formData.append("image", image);
    }

    try {
      if (isEdit && id) {
        formData.append("_method", "PUT");
        await updateBlogApi(id, formData);
      } else {
        await createBlogApi(formData);
      }

      navigate("/admin/blog");
    } catch (err) {
      console.error("Gagal menyimpan blog:", err);
      alert("Gagal menyimpan artikel. Cek console / response backend.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-slate-950 px-4 py-24 text-white">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">
            {isEdit ? "Edit Artikel" : "Tambah Artikel"}
          </h1>

          <p className="mt-2 text-sm text-slate-400">
            Form untuk membuat dan mengubah artikel blog.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 rounded-[2rem] border border-white/10 bg-slate-950/70 p-6"
        >
          <div>
            <label className="mb-2 block text-sm text-slate-300">
              Judul Artikel
            </label>

            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none focus:border-emerald-400"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm text-slate-300">
              Excerpt / Ringkasan
            </label>

            <textarea
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              rows={3}
              required
              className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none focus:border-emerald-400"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm text-slate-300">
              Konten Artikel
            </label>

            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={10}
              required
              className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none focus:border-emerald-400"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm text-slate-300">Status</label>

            <select
              value={status}
              onChange={(e) => setStatus(e.target.value as "draft" | "publish")}
              className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none focus:border-emerald-400"
            >
              <option value="draft">Draft</option>
              <option value="publish">Publish</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm text-slate-300">
              Cover Artikel
            </label>

            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white"
            />

            {preview && (
              <img
                src={preview}
                alt="Preview"
                className="mt-4 h-52 w-full rounded-2xl object-cover"
              />
            )}
          </div>

          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={() => navigate("/admin/blog")}
              className="rounded-full border border-white/10 px-6 py-3 text-sm text-slate-300 hover:bg-white/5"
            >
              Batal
            </button>

            <button
              type="submit"
              disabled={loading}
              className="rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 px-6 py-3 text-sm font-semibold text-white disabled:opacity-60"
            >
              {loading
                ? "Menyimpan..."
                : isEdit
                  ? "Update Artikel"
                  : "Simpan Artikel"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
