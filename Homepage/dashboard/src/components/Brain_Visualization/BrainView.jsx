import React from 'react';
import BrainSurface from './BrainSurface'; // Import your brain surface component
import BrainData from './BrainData';

const BrainView = () => {
  return (
    <div>
      <h1>Brain View</h1>
      {/* <BrainSurface /> */}
      <BrainData/>
    </div>
  );
};

export default BrainView;