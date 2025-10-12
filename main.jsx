import { jsxDEV } from "react/jsx-dev-runtime";
import React from "react";
import { createRoot } from "react-dom/client";
import { Player } from "@websim/remotion/player";
import { MyComposition } from "./composition.jsx";
const App = () => {
  return /* @__PURE__ */ jsxDEV(
    Player,
    {
      component: MyComposition,
      durationInFrames: 210,
      fps: 30,
      compositionWidth: 1080,
      compositionHeight: 1080,
      loop: true,
      controls: true,
      autoplay: true,
      style: {
        width: "100%",
        height: "100%",
        maxWidth: "1080px",
        maxHeight: "1080px",
        aspectRatio: "1 / 1"
      }
    },
    void 0,
    false,
    {
      fileName: "<stdin>",
      lineNumber: 8,
      columnNumber: 5
    }
  );
};
createRoot(document.getElementById("app")).render(/* @__PURE__ */ jsxDEV(App, {}, void 0, false, {
  fileName: "<stdin>",
  lineNumber: 28,
  columnNumber: 51
}));
