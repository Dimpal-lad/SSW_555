import { React, Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import Brain from "../Brain_Visualization/Brain";
import "./BrainDecorator.css";

const BrainView = () => {
  const [rotationAxis, setRotationAxis] = useState(null); // State to track selected rotation axis
  const [selectedGrids, setSelectedGrids] = useState([]);

  const handleGridRotation = (grid) => {
    setSelectedGrids((prevSelectedGrids) => {
      if (prevSelectedGrids.includes(grid)) {
        // Deselect Grid if already selected
        return prevSelectedGrids.filter((selected) => selected !== grid);
      } else {
        // Select Grid for rotation
        return [...prevSelectedGrids, grid];
      }
    });
  };

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
          <ambientLight />
          <OrbitControls />
          <Suspense fallback={null}>
            <Brain rotationAxis={rotationAxis} selectedGrids={selectedGrids} />
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
        <div className="controls">
          <h3>Grid View</h3>
          <div className="button-container">
            <button
              onClick={() => handleGridRotation("x")}
              className={selectedGrids.includes("x") ? "active" : ""}
            >
              X
            </button>
            <button
              onClick={() => handleGridRotation("y")}
              className={selectedGrids.includes("y") ? "active" : ""}
            >
              Y
            </button>
            <button
              onClick={() => handleGridRotation("z")}
              className={selectedGrids.includes("z") ? "active" : ""}
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
