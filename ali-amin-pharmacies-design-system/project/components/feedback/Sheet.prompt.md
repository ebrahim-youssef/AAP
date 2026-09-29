Bottom sheet (dialog) for the confirm-availability step; positions absolutely inside its nearest positioned parent (the phone/app frame). Exports MessagePreview too.
```jsx
<Sheet open title="تأكيد التوفر" description="اختار الفرع…" onClose={close} footer={<Button block iconEnd="arrow-left">افتح واتساب</Button>}>
  <RadioRow checked title="فرع كفر الجمال" />
  <MessagePreview>مساء الخير، عايز أتأكد من توفر…</MessagePreview>
</Sheet>
```
