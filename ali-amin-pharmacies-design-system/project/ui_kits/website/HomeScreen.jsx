function HomeScreen({ branch, recents, onSearch, onOpen, onTab, onBranch }) {
  const { AppHeader, SearchField, SectionTitle, ProductRow, Divider, ListLink } = window.DesignSystem_032903;
  return <div className="kit-scroll">
    <AppHeader branch={branch.short} onBranch={onBranch}><SearchField onSubmit={onSearch} /></AppHeader>
    <SectionTitle action="الكل" onAction={() => onSearch("كونكور")}>آخر اللي دوّرت عليه</SectionTitle>
    {recents.map(p => <ProductRow key={p.id} {...p} onClick={() => onOpen(p)} />)}
    <Divider variant="band" />
    <SectionTitle>محتاج حد يساعدك؟</SectionTitle>
    <ListLink icon="message-circle" title="اسأل صيدلي" description="ابعت الاسم أو سؤالك على واتساب" onClick={() => onTab("pharmacist")} />
    <ListLink icon="map-pin" title="الفروع" description="العنوان والمواعيد والاتجاهات" onClick={() => onTab("branches")} />
  </div>;
}
window.HomeScreen = HomeScreen;
