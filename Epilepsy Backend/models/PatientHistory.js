const mongoose = require('mongoose');

const patientHistorySchema = new mongoose.Schema({
  name: {
    type: String,
  },
  age: {
    type: Number,
  },
  patient_history: {
    type: String,
  },
  // Add more fields as needed
}, { 
    timestamps: true,
    versionKey: false,
    collection: "patientdetails",
    dbName: "epilepsy",
 }); // Adding timestamps for createdAt and updatedAt

module.exports = mongoose.model("PatientHistory", patientHistorySchema);
