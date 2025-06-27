import React from "react";
import { Link } from "react-router-dom";

const FooterSection = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // === Dynamic Calendar ===
  const generateCalendar = (year, month) => {
    const daysInMonth = new Date(year, month + 1, 0).getDate(); // Number of days in the month
    const startDay = new Date(year, month, 1).getDay(); // Day of week (0 = Sunday)

    const calendar = [];
    let dayCount = 1;

    // Fill up to 6 rows (weeks)
    for (let week = 0; week < 6; week++) {
      const row = [];
      for (let day = 0; day < 7; day++) {
        const isFirstWeek = week === 0;
        const isBeforeStart = day < ((startDay + 6) % 7); // Adjust because our week starts on Monday

        if (isFirstWeek && isBeforeStart) {
          row.push(null); // Empty cell
        } else if (dayCount > daysInMonth) {
          row.push(null); // After month's end
        } else {
          row.push(dayCount++);
        }
      }
      calendar.push(row);
    }

    return calendar;
  };

  const calendarData = generateCalendar(2025, 5); // June = month index 5

  return (
    <div className="bg-blue-700 text-white pt-12 pb-4 flex flex-col justify-between relative">
      {/* Support Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center px-8">
        <div>
          <div className="text-sm text-gray-300 mb-1">DO YOU NEED ANY</div>
          <div className="text-3xl font-bold mb-2">SUPPORT ?</div>
          <div className="flex items-center mb-1">
            <span className="mr-2 text-yellow-400">&#x1F310;</span>
            <a href="mailto:support.sliit.lk" className="text-yellow-400 underline">
              support.lms.lk
            </a>
          </div>
          <div className="flex items-center mb-3">
            <span className="mr-2">&#x1F4DE;</span>
            <span>+94 77 962 6046</span>
          </div>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-6 py-2 rounded transition">
            Provide Feedback to LMS
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

            {/* Render calendar rows */}
            {calendarData.map((week, i) => (
              <div key={i} className="grid grid-cols-7 gap-1 text-center text-gray-300 text-sm">
                {week.map((day, j) => (
                  <div
                    key={j}
                    className={`${
                      day ? "py-1 rounded" : ""
                    } ${day === 7 || day === 10 ? "bg-green-200 text-gray-900" : ""}`}
                  >
                    {day || ""}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-600 mt-12 pt-4 flex flex-col md:flex-row justify-between items-center px-8">
        <div className="text-gray-400 text-xs mb-2 md:mb-0">
          Copyright 2022 © LMS. All Rights Reserved.
        </div>
        <div className="flex items-center text-yellow-400 text-sm space-x-4">
          <a href="https://www.sliit.lk" className="hover:underline">
            https://www.lms.lk
          </a>
          <span>|</span>
          <a href="mailto:info@sliit.lk" className="hover:underline">
            info@lms.lk
          </a>
          <span>|</span>
          <span>+94 77 962 6046</span>
        </div>
        <div className="flex space-x-2 mt-2 md:mt-0">
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
