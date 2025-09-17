import React, { useState } from "react";
import DashboardLayout from "../../components/dashboard/DashboardLayout";
import apiBlog from "../../api/blogs/apiBlog";
import { useAuth } from "../../context/AuthContext";
import { toast } from "react-toastify";

function BlogCreation() {
  const { user } = useAuth();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [preview, setPreview] = useState(null);

  const categories = [
    "SEO",
    "Content Marketing",
    "Social Media",
    "Paid Ads",
    "Email Marketing",
    "Analytics",
    "Marketing Tools",
    "AI & Emerging Tech",
    "CRO & Websites",
    "Mobile Marketing",
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    if (!title || !content || !category) {
      setMessage("Please fill required fields");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("author", user?._id || "");
    formData.append("category", category);
    if (imageFile) formData.append("image", imageFile);

    try {
      setLoading(true);
      const res = await apiBlog.createBlog(formData);
      const successMsg = res?.message || "Blog created successfully";
      toast.success(successMsg);
      setMessage(successMsg);
      setTitle("");
      setContent("");
      setCategory("");
      setImageFile(null);
    } catch (err) {
      console.error(err);
      const serverErrors = err?.response?.data?.errors;
      if (Array.isArray(serverErrors) && serverErrors.length > 0) {
        const msg = serverErrors.map((s) => s.msg).join("; ");
        toast.error(msg);
        setMessage(msg);
      } else {
        const msg = err?.response?.data?.message || "Failed to create blog";
        toast.error(msg);
        setMessage(msg);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <DashboardLayout title="Create Blog Post">
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
              rows={6}
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
              {loading ? "Creating..." : "Create"}
            </button>
          </div>

          {message && <div className="text-sm text-gray-700">{message}</div>}
        </form>
      </div>
    </DashboardLayout>
  );
}

export default BlogCreation;
