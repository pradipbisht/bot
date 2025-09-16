import { ChevronLeft, ChevronRight } from "lucide-react";

const TestimonialNavigation = ({
  currentIndex,
  totalItems,
  onPrev,
  onNext,
  onDotClick,
}) => {
  return (
    <div className="flex items-center justify-center mt-8 space-x-6">
      <button
        onClick={onPrev}
        className="p-2 bg-white border border-gray-200 rounded-full hover:border-teal-500 hover:bg-teal-50 transition-all duration-300 group shadow-sm">
        <ChevronLeft className="w-5 h-5 text-gray-600 group-hover:text-teal-600" />
      </button>

      <div className="flex space-x-2">
        {[...Array(totalItems)].map((_, index) => (
          <button
            key={index}
            onClick={() => onDotClick(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-teal-600 w-8"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>

      <button
        onClick={onNext}
        className="p-2 bg-white border border-gray-200 rounded-full hover:border-teal-500 hover:bg-teal-50 transition-all duration-300 group shadow-sm">
        <ChevronRight className="w-5 h-5 text-gray-600 group-hover:text-teal-600" />
      </button>
    </div>
  );
};

export default TestimonialNavigation;
