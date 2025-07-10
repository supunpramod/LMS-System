import { useEffect, useState } from "react";
import axios from "axios";
import CourseForm from "./CourseForm";

export default function Courses({ onCourseDeleted }) {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editingCourse, setEditingCourse] = useState(null); // NEW: track course being edited
  const [refreshKey, setRefreshKey] = useState(0); // internal refresh for edit

  useEffect(() => {
    axios.get("http://localhost:5000/api/courses")
      .then(res => {
        setCourses(res.data);
        setError(null);
      })
      .catch(() => setError("Failed to load courses"))
      .finally(() => setLoading(false));
  }, [refreshKey]);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this course?")) return;
    try {
      await axios.delete(`http://localhost:5000/api/courses/${id}`);
      onCourseDeleted();
    } catch (err) {
      alert("Failed to delete course");
    }
  };

  const handleUpdateSuccess = () => {
    setEditingCourse(null);           // close form
    setRefreshKey(prev => prev + 1);  // refresh course list
  };

  if (loading) return <p>Loading courses...</p>;
  if (error) return <p className="text-red-600">{error}</p>;

  return (
    <div className="space-y-6">
      {courses.map(course => (
        <div key={course._id} className="border p-4 rounded shadow">
          {editingCourse?._id === course._id ? (
            <CourseForm
              course={editingCourse}
              isEdit
              onSuccess={handleUpdateSuccess}
              onCancel={() => setEditingCourse(null)}
            />
          ) : (
            <>
              <h3 className="font-bold text-lg mb-2">{course.title}</h3>
              <p className="mb-2">{course.description}</p>
              <p className="mb-2 font-semibold">Instructor: {course.instructor}</p>

              <div className="mb-2">
                {course.files?.map((file, idx) => {
                  const isImage = file.type.startsWith("image/");
                  return isImage ? (
                    <img
                      key={idx}
                      src={`http://localhost:5000${file.url}`}
                      alt={file.name}
                      className="max-w-full max-h-48 mb-2 rounded"
                    />
                  ) : (
                    <a
                      key={idx}
                      href={`http://localhost:5000${file.url}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-blue-600 underline mb-2"
                    >
                      {file.name}
                    </a>
                  );
                })}
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => setEditingCourse(course)}
                  className="bg-yellow-500 text-white px-4 py-1 rounded hover:bg-yellow-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(course._id)}
                  className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
}
