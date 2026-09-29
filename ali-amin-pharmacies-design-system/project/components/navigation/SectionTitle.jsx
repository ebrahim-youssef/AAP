import React from "react";
export function SectionTitle({ children, action, onAction }) {
  return React.createElement("h2", { className: "aa-sectitle" }, React.createElement("span", null, children),
    action && React.createElement("button", { type: "button", onClick: onAction }, action));
}