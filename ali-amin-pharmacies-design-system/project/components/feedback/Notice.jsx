import React from "react";
import { Icon } from "../core/Icon.jsx";
export function Notice({ tone = "note", boxed, children }) {
  const ic = { note: "info", warning: "clock", danger: "triangle-alert" }[tone];
  return React.createElement("div", { className: "aa-notice aa-notice--" + tone + (boxed ? " aa-notice--boxed" : ""), role: tone === "danger" ? "alert" : "note" },
    React.createElement(Icon, { name: ic, size: 16 }), React.createElement("span", null, children));
}