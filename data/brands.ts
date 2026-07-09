export interface Brand {
  id: string;
  name: string;
  logoText: string;
}

export const BRANDS: Brand[] = [
  { id: "b1", name: "ElectroMax", logoText: "⚡ E-Max" },
  { id: "b2", name: "FreshFarms", logoText: "🌾 FreshF" },
  { id: "b3", name: "UrbanThread", logoText: "👕 UrbanT" },
  { id: "b4", name: "HomeCraft", logoText: "🏡 HomeC" },
  { id: "b5", name: "Organix", logoText: "🍃 Organix" },
  { id: "b6", name: "FitPro", logoText: "🏃 FitPro" }
];
