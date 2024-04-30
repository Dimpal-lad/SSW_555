import React, { useState } from 'react';
import './NewPatientModal.css';

const NewPatientModal = ({ isOpen, closeModal, addPatient }) => {
  const [patientName, setPatientName] = useState('');
  const [patientAge, setPatientAge] = useState('');
  const [patientHistory, setPatientHistory] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    addPatient({
      name: patientName,
      age: parseInt(patientAge, 10), // Ensure age is an integer
      patient_history: patientHistory
    });
    closeModal(); // Close the modal after submission
  };

  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close-button" onClick={closeModal}>&times;</span>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" value={patientName} onChange={(e) => setPatientName(e.target.value)} required />
          </label>
          <label>
            Age:
            <input type="number" value={patientAge} onChange={(e) => setPatientAge(e.target.value)} required />
          </label>
          <label>
            Patient History:
            <textarea value={patientHistory} onChange={(e) => setPatientHistory(e.target.value)} required />
          </label>
          <button type="submit">Add Patient</button>
        </form>
      </div>
    </div>
  );
};

export default NewPatientModal;  // Make sure this line is included
