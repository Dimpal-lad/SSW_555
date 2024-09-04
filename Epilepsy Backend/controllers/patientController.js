const PatientHistory = require("../models/PatientHistory");

// Controller to fetch all patient history records using async/await
exports.addPatient = async (req, res) => {
  if (!req.body.name || !req.body.age || !req.body.patient_history) {
    return res.status(400).json({ message: "Missing required fields" });
  }
  try {
    const { name, age, patient_history } = req.body;
    const newPatient = new PatientHistory({
      name,
      age,
      patient_history,
    });

    const savedPatient = await newPatient.save();
    res.status(201).json(savedPatient);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
exports.getAllPatientHistory = async (req, res) => {
  try {
    const history = await PatientHistory.find({});
    console.log("Patient History:", history); // Add this line for logging
    if (!history.length) {
      return res.status(404).json({ message: "No history found" });
    }
    res.json(history);
  } catch (err) {
    console.error("Error fetching history:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};
