import React from "react";

const AdminDashboard = ({ patients, loggedUsers }) => {
  return (
    <div className="container">
      <h2>Admin Dashboard</h2>

      <h3>Logged-In Users</h3>
      {loggedUsers.length > 0 ? (
        <table className="data-table">
          <thead>
            <tr>
              <th>Username</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {loggedUsers.map((user, index) => (
              <tr key={index}>
                <td>{user.username}</td>
                <td>{user.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No users logged in.</p>
      )}

      <h3>Patient Feedback</h3>
      {patients.length > 0 ? (
        <table className="data-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Sex</th>
              <th>Sickness</th>
              <th>Date</th>
              <th>Feedback</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((patient, index) => (
              <tr key={index}>
                <td>{patient.name}</td>
                <td>{patient.age}</td>
                <td>{patient.sex}</td>
                <td>{patient.sickness}</td>
                <td>{patient.date}</td>
                <td>{patient.feedback || "No feedback yet"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No patients available.</p>
      )}
    </div>
  );
};

export default AdminDashboard;
