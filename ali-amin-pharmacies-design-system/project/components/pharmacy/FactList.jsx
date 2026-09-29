import React from "react";
export function FactList({ items = [] }) {
  return React.createElement("dl", { className: "aa-facts" }, items.map((it, i) =>
    React.createElement("div", { key: i }, React.createElement("dt", null, it.label), React.createElement("dd", { dir: it.ltr ? "ltr" : undefined }, it.value))));
}