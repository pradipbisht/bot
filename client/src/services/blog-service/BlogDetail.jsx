import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import apiBlog from "../../api/blogs/apiBlog";
import { useAuth } from "../../context/AuthContext";
import { toast } from "react-toastify";

function BlogDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;
    const load = async () => {
      setLoading(true);
      try {
        const resp = await apiBlog.getBlog(id);
        const data = resp?.data || resp?.blog || null;
        if (mounted) setPost(data);
      } catch (err) {
        console.error("Failed to load blog", err);
        if (mounted)
          setError(err?.response?.data?.message || "Failed to load blog");
      } finally {
        if (mounted) setLoading(false);
      }
    };
    load();
    return () => (mounted = false);
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-gray-600">Loading article...</div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">{error || "Article not found"}</p>
          <Link to="/blog" className="text-teal-600 hover:text-teal-700">
            Back to articles
          </Link>
        </div>
      </div>
    );
  }

  const image =
    post.image || "https://via.placeholder.com/1200x600?text=No+Image";
  const authorName = post.author?.name || post.author || "Unknown";
  const date = post.createdAt || post.date || new Date().toISOString();

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl md:max-w-5xl mx-auto bg-white rounded-lg shadow-sm overflow-hidden">
        <img
          src={image}
          alt={post.title}
          className="w-full h-56 md:h-72 lg:h-96 object-cover"
        />
        <div className="p-6 md:p-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            {post.title}
          </h1>
          <div className="flex flex-col md:flex-row md:items-center text-sm md:text-sm text-gray-500 mb-6 md:mb-8">
            <div className="mr-0 md:mr-6 mb-2 md:mb-0">
              By <span className="text-gray-700">{authorName}</span>
            </div>
            <div>{new Date(date).toLocaleDateString()}</div>
          </div>

          <div
            className="prose max-w-none text-gray-800 mb-8"
            dangerouslySetInnerHTML={{
              __html: post.content || post.body || "",
            }}
          />

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/blog" className="text-teal-600 hover:text-teal-700">
                ← Back to articles
              </Link>
              <div className="text-sm text-gray-500">
                Category:{" "}
                <span className="text-gray-700">
                  {post.category || "General"}
                </span>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              {/** admin controls */}
              <AdminControls postId={post._id || post.id} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AdminControls({ postId }) {
  const { user } = useAuth();
  const navigate = useNavigate();

  const isAdmin = user?.role === "admin";
  if (!isAdmin) return null;

  const handleEdit = (e) => {
    e.preventDefault();
    navigate(`/blog/edit/${postId}`);
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    const ok = window.confirm(
      "Delete this article? This action cannot be undone."
    );
    if (!ok) return;
    try {
      await apiBlog.deleteBlog(postId);
      toast.success("Article deleted");
      navigate("/blog");
    } catch (err) {
      console.error(err);
      toast.error(err?.response?.data?.message || "Failed to delete article");
    }
  };

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={handleEdit}
        className="px-3 py-1 bg-white border rounded text-teal-600 hover:bg-teal-50">
        Edit
      </button>
      <button
        onClick={handleDelete}
        className="px-3 py-1 bg-white border rounded text-red-600 hover:bg-red-50">
        Delete
      </button>
    </div>
  );
}

export default BlogDetail;
