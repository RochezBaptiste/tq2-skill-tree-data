import { Passive } from "@/app/data/types";

export const erosion: Passive = {
  id: "erosion",
  name: "Erosion",
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
      label: "%1% increased Stagger power",
      baseValue: 1,
      perLevel: 1,
    },
    {
      id: "burn-damage",
      label: "%1% increased Burn damage",
      baseValue: 2,
      perLevel: 2,
    },
    {
      id: "Bleed-damage",
      label: "%1% increased Bleed damage",
      baseValue: 2,
      perLevel: 2,
    },
  ],
  feats: [
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
    {
      id: "ailment-chance",
      name: "Ailment chance",
      details: ["25% increased Ailment chance"],
    },
  ],
};
