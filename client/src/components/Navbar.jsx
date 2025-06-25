import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-xl font-bold">LMS</Link>
        <div className="space-x-4">
          <Link to="/courses" className="text-white hover:underline">Courses</Link>
          <Link to="/login" className="text-white hover:underline">Login</Link>
          <Link to="/register" className="text-white hover:underline">Register</Link>
        </div>
      </div>
    </nav>
  );
}
