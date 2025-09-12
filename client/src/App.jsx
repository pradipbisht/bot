import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ChatBot from "./components/ChatBot";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Service";

import AISolutions from "./pages/AISolutions";
import CaseStudies from "./pages/CaseStudies";
import Pricing from "./pages/Pricing";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Payment from "./pages/Payment";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation Component */}
      <Navbar />

      {/* Main Content Routes */}
      <main className="flex-grow">
        <Routes>
          {/* Homepage Route */}
          <Route path="/" element={<Home />} />

          {/* About Page Route */}
          <Route path="/about" element={<About />} />

          {/* Services Page Route */}
          <Route path="/services" element={<Services />} />

          {/* AI Solutions Page Route */}
          <Route path="/ai-solutions" element={<AISolutions />} />

          {/* Case Studies Page Route */}
          <Route path="/case-studies" element={<CaseStudies />} />

          {/* Pricing & Packages Page Route */}
          <Route path="/pricing" element={<Pricing />} />

          {/* Blog / Resources Page Route */}
          <Route path="/blog" element={<Blog />} />

          {/* Contact Page Route */}
          <Route path="/contact" element={<Contact />} />

          {/* Payment Page Route */}
          <Route path="/payment" element={<Payment />} />
        </Routes>
      </main>

      {/* Global Footer Component */}
      <Footer />

      {/* Floating Chatbot Component - Persistent on all pages */}
      <ChatBot />
    </div>
  );
}

export default App;
