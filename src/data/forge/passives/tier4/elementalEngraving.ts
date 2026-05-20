import { Passive } from "@/app/data/types";

export const elementalEngraving: Passive = {
  id: "elemental-engraving",
  name: "Elemental engraving",
  tier: 4,
  max: 12,
  unlockAt: [6, 12],
  stats: [
    {
      id: "elemental-damage",
      label: "%1% increased Elemental Damage",
      baseValue: 2,
      perLevel: 2,
    },
    {
      id: "damage-infusion",
      label: "%1% increased Damage with Infusion skills",
      baseValue: 2,
      perLevel: 2,
    },
    {
      id: "damage-overload",
      label: "%1% increased Damage with Overload skills",
      baseValue: 2,
      perLevel: 2,
    },
  ],
  feats: [
    {
      id: "elemental-damage",
      name: "Elemental damage",
      details: ["20% increase Elemental damage"],
    },
    {
      id: "energy",
      name: "Energy",
      details: ["Recover 5 Energy per Overload cleansed over 1s"],
    },
    {
      id: "tranquility",
      name: "Tranquility",
      details: ["Unlocks Tranquility", "Every 5s cleanse 5 Overload"],
    },
  ],
};
