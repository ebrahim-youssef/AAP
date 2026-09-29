import React from "react";
export function StatusTag({ status = "check", children }) {
  const def = { check: "يلزم تأكيد", confirmed: "متأكدين", unavailable: "مش متاح", info: "معلومة" }[status];
  return React.createElement("span", { className: "aa-tag aa-tag--" + status }, children ?? def);
}