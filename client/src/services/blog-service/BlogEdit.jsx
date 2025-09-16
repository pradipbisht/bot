import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import DashboardLayout from "../../components/dashboard/DashboardLayout";
import apiBlog from "../../api/blogs/apiBlog";
import { useAuth } from "../../context/AuthContext";
import { toast } from "react-toastify";

export default function BlogEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [post, setPost] = useState(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(true);

  const categories = [
    "SEO",
    "Social Media",
    "PPC",
    "Content Marketing",
    "Email Marketing",
    "AI Solutions",
  ];

  useEffect(() => {
    let mounted = true;
    const load = async () => {
      setLoading(true);
      try {
        const resp = await apiBlog.getBlog(id);
        const data = resp?.data || resp?.blog || null;
        if (mounted && data) {
          setPost(data);
          setTitle(data.title || "");
          setContent(data.content || data.body || "");
          setCategory(data.category || "");
        }
      } catch (err) {
        console.error(err);
        toast.error("Failed to load article");
      } finally {
        if (mounted) setLoading(false);
      }
    };
    load();
    return () => (mounted = false);
  }, [id]);

  if (loading) return <div className="p-6">Loading...</div>;
  if (!post) return <div className="p-6">Article not found</div>;

  if (user?.role !== "admin") {
    return (
      <div className="p-6">
        You do not have permission to edit this article.
      </div>
    );
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !content || !category) {
      toast.error("Please fill required fields");
      return;
    }
    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("category", category);
    if (imageFile) formData.append("image", imageFile);

    try {
      setLoading(true);
      await apiBlog.updateBlog(id, formData);
      toast.success("Article updated");
      navigate(`/blog/${id}`);
    } catch (err) {
      console.error(err);
      toast.error(err?.response?.data?.message || "Failed to update article");
    } finally {
      setLoading(false);
    }
  };

  return (
    <DashboardLayout title="Edit Article">
      <div className="bg-white shadow rounded p-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Title
            </label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-1 block w-full border rounded p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Content
            </label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={8}
              className="mt-1 block w-full border rounded p-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Category
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="mt-1 block w-full border rounded p-2 focus:outline-none focus:ring-2 focus:ring-teal-500">
              <option value="">Select a category</option>
              {categories.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Image (optional)
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                const f = e.target.files[0];
                setImageFile(f);
                if (f) setPreview(URL.createObjectURL(f));
                else setPreview(null);
              }}
              className="mt-1"
            />
            {preview && (
              <div className="mt-3">
                <img
                  src={preview}
                  alt="preview"
                  className="w-full max-h-64 object-cover rounded"
                />
              </div>
            )}
          </div>

          <div>
            <button
              type="submit"
              disabled={loading}
              className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-teal-500">
              {loading ? "Updating..." : "Update Article"}
            </button>
          </div>
        </form>
      </div>
    </DashboardLayout>
  );
}
