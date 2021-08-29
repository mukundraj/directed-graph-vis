import React from "react";
import { Vector3, Color3, Color4, TransformNode } from "@babylonjs/core";
import { useBeforeRender } from "react-babylonjs";
import { useRef } from "react";

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

const Edges = (prop: { positions: number[][]; n_edges: number }) => {
  console.log(prop.positions.length);
  var n_nodes = prop.positions.length;

  var edge_ids: number[][] = new Array(prop.n_edges).fill(null).map(() => {
    return [getRandomInt(n_nodes), getRandomInt(n_nodes)];
  });

  var edges = edge_ids.map((idx) => {
    var id0: number = idx[0];
    var id1: number = idx[1];

    return (
      <lines
        name="red-line"
        points={[
          new Vector3(
            prop.positions[id0][0],
            prop.positions[id0][1],
            prop.positions[id0][2]
          ),
          new Vector3(
            prop.positions[id1][0],
            prop.positions[id1][1],
            prop.positions[id1][2]
          ),
        ]}
        color={new Color3(1, 1, 1)}
      />
    );
  });

  return <transformNode name="tnode">{edges}</transformNode>;
};

export default Edges;

// https://forum.babylonjs.com/t/how-to-create-local-axis-in-geometry-in-react-and-babylon/19263/5
