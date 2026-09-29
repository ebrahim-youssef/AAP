import React from "react";
import { Icon } from "../core/Icon.jsx";
import { StatusTag } from "../core/StatusTag.jsx";
import { Button } from "../core/Button.jsx";
export function BranchCard({ name, address, hours, phone, verified = false, onCall, onDirections, onWhatsApp }) {
  const row = (ic, t, ltr) => t && React.createElement("div", { className: "aa-branch__row" }, React.createElement(Icon, { name: ic, size: 16 }), React.createElement("span", { dir: ltr ? "ltr" : undefined }, t));
  return React.createElement("article", { className: "aa-branch" },
    React.createElement("div", { className: "aa-branch__h" }, React.createElement("h3", null, name), !verified && React.createElement(StatusTag, { status: "info" }, "بيانات تتوثّق")),
    verified ? [row("map-pin", address), row("clock", hours), row("phone", phone, true)].map((r, i) => r && React.cloneElement(r, { key: i }))
      : React.createElement("p", null, "العنوان والمواعيد والاتجاهات هتظهر هنا بعد ما نتأكد منها."),
    React.createElement("div", { className: "aa-branch__a" },
      React.createElement(Button, { size: "sm", icon: "message-circle", onClick: onWhatsApp }, "واتساب"),
      verified && React.createElement(Button, { size: "sm", variant: "secondary", icon: "phone", onClick: onCall }, "اتصل"),
      verified && React.createElement(Button, { size: "sm", variant: "secondary", icon: "navigation", onClick: onDirections }, "الاتجاهات")));
}