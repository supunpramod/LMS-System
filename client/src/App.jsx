import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Courses from "./pages/Courses";
import FooterSection from "./components/FooterSection";
import Dashboard from "./pages/Dashboard";

function LayoutWrapper() {
  const location = useLocation();

  // Dashboard route එක වෙනම render කරන්න
  const isDashboardRoute = location.pathname === "/dashboard";

  if (isDashboardRoute) {
    return (
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    );
  }

  return (
    <div>
      <Navbar />
      <div className="container mx-auto mt-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/courses/all" element={<Courses />} />
        </Routes>
      </div>
      <FooterSection />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <LayoutWrapper />
    </BrowserRouter>
  );
}

export default App;
