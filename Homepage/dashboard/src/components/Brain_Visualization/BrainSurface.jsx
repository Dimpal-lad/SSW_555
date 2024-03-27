// import React from 'react';
// import { Canvas } from 'react-three-fiber';



// const BrainSurface = () => {
//   return (
//     <Canvas>
//       <ambientLight intensity={0.5} />
//       <pointLight position={[10, 10, 10]} />
//       {/* Placeholder mesh (replace with your actual brain model) */}
//       <mesh>
//         <boxGeometry args={[2, 2, 2]} />
//         <meshBasicMaterial wireframe color="skyblue" />
//       </mesh>
//     </Canvas>
//   );
// };
// export default BrainSurface;



import React, { useEffect, useState } from 'react';
import { Canvas } from 'react-three-fiber';
import { BufferGeometry, Float32BufferAttribute, MeshBasicMaterial, Mesh } from 'three';
import axios from 'axios';


const BrainMesh = ({ vertices, faces }) => {
  // Convert faces array for Three.js (if necessary)
  const indices = faces.flat(); // Assuming faces is an array of arrays
  const position = vertices.flat(); // Flatten vertices for BufferGeometry
  
  const geometry = new BufferGeometry();
  geometry.setIndex(indices);
  geometry.setAttribute('position', new Float32BufferAttribute(position, 3));
  geometry.computeVertexNormals(); // Optional, for lighting
  
  return (
    <mesh geometry={geometry}>
      <meshStandardMaterial color={'gray'} wireframe />
    </mesh>
  );
};

const BrainSurface = () => {
  const [modelData, setModelData] = useState(null);

  useEffect(() => {
    // Fetch your JSON data here
    const fetchData = async () => {
      const response = await axios.get('C:/Project/SSW_555/Homepage/dashboard/src/components/Assets/brain_data.json'); // Adjust URL as needed
      setModelData(response.data);
    };
    fetchData();
  }, []);

  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      {modelData && <BrainMesh vertices={modelData.vertices} faces={modelData.faces} />}
    </Canvas>
  );
};

export default BrainSurface;
