function ConfirmSheet({ open, product, branchId, onBranch, onClose }) {
  const { Sheet, RadioRow, MessagePreview, Button } = window.DesignSystem_032903;
  const D = window.AA_DATA; const b = D.branches.find(x => x.id === branchId);
  const subject = product ? product.name + (product.latin ? " — " + product.latin.split("· ")[1] : "") : "سؤال للصيدلي";
  const text = "مساء الخير، عايز أتأكد من توفر " + subject + " في " + (b.id === "near" ? "أقرب فرع ليا" : b.name) + ".";
  return <Sheet open={open} title="تأكيد التوفر" description="اختار الفرع، وهنجهزلك رسالة تقدر تعدّلها قبل ما تبعت." onClose={onClose}
    footer={<Button block iconEnd="arrow-left" href={D.waLink(text)}>افتح واتساب</Button>}>
    <div role="radiogroup" aria-label="الفرع">{D.branches.map(x => <RadioRow key={x.id} checked={x.id === branchId} title={x.name} description={x.desc || "بيانات الفرع بتتوثّق"} onSelect={() => onBranch(x.id)} />)}</div>
    <MessagePreview>{text}</MessagePreview>
  </Sheet>;
}
window.ConfirmSheet = ConfirmSheet;
