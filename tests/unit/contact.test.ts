import { describe, expect, it } from "vitest";
import { telHref, whatsappHref } from "../../src/lib/contact";

describe("contact URL helpers", () => {
  it("builds a WhatsApp URL with an encoded message", () => {
    expect(whatsappHref("201001234567", "هل بانادول متوفر؟")).toBe(
      "https://wa.me/201001234567?text=%D9%87%D9%84%20%D8%A8%D8%A7%D9%86%D8%A7%D8%AF%D9%88%D9%84%20%D9%85%D8%AA%D9%88%D9%81%D8%B1%D8%9F",
    );
  });

  it("builds a tel URL with a leading plus", () => {
    expect(telHref("20 (10) 0123-4567")).toBe("tel:+201001234567");
  });
});
