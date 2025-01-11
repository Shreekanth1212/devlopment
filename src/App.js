import React, { useState, useEffect } from "react";
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

  // Load patient data from localStorage when the app loads
  useEffect(() => {
    const savedPatients = JSON.parse(localStorage.getItem("patients")) || [];
    setPatients(savedPatients);
  }, []);

  // Save patient data to localStorage whenever it changes
  useEffect(() => {
    if (patients.length > 0) {
      localStorage.setItem("patients", JSON.stringify(patients));
    }
  }, [patients]);

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
                <h2>Access Denied. Please log in as a patient.</h2>
              )
            }
          />
          <Route
            path="/doctor"
            element={
              userRole === "doctor" ? (
                <DoctorDashboard patients={patients} setPatients={setPatients} />
              ) : (
                <h2>Access Denied. Please log in as a doctor.</h2>
              )
            }
          />
          <Route
            path="/admin"
            element={
              userRole === "admin" ? (
                <AdminDashboard patients={patients} loggedUsers={loggedUsers} />
              ) : (
                <h2>Access Denied. Please log in as an admin.</h2>
              )
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
