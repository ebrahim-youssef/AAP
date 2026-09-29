function BranchesScreen({ onBack, onAsk }) {
  const { TopBar, Notice, BranchCard } = window.DesignSystem_032903;
  return <div className="kit-scroll">
    <TopBar title="الفروع" onBack={onBack} />
    <Notice>بيانات الفروع بتتوثّق. مش هنعرض عنوان أو مواعيد أو توصيل غير لما يكونوا مؤكدين.</Notice>
    <div style={{ padding: 16, display: "grid", gap: 12 }}>
      <BranchCard name="فرع كفر الجمال" onWhatsApp={onAsk} />
      <BranchCard name="فرع إضافي" onWhatsApp={onAsk} />
    </div>
  </div>;
}
window.BranchesScreen = BranchesScreen;
