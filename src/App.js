import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import PatientDashboard from "./components/PatientDashboard";
import DoctorDashboard from "./components/DoctorDashboard";
import AdminDashboard from "./components/AdminDashboard";
import "./styles.css";

const App = () => {
  const [userRole, setUserRole] = useState(null);

  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Login</Link> | <Link to="/register">Register</Link>
        </nav>
        <Routes>
          <Route
            path="/"
            element={<Login setUserRole={setUserRole} />}
          />
          <Route path="/register" element={<Register />} />
          <Route
            path="/patient"
            element={userRole === "patient" ? <PatientDashboard /> : <h2>Access Denied</h2>}
          />
          <Route
            path="/doctor"
            element={userRole === "doctor" ? <DoctorDashboard /> : <h2>Access Denied</h2>}
          />
          <Route
            path="/admin"
            element={userRole === "admin" ? <AdminDashboard /> : <h2>Access Denied</h2>}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
