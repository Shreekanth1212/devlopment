import React, { useState } from "react";

const DoctorDashboard = ({ patients, setPatients }) => {
  const handleUpdate = (index, field, value) => {
    const updatedPatients = [...patients];
    updatedPatients[index][field] = value;
    setPatients(updatedPatients);
  };

  return (
    <div className="container">
      <h2>Doctor Dashboard</h2>
      {patients.length > 0 ? (
        <table className="data-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
              <th>Sex</th>
              <th>Sickness</th>
              <th>Date</th>
              <th>Description</th>
              <th>Medicine</th>
              <th>Fees</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((patient, index) => (
              <tr key={patient.id}>
                <td>{patient.id}</td>
                <td>{patient.name}</td>
                <td>{patient.age}</td>
                <td>{patient.sex}</td>
                <td>{patient.sickness}</td>
                <td>{patient.date}</td>
                <td>
                  <input
                    type="text"
                    placeholder="Description/Remedy"
                    value={patient.description || ""}
                    onChange={(e) =>
                      handleUpdate(index, "description", e.target.value)
                    }
                  />
                </td>
                <td>
                  <input
                    type="text"
                    placeholder="Medicine"
                    value={patient.medicine || ""}
                    onChange={(e) =>
                      handleUpdate(index, "medicine", e.target.value)
                    }
                  />
                </td>
                <td>
                  <input
                    type="number"
                    placeholder="Fees"
                    value={patient.fees || ""}
                    onChange={(e) =>
                      handleUpdate(index, "fees", e.target.value)
                    }
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No appointments available.</p>
      )}
    </div>
  );
};

export default DoctorDashboard;
