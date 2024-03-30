// import React from "react";
// import { render } from "@testing-library/react";
// import BrainCube from "../components/BrainCube";

// describe("BrainCube Component", () => {
//   it("renders without crashing", () => {
//     render(<BrainCube />);
//   });

//   it("rotates the brain mesh on each frame", () => {
//     jest.useFakeTimers(); // Mock timers for useFrame
//     const { container } = render(<BrainCube />);
//     const initialRotationX = container.firstChild.firstChild.rotation.x;
//     const initialRotationY = container.firstChild.firstChild.rotation.y;

//     jest.advanceTimersByTime(1000); // Advance time by 1 second
//     const finalRotationX = container.firstChild.firstChild.rotation.x;
//     const finalRotationY = container.firstChild.firstChild.rotation.y;

//     expect(finalRotationX).not.toBe(initialRotationX);
//     expect(finalRotationY).not.toBe(initialRotationY);
//   });

//   it("renders the brain mesh with correct dimensions and material", () => {
//     const { container } = render(<BrainCube />);
//     const mesh = container.querySelector("mesh");

//     expect(mesh).toBeInTheDocument();
//     expect(mesh).toHaveAttribute("position", "[0,0,0]");
//     expect(mesh).toContainHTML('material color="pink"');
//   });
// });
