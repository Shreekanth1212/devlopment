import React, { useState } from "react";

const PatientDashboard = ({ patients, setPatients }) => {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    age: "",
    sex: "",
    sickness: "",
    date: "",
  });

  const [currentPatient, setCurrentPatient] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    const id = patients.length + 1; // Generate a unique ID
    const newPatient = { ...formData, id, feedback: "", medicine: "", fees: "" };
    setPatients([...patients, newPatient]);
    setCurrentPatient(newPatient); // Set the current patient for viewing details
    alert("Appointment booked successfully!");
    setFormData({ id: "", name: "", age: "", sex: "", sickness: "", date: "" });
  };

  return (
    <div className="container">
      <h2>Patient Dashboard</h2>
      <h3>Book Appointment</h3>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleInputChange}
      />
      <input
        type="number"
        name="age"
        placeholder="Age"
        value={formData.age}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="sex"
        placeholder="Sex"
        value={formData.sex}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="sickness"
        placeholder="Sickness"
        value={formData.sickness}
        onChange={handleInputChange}
      />
      <input
        type="date"
        name="date"
        value={formData.date}
        onChange={handleInputChange}
      />
      <button onClick={handleSubmit}>Book Appointment</button>

      {currentPatient && (
        <div className="medical-details">
          <h3>Medical Details</h3>
          <p>
            <strong>ID:</strong> {currentPatient.id}
          </p>
          <p>
            <strong>Name:</strong> {currentPatient.name}
          </p>
          <p>
            <strong>Age:</strong> {currentPatient.age}
          </p>
          <p>
            <strong>Sex:</strong> {currentPatient.sex}
          </p>
          <p>
            <strong>Sickness:</strong> {currentPatient.sickness}
          </p>
          <p>
            <strong>Date:</strong> {currentPatient.date}
          </p>
          <p>
            <strong>Doctor Feedback:</strong>{" "}
            {currentPatient.feedback || "No feedback yet"}
          </p>
          <p>
            <strong>Medicine:</strong>{" "}
            {currentPatient.medicine || "No medicine prescribed yet"}
          </p>
          <p>
            <strong>Fees:</strong> {currentPatient.fees || "Not specified"}
          </p>
        </div>
      )}
    </div>
  );
};

export default PatientDashboard;
