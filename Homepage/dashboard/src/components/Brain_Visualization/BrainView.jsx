import { React, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import Brain from "../Brain_Visualization/Brain";
import "./BrainDecorator.css";

const BrainView = () => {
  // return (
  //   <div>
  //     <h1>Brain View</h1>
  //     {/* <div style={{ width: "100vw", height: "100vh" }}>
  //       <BrainSurface />
  //     </div> */}
  //     {/* <BrainData /> */}
  //   </div>
  // );

  return (
    <>
      <Canvas>
        <ambientLight intensity={2} />
        <OrbitControls />
        <Suspense fallback={null}>
          <Brain />
        </Suspense>
        <Environment preset="sunset" />
      </Canvas>
    </>
  );
};

export default BrainView;
