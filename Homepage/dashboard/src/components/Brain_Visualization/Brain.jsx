import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

export default function Model({ rotationAxis }) {
  const { nodes, materials } = useGLTF("/brain.gltf");
  const brainRef = useRef();

  useFrame((state, delta) => {
    if (rotationAxis === "auto") {
      brainRef.current.rotation.y += delta;
    } else if (rotationAxis) {
      brainRef.current.rotation[rotationAxis] += delta;
    }
  });

  return (
    <group dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          geometry={nodes.defaultMaterial.geometry}
          material={materials.Hj__rna3_1}
          rotation={[Math.PI / 2, 0, 0]}
          scale={2}
          ref={brainRef}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/brain.gltf");