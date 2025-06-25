import { useEffect, useState } from "react";
import axios from "axios";

export default function Courses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/courses")
      .then(res => setCourses(res.data))
      .catch(() => setCourses([]));
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Courses</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {courses.length === 0 && (
          <div className="text-gray-500">No courses found.</div>
        )}
        {courses.map(course => (
          <div key={course._id} className="bg-white p-6 rounded shadow">
            <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
            <p className="text-gray-700 mb-2">{course.description}</p>
            <p className="text-gray-500 text-sm">Instructor: {course.instructor?.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
