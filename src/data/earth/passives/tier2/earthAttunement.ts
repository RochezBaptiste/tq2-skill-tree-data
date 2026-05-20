import { Passive } from "@/app/data/types";

export const earthAttunement: Passive = {
  id: "earth-attunement",
  name: "Earth attunement",
  tier: 2,
  max: 12,
  unlockAt: [6, 12],
  stats: [
    {
      id: "fire-damage",
      label: "%1% increased fire damage",
      baseValue: 8,
      perLevel: 4,
    },
    {
      id: "physical-damage",
      label: "%1% increased physical damage",
      baseValue: 6,
      perLevel: 3,
    },
    {
      id: "summons-damage",
      label: "Your Summons have %1% increased damage",
      baseValue: 2,
      perLevel: 2,
    },
  ],
  feats: [
    {
      id: "area",
      name: "Area",
      details: ["15% increased area damage"],
    },
    {
      id: "spell",
      name: "Spell",
      details: [
        "10% increased fire and physical spell damage",
        "4% increased cast speed",
      ],
    },
    {
      id: "weapon",
      name: "Weapon",
      details: [
        "10% increased fire and physical weapon damage",
        "4% increased attack speed",
      ],
    },
  ],
};
