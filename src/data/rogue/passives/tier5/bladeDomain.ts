import { Passive } from "@/app/data/types";

export const bladeDomain: Passive = {
  id: "blade-domain",
  name: "Blade domain",
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
      id: "bleed-damage",
      label: "%1% Increased Bleed damage",
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
      id: "bleed-damage",
      name: "Bleed damage",
      details: ["25% increased Bleed damage"],
    },
    {
      id: "physical-damage",
      name: "Physical damage",
      details: ["25% increased Physical damage"],
    },
    {
      id: "physical-penetration",
      name: "Physical penetration",
      details: ["+10% Physical Penetration"],
    },
  ],
};
