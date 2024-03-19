// src/BrainModel.js
import React from 'react';

function BrainModel() {
  return (
    <div id="brain-model">
      <img src={`${process.env.PUBLIC_URL}/a1.gif`} alt="Brain 3D" />
      <p style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
        An electroencephalogram (EEG) is a test that measures the electrical activity of the brain. Using small, flat
        metal discs (electrodes) attached to the scalp, EEG can help diagnose conditions such as seizures, epilepsy,
        head injuries, dizziness, headaches, brain tumors, and sleeping problems. It can also be used to confirm brain
        death in a comatose patient.
      </p>
    </div>
    
  );
}

export default BrainModel;
