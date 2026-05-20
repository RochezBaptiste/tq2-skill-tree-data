import { Passive } from "@/app/data/types";

export const martialExpert: Passive = {
  id: "martial-expert",
  name: "Martial expert",
  tier: 1,
  max: 12,
  unlockAt: [6, 12],
  stats: [
    {
      id: "physical-damage",
      label: "%1% increased physical damage",
      baseValue: 8,
      perLevel: 4,
    },
    {
      id: "bleed-and-stagger-chance",
      label: "%1% increased bleed and stagger chance",
      baseValue: 8,
      perLevel: 4,
    },
    {
      id: "summon-damae",
      label: "Your Summons have %1% increased Physical damage",
      baseValue: 3,
      perLevel: 3,
    },
  ],
  feats: [
    {
      id: "damage",
      name: "Damage",
      details: ["10% increased Physical damage"],
    },
    {
      id: "pierce",
      name: "Pierce",
      details: ["10% increased Pierce damage and Bleed power"],
    },
    {
      id: "strike",
      name: "Strike",
      details: ["10% increased Strike damage and  Stagger power"],
    },
  ],
};
