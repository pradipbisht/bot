import React, { useState, useEffect, useCallback } from "react";
import { Search, TrendingUp, Users, Target } from "lucide-react";
import apiBlog from "../../api/Blogs/apiBlog";
import BlogHero from "./components/BlogHero";
import BlogSidebar from "./components/BlogSidebar";
import BlogGrid from "./components/BlogGrid";

function Blog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  return (
    <div className="min-h-screen">
      <BlogHero searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-12">
            <BlogSidebar
              categories={categories}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />

            <div className="lg:col-span-3 order-1 lg:order-2">
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

              <BlogGrid posts={blogs} loading={loading} error={error} />

              {blogs.length > 0 && (
                <div className="text-center mt-12">
                  <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-8 py-3 rounded-lg font-medium transition-colors duration-200">
                    Load More Articles
                  </button>
                </div>
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

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-teal-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                SEO Audit Checklist
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Complete 50-point SEO audit checklist to optimize your website
                for search engines.
              </p>
              <a
                href="/contact"
                className="text-teal-600 hover:text-teal-700 font-medium text-sm inline-flex items-center">
                Download Free
                <span className="ml-1">→</span>
              </a>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Social Media Calendar
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                30-day content calendar template with post ideas for all major
                social platforms.
              </p>
              <a
                href="/contact"
                className="text-teal-600 hover:text-teal-700 font-medium text-sm inline-flex items-center">
                Download Free
                <span className="ml-1">→</span>
              </a>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Paid Ads Campaign Guide
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Step-by-step guide to creating profitable Google Ads campaigns
                that convert.
              </p>
              <a
                href="/contact"
                className="text-teal-600 hover:text-teal-700 font-medium text-sm inline-flex items-center">
                Download Free
                <span className="ml-1">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Blog;
