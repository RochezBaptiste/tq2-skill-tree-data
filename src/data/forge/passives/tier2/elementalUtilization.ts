import { Passive } from "@/app/data/types";

export const elementalUtilization: Passive = {
  id: "elemental-utilization",
  name: "Elemental utilization",
  tier: 2,
  max: 12,
  unlockAt: [6, 12],
  stats: [
    {
      id: "elemental-damage",
      label: "%1 increased Elemental damage",
      baseValue: 2,
      perLevel: 2,
    },
    {
      id: "elemental-consume",
      label:
        "%1 increased Elemental damage if you have consumed Elemental fusion in the last 5s",
      baseValue: 2,
      perLevel: 2,
    },
  ],
  feats: [
    {
      id: "elemental-damage",
      name: "elemental damage",
      details: ["20% increased Elemental damage"],
    },
    {
      id: "elemental-infusion",
      name: "Elemental infusion",
      details: [
        "Consuming Elemental infusion grants an additional 30% increased Elemental damage",
      ],
    },
    {
      id: "elemental-balance",
      name: "Elemental balance",
      details: [
        "Gain 25% increased total Elemental damage, if you have consumed all 3type of Elemental Infusion in the last 6s",
      ],
    },
  ],
};
