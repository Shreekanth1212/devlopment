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
  const [patients, setPatients] = useState([]); // Shared patient data
  const [loggedUsers, setLoggedUsers] = useState([]); // Track logged-in users

  const handleUserLogin = (role, username) => {
    setUserRole(role);
    setLoggedUsers((prev) => [...prev, { username, role }]); // Add user to logged-in list
  };

  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Login</Link> | <Link to="/register">Register</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Login onLogin={handleUserLogin} />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/patient"
            element={
              userRole === "patient" ? (
                <PatientDashboard patients={patients} setPatients={setPatients} />
              ) : (
                <h2>Access Denied</h2>
              )
            }
          />
          <Route
            path="/doctor"
            element={
              userRole === "doctor" ? (
                <DoctorDashboard patients={patients} setPatients={setPatients} />
              ) : (
                <h2>Access Denied</h2>
              )
            }
          />
          <Route
            path="/admin"
            element={
              userRole === "admin" ? (
                <AdminDashboard patients={patients} loggedUsers={loggedUsers} />
              ) : (
                <h2>Access Denied</h2>
              )
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
