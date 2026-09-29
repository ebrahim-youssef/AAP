window.AA_DATA = {
  wa: "200000000000",
  branches: [{ id: "kg", name: "فرع كفر الجمال", short: "كفر الجمال", verified: false }, { id: "near", name: "مش متأكد", short: "أقرب فرع", desc: "قولولي أقرب فرع", verified: false }],
  products: [
    { id: "c5", name: "كونكور 5 مجم", latin: "Bisoprolol 5 mg · 30 tabs", price: 128, updatedAt: "اليوم 10:40 ص", facts: [["المادة الفعالة","Bisoprolol",1],["التركيز","5 mg",1],["الشكل","أقراص · 30 قرص"],["وصفة","مطلوبة"]] },
    { id: "c25", name: "كونكور 2.5 مجم", latin: "Bisoprolol 2.5 mg · 30 tabs", price: 96, updatedAt: "اليوم 09:15 ص", facts: [["المادة الفعالة","Bisoprolol",1],["التركيز","2.5 mg",1],["الشكل","أقراص · 30 قرص"],["وصفة","مطلوبة"]] },
    { id: "c10", name: "كونكور كور 10 مجم", latin: "Bisoprolol 10 mg · 30 tabs", facts: [["المادة الفعالة","Bisoprolol",1],["التركيز","10 mg",1],["الشكل","أقراص · 30 قرص"]] },
    { id: "g5", name: "جلوكوفاج 500 مجم", latin: "Metformin 500 mg · 50 tabs", price: 74, updatedAt: "أمس 06:20 م", facts: [["المادة الفعالة","Metformin",1],["التركيز","500 mg",1],["الشكل","أقراص · 50 قرص"],["وصفة","مطلوبة"]] },
    { id: "p5", name: "بانادول 500 مجم", latin: "Paracetamol 500 mg · 24 tabs", price: 45, updatedAt: "اليوم 08:00 ص", facts: [["المادة الفعالة","Paracetamol",1],["التركيز","500 mg",1],["الشكل","أقراص · 24 قرص"],["وصفة","غير مطلوبة"]] }
  ],
  search(q) { q = (q || "").trim().toLowerCase(); if (!q) return []; return this.products.filter(p => (p.name + " " + p.latin).toLowerCase().includes(q) || q.split(" ").some(w => w.length > 1 && p.name.includes(w))); },
  waLink(text) { return "https://wa.me/" + this.wa + "?text=" + encodeURIComponent(text); }
};
