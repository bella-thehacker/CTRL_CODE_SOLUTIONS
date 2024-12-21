import React, { useState } from "react";
import { Text, useGLTF } from "@react-three/drei";

function VintageComputer() {
  const computer = useGLTF("/old_computer_v2.glb");
  const [message, setMessage] = useState("");

  const handleKeyboardClick = () => {
    setMessage("Hello");
    setTimeout(() => setMessage(""), 3000); // Clears the message after 3 seconds
  };

  return (
    <>
      {/* Computer Model */}
      <mesh onClick={handleKeyboardClick} position={[0, -0.5, 0]} scale={[10, 10, 10]}>
        <primitive object={computer.scene} />
      </mesh>

      {/* Floating Text */}
      {message && (
        <Text
          position={[0, 2, 0]} // Place text slightly above the computer
          fontSize={0.5}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          {message}
        </Text>
      )}
    </>
  );
}

export default VintageComputer;
