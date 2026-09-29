import React from "react";
export function Wordmark({ tone = "brand", size = "md", english = false, href }) {
  const cls = ["aa-wm", tone === "inverse" && "aa-wm--inverse", size !== "md" && "aa-wm--" + size].filter(Boolean).join(" ");
  const kids = [
    React.createElement("strong", { key: "a" }, "علي أمين"),
    React.createElement("small", { key: "b" }, "صيدليات"),
    english && React.createElement("em", { key: "c" }, "ALI AMIN PHARMACIES")
  ];
  return React.createElement(href ? "a" : "span", { className: cls, href, "aria-label": "صيدليات علي أمين" }, kids);
}