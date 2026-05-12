import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Edit, Plus, Trash2 } from "lucide-react";
import { deleteBlogApi, getAdminBlogs } from "../services/api";

type BlogPost = {
  id: number;
  title?: string;
  excerpt?: string;
  cover?: string;
  status?: "draft" | "published";
  views?: number;
};

export default function BlogAdmin() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  const loadPosts = async () => {
    setLoading(true);

    try {
      const res = await getAdminBlogs({ status: "all" });

      const result = res.data?.data;

      const list = Array.isArray(result)
        ? result
        : Array.isArray(result?.data)
          ? result.data
          : [];

      setPosts(list);
    } catch (err) {
      console.error("Gagal mengambil artikel:", err);
      setPosts([]);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    if (!window.confirm("Yakin ingin menghapus artikel ini?")) return;

    try {
      await deleteBlogApi(id);
      loadPosts();
    } catch (err) {
      console.error("Gagal menghapus artikel:", err);
    }
  };

  useEffect(() => {
    loadPosts();
  }, []);

  return (
    <section className="min-h-screen bg-slate-950 px-4 py-24 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Admin Blog</h1>
            <p className="mt-2 text-sm text-slate-400">
              Kelola artikel blog portfolio.
            </p>
          </div>

          <Link
            to="/admin/blog/create"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 px-5 py-3 text-sm font-semibold"
          >
            <Plus size={16} />
            Tambah Artikel
          </Link>
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/70">
          {loading ? (
            <p className="p-6 text-slate-400">Memuat data...</p>
          ) : posts.length === 0 ? (
            <p className="p-6 text-slate-400">Belum ada artikel.</p>
          ) : (
            <table className="w-full text-left text-sm">
              <thead className="border-b border-white/10 text-slate-400">
                <tr>
                  <th className="p-4">Artikel</th>
                  <th className="p-4">Status</th>
                  <th className="p-4">Views</th>
                  <th className="p-4 text-right">Aksi</th>
                </tr>
              </thead>

              <tbody>
                {posts.map((post) => (
                  <tr
                    key={post.id}
                    className="border-b border-white/5 hover:bg-white/[0.03]"
                  >
                    <td className="p-4">
                      <div className="flex items-center gap-4">
                        {post.cover ? (
                          <img
                            src={post.cover}
                            alt={post.title || "Blog"}
                            className="h-14 w-20 rounded-xl object-cover"
                          />
                        ) : (
                          <div className="h-14 w-20 rounded-xl bg-slate-800" />
                        )}

                        <div>
                          <p className="font-semibold text-white">
                            {post.title || "-"}
                          </p>
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
                        {post.status || "draft"}
                      </span>
                    </td>

                    <td className="p-4 text-slate-400">{post.views ?? 0}</td>

                    <td className="p-4">
                      <div className="flex justify-end gap-2">
                        <Link
                          to={`/admin/blog/edit/${post.id}`}
                          className="rounded-xl border border-white/10 p-2 text-slate-400 hover:text-emerald-300"
                        >
                          <Edit size={16} />
                        </Link>

                        <button
                          type="button"
                          onClick={() => handleDelete(post.id)}
                          className="rounded-xl border border-white/10 p-2 text-slate-400 hover:text-red-400"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </section>
  );
}
