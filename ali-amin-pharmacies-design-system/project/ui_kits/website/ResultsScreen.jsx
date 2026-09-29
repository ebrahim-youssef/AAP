function ResultsScreen({ query, results, onSearch, onBack, onOpen, onAsk }) {
  const { TopBar, SearchField, Notice, ProductRow, Divider, ListLink } = window.DesignSystem_032903;
  return <div className="kit-scroll">
    <TopBar onBack={onBack}><SearchField key={query} variant="sunken" defaultValue={query} onSubmit={onSearch} /></TopBar>
    {results.length ? <Notice>{results.length} نتايج · دي آخر معلومة معروفة، مش مخزون لحظي</Notice>
      : <Notice tone="warning">مفيش نتيجة لـ «{query}». جرّب المادة الفعالة، أو ابعت الاسم لصيدلي.</Notice>}
    {results.map(p => <ProductRow key={p.id} {...p} onClick={() => onOpen(p)} />)}
    <Divider variant="band" />
    <ListLink icon="message-circle" title="مش لاقي اللي بتدوّر عليه؟" description="ابعت الاسم لصيدلي" onClick={onAsk} />
  </div>;
}
window.ResultsScreen = ResultsScreen;
