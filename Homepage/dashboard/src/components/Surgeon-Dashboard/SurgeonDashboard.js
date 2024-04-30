import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './SurgeonDashboard.css';
import Sidebar from '../../Sidebar';
import Navigation from '../../Navigation';

const SurgeonDashboard = ({ isLoggedIn, setIsLoggedIn }) => {
  const [patients, setPatients] = useState([]);

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

  const handleUpdate = (patient) => {
    console.log('Updating patient:', patient);
  };

  return (
    <div className="surgeon-dashboard">
      <Navigation isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Sidebar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <div className="surgeon-content">
        <h2>Surgeon Dashboard</h2>
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
    </div>
  );
};

export default SurgeonDashboard;
