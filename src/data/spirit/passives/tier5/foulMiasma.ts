import { Passive } from "@/app/data/types";

export const foulMiasma: Passive = {
  id: "foul-miasma",
  name: "Foul miasma",
  tier: 5,
  max: 16,
  unlockAt: [8, 16],
  stats: [
    {
      id: "increasel-ailment-chance",
      label: "%1% increased Ailment chance",
      baseValue: 2,
      perLevel: 2,
    },
    {
      id: "increased-ailment-power",
      label: "%1% increased Ailment power",
      baseValue: 1,
      perLevel: 1,
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
