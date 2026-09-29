import React from "react";
import { Icon } from "../core/Icon.jsx";
export function PriceTag({ price, currency = "ج.م", label = "آخر سعر معروف", updatedAt, branch, status = "check", statusLabel, size = "lg" }) {
  const def = { check: "يلزم تأكيد", confirmed: "متأكدين", unavailable: "مش متاح" }[status];
  const has = price !== undefined && price !== null && price !== "";
  return React.createElement("div", { className: "aa-price aa-price--" + size },
    React.createElement("div", { className: "aa-price__top" },
      React.createElement("div", null, React.createElement("small", null, label), has ? React.createElement("b", null, price) : React.createElement("b", { className: "aa-price__none" }, "مفيش سعر حديث")),
      has && React.createElement("span", null, currency)),
    React.createElement("div", { className: "aa-rail" },
      React.createElement("span", null, React.createElement(Icon, { name: "clock", size: 14 }), updatedAt || "وقت التحديث غير معروف"),
      branch && React.createElement("span", null, branch),
      React.createElement("span", { className: "aa-rail__status aa-rail__status--" + status }, statusLabel || def)));
}