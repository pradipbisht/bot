import React from "react";
import { Search } from "lucide-react";

export default function BlogHero({ searchTerm, setSearchTerm }) {
  return (
    <section className="bg-gradient-to-br from-teal-600 to-blue-700 text-white py-12 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">
          Digital Marketing Blog
        </h1>
        <p className="text-base md:text-xl text-teal-100 mb-6 md:mb-8">
          Stay ahead with the latest digital marketing strategies, tips, and
          industry insights
        </p>

        <div className="relative max-w-2xl mx-auto">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-6 w-6 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search articles, tips, and strategies..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 md:py-4 text-base md:text-lg rounded-xl border-0 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-white/30 focus:ring-offset-2 focus:ring-offset-teal-600"
          />
        </div>
      </div>
    </section>
  );
}

