const ShowcaseHeader = () => {
  return (
    <div>
      <div className="mb-6">
        <span className="inline-block w-16 h-1 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full mb-4"></span>
        <div className="inline-block bg-teal-50 text-teal-700 px-4 py-2 rounded-full text-sm font-semibold mb-4 ml-2">
          Success Story
        </div>
      </div>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
        Featured Case Study
      </h2>
      <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
        How Acme Corp achieved remarkable growth through our strategic digital
        marketing approach.
      </p>
    </div>
  );
};

export default ShowcaseHeader;

