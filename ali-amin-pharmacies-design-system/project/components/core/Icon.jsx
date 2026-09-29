import React from "react";

const BASE = "https://unpkg.com/lucide-static@0.454.0/icons/";
export function Icon({ name, size = 20, color, label, style, className = "" }) {
  return React.createElement("span", {
    className: "aa-icon " + className, role: label ? "img" : undefined, "aria-label": label, "aria-hidden": label ? undefined : true,
    style: { width: size, height: size, color, "--aa-icon": `url(${BASE}${name}.svg)`, ...style }
  });
}