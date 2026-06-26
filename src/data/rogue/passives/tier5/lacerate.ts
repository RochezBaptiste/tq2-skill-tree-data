import { Passive } from "@/app/data/types";

export const lacerate: Passive = {
  id: "lacerate",
  name: "Lacerate",
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
      id: "plague-damage",
      label: "%1% Plague damage",
      baseValue: 2,
      perLevel: 2,
    },
    {
      id: "bleed-damage",
      label: "%1% increased Bleed damage",
      baseValue: 2,
      perLevel: 2,
    },
  ],
  feats: [
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
    {
      id: "ailment-damage",
      name: "Ailment damage",
      details: ["25% increased Ailemnt damage"],
    },
  ],
};
