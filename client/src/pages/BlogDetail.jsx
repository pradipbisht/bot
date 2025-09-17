import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import apiBlog from "../api/Blogs/apiBlog";

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
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm overflow-hidden">
        <img
          src={image}
          alt={post.title}
          className="w-full h-72 object-cover"
        />
        <div className="p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-3">
            {post.title}
          </h1>
          <div className="flex items-center text-sm text-gray-500 mb-6">
            <span className="mr-4">
              By <span className="text-gray-700">{authorName}</span>
            </span>
            <span>{new Date(date).toLocaleDateString()}</span>
          </div>

          <div
            className="prose max-w-none text-gray-800 mb-8"
            dangerouslySetInnerHTML={{
              __html: post.content || post.body || "",
            }}
          />

          <div className="flex items-center justify-between">
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
        </div>
      </div>
    </div>
  );
}

export default BlogDetail;
