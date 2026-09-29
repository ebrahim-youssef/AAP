import React from "react";
import { Icon } from "../core/Icon.jsx";
const DEF = [{ id: "home", icon: "house", label: "الرئيسية" }, { id: "search", icon: "search", label: "بحث" }, { id: "pharmacist", icon: "message-circle", label: "صيدلي" }, { id: "branches", icon: "map-pin", label: "الفروع" }];
export function TabBar({ active = "home", onChange, items = DEF, style }) {
  return React.createElement("nav", { className: "aa-tabs", "aria-label": "التنقل الرئيسي", style }, items.map(t =>
    React.createElement("button", { key: t.id, type: "button", className: t.id === active ? "on" : "", "aria-current": t.id === active ? "page" : undefined, onClick: () => onChange && onChange(t.id) },
      React.createElement(Icon, { name: t.icon }), t.label)));
}