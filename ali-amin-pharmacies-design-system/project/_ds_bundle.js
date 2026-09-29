/* @ds-bundle: {"format":4,"namespace":"DesignSystem_032903","components":[{"name":"ShelfEdge","sourcePath":"components/brand/ShelfEdge.jsx"},{"name":"Wordmark","sourcePath":"components/brand/Wordmark.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Divider","sourcePath":"components/core/Divider.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"StatusTag","sourcePath":"components/core/StatusTag.jsx"},{"name":"Notice","sourcePath":"components/feedback/Notice.jsx"},{"name":"Sheet","sourcePath":"components/feedback/Sheet.jsx"},{"name":"MessagePreview","sourcePath":"components/feedback/Sheet.jsx"},{"name":"RadioRow","sourcePath":"components/forms/RadioRow.jsx"},{"name":"SearchField","sourcePath":"components/forms/SearchField.jsx"},{"name":"AppHeader","sourcePath":"components/navigation/AppHeader.jsx"},{"name":"BranchButton","sourcePath":"components/navigation/BranchButton.jsx"},{"name":"ListLink","sourcePath":"components/navigation/ListLink.jsx"},{"name":"SectionTitle","sourcePath":"components/navigation/SectionTitle.jsx"},{"name":"TabBar","sourcePath":"components/navigation/TabBar.jsx"},{"name":"TopBar","sourcePath":"components/navigation/TopBar.jsx"},{"name":"BranchCard","sourcePath":"components/pharmacy/BranchCard.jsx"},{"name":"FactList","sourcePath":"components/pharmacy/FactList.jsx"},{"name":"PriceTag","sourcePath":"components/pharmacy/PriceTag.jsx"},{"name":"ProductRow","sourcePath":"components/pharmacy/ProductRow.jsx"}],"sourceHashes":{"components/brand/ShelfEdge.jsx":"5552f8e28a52","components/brand/Wordmark.jsx":"492625fbf502","components/core/Button.jsx":"25dc89eeb93c","components/core/Divider.jsx":"3b67f696988e","components/core/Icon.jsx":"626f92759bbb","components/core/StatusTag.jsx":"b92941e7334b","components/feedback/Notice.jsx":"25bcf81e223f","components/feedback/Sheet.jsx":"f9bf671634e2","components/forms/RadioRow.jsx":"0b854323e138","components/forms/SearchField.jsx":"03a54a461411","components/navigation/AppHeader.jsx":"956edebfad0d","components/navigation/BranchButton.jsx":"47d6440b33ff","components/navigation/ListLink.jsx":"656a4d0a4682","components/navigation/SectionTitle.jsx":"85838fc2bd49","components/navigation/TabBar.jsx":"69f80809f6b5","components/navigation/TopBar.jsx":"e6c6b4197c52","components/pharmacy/BranchCard.jsx":"886cbdcfbcbe","components/pharmacy/FactList.jsx":"e641ea96bf5c","components/pharmacy/PriceTag.jsx":"6d2b031cb3d8","components/pharmacy/ProductRow.jsx":"8eb5cd9f673c","ui_kits/website/BranchesScreen.jsx":"bee981309905","ui_kits/website/ConfirmSheet.jsx":"62feed8673b1","ui_kits/website/DesktopApp.jsx":"0235c1aa07c1","ui_kits/website/HomeScreen.jsx":"6dad60001eb1","ui_kits/website/MobileApp.jsx":"2284efd0b30c","ui_kits/website/PharmacistScreen.jsx":"7a0a275471d4","ui_kits/website/ProductScreen.jsx":"61e7d5d8f0b6","ui_kits/website/ResultsScreen.jsx":"f2abe9592dad","ui_kits/website/data.js":"33bca8a69092"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.DesignSystem_032903 = window.DesignSystem_032903 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/ShelfEdge.jsx
try { (() => {
function ShelfEdge({
  tone = "default",
  height = 4
}) {
  return React.createElement("div", {
    className: "aa-edge" + (tone === "inverse" ? " aa-edge--inverse" : ""),
    style: {
      height
    },
    "aria-hidden": true
  }, [0, 1, 2, 3].map(i => React.createElement("i", {
    key: i
  })));
}
Object.assign(__ds_scope, { ShelfEdge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/ShelfEdge.jsx", error: String((e && e.message) || e) }); }

// components/brand/Wordmark.jsx
try { (() => {
function Wordmark({
  tone = "brand",
  size = "md",
  english = false,
  href
}) {
  const cls = ["aa-wm", tone === "inverse" && "aa-wm--inverse", size !== "md" && "aa-wm--" + size].filter(Boolean).join(" ");
  const kids = [React.createElement("strong", {
    key: "a"
  }, "علي أمين"), React.createElement("small", {
    key: "b"
  }, "صيدليات"), english && React.createElement("em", {
    key: "c"
  }, "ALI AMIN PHARMACIES")];
  return React.createElement(href ? "a" : "span", {
    className: cls,
    href,
    "aria-label": "صيدليات علي أمين"
  }, kids);
}
Object.assign(__ds_scope, { Wordmark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Wordmark.jsx", error: String((e && e.message) || e) }); }

// components/core/Divider.jsx
try { (() => {
function Divider({
  variant = "hairline"
}) {
  return React.createElement("hr", {
    className: "aa-divider" + (variant === "band" ? " aa-divider--band" : ""),
    "aria-hidden": true
  });
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Divider.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
const BASE = "https://unpkg.com/lucide-static@0.454.0/icons/";
function Icon({
  name,
  size = 20,
  color,
  label,
  style,
  className = ""
}) {
  return React.createElement("span", {
    className: "aa-icon " + className,
    role: label ? "img" : undefined,
    "aria-label": label,
    "aria-hidden": label ? undefined : true,
    style: {
      width: size,
      height: size,
      color,
      "--aa-icon": `url(${BASE}${name}.svg)`,
      ...style
    }
  });
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function Button({
  variant = "primary",
  size = "md",
  icon,
  iconEnd,
  block,
  disabled,
  loading,
  href,
  type = "button",
  onClick,
  children,
  style,
  className = ""
}) {
  const cls = ["aa-btn", "aa-btn--" + variant, size === "sm" && "aa-btn--sm", block && "aa-btn--block", className].filter(Boolean).join(" ");
  const inner = [loading ? React.createElement("span", {
    key: "s",
    className: "aa-btn__spin",
    "aria-hidden": true
  }) : icon && React.createElement(__ds_scope.Icon, {
    key: "i",
    name: icon,
    size: 20
  }), React.createElement("span", {
    key: "t"
  }, children), iconEnd && !loading && React.createElement(__ds_scope.Icon, {
    key: "e",
    name: iconEnd,
    size: 18
  })];
  if (href) return React.createElement("a", {
    className: cls,
    href,
    target: href.startsWith("http") ? "_blank" : undefined,
    rel: "noopener",
    style,
    onClick
  }, inner);
  return React.createElement("button", {
    className: cls,
    type,
    disabled: disabled || loading,
    "aria-busy": loading || undefined,
    onClick,
    style
  }, inner);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/StatusTag.jsx
try { (() => {
function StatusTag({
  status = "check",
  children
}) {
  const def = {
    check: "يلزم تأكيد",
    confirmed: "متأكدين",
    unavailable: "مش متاح",
    info: "معلومة"
  }[status];
  return React.createElement("span", {
    className: "aa-tag aa-tag--" + status
  }, children ?? def);
}
Object.assign(__ds_scope, { StatusTag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/StatusTag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Notice.jsx
try { (() => {
function Notice({
  tone = "note",
  boxed,
  children
}) {
  const ic = {
    note: "info",
    warning: "clock",
    danger: "triangle-alert"
  }[tone];
  return React.createElement("div", {
    className: "aa-notice aa-notice--" + tone + (boxed ? " aa-notice--boxed" : ""),
    role: tone === "danger" ? "alert" : "note"
  }, React.createElement(__ds_scope.Icon, {
    name: ic,
    size: 16
  }), React.createElement("span", null, children));
}
Object.assign(__ds_scope, { Notice });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Notice.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Sheet.jsx
try { (() => {
function Sheet({
  open,
  title,
  description,
  onClose,
  children,
  footer
}) {
  React.useEffect(() => {
    if (!open) return;
    const k = e => e.key === "Escape" && onClose && onClose();
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, [open]);
  return React.createElement("div", {
    className: "aa-sheet" + (open ? " aa-sheet--open" : ""),
    "aria-hidden": !open
  }, React.createElement("div", {
    className: "aa-sheet__dim",
    onClick: onClose
  }), React.createElement("div", {
    className: "aa-sheet__p",
    role: "dialog",
    "aria-modal": true,
    "aria-label": title
  }, React.createElement("div", {
    className: "aa-sheet__grab"
  }), React.createElement("div", {
    className: "aa-sheet__h"
  }, React.createElement("h2", null, title), onClose && React.createElement("button", {
    type: "button",
    className: "aa-sheet__x",
    onClick: onClose,
    "aria-label": "إغلاق"
  }, React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 18
  }))), description && React.createElement("p", {
    className: "aa-sheet__d"
  }, description), children, footer && React.createElement("div", {
    className: "aa-sheet__f"
  }, footer)));
}
function MessagePreview({
  label = "الرسالة",
  children
}) {
  return React.createElement("div", {
    className: "aa-msg"
  }, React.createElement("small", null, label), children);
}
Object.assign(__ds_scope, { Sheet, MessagePreview });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Sheet.jsx", error: String((e && e.message) || e) }); }

// components/forms/RadioRow.jsx
try { (() => {
function RadioRow({
  checked,
  title,
  description,
  onSelect
}) {
  return React.createElement("button", {
    type: "button",
    role: "radio",
    "aria-checked": !!checked,
    className: "aa-radio" + (checked ? " aa-radio--on" : ""),
    onClick: onSelect
  }, React.createElement("span", {
    className: "aa-radio__dot"
  }), React.createElement("span", null, React.createElement("b", null, title), description && React.createElement("small", null, description)));
}
Object.assign(__ds_scope, { RadioRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/RadioRow.jsx", error: String((e && e.message) || e) }); }

// components/forms/SearchField.jsx
try { (() => {
function SearchField({
  value,
  defaultValue,
  placeholder = "اسم الدواء أو المادة الفعالة",
  onChange,
  onSubmit,
  onClear,
  variant = "onBrand",
  submitLabel,
  autoFocus,
  label = "ابحث عن دواء",
  style
}) {
  const [v, setV] = React.useState(defaultValue ?? "");
  const val = value ?? v;
  const set = x => {
    if (value === undefined) setV(x);
    onChange && onChange(x);
  };
  return React.createElement("form", {
    role: "search",
    className: "aa-search aa-search--" + variant,
    style,
    onSubmit: e => {
      e.preventDefault();
      onSubmit && onSubmit(val);
    }
  }, React.createElement(__ds_scope.Icon, {
    name: "search"
  }), React.createElement("input", {
    type: "search",
    "aria-label": label,
    placeholder,
    value: val,
    autoFocus,
    onChange: e => set(e.target.value)
  }), val && React.createElement("button", {
    type: "button",
    className: "aa-search__clear",
    "aria-label": "امسح",
    onClick: () => {
      set("");
      onClear && onClear();
    }
  }, React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 18
  })), submitLabel && React.createElement("button", {
    type: "submit",
    className: "aa-search__go"
  }, submitLabel));
}
Object.assign(__ds_scope, { SearchField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/SearchField.jsx", error: String((e && e.message) || e) }); }

// components/navigation/BranchButton.jsx
try { (() => {
function BranchButton({
  branch = "اختار الفرع",
  tone = "onBrand",
  onClick
}) {
  return React.createElement("button", {
    type: "button",
    className: "aa-bbtn" + (tone === "light" ? " aa-bbtn--light" : ""),
    onClick,
    "aria-label": "الفرع: " + branch
  }, React.createElement(__ds_scope.Icon, {
    name: "map-pin",
    size: 15
  }), React.createElement("span", null, branch), React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 15
  }));
}
Object.assign(__ds_scope, { BranchButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/BranchButton.jsx", error: String((e && e.message) || e) }); }

// components/navigation/AppHeader.jsx
try { (() => {
function AppHeader({
  branch,
  onBranch,
  title,
  lede,
  children
}) {
  return React.createElement("header", {
    className: "aa-apphd"
  }, React.createElement("div", {
    className: "aa-apphd__in"
  }, React.createElement("div", {
    className: "aa-apphd__top"
  }, React.createElement(__ds_scope.Wordmark, {
    tone: "inverse"
  }), React.createElement(__ds_scope.BranchButton, {
    branch,
    onClick: onBranch
  })), title && React.createElement("h1", null, title), lede && React.createElement("p", null, lede), children), React.createElement(__ds_scope.ShelfEdge));
}
Object.assign(__ds_scope, { AppHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/AppHeader.jsx", error: String((e && e.message) || e) }); }

// components/navigation/ListLink.jsx
try { (() => {
function ListLink({
  icon,
  title,
  description,
  href,
  onClick
}) {
  return React.createElement(href ? "a" : "button", {
    className: "aa-link",
    href,
    type: href ? undefined : "button",
    onClick
  }, icon && React.createElement(__ds_scope.Icon, {
    name: icon
  }), React.createElement("span", {
    className: "aa-link__t"
  }, React.createElement("b", null, title), description && React.createElement("small", null, description)), React.createElement(__ds_scope.Icon, {
    name: "chevron-left",
    size: 18
  }));
}
Object.assign(__ds_scope, { ListLink });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/ListLink.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SectionTitle.jsx
try { (() => {
function SectionTitle({
  children,
  action,
  onAction
}) {
  return React.createElement("h2", {
    className: "aa-sectitle"
  }, React.createElement("span", null, children), action && React.createElement("button", {
    type: "button",
    onClick: onAction
  }, action));
}
Object.assign(__ds_scope, { SectionTitle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SectionTitle.jsx", error: String((e && e.message) || e) }); }

// components/navigation/TabBar.jsx
try { (() => {
const DEF = [{
  id: "home",
  icon: "house",
  label: "الرئيسية"
}, {
  id: "search",
  icon: "search",
  label: "بحث"
}, {
  id: "pharmacist",
  icon: "message-circle",
  label: "صيدلي"
}, {
  id: "branches",
  icon: "map-pin",
  label: "الفروع"
}];
function TabBar({
  active = "home",
  onChange,
  items = DEF,
  style
}) {
  return React.createElement("nav", {
    className: "aa-tabs",
    "aria-label": "التنقل الرئيسي",
    style
  }, items.map(t => React.createElement("button", {
    key: t.id,
    type: "button",
    className: t.id === active ? "on" : "",
    "aria-current": t.id === active ? "page" : undefined,
    onClick: () => onChange && onChange(t.id)
  }, React.createElement(__ds_scope.Icon, {
    name: t.icon
  }), t.label)));
}
Object.assign(__ds_scope, { TabBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/TabBar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/TopBar.jsx
try { (() => {
function TopBar({
  title,
  onBack,
  right,
  children
}) {
  return React.createElement("div", {
    className: "aa-topbar"
  }, onBack && React.createElement("button", {
    type: "button",
    className: "aa-topbar__back",
    onClick: onBack,
    "aria-label": "رجوع"
  }, React.createElement(__ds_scope.Icon, {
    name: "arrow-right"
  })), children || React.createElement("span", {
    className: "aa-topbar__t"
  }, title), right);
}
Object.assign(__ds_scope, { TopBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/TopBar.jsx", error: String((e && e.message) || e) }); }

// components/pharmacy/BranchCard.jsx
try { (() => {
function BranchCard({
  name,
  address,
  hours,
  phone,
  verified = false,
  onCall,
  onDirections,
  onWhatsApp
}) {
  const row = (ic, t, ltr) => t && React.createElement("div", {
    className: "aa-branch__row"
  }, React.createElement(__ds_scope.Icon, {
    name: ic,
    size: 16
  }), React.createElement("span", {
    dir: ltr ? "ltr" : undefined
  }, t));
  return React.createElement("article", {
    className: "aa-branch"
  }, React.createElement("div", {
    className: "aa-branch__h"
  }, React.createElement("h3", null, name), !verified && React.createElement(__ds_scope.StatusTag, {
    status: "info"
  }, "بيانات تتوثّق")), verified ? [row("map-pin", address), row("clock", hours), row("phone", phone, true)].map((r, i) => r && React.cloneElement(r, {
    key: i
  })) : React.createElement("p", null, "العنوان والمواعيد والاتجاهات هتظهر هنا بعد ما نتأكد منها."), React.createElement("div", {
    className: "aa-branch__a"
  }, React.createElement(__ds_scope.Button, {
    size: "sm",
    icon: "message-circle",
    onClick: onWhatsApp
  }, "واتساب"), verified && React.createElement(__ds_scope.Button, {
    size: "sm",
    variant: "secondary",
    icon: "phone",
    onClick: onCall
  }, "اتصل"), verified && React.createElement(__ds_scope.Button, {
    size: "sm",
    variant: "secondary",
    icon: "navigation",
    onClick: onDirections
  }, "الاتجاهات")));
}
Object.assign(__ds_scope, { BranchCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/pharmacy/BranchCard.jsx", error: String((e && e.message) || e) }); }

// components/pharmacy/FactList.jsx
try { (() => {
function FactList({
  items = []
}) {
  return React.createElement("dl", {
    className: "aa-facts"
  }, items.map((it, i) => React.createElement("div", {
    key: i
  }, React.createElement("dt", null, it.label), React.createElement("dd", {
    dir: it.ltr ? "ltr" : undefined
  }, it.value))));
}
Object.assign(__ds_scope, { FactList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/pharmacy/FactList.jsx", error: String((e && e.message) || e) }); }

// components/pharmacy/PriceTag.jsx
try { (() => {
function PriceTag({
  price,
  currency = "ج.م",
  label = "آخر سعر معروف",
  updatedAt,
  branch,
  status = "check",
  statusLabel,
  size = "lg"
}) {
  const def = {
    check: "يلزم تأكيد",
    confirmed: "متأكدين",
    unavailable: "مش متاح"
  }[status];
  const has = price !== undefined && price !== null && price !== "";
  return React.createElement("div", {
    className: "aa-price aa-price--" + size
  }, React.createElement("div", {
    className: "aa-price__top"
  }, React.createElement("div", null, React.createElement("small", null, label), has ? React.createElement("b", null, price) : React.createElement("b", {
    className: "aa-price__none"
  }, "مفيش سعر حديث")), has && React.createElement("span", null, currency)), React.createElement("div", {
    className: "aa-rail"
  }, React.createElement("span", null, React.createElement(__ds_scope.Icon, {
    name: "clock",
    size: 14
  }), updatedAt || "وقت التحديث غير معروف"), branch && React.createElement("span", null, branch), React.createElement("span", {
    className: "aa-rail__status aa-rail__status--" + status
  }, statusLabel || def)));
}
Object.assign(__ds_scope, { PriceTag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/pharmacy/PriceTag.jsx", error: String((e && e.message) || e) }); }

// components/pharmacy/ProductRow.jsx
try { (() => {
function ProductRow({
  name,
  latin,
  price,
  currency = "ج.م",
  updatedAt,
  status = "check",
  statusLabel,
  onClick
}) {
  const has = price !== undefined && price !== null && price !== "";
  return React.createElement("button", {
    type: "button",
    className: "aa-prow",
    onClick
  }, React.createElement("div", null, React.createElement("h3", null, name), latin && React.createElement("p", null, latin), React.createElement("div", {
    className: "aa-prow__meta"
  }, React.createElement("span", null, has ? "محدّث " + (updatedAt || "—") : "اسأل الصيدلي عن السعر"), has && React.createElement(__ds_scope.StatusTag, {
    status
  }, statusLabel))), React.createElement("div", {
    className: "aa-prow__p"
  }, has ? [React.createElement("b", {
    key: "b"
  }, price), React.createElement("small", {
    key: "s"
  }, currency)] : React.createElement("em", null, "مفيش سعر حديث")));
}
Object.assign(__ds_scope, { ProductRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/pharmacy/ProductRow.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/BranchesScreen.jsx
try { (() => {
function BranchesScreen({
  onBack,
  onAsk
}) {
  const {
    TopBar,
    Notice,
    BranchCard
  } = window.DesignSystem_032903;
  return /*#__PURE__*/React.createElement("div", {
    className: "kit-scroll"
  }, /*#__PURE__*/React.createElement(TopBar, {
    title: "\u0627\u0644\u0641\u0631\u0648\u0639",
    onBack: onBack
  }), /*#__PURE__*/React.createElement(Notice, null, "\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0641\u0631\u0648\u0639 \u0628\u062A\u062A\u0648\u062B\u0651\u0642. \u0645\u0634 \u0647\u0646\u0639\u0631\u0636 \u0639\u0646\u0648\u0627\u0646 \u0623\u0648 \u0645\u0648\u0627\u0639\u064A\u062F \u0623\u0648 \u062A\u0648\u0635\u064A\u0644 \u063A\u064A\u0631 \u0644\u0645\u0627 \u064A\u0643\u0648\u0646\u0648\u0627 \u0645\u0624\u0643\u062F\u064A\u0646."), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 16,
      display: "grid",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(BranchCard, {
    name: "\u0641\u0631\u0639 \u0643\u0641\u0631 \u0627\u0644\u062C\u0645\u0627\u0644",
    onWhatsApp: onAsk
  }), /*#__PURE__*/React.createElement(BranchCard, {
    name: "\u0641\u0631\u0639 \u0625\u0636\u0627\u0641\u064A",
    onWhatsApp: onAsk
  })));
}
window.BranchesScreen = BranchesScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/BranchesScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ConfirmSheet.jsx
try { (() => {
function ConfirmSheet({
  open,
  product,
  branchId,
  onBranch,
  onClose
}) {
  const {
    Sheet,
    RadioRow,
    MessagePreview,
    Button
  } = window.DesignSystem_032903;
  const D = window.AA_DATA;
  const b = D.branches.find(x => x.id === branchId);
  const subject = product ? product.name + (product.latin ? " — " + product.latin.split("· ")[1] : "") : "سؤال للصيدلي";
  const text = "مساء الخير، عايز أتأكد من توفر " + subject + " في " + (b.id === "near" ? "أقرب فرع ليا" : b.name) + ".";
  return /*#__PURE__*/React.createElement(Sheet, {
    open: open,
    title: "\u062A\u0623\u0643\u064A\u062F \u0627\u0644\u062A\u0648\u0641\u0631",
    description: "\u0627\u062E\u062A\u0627\u0631 \u0627\u0644\u0641\u0631\u0639\u060C \u0648\u0647\u0646\u062C\u0647\u0632\u0644\u0643 \u0631\u0633\u0627\u0644\u0629 \u062A\u0642\u062F\u0631 \u062A\u0639\u062F\u0651\u0644\u0647\u0627 \u0642\u0628\u0644 \u0645\u0627 \u062A\u0628\u0639\u062A.",
    onClose: onClose,
    footer: /*#__PURE__*/React.createElement(Button, {
      block: true,
      iconEnd: "arrow-left",
      href: D.waLink(text)
    }, "\u0627\u0641\u062A\u062D \u0648\u0627\u062A\u0633\u0627\u0628")
  }, /*#__PURE__*/React.createElement("div", {
    role: "radiogroup",
    "aria-label": "\u0627\u0644\u0641\u0631\u0639"
  }, D.branches.map(x => /*#__PURE__*/React.createElement(RadioRow, {
    key: x.id,
    checked: x.id === branchId,
    title: x.name,
    description: x.desc || "بيانات الفرع بتتوثّق",
    onSelect: () => onBranch(x.id)
  }))), /*#__PURE__*/React.createElement(MessagePreview, null, text));
}
window.ConfirmSheet = ConfirmSheet;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ConfirmSheet.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/DesktopApp.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function DesktopHeader({
  branch,
  nav,
  onNav,
  onSearch,
  query,
  hero
}) {
  const {
    Wordmark,
    BranchButton,
    SearchField,
    ShelfEdge
  } = window.DesignSystem_032903;
  const items = [["home", "الرئيسية"], ["results", "بحث"], ["pharmacist", "اسأل صيدلي"], ["branches", "الفروع"]];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      background: "var(--surface-brand)",
      color: "#fff"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "dk-w",
    style: {
      height: 72,
      display: "flex",
      alignItems: "center",
      gap: 36
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav("home");
    }
  }, /*#__PURE__*/React.createElement(Wordmark, {
    tone: "inverse"
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      flex: 1,
      display: "flex",
      gap: 28
    }
  }, items.map(([id, l]) => /*#__PURE__*/React.createElement("button", {
    key: id,
    onClick: () => onNav(id),
    className: "dk-nav" + (nav === id ? " on" : "")
  }, l))), !hero && /*#__PURE__*/React.createElement(SearchField, {
    key: query,
    defaultValue: query,
    onSubmit: onSearch,
    style: {
      width: 340,
      height: 42
    }
  }), /*#__PURE__*/React.createElement(BranchButton, {
    branch: branch
  })), hero && /*#__PURE__*/React.createElement("div", {
    className: "dk-w",
    style: {
      padding: "36px 0 44px"
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: "0 0 8px",
      fontSize: "var(--text-display)",
      fontWeight: 800,
      lineHeight: 1.25
    }
  }, "\u062F\u0648\u0651\u0631 \u0628\u0627\u0644\u0627\u0633\u0645\u060C \u0648\u0627\u0639\u0631\u0641 \u0642\u0628\u0644 \u0645\u0627 \u062A\u062A\u062D\u0631\u0643."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 22px",
      fontSize: 16,
      opacity: .9
    }
  }, "\u0622\u062E\u0631 \u0633\u0639\u0631 \u0645\u0639\u0631\u0648\u0641 \u0648\u0648\u0642\u062A \u062A\u062D\u062F\u064A\u062B\u0647\u060C \u0648\u0628\u0639\u062F\u0647\u0627 \u0646\u0623\u0643\u062F\u0644\u0643 \u0627\u0644\u062A\u0648\u0641\u0631 \u0645\u0646 \u0627\u0644\u0641\u0631\u0639."), /*#__PURE__*/React.createElement(SearchField, {
    submitLabel: "\u0627\u0628\u062D\u062B",
    onSubmit: onSearch,
    style: {
      maxWidth: 620,
      height: 58
    }
  })), /*#__PURE__*/React.createElement(ShelfEdge, null));
}
function DesktopApp() {
  const NS = window.DesignSystem_032903;
  const {
    SectionTitle,
    ProductRow,
    ListLink,
    PriceTag,
    FactList,
    Button,
    RadioRow,
    MessagePreview,
    Notice,
    BranchCard
  } = NS;
  const D = window.AA_DATA;
  const [s, setS] = React.useState({
    view: "home",
    query: "",
    product: null,
    confirm: false,
    branchId: "kg"
  });
  const up = x => setS(o => ({
    ...o,
    ...x
  }));
  const branch = D.branches.find(b => b.id === s.branchId);
  const search = q => {
    const r = D.search(q || "كونكور");
    up({
      view: "results",
      query: q || "كونكور",
      product: r[0] || null,
      confirm: false
    });
  };
  const results = D.search(s.query);
  const help = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SectionTitle, null, "\u0645\u062D\u062A\u0627\u062C \u062D\u062F \u064A\u0633\u0627\u0639\u062F\u0643\u061F"), /*#__PURE__*/React.createElement(ListLink, {
    icon: "message-circle",
    title: "\u0627\u0633\u0623\u0644 \u0635\u064A\u062F\u0644\u064A",
    description: "\u0627\u0628\u0639\u062A \u0627\u0644\u0627\u0633\u0645 \u0623\u0648 \u0633\u0624\u0627\u0644\u0643 \u0639\u0644\u0649 \u0648\u0627\u062A\u0633\u0627\u0628",
    onClick: () => up({
      view: "pharmacist"
    })
  }), /*#__PURE__*/React.createElement(ListLink, {
    icon: "map-pin",
    title: "\u0627\u0644\u0641\u0631\u0648\u0639",
    description: "\u0627\u0644\u0639\u0646\u0648\u0627\u0646 \u0648\u0627\u0644\u0645\u0648\u0627\u0639\u064A\u062F \u0648\u0627\u0644\u0627\u062A\u062C\u0627\u0647\u0627\u062A",
    onClick: () => up({
      view: "branches"
    })
  }));
  const p = s.product;
  const text = p ? "مساء الخير، عايز أتأكد من توفر " + p.name + " في " + (branch.id === "near" ? "أقرب فرع ليا" : branch.name) + "." : "";
  return /*#__PURE__*/React.createElement("div", {
    className: "aa-root",
    style: {
      minHeight: "100vh",
      background: "#fff"
    }
  }, /*#__PURE__*/React.createElement(DesktopHeader, {
    branch: branch.short,
    nav: s.view,
    onNav: v => v === "results" ? search(s.query) : up({
      view: v
    }),
    onSearch: search,
    query: s.query,
    hero: s.view === "home"
  }), s.view === "home" && /*#__PURE__*/React.createElement("div", {
    className: "dk-w dk-g"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionTitle, {
    action: "\u0627\u0644\u0643\u0644",
    onAction: () => search("كونكور")
  }, "\u0622\u062E\u0631 \u0627\u0644\u0644\u064A \u062F\u0648\u0651\u0631\u062A \u0639\u0644\u064A\u0647"), D.products.slice(0, 4).map(x => /*#__PURE__*/React.createElement(ProductRow, _extends({
    key: x.id
  }, x, {
    onClick: () => up({
      view: "results",
      query: "كونكور",
      product: x
    })
  })))), /*#__PURE__*/React.createElement("div", null, help)), s.view === "results" && /*#__PURE__*/React.createElement("div", {
    className: "dk-w dk-g",
    style: {
      gridTemplateColumns: "minmax(0,1fr) 440px"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Notice, null, results.length, " \u0646\u062A\u0627\u064A\u062C \u0644\u0640 \xAB", s.query, "\xBB \xB7 \u062F\u064A \u0622\u062E\u0631 \u0645\u0639\u0644\u0648\u0645\u0629 \u0645\u0639\u0631\u0648\u0641\u0629\u060C \u0645\u0634 \u0645\u062E\u0632\u0648\u0646 \u0644\u062D\u0638\u064A"), results.map(x => /*#__PURE__*/React.createElement("div", {
    key: x.id,
    className: x === p ? "dk-sel" : ""
  }, /*#__PURE__*/React.createElement(ProductRow, _extends({}, x, {
    onClick: () => up({
      product: x,
      confirm: false
    })
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 16
    }
  }), help), p && /*#__PURE__*/React.createElement("aside", {
    style: {
      border: "1px solid var(--border-hairline)",
      borderRadius: 10,
      padding: 24,
      alignSelf: "start",
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: "var(--text-h1)",
      fontWeight: 800,
      color: "var(--text-brand)"
    }
  }, p.name), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "5px 0 18px",
      fontSize: 13,
      color: "var(--text-secondary)",
      direction: "ltr",
      textAlign: "right"
    }
  }, p.latin), /*#__PURE__*/React.createElement(PriceTag, {
    price: p.price,
    updatedAt: p.price ? p.updatedAt : undefined,
    branch: branch.short,
    status: p.price ? "check" : "unavailable",
    statusLabel: p.price ? undefined : "اسأل الصيدلي"
  }), /*#__PURE__*/React.createElement(FactList, {
    items: p.facts.map(([label, value, ltr]) => ({
      label,
      value,
      ltr: !!ltr
    }))
  }), !s.confirm ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 8,
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement(Button, {
    block: true,
    icon: "message-circle",
    onClick: () => up({
      confirm: true
    })
  }, "\u0623\u0643\u062F \u0627\u0644\u062A\u0648\u0641\u0631 \u0639\u0644\u0649 \u0648\u0627\u062A\u0633\u0627\u0628"), /*#__PURE__*/React.createElement(Button, {
    block: true,
    variant: "secondary",
    onClick: () => up({
      view: "pharmacist"
    })
  }, "\u0627\u0633\u0623\u0644 \u0635\u064A\u062F\u0644\u064A")) : /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18,
      borderTop: "1px solid var(--border-hairline)",
      paddingTop: 16
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: "0 0 6px",
      fontSize: 17,
      fontWeight: 800,
      color: "var(--text-brand)"
    }
  }, "\u0627\u062E\u062A\u0627\u0631 \u0627\u0644\u0641\u0631\u0639"), /*#__PURE__*/React.createElement("div", {
    role: "radiogroup",
    style: {
      margin: "0 -16px"
    }
  }, D.branches.map(b => /*#__PURE__*/React.createElement(RadioRow, {
    key: b.id,
    checked: b.id === s.branchId,
    title: b.name,
    description: b.desc || "بيانات الفرع بتتوثّق",
    onSelect: () => up({
      branchId: b.id
    })
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: "0 -16px"
    }
  }, /*#__PURE__*/React.createElement(MessagePreview, null, text)), /*#__PURE__*/React.createElement(Button, {
    block: true,
    iconEnd: "arrow-left",
    href: D.waLink(text)
  }, "\u0627\u0641\u062A\u062D \u0648\u0627\u062A\u0633\u0627\u0628")))), s.view === "pharmacist" && /*#__PURE__*/React.createElement("div", {
    className: "dk-w",
    style: {
      padding: "32px 0",
      maxWidth: 720
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: "0 0 8px",
      fontSize: 30,
      fontWeight: 800,
      color: "var(--text-brand)"
    }
  }, "\u0641\u064A \u0623\u0633\u0626\u0644\u0629 \u0645\u062D\u062A\u0627\u062C\u0629 \u0634\u062E\u0635 \u0641\u0627\u0647\u0645."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text-secondary)",
      margin: "0 0 20px"
    }
  }, "\u0627\u0628\u0639\u062A \u0627\u0633\u0645 \u0627\u0644\u062F\u0648\u0627\u0621 \u0623\u0648 \u0633\u0624\u0627\u0644\u0643\u060C \u0648\u0635\u064A\u062F\u0644\u064A \u0647\u064A\u0631\u062F \u0639\u0644\u064A\u0643 \u0639\u0644\u0649 \u0648\u0627\u062A\u0633\u0627\u0628."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Button, {
    icon: "message-circle",
    href: D.waLink("مساء الخير، عندي سؤال للصيدلي.")
  }, "\u0627\u0628\u0639\u062A \u0639\u0644\u0649 \u0648\u0627\u062A\u0633\u0627\u0628")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement(Notice, {
    tone: "danger",
    boxed: true
  }, "\u0644\u0648 \u0641\u064A \u0636\u064A\u0642 \u0646\u0641\u0633 \u0623\u0648 \u0623\u0644\u0645 \u0641\u064A \u0627\u0644\u0635\u062F\u0631 \u0623\u0648 \u0625\u063A\u0645\u0627\u0621\u060C \u0631\u0648\u062D \u0627\u0644\u0637\u0648\u0627\u0631\u0626 \u0641\u0648\u0631\u064B\u0627."))), s.view === "branches" && /*#__PURE__*/React.createElement("div", {
    className: "dk-w",
    style: {
      padding: "32px 0"
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: "0 0 16px",
      fontSize: 30,
      fontWeight: 800,
      color: "var(--text-brand)"
    }
  }, "\u0627\u0644\u0641\u0631\u0648\u0639"), /*#__PURE__*/React.createElement(Notice, {
    boxed: true
  }, "\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0641\u0631\u0648\u0639 \u0628\u062A\u062A\u0648\u062B\u0651\u0642. \u0645\u0634 \u0647\u0646\u0639\u0631\u0636 \u0639\u0646\u0648\u0627\u0646 \u0623\u0648 \u0645\u0648\u0627\u0639\u064A\u062F \u063A\u064A\u0631 \u0644\u0645\u0627 \u064A\u0643\u0648\u0646\u0648\u0627 \u0645\u0624\u0643\u062F\u064A\u0646."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill,minmax(320px,1fr))",
      gap: 16,
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement(BranchCard, {
    name: "\u0641\u0631\u0639 \u0643\u0641\u0631 \u0627\u0644\u062C\u0645\u0627\u0644"
  }), /*#__PURE__*/React.createElement(BranchCard, {
    name: "\u0641\u0631\u0639 \u0625\u0636\u0627\u0641\u064A"
  }))));
}
window.DesktopApp = DesktopApp;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/DesktopApp.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomeScreen.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function HomeScreen({
  branch,
  recents,
  onSearch,
  onOpen,
  onTab,
  onBranch
}) {
  const {
    AppHeader,
    SearchField,
    SectionTitle,
    ProductRow,
    Divider,
    ListLink
  } = window.DesignSystem_032903;
  return /*#__PURE__*/React.createElement("div", {
    className: "kit-scroll"
  }, /*#__PURE__*/React.createElement(AppHeader, {
    branch: branch.short,
    onBranch: onBranch
  }, /*#__PURE__*/React.createElement(SearchField, {
    onSubmit: onSearch
  })), /*#__PURE__*/React.createElement(SectionTitle, {
    action: "\u0627\u0644\u0643\u0644",
    onAction: () => onSearch("كونكور")
  }, "\u0622\u062E\u0631 \u0627\u0644\u0644\u064A \u062F\u0648\u0651\u0631\u062A \u0639\u0644\u064A\u0647"), recents.map(p => /*#__PURE__*/React.createElement(ProductRow, _extends({
    key: p.id
  }, p, {
    onClick: () => onOpen(p)
  }))), /*#__PURE__*/React.createElement(Divider, {
    variant: "band"
  }), /*#__PURE__*/React.createElement(SectionTitle, null, "\u0645\u062D\u062A\u0627\u062C \u062D\u062F \u064A\u0633\u0627\u0639\u062F\u0643\u061F"), /*#__PURE__*/React.createElement(ListLink, {
    icon: "message-circle",
    title: "\u0627\u0633\u0623\u0644 \u0635\u064A\u062F\u0644\u064A",
    description: "\u0627\u0628\u0639\u062A \u0627\u0644\u0627\u0633\u0645 \u0623\u0648 \u0633\u0624\u0627\u0644\u0643 \u0639\u0644\u0649 \u0648\u0627\u062A\u0633\u0627\u0628",
    onClick: () => onTab("pharmacist")
  }), /*#__PURE__*/React.createElement(ListLink, {
    icon: "map-pin",
    title: "\u0627\u0644\u0641\u0631\u0648\u0639",
    description: "\u0627\u0644\u0639\u0646\u0648\u0627\u0646 \u0648\u0627\u0644\u0645\u0648\u0627\u0639\u064A\u062F \u0648\u0627\u0644\u0627\u062A\u062C\u0627\u0647\u0627\u062A",
    onClick: () => onTab("branches")
  }));
}
window.HomeScreen = HomeScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/MobileApp.jsx
try { (() => {
function MobileApp() {
  const {
    TabBar
  } = window.DesignSystem_032903;
  const D = window.AA_DATA;
  const [s, setS] = React.useState({
    tab: "home",
    view: "home",
    query: "",
    product: null,
    sheet: false,
    branchId: "kg"
  });
  const up = x => setS(o => ({
    ...o,
    ...x
  }));
  const branch = D.branches.find(b => b.id === s.branchId);
  const search = q => up({
    tab: "search",
    view: "results",
    query: q || "كونكور"
  });
  const open = p => up({
    view: "product",
    product: p
  });
  const tab = t => up({
    tab: t,
    view: t === "search" ? "results" : t,
    query: t === "search" ? s.query || "كونكور" : s.query,
    sheet: false
  });
  const home = () => up({
    tab: "home",
    view: "home"
  });
  let screen;
  if (s.view === "home") screen = /*#__PURE__*/React.createElement(HomeScreen, {
    branch: branch,
    recents: D.products.slice(0, 2),
    onSearch: search,
    onOpen: open,
    onTab: tab,
    onBranch: () => up({
      sheet: true,
      product: null
    })
  });
  if (s.view === "results") screen = /*#__PURE__*/React.createElement(ResultsScreen, {
    query: s.query,
    results: D.search(s.query),
    onSearch: search,
    onBack: home,
    onOpen: open,
    onAsk: () => tab("pharmacist")
  });
  if (s.view === "product") screen = /*#__PURE__*/React.createElement(ProductScreen, {
    product: s.product,
    branch: branch,
    onBack: () => up({
      view: s.query ? "results" : "home"
    }),
    onConfirm: () => up({
      sheet: true
    }),
    onAsk: () => tab("pharmacist"),
    onBranch: () => up({
      sheet: true
    })
  });
  if (s.view === "pharmacist") screen = /*#__PURE__*/React.createElement(PharmacistScreen, {
    onBack: home
  });
  if (s.view === "branches") screen = /*#__PURE__*/React.createElement(BranchesScreen, {
    onBack: home,
    onAsk: () => tab("pharmacist")
  });
  return /*#__PURE__*/React.createElement("div", {
    className: "kit-phone aa-root"
  }, /*#__PURE__*/React.createElement("div", {
    className: "kit-body"
  }, screen), s.view !== "product" && /*#__PURE__*/React.createElement(TabBar, {
    active: s.tab,
    onChange: tab
  }), /*#__PURE__*/React.createElement(ConfirmSheet, {
    open: s.sheet,
    product: s.product,
    branchId: s.branchId,
    onBranch: id => up({
      branchId: id
    }),
    onClose: () => up({
      sheet: false
    })
  }));
}
window.MobileApp = MobileApp;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/MobileApp.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/PharmacistScreen.jsx
try { (() => {
function PharmacistScreen({
  onBack
}) {
  const {
    TopBar,
    Notice,
    Button,
    SectionTitle,
    ListLink,
    Divider
  } = window.DesignSystem_032903;
  const [q, setQ] = React.useState("");
  const text = q ? "مساء الخير، عندي سؤال للصيدلي: " + q : "مساء الخير، عندي سؤال للصيدلي.";
  return /*#__PURE__*/React.createElement("div", {
    className: "kit-scroll"
  }, /*#__PURE__*/React.createElement(TopBar, {
    title: "\u0627\u0633\u0623\u0644 \u0635\u064A\u062F\u0644\u064A",
    onBack: onBack
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "20px 16px"
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: "0 0 6px",
      fontSize: "var(--text-h1)",
      fontWeight: 800,
      color: "var(--text-brand)"
    }
  }, "\u0641\u064A \u0623\u0633\u0626\u0644\u0629 \u0645\u062D\u062A\u0627\u062C\u0629 \u0634\u062E\u0635 \u0641\u0627\u0647\u0645."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 16px",
      fontSize: 14,
      lineHeight: 1.65,
      color: "var(--text-secondary)"
    }
  }, "\u0627\u0628\u0639\u062A \u0627\u0633\u0645 \u0627\u0644\u062F\u0648\u0627\u0621 \u0623\u0648 \u0633\u0624\u0627\u0644\u0643\u060C \u0648\u0635\u064A\u062F\u0644\u064A \u0647\u064A\u0631\u062F \u0639\u0644\u064A\u0643 \u0639\u0644\u0649 \u0648\u0627\u062A\u0633\u0627\u0628. \u0644\u0648 \u0627\u0644\u0645\u0648\u0636\u0648\u0639 \u0645\u062D\u062A\u0627\u062C \u062F\u0643\u062A\u0648\u0631\u060C \u0647\u0646\u0642\u0648\u0644\u0643 \u0628\u0648\u0636\u0648\u062D."), /*#__PURE__*/React.createElement("label", {
    style: {
      display: "block",
      fontSize: 13,
      fontWeight: 700,
      marginBottom: 8
    },
    htmlFor: "q"
  }, "\u0633\u0624\u0627\u0644\u0643"), /*#__PURE__*/React.createElement("textarea", {
    id: "q",
    value: q,
    onChange: e => setQ(e.target.value),
    placeholder: "\u0645\u062B\u0644\u064B\u0627: \u064A\u0646\u0641\u0639 \u0622\u062E\u062F \u0643\u0648\u0646\u0643\u0648\u0631 \u0645\u0639 \u0627\u0644\u0628\u0627\u0646\u0627\u062F\u0648\u0644\u061F",
    style: {
      width: "100%",
      minHeight: 96,
      border: 0,
      borderRadius: 10,
      background: "var(--surface-sunken)",
      padding: 14,
      font: "inherit",
      fontSize: 15,
      resize: "none",
      marginBottom: 12,
      outlineColor: "var(--action-primary)"
    }
  }), /*#__PURE__*/React.createElement(Button, {
    block: true,
    icon: "message-circle",
    href: window.AA_DATA.waLink(text)
  }, "\u0627\u0628\u0639\u062A \u0639\u0644\u0649 \u0648\u0627\u062A\u0633\u0627\u0628")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 16px 16px"
    }
  }, /*#__PURE__*/React.createElement(Notice, {
    tone: "danger",
    boxed: true
  }, "\u0644\u0648 \u0641\u064A \u0636\u064A\u0642 \u0646\u0641\u0633 \u0623\u0648 \u0623\u0644\u0645 \u0641\u064A \u0627\u0644\u0635\u062F\u0631 \u0623\u0648 \u0625\u063A\u0645\u0627\u0621\u060C \u0631\u0648\u062D \u0627\u0644\u0637\u0648\u0627\u0631\u0626 \u0641\u0648\u0631\u064B\u0627.")), /*#__PURE__*/React.createElement(Divider, {
    variant: "band"
  }), /*#__PURE__*/React.createElement(SectionTitle, null, "\u0623\u0633\u0626\u0644\u0629 \u0628\u062A\u062A\u0643\u0631\u0631"), /*#__PURE__*/React.createElement(ListLink, {
    title: "\u0645\u0648\u0627\u0639\u064A\u062F \u0627\u0644\u062C\u0631\u0639\u0629",
    description: "\u0642\u0628\u0644 \u0627\u0644\u0623\u0643\u0644 \u0648\u0644\u0627 \u0628\u0639\u062F\u0647\u061F",
    onClick: () => setQ("مواعيد الجرعة: ")
  }), /*#__PURE__*/React.createElement(ListLink, {
    title: "\u0628\u062F\u064A\u0644 \u0644\u062F\u0648\u0627\u0621 \u0645\u0634 \u0644\u0627\u0642\u064A\u0647",
    description: "\u0646\u0641\u0633 \u0627\u0644\u0645\u0627\u062F\u0629 \u0627\u0644\u0641\u0639\u0627\u0644\u0629 \u0648\u0627\u0644\u062A\u0631\u0643\u064A\u0632",
    onClick: () => setQ("محتاج بديل لـ ")
  }), /*#__PURE__*/React.createElement(ListLink, {
    title: "\u0623\u0637\u0641\u0627\u0644 \u0648\u062D\u0645\u0644",
    description: "\u0628\u0646\u0631\u062F \u0628\u062D\u0630\u0631 \u0632\u064A\u0627\u062F\u0629\u060C \u0648\u0628\u0646\u062D\u0648\u0651\u0644 \u0644\u0644\u062F\u0643\u062A\u0648\u0631 \u0644\u0648 \u0644\u0627\u0632\u0645",
    onClick: () => setQ("سؤال عن دواء للأطفال/الحمل: ")
  }));
}
window.PharmacistScreen = PharmacistScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/PharmacistScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ProductScreen.jsx
try { (() => {
function ProductScreen({
  product: p,
  branch,
  onBack,
  onConfirm,
  onAsk,
  onBranch
}) {
  const {
    TopBar,
    BranchButton,
    PriceTag,
    FactList,
    Button
  } = window.DesignSystem_032903;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "kit-scroll",
    style: {
      paddingBottom: 140
    }
  }, /*#__PURE__*/React.createElement(TopBar, {
    title: "\u062A\u0641\u0627\u0635\u064A\u0644 \u0627\u0644\u0645\u0646\u062A\u062C",
    onBack: onBack,
    right: /*#__PURE__*/React.createElement(BranchButton, {
      tone: "light",
      branch: branch.short,
      onClick: onBranch
    })
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "20px 16px 0"
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontSize: "var(--text-h1)",
      fontWeight: 800,
      color: "var(--text-brand)"
    }
  }, p.name), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "5px 0 18px",
      fontSize: 13,
      color: "var(--text-secondary)",
      direction: "ltr",
      textAlign: "right"
    }
  }, p.latin), /*#__PURE__*/React.createElement(PriceTag, {
    price: p.price,
    updatedAt: p.price ? p.updatedAt : undefined,
    branch: branch.short,
    status: p.price ? "check" : "unavailable",
    statusLabel: p.price ? undefined : "اسأل الصيدلي"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 12,
      lineHeight: 1.7,
      color: "var(--text-secondary)",
      margin: "10px 0 16px"
    }
  }, "\u0627\u0644\u0633\u0639\u0631 \u0645\u0645\u0643\u0646 \u064A\u062A\u063A\u064A\u0631. \u0627\u0644\u062A\u0648\u0641\u0631 \u0628\u0646\u0623\u0643\u062F\u0647 \u0645\u0646 \u0627\u0644\u0641\u0631\u0639 \u0641\u064A \u0631\u0633\u0627\u0644\u0629 \u0648\u0627\u062D\u062F\u0629 \u0642\u0628\u0644 \u0645\u0627 \u062A\u062A\u062D\u0631\u0643."), /*#__PURE__*/React.createElement(FactList, {
    items: p.facts.map(([label, value, ltr]) => ({
      label,
      value,
      ltr: !!ltr
    }))
  }))), /*#__PURE__*/React.createElement("div", {
    className: "kit-dock"
  }, /*#__PURE__*/React.createElement(Button, {
    block: true,
    icon: "message-circle",
    onClick: onConfirm
  }, "\u0623\u0643\u062F \u0627\u0644\u062A\u0648\u0641\u0631 \u0639\u0644\u0649 \u0648\u0627\u062A\u0633\u0627\u0628"), /*#__PURE__*/React.createElement(Button, {
    block: true,
    variant: "secondary",
    onClick: onAsk
  }, "\u0627\u0633\u0623\u0644 \u0635\u064A\u062F\u0644\u064A")));
}
window.ProductScreen = ProductScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ProductScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ResultsScreen.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ResultsScreen({
  query,
  results,
  onSearch,
  onBack,
  onOpen,
  onAsk
}) {
  const {
    TopBar,
    SearchField,
    Notice,
    ProductRow,
    Divider,
    ListLink
  } = window.DesignSystem_032903;
  return /*#__PURE__*/React.createElement("div", {
    className: "kit-scroll"
  }, /*#__PURE__*/React.createElement(TopBar, {
    onBack: onBack
  }, /*#__PURE__*/React.createElement(SearchField, {
    key: query,
    variant: "sunken",
    defaultValue: query,
    onSubmit: onSearch
  })), results.length ? /*#__PURE__*/React.createElement(Notice, null, results.length, " \u0646\u062A\u0627\u064A\u062C \xB7 \u062F\u064A \u0622\u062E\u0631 \u0645\u0639\u0644\u0648\u0645\u0629 \u0645\u0639\u0631\u0648\u0641\u0629\u060C \u0645\u0634 \u0645\u062E\u0632\u0648\u0646 \u0644\u062D\u0638\u064A") : /*#__PURE__*/React.createElement(Notice, {
    tone: "warning"
  }, "\u0645\u0641\u064A\u0634 \u0646\u062A\u064A\u062C\u0629 \u0644\u0640 \xAB", query, "\xBB. \u062C\u0631\u0651\u0628 \u0627\u0644\u0645\u0627\u062F\u0629 \u0627\u0644\u0641\u0639\u0627\u0644\u0629\u060C \u0623\u0648 \u0627\u0628\u0639\u062A \u0627\u0644\u0627\u0633\u0645 \u0644\u0635\u064A\u062F\u0644\u064A."), results.map(p => /*#__PURE__*/React.createElement(ProductRow, _extends({
    key: p.id
  }, p, {
    onClick: () => onOpen(p)
  }))), /*#__PURE__*/React.createElement(Divider, {
    variant: "band"
  }), /*#__PURE__*/React.createElement(ListLink, {
    icon: "message-circle",
    title: "\u0645\u0634 \u0644\u0627\u0642\u064A \u0627\u0644\u0644\u064A \u0628\u062A\u062F\u0648\u0651\u0631 \u0639\u0644\u064A\u0647\u061F",
    description: "\u0627\u0628\u0639\u062A \u0627\u0644\u0627\u0633\u0645 \u0644\u0635\u064A\u062F\u0644\u064A",
    onClick: onAsk
  }));
}
window.ResultsScreen = ResultsScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ResultsScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/data.js
try { (() => {
window.AA_DATA = {
  wa: "200000000000",
  branches: [{
    id: "kg",
    name: "فرع كفر الجمال",
    short: "كفر الجمال",
    verified: false
  }, {
    id: "near",
    name: "مش متأكد",
    short: "أقرب فرع",
    desc: "قولولي أقرب فرع",
    verified: false
  }],
  products: [{
    id: "c5",
    name: "كونكور 5 مجم",
    latin: "Bisoprolol 5 mg · 30 tabs",
    price: 128,
    updatedAt: "اليوم 10:40 ص",
    facts: [["المادة الفعالة", "Bisoprolol", 1], ["التركيز", "5 mg", 1], ["الشكل", "أقراص · 30 قرص"], ["وصفة", "مطلوبة"]]
  }, {
    id: "c25",
    name: "كونكور 2.5 مجم",
    latin: "Bisoprolol 2.5 mg · 30 tabs",
    price: 96,
    updatedAt: "اليوم 09:15 ص",
    facts: [["المادة الفعالة", "Bisoprolol", 1], ["التركيز", "2.5 mg", 1], ["الشكل", "أقراص · 30 قرص"], ["وصفة", "مطلوبة"]]
  }, {
    id: "c10",
    name: "كونكور كور 10 مجم",
    latin: "Bisoprolol 10 mg · 30 tabs",
    facts: [["المادة الفعالة", "Bisoprolol", 1], ["التركيز", "10 mg", 1], ["الشكل", "أقراص · 30 قرص"]]
  }, {
    id: "g5",
    name: "جلوكوفاج 500 مجم",
    latin: "Metformin 500 mg · 50 tabs",
    price: 74,
    updatedAt: "أمس 06:20 م",
    facts: [["المادة الفعالة", "Metformin", 1], ["التركيز", "500 mg", 1], ["الشكل", "أقراص · 50 قرص"], ["وصفة", "مطلوبة"]]
  }, {
    id: "p5",
    name: "بانادول 500 مجم",
    latin: "Paracetamol 500 mg · 24 tabs",
    price: 45,
    updatedAt: "اليوم 08:00 ص",
    facts: [["المادة الفعالة", "Paracetamol", 1], ["التركيز", "500 mg", 1], ["الشكل", "أقراص · 24 قرص"], ["وصفة", "غير مطلوبة"]]
  }],
  search(q) {
    q = (q || "").trim().toLowerCase();
    if (!q) return [];
    return this.products.filter(p => (p.name + " " + p.latin).toLowerCase().includes(q) || q.split(" ").some(w => w.length > 1 && p.name.includes(w)));
  },
  waLink(text) {
    return "https://wa.me/" + this.wa + "?text=" + encodeURIComponent(text);
  }
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/data.js", error: String((e && e.message) || e) }); }

__ds_ns.ShelfEdge = __ds_scope.ShelfEdge;

__ds_ns.Wordmark = __ds_scope.Wordmark;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.StatusTag = __ds_scope.StatusTag;

__ds_ns.Notice = __ds_scope.Notice;

__ds_ns.Sheet = __ds_scope.Sheet;

__ds_ns.MessagePreview = __ds_scope.MessagePreview;

__ds_ns.RadioRow = __ds_scope.RadioRow;

__ds_ns.SearchField = __ds_scope.SearchField;

__ds_ns.AppHeader = __ds_scope.AppHeader;

__ds_ns.BranchButton = __ds_scope.BranchButton;

__ds_ns.ListLink = __ds_scope.ListLink;

__ds_ns.SectionTitle = __ds_scope.SectionTitle;

__ds_ns.TabBar = __ds_scope.TabBar;

__ds_ns.TopBar = __ds_scope.TopBar;

__ds_ns.BranchCard = __ds_scope.BranchCard;

__ds_ns.FactList = __ds_scope.FactList;

__ds_ns.PriceTag = __ds_scope.PriceTag;

__ds_ns.ProductRow = __ds_scope.ProductRow;

})();
