import { Passive } from "@/app/data/types";

export const witheringTouch: Passive = {
  id: "withering-touch",
  name: "Withering touch",
  tier: 2,
  max: 12,
  unlockAt: [6, 12],
  stats: [
    {
      id: "increased-damage-over-time",
      label: "%1% increased damage over time",
      baseValue: 4,
      perLevel: 4,
    },
    {
      id: "increased-ailment-chance",
      label: "%1% increased ailment chance",
      baseValue: 4,
      perLevel: 4,
    },
  ],
  feats: [
    {
      id: "ailment-chance",
      name: "Ailment chance",
      details: ["30% increased Ailment chance"],
    },
    {
      id: "ailment-duration",
      name: "Ailment duration",
      details: ["15% increased Ailment duration"],
    },
    {
      id: "maximum-ailment-stacks",
      name: "Maximum ailment stacks",
      details: ["+1 Maximum Ailment stacks"],
    },
    {
      id: "damage-over-time",
      name: "Damage over time",
      details: ["20% increased Damage over time"],
    },
    {
      id: "active-damage-over-time",
      name: "Active damage over time",
      details: ["30% increased Damage over time with active skill"],
    },
    {
      id: "doomed-damage-over-time",
      name: "Doomed damage over time",
      details: ["30% increased Damage over time against enemies with Doom"],
    },
  ],
};
