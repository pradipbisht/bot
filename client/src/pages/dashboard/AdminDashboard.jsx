import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import DashboardLayout from "../../components/dashboard/DashboardLayout";
import AllUser from "../../components/dashboard/AllUser";
import api from "../../api/axios";
import apiBlog from "../../api/blogs/apiBlog";
import { toast } from "react-toastify";
import OverviewCards from "./admin/OverviewCards";
import RecentPosts from "./admin/RecentPosts";
import EditModal from "./admin/EditModal";

function AdminDashboard() {
  const { user } = useAuth();
  const [overview, setOverview] = useState(null);
  const [showUsers, setShowUsers] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalPost, setModalPost] = useState(null);

  // Fetch overview data
  const fetchOverview = async () => {
    try {
      const res = await api.get("/api/admin/overview");
      setOverview(res.data?.data || res.data);
    } catch (err) {
      console.error(err);
      toast.error("Failed to load overview");
    }
  };

  useEffect(() => {
    fetchOverview();
  }, []);

  const openEditModal = (post) => {
    setModalPost(post);
    setModalOpen(true);
  };

  // Delete post handler
  const handleDelete = async (id) => {
    const ok = window.confirm("Delete this article?");
    if (!ok) return;
    try {
      await apiBlog.deleteBlog(id);
      toast.success("Deleted");
      setOverview((o) => ({
        ...o,
        recentPosts: (o.recentPosts || []).filter(
          (x) => x._id !== id && x.id !== id
        ),
        totalPosts: (o.totalPosts || 0) - 1,
      }));
    } catch (err) {
      console.error(err);
      toast.error("Delete failed");
    }
  };

  return (
    <DashboardLayout title="Admin Dashboard">
      <div className="bg-white shadow-lg rounded-xl p-8">
        <OverviewCards
          user={user}
          overview={overview}
          showUsers={showUsers}
          onToggleUsers={() => setShowUsers(!showUsers)}
        />

        <RecentPosts
          posts={overview?.recentPosts}
          onEdit={openEditModal}
          onDelete={handleDelete}
        />

        {modalOpen && (
          <EditModal
            post={modalPost}
            onClose={() => setModalOpen(false)}
            onSaved={(updated) => {
              setOverview((o) => ({
                ...o,
                recentPosts: (o.recentPosts || []).map((r) =>
                  r._id === updated._id || r.id === updated._id ? updated : r
                ),
              }));
              setModalOpen(false);
            }}
          />
        )}

        {/* All Users */}
        {showUsers && (
          <div className="mt-8">
            <AllUser />
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}

export default AdminDashboard;
