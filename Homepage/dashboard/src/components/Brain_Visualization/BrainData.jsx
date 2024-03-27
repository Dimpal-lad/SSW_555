import React from 'react';
import { Canvas } from 'react-three-fiber';
import { BufferGeometry, Float32BufferAttribute, MeshStandardMaterial, Mesh, Color } from 'three';
import brainData from '../Assets/brain_data.json'; // Adjust the path as necessary

const BrainMesh = ({ vertices, faces, activity }) => {
  const geometry = new BufferGeometry();
  geometry.setIndex(new Uint16Array(faces.flat()));
  geometry.setAttribute('position', new Float32BufferAttribute(new Float32Array(vertices.flat()), 3));
  geometry.computeVertexNormals();

  // Color mapping based on activity
  const colors = [];
  for (let i = 0; i < activity.length; i++) {
    const color = new Color();
    // Example mapping: normalize activity values to [0, 1] and map to HSL
    color.setHSL(activity[i] / Math.max(...activity), 1.0, 0.5);
    colors.push(color.r, color.g, color.b);
  }
  geometry.setAttribute('color', new Float32BufferAttribute(colors, 3));

  return (
    <mesh geometry={geometry}>
      <meshStandardMaterial vertexColors wireframe={false} />
    </mesh>
  );
};

const BrainData = () => {
  debugger
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <BrainMesh vertices={brainData.vertices} faces={brainData.faces} activity={brainData.activity} />
    </Canvas>
  );
};

export default BrainData;