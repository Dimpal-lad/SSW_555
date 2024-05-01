import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './SurgeonDashboard.css';
import Sidebar from '../../Sidebar';
import Navigation from '../../Navigation';
import NewPatientModal from './NewPatientModal';

const SurgeonDashboard = ({ isLoggedIn, setIsLoggedIn }) => {
  const [patients, setPatients] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);


  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/patient-history');
        setPatients(response.data);
      } catch (error) {
        console.error('Error fetching patients:', error);
      }
    };
    fetchPatients();
  }, []);
  const addPatient = async (patient) => {
    debugger
    console.log(patient)
    try {
      const response = await axios.post('http://localhost:3000/api/add-patient', patient);
      // Optionally, fetch all patients again to ensure the list is up-to-date
      fetchPatients();
    } catch (error) {
      console.error('Failed to add patient:', error);
    }
  };
  
  const fetchPatients = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/patient-history');
      setPatients(response.data);
    } catch (error) {
      console.error('Error fetching patients:', error);
    }
  };
  const handleUpdate = (patient) => {
    console.log('Updating patient:', patient);
  };

  return (
    <div className="surgeon-dashboard">
      <Navigation isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Sidebar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <div className="surgeon-content">
      <div className="header-with-button">
          <h2>Surgeon Dashboard</h2>
          <button onClick={() => setIsModalOpen(true)}>Add New Patient</button>
        </div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>History</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {patients.map(patient => (
              <tr key={patient._id}>
                <td>{patient.name}</td>
                <td>{patient.age}</td>
                <td>{patient.patient_history}</td>
                <td>
                  <a href="/brain-view">
                    <button className="btn-brainview">Brain View</button>
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <NewPatientModal isOpen={isModalOpen} closeModal={() => setIsModalOpen(false)} addPatient={addPatient} />

    </div>
  );
};

export default SurgeonDashboard;
