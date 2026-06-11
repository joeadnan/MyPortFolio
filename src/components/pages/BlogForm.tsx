import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  createBlogApi,
  getAdminBlog,
  updateBlogApi,
  uploadBlogCover,
} from "../../services/api";

type BlogStatus = "draft" | "published";

function makeSlug(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export default function BlogForm() {
  const navigate = useNavigate();
  const { id } = useParams();

  const isEdit = Boolean(id);

  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(false);

  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [status, setStatus] = useState<BlogStatus>("draft");
  const [image, setImage] = useState<File | null>(null);
  const [coverUrl, setCoverUrl] = useState("");
  const [preview, setPreview] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (!isEdit || !id) return;

    const loadBlog = async () => {
      setFetching(true);
      setError("");

      try {
        const res = await getAdminBlog(id);

        if (res.error) {
          throw res.error;
        }

        const blog = res.data;

        setTitle(blog?.title || "");
        setSlug(blog?.slug || "");
        setExcerpt(blog?.excerpt || "");
        setContent(blog?.content || "");
        setStatus(blog?.status === "published" ? "published" : "draft");

        const currentCover = blog?.cover_url || "";
        setCoverUrl(currentCover);
        setPreview(currentCover);
      } catch (err) {
        console.error("Gagal mengambil detail blog:", err);
        setError("Gagal mengambil detail artikel.");
      } finally {
        setFetching(false);
      }
    };

    loadBlog();
  }, [id, isEdit]);

  useEffect(() => {
    return () => {
      if (preview.startsWith("blob:")) {
        URL.revokeObjectURL(preview);
      }
    };
  }, [preview]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    const allowedTypes = ["image/jpeg", "image/png", "image/webp"];
    const maxSize = 2 * 1024 * 1024;

    if (!allowedTypes.includes(file.type)) {
      setError("Format gambar harus JPG, PNG, atau WEBP.");
      return;
    }

    if (file.size > maxSize) {
      setError("Ukuran gambar maksimal 2MB.");
      return;
    }

    if (preview.startsWith("blob:")) {
      URL.revokeObjectURL(preview);
    }

    setError("");
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleTitleChange = (value: string) => {
    setTitle(value);

    if (!isEdit || !slug) {
      setSlug(makeSlug(value));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const finalTitle = title.trim();
    const finalSlug = slug.trim() || makeSlug(finalTitle);

    if (!finalTitle) {
      setError("Judul artikel wajib diisi.");
      return;
    }

    if (!finalSlug) {
      setError("Slug artikel wajib diisi.");
      return;
    }

    if (!excerpt.trim()) {
      setError("Ringkasan artikel wajib diisi.");
      return;
    }

    if (!content.trim()) {
      setError("Konten artikel wajib diisi.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      let finalCoverUrl = coverUrl;
      console.log("finalCoverUrl", finalCoverUrl);

      if (image) {
        finalCoverUrl = await uploadBlogCover(image);
      }
      const payload = {
        title: finalTitle,
        slug: finalSlug,
        excerpt: excerpt.trim(),
        content: content.trim(),
        status,
        cover_url: finalCoverUrl || null,
      };
      console.log("payload:", payload);

      const res =
        isEdit && id
          ? await updateBlogApi(id, payload)
          : await createBlogApi(payload);

      if (res.error) {
        throw res.error;
      }

      navigate("/admin/blog");
    } catch (err) {
      console.error("Gagal menyimpan blog:", err);
      setError(
        "Gagal menyimpan artikel. Cek console browser untuk detail error.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-slate-950 px-4 py-24 text-white">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 flex items-start justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold">
              {isEdit ? "Edit Artikel" : "Tambah Artikel"}
            </h1>

            <p className="mt-2 text-sm text-slate-400">
              Form untuk membuat dan mengubah artikel blog.
            </p>
          </div>

          <button
            type="button"
            onClick={() => navigate("/admin/blog")}
            className="rounded-full border border-white/10 px-5 py-2 text-sm text-slate-300 hover:bg-white/5"
          >
            Kembali
          </button>
        </div>

        {error && (
          <div className="mb-5 rounded-2xl border border-red-400/20 bg-red-400/10 px-4 py-3 text-sm text-red-300">
            {error}
          </div>
        )}

        {fetching ? (
          <div className="rounded-[2rem] border border-white/10 bg-slate-950/70 p-6 text-slate-400">
            Memuat detail artikel...
          </div>
        ) : (
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
                onChange={(e) => handleTitleChange(e.target.value)}
                required
                className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none focus:border-emerald-400"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-slate-300">
                Slug URL
              </label>

              <input
                type="text"
                value={slug}
                onChange={(e) => setSlug(makeSlug(e.target.value))}
                required
                placeholder="contoh: cara-cepat-adaptasi-dengan-ai"
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
              <label className="mb-2 block text-sm text-slate-300">
                Status
              </label>

              <select
                value={status}
                onChange={(e) => setStatus(e.target.value as BlogStatus)}
                className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none focus:border-emerald-400"
              >
                <option value="draft">Draft</option>
                <option value="published">Published</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm text-slate-300">
                Cover Artikel
              </label>

              <input
                type="file"
                accept="image/jpeg,image/png,image/webp"
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

              <p className="mt-2 text-xs text-slate-500">
                Format: JPG, PNG, WEBP. Maksimal 2MB.
              </p>
            </div>

            <div className="flex justify-end gap-3 border-t border-white/10 pt-6">
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
                className="rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 px-6 py-3 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading
                  ? "Menyimpan..."
                  : isEdit
                    ? "Update Artikel"
                    : "Simpan Artikel"}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
