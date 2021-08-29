import React, { useState, useRef } from "react";

import "@babylonjs/core/Physics/physicsEngineComponent"; // side-effect adds scene.enablePhysics function

import { Vector3 } from "@babylonjs/core/Maths/math.vector";
import { Nullable } from "@babylonjs/core/types";
import { Mesh } from "@babylonjs/core/Meshes/mesh";
import { Color3 } from "@babylonjs/core/Maths/math.color";
import { FresnelParameters } from "@babylonjs/core/Materials/fresnelParameters";

import { Scene, Engine } from "react-babylonjs";
import "./App.css";
import Nodes from "./components/Nodes";
import Edges from "./components/Edges";
import ColorBox from "./components/colorbox";

const App: React.FC = () => {
  let sphereRef = useRef<Nullable<Mesh>>();

  const randomPosition = () => [
    (Math.random() - 0.5) * 3,
    (Math.random() - 0.5) * 3,
    (Math.random() - 0.5) * 3,
  ];

  const positions = new Array(40).fill(null).map(randomPosition);

  console.log(randomPosition);
  console.log(positions);

  var temp = positions.map((position) => (
    <sphere
      name="sphere1"
      diameter={0.1}
      segments={16}
      position={new Vector3(position[0], position[1], position[2])}
    />
  ));
  console.log(temp);
  return (
    <div className="App">
      <header className="App-header">
        {/* <p>@babylonjs + `react-babylonjs`</p> */}
        <Engine
          antialias={true}
          adaptToDeviceRatio={false}
          canvasId="sample-canvas"
          height={400}
          width={600}
        >
          <Scene>
            <arcRotateCamera
              name="arc"
              target={new Vector3(0, 0, 0)}
              alpha={-Math.PI / 2}
              beta={0.5 + Math.PI / 4}
              radius={4}
              minZ={0.001}
              wheelPrecision={50}
              lowerRadiusLimit={8}
              upperRadiusLimit={20}
              upperBetaLimit={Math.PI / 2}
            />
            <directionalLight
              name="shadow-light"
              setDirectionToTarget={[Vector3.Zero()]}
              direction={Vector3.Zero()}
              position={new Vector3(-40, 30, -40)}
              intensity={0.4}
              shadowMinZ={1}
              shadowMaxZ={2500}
            ></directionalLight>
            {/* <ColorBox speed={10} pos={[-1, 3, 1]} /> */}
            <Nodes positions={positions} />
            <Edges positions={positions} n_edges={20} />

            {/* <sphere */}
            {/*   ref={sphereRef} */}
            {/*   name="sphere1" */}
            {/*   diameter={0.5} */}
            {/*   segments={16} */}
            {/*   position={new Vector3(3.0, 3.0, 3)} */}
            {/* > */}
            {/*   <standardMaterial */}
            {/*     name="material1" */}
            {/*     specularPower={16} */}
            {/*     diffuseColor={Color3.Black()} */}
            {/*     emissiveColor={new Color3(0.9, 0.5, 0.5)} */}
            {/*     reflectionFresnelParameters={FresnelParameters.Parse({ */}
            {/*       isEnabled: true, */}
            {/*       leftColor: [1, 1, 1], */}
            {/*       rightColor: [0, 0, 0], */}
            {/*       bias: 0.1, */}
            {/*       power: 1, */}
            {/*     })} */}
            {/*   /> */}
            {/* </sphere> */}
          </Scene>
        </Engine>
      </header>
    </div>
  );
};
export default App;

// https://stackoverflow.com/questions/22876978/loop-inside-react-jsx
