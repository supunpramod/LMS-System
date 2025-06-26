import {
  FaQuestionCircle,
  FaUserCog,
  FaBook,
  FaVideo,
  FaFileAlt,
} from "react-icons/fa";

const services = [
  { icon: <FaQuestionCircle size={48} />, label: "HELPDESK" },
  { icon: <FaUserCog size={48} />, label: "STUDENT SERVICE" },
  { icon: <FaBook size={48} />, label: "LIBRARY" },
  { icon: <FaVideo size={48} />, label: "VIDEO LIBRARY" },
  { icon: <FaFileAlt size={48} />, label: "RESEARCH ARCHIVE" },
];

export default function Home() {
  return (
    <div className="text-center mt-16">
      {/* Heading */}
      <h1 className="text-4xl font-bold mb-2">Welcome to the LMS</h1>
      <p className="text-lg text-gray-600 mb-8">Learn, Grow, Succeed.</p>

      {/* Service Icons */}
      <div className="flex flex-wrap justify-center gap-8 md:gap-16 px-4 py-8 bg-white">
        {services.map((service, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <div className="text-blue-900 mb-2">{service.icon}</div>
            <span className="text-blue-900 font-medium tracking-wide text-sm md:text-base">
              {service.label}
            </span>
          </div>
        ))}
      </div>

      {/* About Section */}
      <div
        className="flex flex-col md:flex-row items-center justify-between bg-white py-12 px-5 md:px-16"
        style={{
          backgroundImage:
            "url('https://pplx-res.cloudinary.com/image/private/user_uploads/67517749/79f2011a-8c00-4b1f-8ebf-9b9b09507752/image.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "400px",
        }}
      >
        {/* Left Side */}
        <div className="md:w-1/2 text-left mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 leading-tight">
            The Future
          </h1>
          <div className="mt-4 bg-[#e8eaf6] rounded px-4 py-2 inline-block">
            <span
              className="text-2xl md:text-3xl font-bold text-[#5c6bc0] tracking-widest"
            >
              Awaits You!
            </span>
          </div>
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 text-gray-800 text-base md:text-lg leading-relaxed space-y-4 bg-white/80 p-6 rounded shadow">
          <p>
            We are a leading non-state higher education institute approved by
            the University Grants Commission (UGC) under the Universities Act.
          </p>
          <p>
            We are members of the Association of Commonwealth Universities
            (ACU), as well as the International Association of Universities
            (IAU).
          </p>
          <p>
            We are also the first Sri Lankan institute to be accredited by the
            Institute of Engineering & Technology (IET), UK and Engineering
            Council, UK.
          </p>
        </div>
      </div>
    </div>
  );
}
