import { Star, Quote } from "lucide-react";

const TestimonialCard = ({ testimonial, isActive }) => {
  return (
    <div
      className={`bg-white rounded-2xl p-8 shadow-lg border border-gray-100 transition-all duration-300 ${
        isActive ? "scale-105 shadow-xl" : "hover:shadow-md"
      }`}>
      <div className="relative">
        <Quote className="w-8 h-8 text-teal-500 opacity-20 absolute -top-2 -left-2" />

        <div className="relative z-10">
          <div className="flex items-center mb-4">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
            ))}
          </div>

          <blockquote className="text-gray-700 mb-6 leading-relaxed">
            "{testimonial.content}"
          </blockquote>

          <div className="inline-block bg-teal-50 text-teal-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
            {testimonial.results}
          </div>

          <div className="flex items-center">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-gray-100"
            />
            <div>
              <h4 className="font-semibold text-gray-900">
                {testimonial.name}
              </h4>
              <p className="text-sm text-gray-600">{testimonial.position}</p>
              <p className="text-sm text-teal-600 font-medium">
                {testimonial.company}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
