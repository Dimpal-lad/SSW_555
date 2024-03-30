import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Shape, ExtrudeGeometry, MeshLambertMaterial, Mesh } from "three";

function BrainCube() {
  const length = 14;
  const width = 6;
  const thickness = 2;

  // Define an irregular 2D polygon shape (similar to a brain section)
  const shape = new Shape();
  shape.moveTo(0, 0);
  shape.lineTo(length / 4, width);
  shape.lineTo((3 * length) / 4, width);
  shape.lineTo(length, 0);
  shape.lineTo(length / 2, -width);

  // Extrude the shape into 3D
  const extrudeSettings = {
    amount: thickness,
    bevelEnabled: false,
  };

  const material = new MeshLambertMaterial({ color: "pink" });
  const brainGeometry = new ExtrudeGeometry(shape, extrudeSettings);
  const brainMesh = new Mesh(brainGeometry, material);

  const meshRef = useRef();

  // Rotate the brain every frame
  useFrame((state, delta) => {
    meshRef.current.rotation.x += delta;
    meshRef.current.rotation.y += delta;
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <primitive object={brainMesh} />
    </mesh>
  );
}

export default BrainCube;
