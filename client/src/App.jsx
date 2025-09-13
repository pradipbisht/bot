import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
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
import Signup from "./pages/users/Signup";
import LogIn from "./pages/users/LogIn";
import ProtectedRoute from "./context/ProtectedRoutes";
import AuthDashboard from "./pages/auth-dash/AuthDashboard";
import AdminDashboard from "./pages/dashboard/AdminDashboard";
import ErrorPage from "./pages/errors/ErrorPage";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar at top */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow">
        <Routes>
          {/* Public Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/ai-solutions" element={<AISolutions />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="*" element={<ErrorPage />} />

          {/* Protected dashboards */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <AuthDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin"
            element={
              <ProtectedRoute requiredRole="admin">
                <AdminDashboard />
              </ProtectedRoute>
            }
          />

          {/* Secret Company Access Routes */}
          <Route path="/company-access/login" element={<LogIn />} />
          <Route path="/company-access/signup" element={<Signup />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />

      {/* Hidden Admin Login Link in Footer */}
      <div
        style={{ textAlign: "center", fontSize: "12px", marginBottom: "8px" }}>
        <a
          href="/company-access/login"
          style={{ color: "#888", textDecoration: "none" }}>
          Admin Login
        </a>
      </div>

      {/* Floating Chatbot */}
      <ChatBot />
    </div>
  );
}

export default App;
