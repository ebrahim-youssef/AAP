import React from "react";
export function Divider({ variant = "hairline" }) {
  return React.createElement("hr", { className: "aa-divider" + (variant === "band" ? " aa-divider--band" : ""), "aria-hidden": true });
}