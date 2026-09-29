import React from "react";
import { Icon } from "./Icon.jsx";
export function Button({ variant = "primary", size = "md", icon, iconEnd, block, disabled, loading, href, type = "button", onClick, children, style, className = "" }) {
  const cls = ["aa-btn", "aa-btn--" + variant, size === "sm" && "aa-btn--sm", block && "aa-btn--block", className].filter(Boolean).join(" ");
  const inner = [
    loading ? React.createElement("span", { key: "s", className: "aa-btn__spin", "aria-hidden": true }) : icon && React.createElement(Icon, { key: "i", name: icon, size: 20 }),
    React.createElement("span", { key: "t" }, children),
    iconEnd && !loading && React.createElement(Icon, { key: "e", name: iconEnd, size: 18 })
  ];
  if (href) return React.createElement("a", { className: cls, href, target: href.startsWith("http") ? "_blank" : undefined, rel: "noopener", style, onClick }, inner);
  return React.createElement("button", { className: cls, type, disabled: disabled || loading, "aria-busy": loading || undefined, onClick, style }, inner);
}