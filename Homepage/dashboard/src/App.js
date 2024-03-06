// src/App.js
import React from 'react';
import Navigation from './Navigation';
import BrainModel from './BrainModel';
import './App.css'; // Make sure you have this file for CSS

const App = () => {
  return (
    <div className="App">
      <Navigation />
      <BrainModel />
      <p style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
        An electroencephalogram (EEG) is a test that measures the electrical activity of the brain. Using small, flat
        metal discs (electrodes) attached to the scalp, EEG can help diagnose conditions such as seizures, epilepsy,
        head injuries, dizziness, headaches, brain tumors, and sleeping problems. It can also be used to confirm brain
        death in a comatose patient.
      </p>
    </div>
  );
};

export default App;
