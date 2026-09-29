import React from "react";
export function RadioRow({ checked, title, description, onSelect }) {
  return React.createElement("button", { type: "button", role: "radio", "aria-checked": !!checked, className: "aa-radio" + (checked ? " aa-radio--on" : ""), onClick: onSelect },
    React.createElement("span", { className: "aa-radio__dot" }),
    React.createElement("span", null, React.createElement("b", null, title), description && React.createElement("small", null, description)));
}