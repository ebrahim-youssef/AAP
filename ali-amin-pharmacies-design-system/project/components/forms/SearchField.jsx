import React from "react";
import { Icon } from "../core/Icon.jsx";
export function SearchField({ value, defaultValue, placeholder = "اسم الدواء أو المادة الفعالة", onChange, onSubmit, onClear, variant = "onBrand", submitLabel, autoFocus, label = "ابحث عن دواء", style }) {
  const [v, setV] = React.useState(defaultValue ?? "");
  const val = value ?? v;
  const set = x => { if (value === undefined) setV(x); onChange && onChange(x); };
  return React.createElement("form", { role: "search", className: "aa-search aa-search--" + variant, style, onSubmit: e => { e.preventDefault(); onSubmit && onSubmit(val); } },
    React.createElement(Icon, { name: "search" }),
    React.createElement("input", { type: "search", "aria-label": label, placeholder, value: val, autoFocus, onChange: e => set(e.target.value) }),
    val && React.createElement("button", { type: "button", className: "aa-search__clear", "aria-label": "امسح", onClick: () => { set(""); onClear && onClear(); } }, React.createElement(Icon, { name: "x", size: 18 })),
    submitLabel && React.createElement("button", { type: "submit", className: "aa-search__go" }, submitLabel));
}