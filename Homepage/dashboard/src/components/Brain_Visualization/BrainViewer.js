import React from "react";
import { Canvas } from "@react-three/fiber";
import BrainCube from "./BrainCube"; // Adjust the path based on your project structure

const surfaceData = {
  geometry: {
    // Define your surface geometry here, for example:
    vertices: [],
    faces: [],
  },
};

function BrainViewer() {
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <BrainCube surfaceData={surfaceData} />
    </div>
  );
}

export default BrainViewer;
