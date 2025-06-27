import { useState } from "react";
import CourseForm from "./CourseForm";
import Courses from "./Courses";

export default function Dashboard() {
  const [refreshKey, setRefreshKey] = useState(0);
  const handleCourseAdded = () => setRefreshKey(prev => prev + 1);

  return (
    <div>
      <CourseForm onCourseAdded={handleCourseAdded} />
      <Courses key={refreshKey} />
    </div>
  );
}
