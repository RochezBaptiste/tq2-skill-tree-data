import { Passive } from "@/app/data/types";

export const ironDomain: Passive = {
  id: "iron-domain",
  name: "Iron Domain",
  tier: 5,
  max: 16,
  unlockAt: [8, 16],
  stats: [
    {
      id: "physical-damage",
      label: "%1% increased Physical damage",
      baseValue: 2,
      perLevel: 2,
    },
    {
      id: "physical-penetration",
      label: "+%1% Physical penetration",
      baseValue: 0.8,
      perLevel: 0.8,
    },
  ],
  feats: [
    {
      id: "physical-penetration",
      name: "Physical penetration",
      details: ["+10% Physical penetration"],
    },
    {
      id: "Strike-damage",
      name: "Strike Damage",
      details: ["+25% increased Strike damage"],
    },
    {
      id: "pierce-damage",
      name: "Pierce damage",
      details: ["+25% increased Pierce damage"],
    },
  ],
};
