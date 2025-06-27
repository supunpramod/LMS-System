import { useEffect, useState } from "react";
import axios from "axios";

export default function Dashboard() {
  const [stats, setStats] = useState({
    totalCourses: 0,
    totalFiles: 0,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDashboardStats = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/dashboard/stats");
        setStats(response.data);
      } catch (err) {
        console.error("Error fetching stats:", err);
        setError("Failed to load dashboard data");
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardStats();
  }, []);

  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow mb-8">
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>

      {loading && (
        <div className="text-gray-500">Loading dashboard...</div>
      )}

      {error && (
        <div className="text-red-500">{error}</div>
      )}

      {!loading && !error && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Total Courses */}
          <div className="bg-white p-6 rounded-lg shadow flex flex-col items-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">
              {stats.totalCourses}
            </div>
            <div className="text-lg font-medium text-gray-700">
              පාඨමාලා ගණන
            </div>
          </div>

          {/* Total PDF Files */}
          <div className="bg-white p-6 rounded-lg shadow flex flex-col items-center">
            <div className="text-4xl font-bold text-green-600 mb-2">
              {stats.totalFiles}
            </div>
            <div className="text-lg font-medium text-gray-700">
              PDF ගොනු ගණන
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
