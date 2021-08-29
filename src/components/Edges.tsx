import React from "react";
import { Vector3, Color3, Color4, TransformNode } from "@babylonjs/core";
import { useBeforeRender } from "react-babylonjs";
import { useRef } from "react";

const size = 2;
const shade = 0;
const rpm = 5;

const Edges = (prop: { speed: number; pos: number[] }) => {
  const centerTransform = useRef<TransformNode | null>(null);
  useBeforeRender((scene) => {
    var position: Vector3 = new Vector3(0, 0, 0);
    position.set(prop.pos[0], prop.pos[1], prop.pos[2]);

    if (centerTransform.current !== null) {
      centerTransform.current!.setPositionWithLocalVector(position);
      const deltaTimeInMillis = scene.getEngine().getDeltaTime();
      // centerTransform.current!.rotation.y +=
      //   ((prop.speed * rpm) / 60) * Math.PI * 2 * (deltaTimeInMillis / 1000);
    }
  });

  return (
    <transformNode ref={centerTransform} name="transform-node">
      <lines
        name="red-line"
        points={[
          Vector3.Zero(),
          new Vector3(size, 0, 0),
          new Vector3(size * 0.95, 0.05 * size, 0),
          new Vector3(size, 0, 0),
          new Vector3(size * 0.95, -0.05 * size, 0),
        ]}
        color={new Color3(1, shade, shade)}
      />
      <lines
        name="green-line"
        points={[
          Vector3.Zero(),
          new Vector3(0, size, 0),
          new Vector3(-0.05 * size, size * 0.95, 0),
          new Vector3(0, size, 0),
          new Vector3(0.05 * size, size * 0.95, 0),
        ]}
        color={new Color3(shade, 1, shade)}
      />
      <lines
        name="blue-line"
        points={[
          Vector3.Zero(),
          new Vector3(0, 0, size),
          new Vector3(0, -0.05 * size, size * 0.95),
          new Vector3(0, 0, size),
          new Vector3(0, 0.05 * size, size * 0.95),
        ]}
        color={new Color3(shade, shade, 1)}
      />
      <box
        name="color-box"
        faceColors={[
          new Color4(0, 0, 1), //Azul
          new Color4(1, 0, 0), //Vermelho
          new Color4(0, 0.5, 0), //Verde
          new Color4(1, 1, 1), //Branco
          new Color4(1, 1, 0), //Amarelo
          new Color4(0, 0, 0), //Preto
        ]}
      ></box>
    </transformNode>
  );
};

export default Edges;

// https://forum.babylonjs.com/t/how-to-create-local-axis-in-geometry-in-react-and-babylon/19263/5
