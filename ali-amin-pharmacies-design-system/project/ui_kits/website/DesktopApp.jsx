function DesktopHeader({ branch, nav, onNav, onSearch, query, hero }) {
  const { Wordmark, BranchButton, SearchField, ShelfEdge } = window.DesignSystem_032903;
  const items = [["home","الرئيسية"],["results","بحث"],["pharmacist","اسأل صيدلي"],["branches","الفروع"]];
  return <header style={{ background: "var(--surface-brand)", color: "#fff" }}>
    <div className="dk-w" style={{ height: 72, display: "flex", alignItems: "center", gap: 36 }}>
      <a href="#" onClick={e => { e.preventDefault(); onNav("home"); }}><Wordmark tone="inverse" /></a>
      <nav style={{ flex: 1, display: "flex", gap: 28 }}>{items.map(([id, l]) => <button key={id} onClick={() => onNav(id)} className={"dk-nav" + (nav === id ? " on" : "")}>{l}</button>)}</nav>
      {!hero && <SearchField key={query} defaultValue={query} onSubmit={onSearch} style={{ width: 340, height: 42 }} />}
      <BranchButton branch={branch} />
    </div>
    {hero && <div className="dk-w" style={{ padding: "36px 0 44px" }}>
      <h1 style={{ margin: "0 0 8px", fontSize: "var(--text-display)", fontWeight: 800, lineHeight: 1.25 }}>دوّر بالاسم، واعرف قبل ما تتحرك.</h1>
      <p style={{ margin: "0 0 22px", fontSize: 16, opacity: .9 }}>آخر سعر معروف ووقت تحديثه، وبعدها نأكدلك التوفر من الفرع.</p>
      <SearchField submitLabel="ابحث" onSubmit={onSearch} style={{ maxWidth: 620, height: 58 }} />
    </div>}
    <ShelfEdge />
  </header>;
}
function DesktopApp() {
  const NS = window.DesignSystem_032903; const { SectionTitle, ProductRow, ListLink, PriceTag, FactList, Button, RadioRow, MessagePreview, Notice, BranchCard } = NS; const D = window.AA_DATA;
  const [s, setS] = React.useState({ view: "home", query: "", product: null, confirm: false, branchId: "kg" });
  const up = x => setS(o => ({ ...o, ...x }));
  const branch = D.branches.find(b => b.id === s.branchId);
  const search = q => { const r = D.search(q || "كونكور"); up({ view: "results", query: q || "كونكور", product: r[0] || null, confirm: false }); };
  const results = D.search(s.query);
  const help = <><SectionTitle>محتاج حد يساعدك؟</SectionTitle><ListLink icon="message-circle" title="اسأل صيدلي" description="ابعت الاسم أو سؤالك على واتساب" onClick={() => up({ view: "pharmacist" })} /><ListLink icon="map-pin" title="الفروع" description="العنوان والمواعيد والاتجاهات" onClick={() => up({ view: "branches" })} /></>;
  const p = s.product;
  const text = p ? "مساء الخير، عايز أتأكد من توفر " + p.name + " في " + (branch.id === "near" ? "أقرب فرع ليا" : branch.name) + "." : "";
  return <div className="aa-root" style={{ minHeight: "100vh", background: "#fff" }}>
    <DesktopHeader branch={branch.short} nav={s.view} onNav={v => v === "results" ? search(s.query) : up({ view: v })} onSearch={search} query={s.query} hero={s.view === "home"} />
    {s.view === "home" && <div className="dk-w dk-g"><div><SectionTitle action="الكل" onAction={() => search("كونكور")}>آخر اللي دوّرت عليه</SectionTitle>{D.products.slice(0, 4).map(x => <ProductRow key={x.id} {...x} onClick={() => up({ view: "results", query: "كونكور", product: x })} />)}</div><div>{help}</div></div>}
    {s.view === "results" && <div className="dk-w dk-g" style={{ gridTemplateColumns: "minmax(0,1fr) 440px" }}>
      <div><Notice>{results.length} نتايج لـ «{s.query}» · دي آخر معلومة معروفة، مش مخزون لحظي</Notice>{results.map(x => <div key={x.id} className={x === p ? "dk-sel" : ""}><ProductRow {...x} onClick={() => up({ product: x, confirm: false })} /></div>)}<div style={{ height: 16 }}></div>{help}</div>
      {p && <aside style={{ border: "1px solid var(--border-hairline)", borderRadius: 10, padding: 24, alignSelf: "start", marginTop: 16 }}>
        <h2 style={{ margin: 0, fontSize: "var(--text-h1)", fontWeight: 800, color: "var(--text-brand)" }}>{p.name}</h2>
        <p style={{ margin: "5px 0 18px", fontSize: 13, color: "var(--text-secondary)", direction: "ltr", textAlign: "right" }}>{p.latin}</p>
        <PriceTag price={p.price} updatedAt={p.price ? p.updatedAt : undefined} branch={branch.short} status={p.price ? "check" : "unavailable"} statusLabel={p.price ? undefined : "اسأل الصيدلي"} />
        <FactList items={p.facts.map(([label, value, ltr]) => ({ label, value, ltr: !!ltr }))} />
        {!s.confirm ? <div style={{ display: "grid", gap: 8, marginTop: 18 }}><Button block icon="message-circle" onClick={() => up({ confirm: true })}>أكد التوفر على واتساب</Button><Button block variant="secondary" onClick={() => up({ view: "pharmacist" })}>اسأل صيدلي</Button></div>
        : <div style={{ marginTop: 18, borderTop: "1px solid var(--border-hairline)", paddingTop: 16 }}><h3 style={{ margin: "0 0 6px", fontSize: 17, fontWeight: 800, color: "var(--text-brand)" }}>اختار الفرع</h3><div role="radiogroup" style={{ margin: "0 -16px" }}>{D.branches.map(b => <RadioRow key={b.id} checked={b.id === s.branchId} title={b.name} description={b.desc || "بيانات الفرع بتتوثّق"} onSelect={() => up({ branchId: b.id })} />)}</div><div style={{ margin: "0 -16px" }}><MessagePreview>{text}</MessagePreview></div><Button block iconEnd="arrow-left" href={D.waLink(text)}>افتح واتساب</Button></div>}
      </aside>}
    </div>}
    {s.view === "pharmacist" && <div className="dk-w" style={{ padding: "32px 0", maxWidth: 720 }}><h1 style={{ margin: "0 0 8px", fontSize: 30, fontWeight: 800, color: "var(--text-brand)" }}>في أسئلة محتاجة شخص فاهم.</h1><p style={{ color: "var(--text-secondary)", margin: "0 0 20px" }}>ابعت اسم الدواء أو سؤالك، وصيدلي هيرد عليك على واتساب.</p><div style={{ display: "flex", gap: 10 }}><Button icon="message-circle" href={D.waLink("مساء الخير، عندي سؤال للصيدلي.")}>ابعت على واتساب</Button></div><div style={{ marginTop: 20 }}><Notice tone="danger" boxed>لو في ضيق نفس أو ألم في الصدر أو إغماء، روح الطوارئ فورًا.</Notice></div></div>}
    {s.view === "branches" && <div className="dk-w" style={{ padding: "32px 0" }}><h1 style={{ margin: "0 0 16px", fontSize: 30, fontWeight: 800, color: "var(--text-brand)" }}>الفروع</h1><Notice boxed>بيانات الفروع بتتوثّق. مش هنعرض عنوان أو مواعيد غير لما يكونوا مؤكدين.</Notice><div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(320px,1fr))", gap: 16, marginTop: 16 }}><BranchCard name="فرع كفر الجمال" /><BranchCard name="فرع إضافي" /></div></div>}
  </div>;
}
window.DesktopApp = DesktopApp;
