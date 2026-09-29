import React from "react";
import { Icon } from "../core/Icon.jsx";
export function TopBar({ title, onBack, right, children }) {
  return React.createElement("div", { className: "aa-topbar" },
    onBack && React.createElement("button", { type: "button", className: "aa-topbar__back", onClick: onBack, "aria-label": "رجوع" }, React.createElement(Icon, { name: "arrow-right" })),
    children || React.createElement("span", { className: "aa-topbar__t" }, title), right);
}