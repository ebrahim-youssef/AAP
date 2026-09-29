import React from "react";
import { Icon } from "../core/Icon.jsx";
export function Sheet({ open, title, description, onClose, children, footer }) {
  React.useEffect(() => { if (!open) return; const k = e => e.key === "Escape" && onClose && onClose(); window.addEventListener("keydown", k); return () => window.removeEventListener("keydown", k); }, [open]);
  return React.createElement("div", { className: "aa-sheet" + (open ? " aa-sheet--open" : ""), "aria-hidden": !open },
    React.createElement("div", { className: "aa-sheet__dim", onClick: onClose }),
    React.createElement("div", { className: "aa-sheet__p", role: "dialog", "aria-modal": true, "aria-label": title },
      React.createElement("div", { className: "aa-sheet__grab" }),
      React.createElement("div", { className: "aa-sheet__h" }, React.createElement("h2", null, title),
        onClose && React.createElement("button", { type: "button", className: "aa-sheet__x", onClick: onClose, "aria-label": "إغلاق" }, React.createElement(Icon, { name: "x", size: 18 }))),
      description && React.createElement("p", { className: "aa-sheet__d" }, description), children,
      footer && React.createElement("div", { className: "aa-sheet__f" }, footer)));
}
export function MessagePreview({ label = "الرسالة", children }) {
  return React.createElement("div", { className: "aa-msg" }, React.createElement("small", null, label), children);
}