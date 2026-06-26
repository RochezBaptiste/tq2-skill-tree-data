import { Passive } from "@/app/data/types";

export const brutalImpact: Passive = {
  id: "brutal-impact",
  name: "Brutal Impact",
  tier: 5,
  max: 16,
  unlockAt: [8, 16],
  stats: [
    {
      id: "ailment-chance",
      label: "%1% increased Ailment chance",
      baseValue: 2,
      perLevel: 2,
    },
    {
      id: "stagger-power",
      label: "%1% Stagger power",
      baseValue: 1,
      perLevel: 1,
    },
    {
      id: "bleed-chance",
      label: "%1% increased Bleed damage",
      baseValue: 2,
      perLevel: 2,
    },
  ],
  feats: [
    {
      id: "ailment-chance",
      name: "Ailment chance",
      details: ["25% increased Ailment chance"],
    },
    {
      id: "ailment-damage",
      name: "Ailment damage",
      details: ["25% increased Ailment damage"],
    },
    {
      id: "ailment-duration",
      name: "Ailment duration",
      details: ["25% increased Ailment duration"],
    },
  ],
};
