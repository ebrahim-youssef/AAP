import React from "react";
import { Icon } from "../core/Icon.jsx";
export function ListLink({ icon, title, description, href, onClick }) {
  return React.createElement(href ? "a" : "button", { className: "aa-link", href, type: href ? undefined : "button", onClick },
    icon && React.createElement(Icon, { name: icon }),
    React.createElement("span", { className: "aa-link__t" }, React.createElement("b", null, title), description && React.createElement("small", null, description)),
    React.createElement(Icon, { name: "chevron-left", size: 18 }));
}