import { supabase } from "../lib/supabase";

export type BlogStatus = "draft" | "published";

export type BlogFormPayload = {
  title: string;
  slug: string;
  excerpt?: string;
  content: string;
  status: BlogStatus;
  cover_url?: string | null;
  published_at?: string | null;
};

export const getBlogs = async (params?: { status?: BlogStatus }) => {
  let query = supabase
    .from("blogs")
    .select("*")
    .order("created_at", { ascending: false });

  if (params?.status) {
    query = query.eq("status", params.status);
  }

  return query;
};

export const getBlog = async (slug: string) => {
  return supabase
    .from("blogs")
    .select("id,title,slug,excerpt,content,cover_url,status,created_at")
    .eq("slug", slug)
    .eq("status", "published")
    .single();
};

export const getFeaturedBlogs = async () => {
  return supabase
    .from("blogs")
    .select("*")
    .eq("status", "published")
    .order("views", { ascending: false })
    .limit(3);
};

export const getAdminBlogs = async (params?: { status?: BlogStatus }) => {
  let query = supabase
    .from("blogs")
    .select("*")
    .order("created_at", { ascending: false });

  if (params?.status) {
    query = query.eq("status", params.status);
  }

  return query;
};

export const getAdminBlog = async (id: number | string) => {
  return supabase.from("blogs").select("*").eq("id", id).single();
};

export const createBlogApi = async (data: BlogFormPayload) => {
  return supabase.from("blogs").insert(data).select().single();
};

export const updateBlogApi = async (
  id: number | string,
  data: Partial<BlogFormPayload>,
) => {
  return supabase
    .from("blogs")
    .update({
      ...data,
      updated_at: new Date().toISOString(),
    })
    .eq("id", id)
    .select()
    .single();
};

export const deleteBlogApi = async (id: number | string) => {
  return supabase.from("blogs").delete().eq("id", id);
};

export const uploadBlogCover = async (file: File) => {
  const fileExt = file.name.split(".").pop();

  const fileName = `${Date.now()}-${Math.random()
    .toString(36)
    .substring(2)}.${fileExt}`;

  const filePath = `covers/${fileName}`;

  const { data: uploadData, error } = await supabase.storage
    .from("blog-covers")
    .upload(filePath, file);

  console.log("UPLOAD DATA:", uploadData);
  console.log("UPLOAD ERROR:", error);

  if (error) {
    throw error;
  }

  const { data } = supabase.storage.from("blog-covers").getPublicUrl(filePath);

  console.log("PUBLIC URL:", data.publicUrl);

  return data.publicUrl;
};
