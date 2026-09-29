import React from "react";
import { StatusTag } from "../core/StatusTag.jsx";
export function ProductRow({ name, latin, price, currency = "ج.م", updatedAt, status = "check", statusLabel, onClick }) {
  const has = price !== undefined && price !== null && price !== "";
  return React.createElement("button", { type: "button", className: "aa-prow", onClick },
    React.createElement("div", null,
      React.createElement("h3", null, name),
      latin && React.createElement("p", null, latin),
      React.createElement("div", { className: "aa-prow__meta" },
        React.createElement("span", null, has ? "محدّث " + (updatedAt || "—") : "اسأل الصيدلي عن السعر"),
        has && React.createElement(StatusTag, { status }, statusLabel))),
    React.createElement("div", { className: "aa-prow__p" }, has ? [React.createElement("b", { key: "b" }, price), React.createElement("small", { key: "s" }, currency)] : React.createElement("em", null, "مفيش سعر حديث")));
}