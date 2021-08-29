import React from "react";
import { Vector3, Color3, Color4, TransformNode } from "@babylonjs/core";
import { useBeforeRender } from "react-babylonjs";
import { useRef } from "react";

const Nodes = (prop: { positions: number[][] }) => {
  var temp = prop.positions.map((position) => (
    <sphere
      name="sphere1"
      diameter={0.3}
      segments={16}
      position={new Vector3(position[0], position[1], position[2])}
    />
  ));
  return <transformNode name="tnode">{temp}</transformNode>;
};

export default Nodes;

// https://forum.babylonjs.com/t/how-to-create-local-axis-in-geometry-in-react-and-babylon/19263/5
