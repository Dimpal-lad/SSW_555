// src/BrainModel.js
import React from 'react';

function BrainModel() {
  return (
    <div id="brain-model">
      <img src={`${process.env.PUBLIC_URL}/a1.gif`} alt="Brain 3D" />
    </div>
  );
}

export default BrainModel;
