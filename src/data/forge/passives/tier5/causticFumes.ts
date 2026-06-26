import { Passive } from "@/app/data/types";

export const causticFumes: Passive = {
  id: "caustic-fumes",
  name: "Caustic Fumes",
  tier: 5,
  max: 16,
  unlockAt: [8, 16],
  stats: [
    {
      id: "ailemt-chance",
      label: "%1% increased Ailment chance",
      baseValue: 2,
      perLevel: 2,
    },
    {
      id: "ailment-power",
      label: "%1% Ailment power",
      baseValue: 1,
      perLevel: 1,
    },
  ],
  feats: [
    {
      id: "ailment-damage",
      name: "Ailment damage",
      details: ["+25% increase Ailment damage"],
    },
    {
      id: "ailment-duration",
      name: "Ailment duration",
      details: ["+25% increased Ailment duration"],
    },
    {
      id: "ailment-chance",
      name: "Ailment chance",
      details: ["+25% increased Ailment chance"],
    },
  ],
};
