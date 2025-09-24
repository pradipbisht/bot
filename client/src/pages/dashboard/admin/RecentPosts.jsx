import React from "react";
import { Edit } from "lucide-react";

export default function RecentPosts({ posts = [], onEdit, onDelete }) {
  if (!posts || posts.length === 0) return null;

  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold mb-4">Recent Posts</h3>
      <div className="space-y-3">
        {posts.map((p) => (
          <div
            key={p._id || p.id}
            className="flex items-center justify-between bg-gray-50 p-3 rounded">
            <div>
              <div className="font-medium">{p.title}</div>
              <div className="text-xs text-gray-500">
                {new Date(p.createdAt).toLocaleString()} — {p.author?.name}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => onEdit(p)}
                className="px-3 py-1 bg-white border rounded text-teal-600 inline-flex items-center gap-2">
                <Edit className="w-4 h-4" /> Edit
              </button>
              <button
                onClick={() => onDelete(p._id || p.id)}
                className="px-3 py-1 bg-white border rounded text-red-600">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

