import { Fragment, jsxDEV } from "react/jsx-dev-runtime";
import React from "react";
import {
  AbsoluteFill,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
  staticFile,
  Audio,
  spring
} from "remotion";
import { ThreeCanvas, useGLTF, useThree } from "@remotion/three";
import {
  PerspectiveCamera,
  DirectionalLight,
  AmbientLight,
  GridHelper
} from "three";
const modelUrl = staticFile("robot.glb");
const Scene = () => {
  const frame = useCurrentFrame();
  const { gltf, mixer } = useGLTF(modelUrl);
  const { camera } = useThree();
  if (mixer) {
    mixer.setTime(frame / 30);
  }
  const cameraZoom = spring({
    frame,
    fps: 30,
    from: 0,
    to: 1,
    durationInFrames: 60,
    config: {
      damping: 200
    }
  });
  camera.position.z = interpolate(cameraZoom, [0, 1], [5, 3]);
  camera.position.y = interpolate(cameraZoom, [0, 1], [3, 1]);
  camera.lookAt(0, 0.5, 0);
  const modelRotation = interpolate(frame, [0, 210], [0, Math.PI * 0.25]);
  return /* @__PURE__ */ jsxDEV(Fragment, { children: [
    /* @__PURE__ */ jsxDEV(AmbientLight, { intensity: 0.8 }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 49,
      columnNumber: 7
    }),
    /* @__PURE__ */ jsxDEV(DirectionalLight, { position: [10, 10, 5], intensity: 1.5 }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 50,
      columnNumber: 7
    }),
    /* @__PURE__ */ jsxDEV(GridHelper, { args: [10, 10] }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 51,
      columnNumber: 7
    }),
    gltf && /* @__PURE__ */ jsxDEV(
      "primitive",
      {
        object: gltf.scene,
        scale: 1,
        "position-y": -1,
        "rotation-y": modelRotation
      },
      void 0,
      false,
      {
        fileName: "<stdin>",
        lineNumber: 53,
        columnNumber: 9
      }
    )
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 48,
    columnNumber: 5
  });
};
const Title = ({ text, style }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const scale = spring({
    frame,
    fps,
    config: {
      damping: 200,
      stiffness: 100
    }
  });
  const opacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateRight: "clamp"
  });
  return /* @__PURE__ */ jsxDEV("h1", { style: {
    ...style,
    transform: `scale(${scale})`,
    opacity
  }, children: text }, void 0, false, {
    fileName: "<stdin>",
    lineNumber: 82,
    columnNumber: 9
  });
};
const MyComposition = () => {
  return /* @__PURE__ */ jsxDEV(AbsoluteFill, { style: { backgroundColor: "#2a2a2a" }, children: [
    /* @__PURE__ */ jsxDEV(
      ThreeCanvas,
      {
        linear: true,
        camera: new PerspectiveCamera(75, 1080 / 1080, 0.1, 1e3),
        children: /* @__PURE__ */ jsxDEV(Scene, {}, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 100,
          columnNumber: 9
        })
      },
      void 0,
      false,
      {
        fileName: "<stdin>",
        lineNumber: 96,
        columnNumber: 7
      }
    ),
    /* @__PURE__ */ jsxDEV(AbsoluteFill, { style: {
      justifyContent: "center",
      alignItems: "center",
      padding: "2rem",
      textAlign: "center"
    }, children: /* @__PURE__ */ jsxDEV(Title, { style: {
      fontFamily: "Arial, sans-serif",
      fontSize: "96px",
      color: "white",
      fontWeight: "bold",
      textShadow: "0 0 10px rgba(0,0,0,0.5)"
    }, children: "Animated Mesh" }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 108,
      columnNumber: 9
    }) }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 102,
      columnNumber: 7
    }),
    /* @__PURE__ */ jsxDEV(Audio, { src: staticFile("whoosh.mp3") }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 118,
      columnNumber: 7
    })
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 95,
    columnNumber: 5
  });
};
export {
  MyComposition
};
