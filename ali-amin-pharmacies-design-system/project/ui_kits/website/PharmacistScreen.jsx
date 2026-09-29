function PharmacistScreen({ onBack }) {
  const { TopBar, Notice, Button, SectionTitle, ListLink, Divider } = window.DesignSystem_032903;
  const [q, setQ] = React.useState("");
  const text = q ? "مساء الخير، عندي سؤال للصيدلي: " + q : "مساء الخير، عندي سؤال للصيدلي.";
  return <div className="kit-scroll">
    <TopBar title="اسأل صيدلي" onBack={onBack} />
    <div style={{ padding: "20px 16px" }}>
      <h1 style={{ margin: "0 0 6px", fontSize: "var(--text-h1)", fontWeight: 800, color: "var(--text-brand)" }}>في أسئلة محتاجة شخص فاهم.</h1>
      <p style={{ margin: "0 0 16px", fontSize: 14, lineHeight: 1.65, color: "var(--text-secondary)" }}>ابعت اسم الدواء أو سؤالك، وصيدلي هيرد عليك على واتساب. لو الموضوع محتاج دكتور، هنقولك بوضوح.</p>
      <label style={{ display: "block", fontSize: 13, fontWeight: 700, marginBottom: 8 }} htmlFor="q">سؤالك</label>
      <textarea id="q" value={q} onChange={e => setQ(e.target.value)} placeholder="مثلًا: ينفع آخد كونكور مع البانادول؟" style={{ width: "100%", minHeight: 96, border: 0, borderRadius: 10, background: "var(--surface-sunken)", padding: 14, font: "inherit", fontSize: 15, resize: "none", marginBottom: 12, outlineColor: "var(--action-primary)" }} />
      <Button block icon="message-circle" href={window.AA_DATA.waLink(text)}>ابعت على واتساب</Button>
    </div>
    <div style={{ padding: "0 16px 16px" }}><Notice tone="danger" boxed>لو في ضيق نفس أو ألم في الصدر أو إغماء، روح الطوارئ فورًا.</Notice></div>
    <Divider variant="band" />
    <SectionTitle>أسئلة بتتكرر</SectionTitle>
    <ListLink title="مواعيد الجرعة" description="قبل الأكل ولا بعده؟" onClick={() => setQ("مواعيد الجرعة: ")} />
    <ListLink title="بديل لدواء مش لاقيه" description="نفس المادة الفعالة والتركيز" onClick={() => setQ("محتاج بديل لـ ")} />
    <ListLink title="أطفال وحمل" description="بنرد بحذر زيادة، وبنحوّل للدكتور لو لازم" onClick={() => setQ("سؤال عن دواء للأطفال/الحمل: ")} />
  </div>;
}
window.PharmacistScreen = PharmacistScreen;
