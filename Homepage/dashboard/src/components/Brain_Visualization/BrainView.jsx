import { React, Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import Brain from "../Brain_Visualization/Brain";
import "./BrainDecorator.css";

const BrainView = () => {
  const [rotationAxis, setRotationAxis] = useState(null); // State to track selected rotation axis

  const handleAxisRotation = (axis) => {
    if (rotationAxis === axis) {
      setRotationAxis(null); // Deselect axis if already selected
    } else {
      setRotationAxis(axis); // Select axis for rotation
    }
  };

  return (
    <div className="container">
      <div className="brain-container">
        <Canvas>
          <ambientLight intensity={2} />
          <OrbitControls />
          <Suspense fallback={null}>
            <Brain rotationAxis={rotationAxis} />
          </Suspense>
          <Environment preset="sunset" />
        </Canvas>
      </div>
      <div className="controls-container">
        <div className="controls">
          <h3>Autorotate</h3>
          <div className="button-container">
            <button
              onClick={() => handleAxisRotation("x")}
              className={rotationAxis === "x" ? "active" : ""}
            >
              X
            </button>
            <button
              onClick={() => handleAxisRotation("y")}
              className={rotationAxis === "y" ? "active" : ""}
            >
              Y
            </button>
            <button
              onClick={() => handleAxisRotation("z")}
              className={rotationAxis === "z" ? "active" : ""}
            >
              Z
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrainView;
