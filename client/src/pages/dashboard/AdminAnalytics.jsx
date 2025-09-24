import React, { useEffect, useState } from "react";
import DashboardLayout from "../../components/dashboard/DashboardLayout";
import api from "../../api/axios";
import { toast } from "react-toastify";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line, Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function AdminAnalytics() {
  const [data, setData] = useState(null);

  const load = async () => {
    try {
      const res = await api.get("/api/admin/analytics?days=14");
      setData(res.data?.data);
    } catch (err) {
      console.error(err);
      toast.error("Failed to load analytics");
    }
  };

  useEffect(() => {
    load();
  }, []);

  if (!data)
    return (
      <DashboardLayout title="Analytics">
        <div className="bg-white p-6 rounded shadow">Loading...</div>
      </DashboardLayout>
    );

  const labels = data.postsPerDay.map((p) => p.date);

  const postsDataset = {
    labels,
    datasets: [
      {
        label: "Posts",
        data: data.postsPerDay.map((p) => p.count),
        borderColor: "#10B981",
        backgroundColor: "rgba(16,185,129,0.2)",
        tension: 0.2,
      },
      {
        label: "New Users",
        data: data.usersPerDay.map((p) => p.count),
        borderColor: "#3B82F6",
        backgroundColor: "rgba(59,130,246,0.15)",
        tension: 0.2,
      },
    ],
  };

  const categoriesDataset = {
    labels: data.topCategories.map((c) => c.category),
    datasets: [
      {
        label: "Posts",
        data: data.topCategories.map((c) => c.count),
        backgroundColor: [
          "#6366F1",
          "#F472B6",
          "#34D399",
          "#F59E0B",
          "#60A5FA",
        ],
      },
    ],
  };

  return (
    <DashboardLayout title="Analytics">
      <div className="grid grid-cols-1 gap-6">
        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-lg font-semibold mb-4">
            Posts & New Users (last 14 days)
          </h3>
          <Line data={postsDataset} />
        </div>

        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-lg font-semibold mb-4">Top Categories</h3>
          {data.topCategories.length ? (
            <Bar data={categoriesDataset} />
          ) : (
            <div>No category data</div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
}

