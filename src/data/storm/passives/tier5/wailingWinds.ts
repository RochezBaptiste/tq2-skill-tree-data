import { Passive } from "@/app/data/types";

export const wailingWinds: Passive = {
  id: "wailing-winds",
  name: "Wailing Winds",
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
      id: "chill-power",
      label: "%1% increased Chill power",
      baseValue: 1,
      perLevel: 1,
    },
    {
      id: "shock-damage",
      label: "%1% increased Shock damage",
      baseValue: 2,
      perLevel: 2,
    },
  ],
  feats: [
    {
      id: "ailment-chance",
      name: "Ailment chance chance",
      details: ["25% increased Ailment chance"],
    },
    {
      id: "ailment-damage",
      name: "Ailment damage",
      details: ["25% increased Ailment chance"],
    },
    {
      id: "ailemnt-duration",
      name: "Ailment duration",
      details: ["25% increased Ailment duration"],
    },
  ],
};
