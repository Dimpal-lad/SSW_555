import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

export default function Model({ rotationAxis, selectedGrids }) {
  const { nodes, materials } = useGLTF("/brain.gltf");
  const brainRef = useRef();
  const gridRefs = {
    x: useRef(),
    y: useRef(),
    z: useRef(),
  };

  useFrame((state, delta) => {
    const adjustedDelta = delta * 0.15;

    if (rotationAxis === "auto") {
      brainRef.current.rotation.y += adjustedDelta;
      Object.values(gridRefs).forEach((gridRef) => {
        gridRef.current.rotation.y += adjustedDelta;
      });
    } else if (rotationAxis) {
      brainRef.current.rotation[rotationAxis] += adjustedDelta;
      gridRefs[rotationAxis].current.rotation[rotationAxis] += adjustedDelta;
    }
  });

  return (
    <group dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        {/* Brain Model */}
        <mesh
          geometry={nodes.defaultMaterial.geometry}
          material={materials.Hj__rna3_1}
          rotation={[Math.PI / 2, 0, 0]}
          scale={2}
          ref={brainRef}
        />
        {/* Grids */}
        <mesh ref={gridRefs.x} visible={selectedGrids.includes("x")}>
          {/* X Grid */}
          <gridHelper args={[4.75, 20]} rotation={[0, 0, 0]} />
        </mesh>
        <mesh ref={gridRefs.y} visible={selectedGrids.includes("y")}>
          {/* Y Grid */}
          <gridHelper args={[4.75, 20]} rotation={[0, 0, Math.PI / 2]} />
        </mesh>
        <mesh ref={gridRefs.z} visible={selectedGrids.includes("z")}>
          {/* Z Grid */}
          <gridHelper args={[4.75, 20]} rotation={[Math.PI / 2, 0, 0]} />
        </mesh>
      </group>
    </group>
  );
}

useGLTF.preload("/brain.gltf");
