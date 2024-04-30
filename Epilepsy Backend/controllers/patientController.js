const PatientHistory = require('../models/PatientHistory');

// Controller to fetch all patient history records using async/await
// Controller to fetch all patient history records using async/await
exports.getAllPatientHistory = async (req, res) => {
    try {
      const history = await PatientHistory.find({});
      console.log('Patient History:', history); // Add this line for logging
      if (!history.length) {
          return res.status(404).json({ message: 'No history found' });
      }
      res.json(history);
    } catch (err) {
      console.error('Error fetching history:', err);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
