import React from "react";
import { Link } from "react-router-dom";

const FooterSection = () => {
  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-[#353b42] text-white pt-12 pb-4 flex flex-col justify-between relative">
      {/* Support Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center px-8">
        <div>
          <div className="text-sm text-gray-300 mb-1">DO YOU NEED ANY</div>
          <div className="text-3xl font-bold mb-2">SUPPORT ?</div>
          <div className="flex items-center mb-1">
            <span className="mr-2 text-yellow-400">&#x1F310;</span>
            <a href="mailto:support.sliit.lk" className="text-yellow-400 underline">
              support.sliit.lk
            </a>
          </div>
          <div className="flex items-center mb-3">
            <span className="mr-2">&#x1F4DE;</span>
            <span>+94 11 754 4801</span>
          </div>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-6 py-2 rounded transition">
            Provide Feedback to SLIIT
          </button>
        </div>

        {/* Calendar */}
        <div className="mt-8 md:mt-0">
          <div className="font-semibold mb-2">Calendar</div>
          <div className="bg-[#2c3136] rounded p-4 w-64">
            <div className="text-yellow-400 text-center mb-2">JUNE 2025</div>
            <div className="grid grid-cols-7 gap-1 text-center text-gray-300 text-sm mb-1">
              <div>Mon</div>
              <div>Tue</div>
              <div>Wed</div>
              <div>Thu</div>
              <div>Fri</div>
              <div>Sat</div>
              <div>Sun</div>
            </div>
            <div className="grid grid-cols-7 gap-1 text-center text-gray-300 text-sm">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div className="bg-green-200 text-gray-900 rounded">7</div>
              <div>8</div>
            </div>
            <div className="grid grid-cols-7 gap-1 text-center text-gray-300 text-sm">
              <div>9</div>
              <div className="bg-green-200 text-gray-900 rounded">10</div>
              <div>11</div>
              <div>12</div>
              <div>13</div>
              <div>14</div>
              <div>15</div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-600 mt-12 pt-4 flex flex-col md:flex-row justify-between items-center px-8">
        <div className="text-gray-400 text-xs mb-2 md:mb-0">
          Copyright 2022 © SLIIT. All Rights Reserved.
        </div>
        <div className="flex items-center text-yellow-400 text-sm space-x-4">
          <a href="https://www.sliit.lk" className="hover:underline">
            https://www.sliit.lk
          </a>
          <span>|</span>
          <a href="mailto:info@sliit.lk" className="hover:underline">
            info@sliit.lk
          </a>
          <span>|</span>
          <span>+94 11 754 4801</span>
        </div>
        <div className="flex space-x-2 mt-2 md:mt-0">
          {/* Replace with actual icons or use react-icons */}
          <span className="bg-gray-700 p-2 rounded">
            <i className="fab fa-facebook-f"></i>
          </span>
          <span className="bg-gray-700 p-2 rounded">
            <i className="fab fa-twitter"></i>
          </span>
          <span className="bg-gray-700 p-2 rounded">
            <i className="fab fa-instagram"></i>
          </span>
          <span className="bg-gray-700 p-2 rounded">
            <i className="fab fa-youtube"></i>
          </span>
          <span className="bg-gray-700 p-2 rounded">
            <i className="fab fa-linkedin-in"></i>
          </span>
        </div>
      </div>

      {/* Scroll to Top Button (Always Visible) */}
      <div
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-yellow-400 rounded-full p-3 shadow-lg cursor-pointer hover:bg-yellow-300 transition"
        title="Scroll to top"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-900"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      </div>
    </div>
  );
};

export default FooterSection;
