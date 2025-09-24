import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import ChatBot from "./components/ChatBot";
import About from "./pages/about/About";
import Services from "./pages/services/Service";
import AISolutions from "./pages/AISolutions";
import Pricing from "./pages/pricing/Pricing";
import Blog from "./blog/Blog";
import BlogDetail from "./blog/BlogDetail";
import Contact from "./pages/Contact";
import Payment from "./pages/Payment";
import LogIn from "./pages/users/LogIn";
import AuthSuccess from "./pages/users/AuthSuccess";
import ProtectedRoute from "./context/ProtectedRoutes";
import AuthDashboard from "./pages/auth-dash/AuthDashboard";
import AdminDashboard from "./pages/dashboard/AdminDashboard";
import AllUser from "./components/dashboard/AllUser";
import DashboardLayout from "./components/dashboard/DashboardLayout";
import ErrorPage from "./pages/errors/ErrorPage";
import BlogCreation from "./blog/BlogCreation";
import BlogEdit from "./blog/BlogEdit";
import AdminAnalytics from "./pages/dashboard/AdminAnalytics";
import Profile from "./pages/Profile";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import CaseStudies from "./pages/caseStudies/CaseStudie";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
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
          <Route path="/blog/:id" element={<BlogDetail />} />
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

          <Route
            path="/admin/analytics"
            element={
              <ProtectedRoute requiredRole="admin">
                <AdminAnalytics />
              </ProtectedRoute>
            }
          />

          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin/users"
            element={
              <ProtectedRoute requiredRole="admin">
                <DashboardLayout title="User Management">
                  <AllUser />
                </DashboardLayout>
              </ProtectedRoute>
            }
          />

          {/* Blog creation route available to authenticated users; admin has access too */}
          <Route
            path="/blog/create"
            element={
              <ProtectedRoute>
                <BlogCreation />
              </ProtectedRoute>
            }
          />

          {/* Blog edit - admin only */}
          <Route
            path="/blog/edit/:id"
            element={
              <ProtectedRoute requiredRole="admin">
                <BlogEdit />
              </ProtectedRoute>
            }
          />

          {/* Secret Company Access Routes */}
          <Route path="/company-access/login" element={<LogIn />} />
          <Route path="/auth/success" element={<AuthSuccess />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      {/* Hidden Admin Login Link in Footer */}
      <div
        style={{
          textAlign: "center",
          fontSize: "12px",
          marginBottom: "8px",
        }}>
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
