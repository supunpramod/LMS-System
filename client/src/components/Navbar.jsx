import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="bg-blue-700 fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="container mx-auto px-4 py-3 flex flex-col md:flex-row justify-between items-center">
        {/* Logo */}
        <div className="flex justify-between w-full md:w-auto items-center">
          <Link to="/" className="text-white text-2xl font-extrabold tracking-wider">
            LMS
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 mt-3 md:mt-0">
          <Link to="/" className="text-white hover:text-yellow-300 transition duration-300">
            Home
          </Link>
          <Link to="/programmes" className="text-white hover:text-yellow-300 transition duration-300">
            Programmes
          </Link>
          <Link to="/support" className="text-white hover:text-yellow-300 transition duration-300">
            Support
          </Link>

          {/* Courses Dropdown - Hoverable wrapper */}
          <div
            className="relative"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button className="text-white hover:text-yellow-300 transition duration-300">
              Courses ▾
            </button>

            {/* Dropdown Menu */}
            <div
              className={`absolute top-full left-0 mt-2 w-44 bg-white rounded-lg shadow-lg z-20 overflow-hidden transition-all duration-200 ${
                isDropdownOpen ? "opacity-100 visible" : "opacity-0 invisible"
              }`}
            >
              <Link
                to="/courses/all"
                className="block px-4 py-2 text-gray-800 hover:bg-blue-100 transition"
              >
                All Courses
              </Link>
              <Link
                to="/courses/my"
                className="block px-4 py-2 text-gray-800 hover:bg-blue-100 transition"
              >
                My Courses
              </Link>
              <Link
                to="/courses/create"
                className="block px-4 py-2 text-gray-800 hover:bg-blue-100 transition"
              >
                Create Course
              </Link>
            </div>
          </div>

          <Link to="/libraries" className="text-white hover:text-yellow-300 transition duration-300">
            Libraries
          </Link>
        </div>

        {/* Auth Links */}
        <div className="mt-3 md:mt-0 flex space-x-4">
          <Link to="/login" className="text-white hover:text-yellow-300 transition duration-300">
            Login
          </Link>
          <Link
            to="/register"
            className="bg-yellow-400 text-blue-800 font-semibold px-4 py-0.5 rounded hover:bg-yellow-300 transition"
          >
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
}
