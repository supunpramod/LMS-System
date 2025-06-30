import { useState } from "react";
import CourseForm from "./CourseForm";
import Courses from "./Courses";

export default function Dashboard() {
  const [refreshKey, setRefreshKey] = useState(0);
  
  const handleCourseAdded = () => {
    setRefreshKey(prev => prev + 1);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Course Dashboard</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
              <h2 className="text-xl font-bold mb-4 text-blue-800">Add New Course</h2>
              <CourseForm onCourseAdded={handleCourseAdded} />
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h2 className="text-xl font-bold mb-4 text-gray-700">All Courses</h2>
              <Courses key={refreshKey} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
