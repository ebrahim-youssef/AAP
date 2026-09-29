import React from "react";
import { Icon } from "../core/Icon.jsx";
export function BranchButton({ branch = "اختار الفرع", tone = "onBrand", onClick }) {
  return React.createElement("button", { type: "button", className: "aa-bbtn" + (tone === "light" ? " aa-bbtn--light" : ""), onClick, "aria-label": "الفرع: " + branch },
    React.createElement(Icon, { name: "map-pin", size: 15 }), React.createElement("span", null, branch), React.createElement(Icon, { name: "chevron-down", size: 15 }));
}