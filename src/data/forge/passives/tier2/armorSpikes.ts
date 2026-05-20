import { Passive } from "@/app/data/types";

export const armorSpikes: Passive = {
  id: "armor-spikes",
  name: "Armor spikes",
  tier: 2,
  max: 10,
  unlockAt: [4, 10],
  stats: [
    {
      id: "increase-retaliation",
      label: "%1 increased Retaliation damage",
      baseValue: 5,
      perLevel: 5,
    },
    {
      id: "pierce-retaliation",
      label: "+%1 Pierce Retaliation(scale with armor)",
      baseValue: 16,
      perLevel: 16,
    },
  ],
  feats: [
    {
      id: "physical-retaliation",
      name: "Physical retaliation",
      details: ["50% increased Physical Retaliation damage"],
    },
    {
      id: "retaliation-range",
      name: "Retaliaation range",
      details: ["20% increased Retaliation range"],
    },
    {
      id: "thorns",
      name: "Thorns",
      details: ["Unlock Thorns", "20% more Retaliation damage"],
    },
  ],
};
