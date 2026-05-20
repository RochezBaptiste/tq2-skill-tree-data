import { Passive } from "@/app/data/types";

export const igneousPower: Passive = {
  id: "igneous-power",
  name: "Igneous Power",
  tier: 3,
  max: 12,
  unlockAt: [6, 12],
  stats: [
    {
      id: "elemental-damage",
      label: "%1% increased elemental damage",
      baseValue: 3,
      perLevel: 3,
    },
    {
      id: "ailment-chance",
      label: "%1% increased ailment chance",
      baseValue: 3,
      perLevel: 3,
    },
    {
      id: "summons-elemental-damage",
      label: "%1% increased Summons elemental damage",
      baseValue: 3,
      perLevel: 3,
    },
  ],
  feats: [
    {
      id: "elemental-damage",
      name: "Elemental damage",
      details: ["+20% increased elemental damage"],
    },
    {
      id: "empower",
      name: "Empower",
      details: [
        "For every 100 enery spent, you have a 30% cahnce to empower all of your summons for 4s",
      ],
    },
    {
      id: "summons-damage",
      name: "Summon damage",
      details: [
        "your summons have 40% increased damage against enemies affected by ailments",
      ],
    },
  ],
};
