export function whatsappHref(number: string | null, text: string): string | null {
  if (number === null) return null;

  const digits = number.replace(/\D/g, "");
  return `https://wa.me/${digits}?text=${encodeURIComponent(text)}`;
}

export function telHref(phone: string | null): string | null {
  if (phone === null) return null;

  const digits = phone.replace(/\D/g, "");
  return `tel:+${digits}`;
}
