import React from "react";

export default function BlogSidebar({
  categories,
  selectedCategory,
  setSelectedCategory,
}) {
  return (
    <div className="lg:col-span-1 order-2 lg:order-1">
      <div className="sticky top-6 space-y-6 md:space-y-8">
        <div className="bg-gradient-to-br from-teal-600 to-blue-700 text-white rounded-xl p-6 shadow-lg">
          <h3 className="text-xl font-semibold mb-3">Free Marketing Toolkit</h3>
          <p className="text-teal-100 text-sm mb-4">
            Get our complete digital marketing toolkit including templates,
            checklists, and strategies used by top agencies.
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

        <div className="bg-white rounded-xl shadow-md p-4 md:p-6 border border-gray-200">
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

        <div className="bg-white rounded-xl shadow-md p-4 md:p-6 border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Popular Topics
          </h3>
          <div className="flex flex-wrap gap-2">
            <span className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-sm">
              SEO Tips
            </span>
            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
              Social Media
            </span>
            <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">
              PPC Ads
            </span>
            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
              Analytics
            </span>
            <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm">
              AI Tools
            </span>
            <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm">
              Email Marketing
            </span>
          </div>
        </div>

        <div className="bg-gray-50 rounded-xl p-4 md:p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            Weekly Newsletter
          </h3>
          <p className="text-gray-600 text-sm mb-4">
            Get the latest digital marketing insights delivered to your inbox
            every Tuesday.
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
  );
}
