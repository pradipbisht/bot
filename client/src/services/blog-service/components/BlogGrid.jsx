import React from "react";
import BlogCard from "./BlogCard";

export default function BlogGrid({ posts, loading, error }) {
  if (loading)
    return (
      <div className="col-span-2 text-center py-12">Loading articles...</div>
    );
  if (error)
    return (
      <div className="col-span-2 text-center py-12 text-red-600">{error}</div>
    );
  if (!posts || posts.length === 0)
    return <div className="text-center py-12">No articles found</div>;

  return (
    <div className="grid md:grid-cols-2 gap-8">
      {posts.map((p) => (
        <BlogCard key={p._id || p.id} post={p} />
      ))}
    </div>
  );
}
