import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  Calendar,
  User,
  ArrowRight,
  TrendingUp,
  Users,
  Target,
} from "lucide-react";
import apiBlog from "../api/Blogs/apiBlog";

function Blog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;
    const fetchBlogs = async () => {
      setLoading(true);
      try {
        const resp = await apiBlog.listBlogs();
        // resp is server body: { success, message, data }
        const posts = resp?.data || [];
        if (mounted) setBlogs(posts);
      } catch (err) {
        console.error("Failed to load blogs", err);
        if (mounted)
          setError(err?.response?.data?.message || "Failed to load blogs");
      } finally {
        if (mounted) setLoading(false);
      }
    };
    fetchBlogs();
    return () => (mounted = false);
  }, []);
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

  // Filter posts based on search and category
  const filteredPosts = blogs.filter((post) => {
    const title = (post.title || "").toLowerCase();
    const excerpt = (post.content || "").slice(0, 300).toLowerCase();
    const matchesSearch =
      title.includes(searchTerm.toLowerCase()) ||
      excerpt.includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section - Teal background with search bar */}
      <section className="bg-gradient-to-br from-teal-600 to-blue-700 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Digital Marketing Blog</h1>
          <p className="text-xl text-teal-100 mb-8">
            Stay ahead with the latest digital marketing strategies, tips, and
            industry insights
          </p>

          {/* Prominent Search Bar */}
          <div className="relative max-w-2xl mx-auto">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-6 w-6 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search articles, tips, and strategies..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 text-lg rounded-xl border-0 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-teal-600"
            />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Sidebar - Lead magnet and categories */}
            <div className="lg:col-span-1 order-2 lg:order-1">
              <div className="sticky top-8 space-y-8">
                {/* Lead Magnet Signup Form */}
                <div className="bg-gradient-to-br from-teal-600 to-blue-700 text-white rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl font-semibold mb-3">
                    Free Marketing Toolkit
                  </h3>
                  <p className="text-teal-100 text-sm mb-4">
                    Get our complete digital marketing toolkit including
                    templates, checklists, and strategies used by top agencies.
                  </p>
                  <form className="space-y-3">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-teal-600"
                    />
                    <button
                      type="submit"
                      className="w-full bg-white text-teal-600 hover:bg-gray-100 font-semibold py-3 rounded-lg transition-colors duration-200">
                      Download Free
                    </button>
                  </form>
                  <p className="text-xs text-teal-200 mt-3">
                    No spam. Unsubscribe at any time.
                  </p>
                </div>

                {/* Category Filters */}
                <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Categories
                  </h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`block w-full text-left px-4 py-2 rounded-lg transition-colors duration-200 ${
                          selectedCategory === category
                            ? "bg-teal-100 text-teal-700 font-medium"
                            : "text-gray-600 hover:bg-gray-100"
                        }`}>
                        {category === "all" ? "All Posts" : category}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Popular Topics */}
                <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Popular Topics
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-sm">
                      SEO
                    </span>
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                      Social Media
                    </span>
                    <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">
                      Paid Ads
                    </span>
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                      Analytics
                    </span>
                    <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm">
                      AI & Emerging Tech
                    </span>
                    <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm">
                      Email Marketing
                    </span>
                  </div>
                </div>

                {/* Newsletter Signup */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Weekly Newsletter
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Get the latest digital marketing insights delivered to your
                    inbox every Tuesday.
                  </p>
                  <form>
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent mb-3"
                    />
                    <button
                      type="submit"
                      className="w-full bg-teal-600 hover:bg-teal-700 text-white font-medium py-2 rounded-lg transition-colors duration-200">
                      Subscribe
                    </button>
                  </form>
                </div>
              </div>
            </div>

            {/* Article Grid - Main content */}
            <div className="lg:col-span-3 order-1 lg:order-2">
              {/* Active Filters */}
              {(searchTerm || selectedCategory !== "all") && (
                <div className="mb-8 flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <span className="text-gray-600">
                      Showing {filteredPosts.length} results
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
                    }}
                    className="text-teal-600 hover:text-teal-700 text-sm font-medium">
                    Clear all
                  </button>
                </div>
              )}

              {/* Article Cards */}
              <div className="grid md:grid-cols-2 gap-8">
                {loading ? (
                  <div className="col-span-2 text-center py-12">
                    Loading articles...
                  </div>
                ) : error ? (
                  <div className="col-span-2 text-center py-12 text-red-600">
                    {error}
                  </div>
                ) : (
                  filteredPosts.map((post) => {
                    const id = post._id || post.id;
                    const image =
                      post.image ||
                      "https://via.placeholder.com/800x400?text=No+Image";
                    const excerpt =
                      (post.content || "").slice(0, 200) +
                      (post.content && post.content.length > 200 ? "..." : "");
                    const authorName =
                      post.author?.name || post.author || "Unknown";
                    const date =
                      post.createdAt || post.date || new Date().toISOString();
                    return (
                      <article
                        key={id}
                        className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border border-gray-100">
                        <div className="relative">
                          <img
                            src={image}
                            alt={post.title}
                            className="w-full h-48 object-cover"
                          />
                          <div className="absolute top-4 left-4">
                            <span className="bg-teal-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                              {post.category}
                            </span>
                          </div>
                        </div>
                        <div className="p-6">
                          <h2 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2 hover:text-teal-600 transition-colors">
                            <Link to={`/blog/${id}`}>{post.title}</Link>
                          </h2>
                          <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                            {excerpt}
                          </p>
                          <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                            <div className="flex items-center">
                              <User size={14} className="mr-1" />
                              <span>{authorName}</span>
                            </div>
                            <div className="flex items-center">
                              <Calendar size={14} className="mr-1" />
                              <span>{new Date(date).toLocaleDateString()}</span>
                            </div>
                          </div>
                          <Link
                            to={`/blog/${id}`}
                            className="text-teal-600 hover:text-teal-700 font-medium text-sm inline-flex items-center">
                            Read More
                            <ArrowRight size={14} className="ml-1" />
                          </Link>
                        </div>
                      </article>
                    );
                  })
                )}
              </div>

              {/* No Results */}
              {filteredPosts.length === 0 && (
                <div className="text-center py-12">
                  <div className="text-gray-400 mb-4">
                    <Search size={48} className="mx-auto" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    No articles found
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Try adjusting your search terms or browse all categories.
                  </p>
                  <button
                    onClick={() => {
                      setSearchTerm("");
                      setSelectedCategory("all");
                    }}
                    className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200">
                    View All Articles
                  </button>
                </div>
              )}

              {/* Load More Button */}
              {filteredPosts.length > 0 && (
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

      {/* Featured Resources */}
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
              <Link
                to="/contact"
                className="text-teal-600 hover:text-teal-700 font-medium text-sm inline-flex items-center">
                Download Free
                <ArrowRight size={14} className="ml-1" />
              </Link>
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
              <Link
                to="/contact"
                className="text-teal-600 hover:text-teal-700 font-medium text-sm inline-flex items-center">
                Download Free
                <ArrowRight size={14} className="ml-1" />
              </Link>
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
              <Link
                to="/contact"
                className="text-teal-600 hover:text-teal-700 font-medium text-sm inline-flex items-center">
                Download Free
                <ArrowRight size={14} className="ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Blog;
