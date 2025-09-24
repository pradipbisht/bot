import React, { useEffect, useState } from "react";
import { X } from "lucide-react";
import { toast } from "react-toastify";
import apiBlog from "../../../api/blogs/apiBlog";

export default function EditModal({ post, onClose, onSaved }) {
  const [title, setTitle] = useState(post?.title || "");
  const [content, setContent] = useState(post?.content || post?.body || "");
  const [category, setCategory] = useState(post?.category || "");
  const [imageFile, setImageFile] = useState(null);
  const [preview, setPreview] = useState(post?.image || null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTitle(post?.title || "");
    setContent(post?.content || post?.body || "");
    setCategory(post?.category || "");
    setPreview(post?.image || null);
    setImageFile(null);
  }, [post]);

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
      const resp = await apiBlog.updateBlog(post._id || post.id, formData);
      const updated = resp?.data || resp?.data?.data || resp;
      toast.success("Article updated");
      onSaved(updated.data || updated || resp.data || resp);
    } catch (err) {
      console.error(err);
      toast.error(err?.response?.data?.message || "Failed to update article");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-3xl p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Edit Article</h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700">
            <X />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm text-gray-600">Title</label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-1 block w-full border rounded p-2"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600">Content</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={6}
              className="mt-1 block w-full border rounded p-2"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600">Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="mt-1 block w-full border rounded p-2">
              <option value="">Select a category</option>
              {categories.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm text-gray-600">
              Image (optional)
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                const f = e.target.files[0];
                setImageFile(f);
                setPreview(f ? URL.createObjectURL(f) : null);
              }}
              className="mt-1"
            />
            {preview && (
              <div className="mt-3">
                <img
                  src={preview}
                  alt="preview"
                  className="w-full max-h-60 object-cover rounded"
                />
              </div>
            )}
          </div>

          <div className="flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-100 rounded">
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="px-4 py-2 bg-teal-600 text-white rounded">
              {loading ? "Updating..." : "Update"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

