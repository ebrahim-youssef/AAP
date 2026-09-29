import React from "react";
export function ShelfEdge({ tone = "default", height = 4 }) {
  return React.createElement("div", { className: "aa-edge" + (tone === "inverse" ? " aa-edge--inverse" : ""), style: { height }, "aria-hidden": true },
    [0, 1, 2, 3].map(i => React.createElement("i", { key: i })));
}