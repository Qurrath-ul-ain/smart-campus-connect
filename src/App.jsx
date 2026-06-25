import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/login";
import Register from "./pages/register";
import Dashboard from "./pages/dashboard";

import Availability from "./pages/availability";
import Appointment from "./pages/appointment";
import Certificate from "./pages/certificate";
import Complaint from "./pages/complaint";
import Profile from "./pages/profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/availability" element={<Availability />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/certificate" element={<Certificate />} />
        <Route path="/complaint" element={<Complaint />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;