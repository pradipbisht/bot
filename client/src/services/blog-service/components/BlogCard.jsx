import React from "react";
import { Calendar, User, ArrowRight, Edit, Trash } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import apiBlog from "../../../api/blogs/apiBlog";
import { useAuth } from "../../../context/AuthContext";

export default function BlogCard({ post }) {
  const id = post._id || post.id;
  const image =
    post.image || "https://via.placeholder.com/800x400?text=No+Image";
  const excerpt =
    (post.content || "").slice(0, 200) +
    (post.content && post.content.length > 200 ? "..." : "");
  const authorName = post.author?.name || post.author || "Unknown";
  const date = post.createdAt || post.date || new Date().toISOString();
  const { user } = useAuth();
  const navigate = useNavigate();

  const isAdmin = user?.role === "admin";

  const handleEdit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigate(`/blog/edit/${id}`);
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    const ok = window.confirm(
      "Delete this article? This action cannot be undone."
    );
    if (!ok) return;
    try {
      await apiBlog.deleteBlog(id);
      toast.success("Article deleted");
      navigate("/blog");
    } catch (err) {
      console.error(err);
      toast.error(err?.response?.data?.message || "Failed to delete article");
    }
  };

  return (
    <Link
      to={`/blog/${id}`}
      className="block bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border border-gray-100 text-inherit focus:outline-none focus:ring-4 focus:ring-teal-200">
      <div className="relative">
        <img
          src={image}
          alt={post.title}
          className="w-full h-40 md:h-48 lg:h-56 object-cover"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-teal-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
            {post.category}
          </span>
        </div>

        {isAdmin && (
          <div className="absolute top-4 right-4 flex space-x-2">
            <button
              onClick={handleEdit}
              title="Edit article"
              className="bg-white p-2 rounded shadow text-teal-600 hover:bg-teal-50">
              <Edit size={16} />
            </button>
            <button
              onClick={handleDelete}
              title="Delete article"
              className="bg-white p-2 rounded shadow text-red-600 hover:bg-red-50">
              <Trash size={16} />
            </button>
          </div>
        )}
      </div>
      <div className="p-4 md:p-6">
        <h2 className="text-lg md:text-xl font-semibold text-gray-900 mb-2 md:mb-3 line-clamp-2 hover:text-teal-600 transition-colors">
          {post.title}
        </h2>
        <p className="text-gray-600 text-sm md:text-base mb-4 line-clamp-3">
          {excerpt}
        </p>
        <div className="flex items-center justify-between text-xs md:text-sm text-gray-500 mb-4">
          <div className="flex items-center">
            <User size={14} className="mr-1" />
            <span>{authorName}</span>
          </div>
          <div className="flex items-center">
            <Calendar size={14} className="mr-1" />
            <span>{new Date(date).toLocaleDateString()}</span>
          </div>
        </div>
        <div className="text-teal-600 font-medium text-sm inline-flex items-center">
          Read More
          <ArrowRight size={14} className="ml-1" />
        </div>
      </div>
    </Link>
  );
}
