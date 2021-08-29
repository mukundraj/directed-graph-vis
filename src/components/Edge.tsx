import React from "react";
import { Vector3 } from "@babylonjs/core/Maths/math.vector";
import { Nullable } from "@babylonjs/core/types";
import { Mesh } from "@babylonjs/core/Meshes/mesh";
import { MeshBuilder } from "@babylonjs/core/Meshes/meshBuilder";

interface IPoints {
  pts: {
    p1: number[];
    p2: number[];
  };
}

const Edge: React.FC<IPoints> = (props: IPoints) => {
  // use data in props to format data needed by mesh component
  const myPoints = [
    new Vector3(-2, -1, 0),
    new Vector3(0, 1, 0),
    new Vector3(2, -1, 0),
  ];

  const lines = MeshBuilder.CreateLines("lines", { points: myPoints });

  // MeshBuilder.CreateGround("ground", { width: 6, height: 6 }, scene);

  return <div>asdf</div>;
};

export default Edge;

// https://doc.babylonjs.com/extensions/Babylon.js+ExternalLibraries/BabylonJS_and_ReactJS
