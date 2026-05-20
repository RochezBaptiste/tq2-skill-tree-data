import { Passive } from "@/app/data/types";

export const versatileDefense: Passive = {
  id: "versatile-defense",
  name: "Versatile defense",
  tier: 3,
  max: 8,
  unlockAt: [4, 8],
  stats: [
    {
      id: "armor",
      label: "%1% increased Armor",
      baseValue: 5,
      perLevel: 5,
    },
    {
      id: "thermic-and-natural-resistance",
      label: "+%1% to Thermic and Natural resistance",
      baseValue: 2,
      perLevel: 2,
    },
    {
      id: "dodge-cooldown-rate",
      label: "%1% increased Dodge cooldown rate",
      baseValue: 4,
      perLevel: 4,
    },
  ],
  feats: [
    {
      id: "armor",
      name: "Armor",
      details: ["10% increased armor"],
    },
    {
      id: "barrier",
      name: "Barrier",
      details: ["25% increased free Barrier with a shield equipped"],
    },
    {
      id: "movement",
      name: "Movement",
      details: ["10% increased Movement skill cooldown rate"],
    },
  ],
};
