import React from "react";
import { Wordmark } from "../brand/Wordmark.jsx";
import { ShelfEdge } from "../brand/ShelfEdge.jsx";
import { BranchButton } from "./BranchButton.jsx";
export function AppHeader({ branch, onBranch, title, lede, children }) {
  return React.createElement("header", { className: "aa-apphd" },
    React.createElement("div", { className: "aa-apphd__in" },
      React.createElement("div", { className: "aa-apphd__top" }, React.createElement(Wordmark, { tone: "inverse" }), React.createElement(BranchButton, { branch, onClick: onBranch })),
      title && React.createElement("h1", null, title), lede && React.createElement("p", null, lede), children),
    React.createElement(ShelfEdge));
}