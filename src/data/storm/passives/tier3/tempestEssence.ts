import { Passive } from "@/app/data/types";

export const tempestEssence: Passive = {
  id: "tempest-essence",
  name: "Tempest essence",
  tier: 3,
  max: 12,
  unlockAt: [6, 12],
  stats: [
    {
      id: "increase-elemental-damage",
      label: "%1% increased elemental damage",
      baseValue: 3,
      perLevel: 3,
    },
    {
      id: "critical-hit-chance",
      label: "+%1% critical hit chance",
      baseValue: 0.2,
      perLevel: 0.2,
    },
    {
      id: "summon-inncrease-damage",
      label: "Your Summons have %1% increased elemental damage",
      baseValue: 3,
      perLevel: 3,
    },
  ],
  feats: [
    {
      id: "elemental-damage",
      name: "Elemental damage",
      details: ["20% increased elemental damage"],
    },
    {
      id: "summon-crit",
      name: "Summon crit",
      details: ["Your Summons have +5% critical hit chance"],
    },
    {
      id: "summon-restoration",
      name: "Summon restoration time",
      details: [
        "When you use an active elemental skill, reduce the restoration time of you summons by 1s",
      ],
    },
  ],
};
