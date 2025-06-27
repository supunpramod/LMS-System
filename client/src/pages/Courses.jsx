import { useEffect, useState } from "react";
import axios from "axios";

export default function Courses() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true); // for loading state
  const [error, setError] = useState(null);     // for error state

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/courses")
      .then((res) => {
        console.log("Fetched courses:", res.data); // Debug log
        setCourses(res.data || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching courses:", err);
        setError("Failed to load courses.");
        setCourses([]);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4 mt-4">Courses</h2>

      {loading && <div className="text-gray-500">Loading courses...</div>}
      {error && <div className="text-red-500">{error}</div>}

      {!loading && courses.length === 0 && (
        <div className="text-gray-500">No courses found.</div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {courses.map((course) => (
          <div key={course._id || course.id} className="bg-white p-6 rounded shadow">
            <h3 className="text-xl font-semibold mb-2">
              {course.title || "No Title"}
            </h3>
            <p className="text-gray-700 mb-2">
              {course.description || "No description provided."}
            </p>
            <p className="text-gray-500 text-sm">
              Instructor: {course.instructor?.name || "N/A"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
