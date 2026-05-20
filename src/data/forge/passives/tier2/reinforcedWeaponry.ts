import { Passive } from "@/app/data/types";

export const reinforcedWeaponry: Passive = {
  id: "reinforced-weaponry",
  name: "Reinforced weaponry",
  tier: 2,
  max: 12,
  unlockAt: [6, 12],
  stats: [
    {
      id: "increase-physical",
      label: "%1% increased Physical damage",
      baseValue: 3,
      perLevel: 6,
    },
    {
      id: "increase-bleed",
      label: "%1% increased Bleed damage",
      baseValue: 5,
      perLevel: 5,
    },
    {
      id: "summon-physical",
      label: "Your Summons have %1% increased Physical damage",
      baseValue: 3,
      perLevel: 3,
    },
  ],
  feats: [
    {
      id: "physical-damage",
      name: "Physical damage",
      details: ["25% increased Physical damage"],
    },
    {
      id: "damage-ailment",
      name: "Damage against Ailment",
      details: ["20% increased damage against Bleeding or Staggered ennemies"],
    },
    {
      id: "ailment-power",
      name: "Ailment power",
      details: ["20% increased Bleed damage", "20% increased Skill damage"],
    },
  ],
};
