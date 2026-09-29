function MobileApp() {
  const { TabBar } = window.DesignSystem_032903; const D = window.AA_DATA;
  const [s, setS] = React.useState({ tab: "home", view: "home", query: "", product: null, sheet: false, branchId: "kg" });
  const up = x => setS(o => ({ ...o, ...x }));
  const branch = D.branches.find(b => b.id === s.branchId);
  const search = q => up({ tab: "search", view: "results", query: q || "كونكور" });
  const open = p => up({ view: "product", product: p });
  const tab = t => up({ tab: t, view: t === "search" ? "results" : t, query: t === "search" ? (s.query || "كونكور") : s.query, sheet: false });
  const home = () => up({ tab: "home", view: "home" });
  let screen;
  if (s.view === "home") screen = <HomeScreen branch={branch} recents={D.products.slice(0, 2)} onSearch={search} onOpen={open} onTab={tab} onBranch={() => up({ sheet: true, product: null })} />;
  if (s.view === "results") screen = <ResultsScreen query={s.query} results={D.search(s.query)} onSearch={search} onBack={home} onOpen={open} onAsk={() => tab("pharmacist")} />;
  if (s.view === "product") screen = <ProductScreen product={s.product} branch={branch} onBack={() => up({ view: s.query ? "results" : "home" })} onConfirm={() => up({ sheet: true })} onAsk={() => tab("pharmacist")} onBranch={() => up({ sheet: true })} />;
  if (s.view === "pharmacist") screen = <PharmacistScreen onBack={home} />;
  if (s.view === "branches") screen = <BranchesScreen onBack={home} onAsk={() => tab("pharmacist")} />;
  return <div className="kit-phone aa-root">
    <div className="kit-body">{screen}</div>
    {s.view !== "product" && <TabBar active={s.tab} onChange={tab} />}
    <ConfirmSheet open={s.sheet} product={s.product} branchId={s.branchId} onBranch={id => up({ branchId: id })} onClose={() => up({ sheet: false })} />
  </div>;
}
window.MobileApp = MobileApp;
