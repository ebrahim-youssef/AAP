function ProductScreen({ product: p, branch, onBack, onConfirm, onAsk, onBranch }) {
  const { TopBar, BranchButton, PriceTag, FactList, Button } = window.DesignSystem_032903;
  return <>
    <div className="kit-scroll" style={{ paddingBottom: 140 }}>
      <TopBar title="تفاصيل المنتج" onBack={onBack} right={<BranchButton tone="light" branch={branch.short} onClick={onBranch} />} />
      <div style={{ padding: "20px 16px 0" }}>
        <h1 style={{ margin: 0, fontSize: "var(--text-h1)", fontWeight: 800, color: "var(--text-brand)" }}>{p.name}</h1>
        <p style={{ margin: "5px 0 18px", fontSize: 13, color: "var(--text-secondary)", direction: "ltr", textAlign: "right" }}>{p.latin}</p>
        <PriceTag price={p.price} updatedAt={p.price ? p.updatedAt : undefined} branch={branch.short} status={p.price ? "check" : "unavailable"} statusLabel={p.price ? undefined : "اسأل الصيدلي"} />
        <p style={{ fontSize: 12, lineHeight: 1.7, color: "var(--text-secondary)", margin: "10px 0 16px" }}>السعر ممكن يتغير. التوفر بنأكده من الفرع في رسالة واحدة قبل ما تتحرك.</p>
        <FactList items={p.facts.map(([label, value, ltr]) => ({ label, value, ltr: !!ltr }))} />
      </div>
    </div>
    <div className="kit-dock"><Button block icon="message-circle" onClick={onConfirm}>أكد التوفر على واتساب</Button><Button block variant="secondary" onClick={onAsk}>اسأل صيدلي</Button></div>
  </>;
}
window.ProductScreen = ProductScreen;
