import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Courses from "./pages/Courses";
import CourseDetail from "./pages/CourseDetail";
import Training from "./pages/Training";
import TrainingDetail from "./pages/TrainingDetail";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Profile from "./pages/Profile";
import Footer from "./components/Footer";
import Alumnis from "./pages/Alumnis";
import PurchaseCourse from "./pages/PurchaseCourse";
import Dashboard from "./pages/Dashboard";
import HiringPartners from "./pages/HiringPartners";

const App = () => {
  const [token, setToken] = useState(localStorage.getItem("token") || "");

  return (
    <>
      <Router>
        <Navbar token={token} setToken={setToken} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courseDetail/:id" element={<CourseDetail />} />
          <Route path="/trainings" element={<Training />} />
          <Route path="/trainingDetail/:id" element={<TrainingDetail />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/alumnis" element={<Alumnis />} />
          <Route path="/purchase/:id" element={<PurchaseCourse />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/hiringPartners" element={<HiringPartners />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
