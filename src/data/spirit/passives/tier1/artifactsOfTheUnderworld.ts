import { Passive } from "@/app/data/types";

export const artifactsOfTheUnderworld: Passive = {
  id: "artifacts-of-the-underworld",
  name: "Artifacts of the underworld",
  tier: 1,
  max: 8,
  unlockAt: [4, 8],
  stats: [
    {
      id: "increase-skill-damage",
      label: "%1% increased Skill damage",
      baseValue: 3,
      perLevel: 3,
    },
    {
      id: "increase-vitality-damage",
      label: "+ %1 Skill Vitality damage",
      baseValue: 3.2,
      perLevel: 3.2,
    },
  ],
  feats: [
    {
      id: "lifesteal",
      name: "Lifesteal",
      details: ["20% increased Lifesteal"],
    },
    {
      id: "critical-hit-chance",
      name: "Critical hit chance",
      details: ["+3% Critical hit chance"],
    },
    {
      id: "ailment-chance",
      name: "Ailment chance",
      details: ["30% increased Ailment chance"],
    },
  ],
};
