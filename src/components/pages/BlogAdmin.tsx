import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Edit, Plus, RefreshCw, Search, Trash2 } from "lucide-react";
import { deleteBlogApi, getAdminBlogs } from "../../services/api";

type BlogStatus = "draft" | "published";

type BlogPost = {
  id: number;
  title?: string;
  excerpt?: string;
  cover?: string;
  cover_url?: string;
  status?: BlogStatus;
  views?: number;
};

type FilterStatus = "all" | BlogStatus;

export default function BlogAdmin() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState<number | null>(null);
  const [status, setStatus] = useState<FilterStatus>("all");
  const [keyword, setKeyword] = useState("");
  const [error, setError] = useState("");

  async function loadPosts() {
    setLoading(true);
    setError("");

    try {
      const params = status === "all" ? undefined : { status };
      const res = await getAdminBlogs(params);
      // console.log("========== BLOG DEBUG ==========");
      // console.log("params:", params);
      // console.log("status:", status);
      // console.log("data:", res.data);
      // console.log("error:", res.error);
      // console.log("===============================");

      if (res.error) {
        throw res.error;
      }

      setPosts(Array.isArray(res.data) ? res.data : []);
    } catch (err) {
      console.error("Gagal mengambil artikel:", err);
      setError("Gagal mengambil data artikel.");
      setPosts([]);
    } finally {
      setLoading(false);
    }
  }

  async function handleDelete(id: number) {
    const confirmDelete = window.confirm(
      "Yakin ingin menghapus artikel ini? Data yang dihapus tidak bisa dikembalikan.",
    );

    if (!confirmDelete) return;

    setDeletingId(id);
    setError("");

    try {
      const res = await deleteBlogApi(id);

      if (res.error) {
        throw res.error;
      }

      setPosts((prev) => prev.filter((post) => post.id !== id));
    } catch (err) {
      console.error("Gagal menghapus artikel:", err);
      setError("Gagal menghapus artikel.");
    } finally {
      setDeletingId(null);
    }
  }

  useEffect(() => {
    loadPosts();
  }, [status]);

  const filteredPosts = useMemo(() => {
    const q = keyword.trim().toLowerCase();

    if (!q) return posts;

    return posts.filter((post) => {
      const title = post.title?.toLowerCase() || "";
      const excerpt = post.excerpt?.toLowerCase() || "";

      return title.includes(q) || excerpt.includes(q);
    });
  }, [posts, keyword]);
  // console.log("posts:", posts);
  // console.log("filteredPosts:", filteredPosts);
  return (
    <section className="min-h-screen bg-slate-950 px-4 py-24 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold">Admin Blog</h1>
            <p className="mt-2 text-sm text-slate-400">
              Kelola artikel blog portfolio.
            </p>
          </div>

          <Link
            to="/admin/blog/create"
            className="inline-flex w-fit items-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 px-5 py-3 text-sm font-semibold text-white"
          >
            <Plus size={16} />
            Tambah Artikel
          </Link>
        </div>

        <div className="mb-5 grid gap-3 md:grid-cols-[1fr_180px_120px]">
          <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4">
            <Search size={17} className="text-slate-500" />
            <input
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              placeholder="Cari artikel..."
              className="h-12 w-full bg-transparent text-sm text-white outline-none placeholder:text-slate-500"
            />
          </div>

          <select
            value={status}
            onChange={(e) => setStatus(e.target.value as FilterStatus)}
            className="h-12 rounded-2xl border border-white/10 bg-slate-900 px-4 text-sm text-white outline-none"
          >
            <option value="all">Semua Status</option>
            <option value="published">Published</option>
            <option value="draft">Draft</option>
          </select>

          <button
            type="button"
            onClick={loadPosts}
            disabled={loading}
            className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl border border-white/10 text-sm text-slate-300 hover:bg-white/[0.04] disabled:cursor-not-allowed disabled:opacity-50"
          >
            <RefreshCw size={16} className={loading ? "animate-spin" : ""} />
            Refresh
          </button>
        </div>

        {error && (
          <div className="mb-5 rounded-2xl border border-red-400/20 bg-red-400/10 px-4 py-3 text-sm text-red-300">
            {error}
          </div>
        )}

        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/70">
          {loading ? (
            <p className="p-6 text-slate-400">Memuat data...</p>
          ) : filteredPosts.length === 0 ? (
            <p className="p-6 text-slate-400">Belum ada artikel.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full min-w-[760px] text-left text-sm">
                <thead className="border-b border-white/10 text-slate-400">
                  <tr>
                    <th className="p-4">Artikel</th>
                    <th className="p-4">Status</th>
                    <th className="p-4">Views</th>
                    <th className="p-4 text-right">Aksi</th>
                  </tr>
                </thead>

                <tbody>
                  {filteredPosts.map((post) => {
                    const coverImage = post.cover_url || post.cover;

                    return (
                      <tr
                        key={post.id}
                        className="border-b border-white/5 hover:bg-white/[0.03]"
                      >
                        <td className="p-4">
                          <div className="flex items-center gap-4">
                            {coverImage ? (
                              <img
                                src={coverImage}
                                alt={post.title || "Blog"}
                                className="h-14 w-20 rounded-xl object-cover"
                              />
                            ) : (
                              <div className="h-14 w-20 rounded-xl bg-slate-800" />
                            )}

                            <div>
                              <Link
                                to={`/admin/blog/edit/${post.id}`}
                                className="font-semibold text-white hover:text-emerald-300"
                              >
                                {post.title || "-"}
                              </Link>
                              <p className="line-clamp-1 text-xs text-slate-500">
                                {post.excerpt || "-"}
                              </p>
                            </div>
                          </div>
                        </td>

                        <td className="p-4">
                          <span
                            className={`rounded-full px-3 py-1 text-xs font-semibold ${
                              post.status === "published"
                                ? "bg-emerald-400/10 text-emerald-300"
                                : "bg-yellow-400/10 text-yellow-300"
                            }`}
                          >
                            {post.status === "published"
                              ? "Published"
                              : "Draft"}
                          </span>
                        </td>

                        <td className="p-4 text-slate-400">
                          {post.views ?? 0}
                        </td>

                        <td className="p-4">
                          <div className="flex justify-end gap-2">
                            <Link
                              to={`/admin/blog/edit/${post.id}`}
                              className="rounded-xl border border-white/10 p-2 text-slate-400 hover:text-emerald-300"
                              title="Edit"
                            >
                              <Edit size={16} />
                            </Link>

                            <button
                              type="button"
                              disabled={deletingId === post.id}
                              onClick={() => handleDelete(post.id)}
                              className="rounded-xl border border-white/10 p-2 text-slate-400 hover:text-red-400 disabled:cursor-not-allowed disabled:opacity-50"
                              title="Hapus"
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
