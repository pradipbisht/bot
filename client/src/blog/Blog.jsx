import React, { useState, useEffect, useCallback } from "react";
import { Search, TrendingUp, Users, Target } from "lucide-react";
import apiBlog from "../api/blogs/apiBlog";
// import BlogHero from "./components/BlogHero";
import BlogSidebar from "./components/BlogSidebar";
import BlogGrid from "./components/BlogGrid";
import BlogDetail from "./BlogDetail";
import AnimatedBackground from "../components/test/blot/BoltAnimation";

function Blog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedBlogId, setSelectedBlogId] = useState(null);

  const categories = [
    "all",
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

  const fetchBlogs = useCallback(async (opts = {}) => {
    setLoading(true);
    try {
      const resp = await apiBlog.listBlogs(opts);
      const posts = resp?.data || [];
      setBlogs(posts);
      setError(null);
    } catch (err) {
      console.error("Failed to load blogs", err);
      setError(err?.response?.data?.message || "Failed to load blogs");
      setBlogs([]);
    } finally {
      setLoading(false);
    }
  }, []);

  // debounce search
  useEffect(() => {
    const t = setTimeout(() => {
      fetchBlogs({ category: selectedCategory, q: searchTerm });
    }, 350);
    return () => clearTimeout(t);
  }, [selectedCategory, searchTerm, fetchBlogs]);

  useEffect(() => {
    // initial load
    fetchBlogs({ category: selectedCategory });
  }, [fetchBlogs]);

  // Handler for opening blog detail
  const handleOpenDetail = (id) => setSelectedBlogId(id);
  const handleCloseDetail = () => setSelectedBlogId(null);

  return (
    <div className="min-h-screen">
      {/* <BlogHero searchTerm={searchTerm} setSearchTerm={setSearchTerm} /> */}

      <section className="py-10">
        <AnimatedBackground />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-12">
            <BlogSidebar
              categories={categories}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />

            <div className="lg:col-span-3 order-1 lg:order-2 relative">
              {(searchTerm || selectedCategory !== "all") && (
                <div className="mb-8 flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <span className="text-gray-600">
                      Showing {blogs.length} results
                    </span>
                    {searchTerm && (
                      <span className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-sm">
                        Search: "{searchTerm}"
                      </span>
                    )}
                    {selectedCategory !== "all" && (
                      <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                        Category: {selectedCategory}
                      </span>
                    )}
                  </div>
                  <button
                    onClick={() => {
                      setSearchTerm("");
                      setSelectedCategory("all");
                      fetchBlogs({ category: "all" });
                    }}
                    className="text-teal-600 hover:text-teal-700 text-sm font-medium">
                    Clear all
                  </button>
                </div>
              )}

              {selectedBlogId ? (
                <div className="relative">
                  <button
                    className="mb-6 px-4 py-2 bg-teal-100 text-teal-700 rounded hover:bg-teal-200 font-medium"
                    onClick={handleCloseDetail}>
                    ← Back to Articles
                  </button>
                  <BlogDetail id={selectedBlogId} />
                </div>
              ) : (
                <>
                  <BlogGrid
                    posts={blogs}
                    loading={loading}
                    error={error}
                    onPostClick={handleOpenDetail}
                  />
                  {blogs.length > 0 && (
                    <div className="text-center mt-12">
                      <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-8 py-3 rounded-lg font-medium">
                        Load More Articles
                      </button>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Featured Resources
            </h2>
            <p className="text-xl text-gray-600">
              Essential tools and guides for digital marketers
            </p>
          </div>
          {/* ...existing code... */}
        </div>
      </section>
    </div>
  );
}

export default Blog;

