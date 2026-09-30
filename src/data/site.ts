export interface Branch {
  slug: string;
  nameAr: string;
  nameEn: string;
  addressAr: string | null;
  hoursAr: string | null;
  phone: string | null;
  mapUrl: string | null;
  deliveryAr: string | null;
}

interface Delivery {
  available: boolean;
  areasAr: string | null;
  feeAr: string | null;
  hoursAr: string | null;
}

// The owner fills in these details after they are checked.
export const whatsapp: string | null = null;

export const branches: Branch[] = [
  {
    slug: "branch-1",
    nameAr: "الفرع الأول",
    nameEn: "Branch 1",
    addressAr: null,
    hoursAr: null,
    phone: null,
    mapUrl: null,
    deliveryAr: null,
  },
  {
    slug: "branch-2",
    nameAr: "الفرع التاني",
    nameEn: "Branch 2",
    addressAr: null,
    hoursAr: null,
    phone: null,
    mapUrl: null,
    deliveryAr: null,
  },
];

export const delivery: Delivery = {
  available: true,
  areasAr: null,
  feeAr: null,
  hoursAr: null,
};
