import { useState } from "react";
import AnimatedBackground from "../../../components/test/blot/BoltAnimation";
import TestimonialCard from "./TestimonialCard";
import TestimonialNavigation from "./TestimonialNavigation";
// import AnimatedBackground from "../AnimatedBackground";
// import TestimonialCard from "./TestimonialCard";
// import TestimonialNavigation from "./TestimonialNavigation";

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CEO",
      company: "TechStart",
      image:
        "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=150&h=150",
      content:
        "DigitalGrow transformed our online presence completely. Our website traffic increased by 400% in just 6 months.",
      rating: 5,
      results: "400% traffic increase",
    },
    {
      name: "Michael Chen",
      position: "Marketing Director",
      company: "E-commerce Store",
      image:
        "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150",
      content:
        "The ROI we've seen is outstanding. They helped us optimize our campaigns and now we're generating 5x more leads.",
      rating: 5,
      results: "5x more leads",
    },
    {
      name: "Emma Rodriguez",
      position: "Founder",
      company: "Local Restaurant Chain",
      image:
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150",
      content:
        "Their social media strategy helped us build a community. We went from 500 followers to 50K in 8 months.",
      rating: 5,
      results: "10,000% follower growth",
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const goToTestimonial = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="relative py-16 bg-gray-50 overflow-hidden">
      <AnimatedBackground />
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block bg-teal-50 text-teal-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Client Success Stories
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Real results from real businesses who trusted us with their growth.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              testimonial={testimonial}
              isActive={index === currentIndex}
            />
          ))}
        </div>

        <TestimonialNavigation
          currentIndex={currentIndex}
          totalItems={testimonials.length}
          onPrev={prevTestimonial}
          onNext={nextTestimonial}
          onDotClick={goToTestimonial}
        />
      </div>
    </section>
  );
};

export default TestimonialsSection;
