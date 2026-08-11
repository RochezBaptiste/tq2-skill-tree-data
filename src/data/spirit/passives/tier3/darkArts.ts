import { Passive } from "@/app/data/types";

export const darkArts: Passive = {
  id: "dark-arts",
  name: "Dark Arts",
  tier: 3,
  max: 12,
  unlockAt: [6, 12],
  stats: [
    {
      id: "spell-vitality-damage",
      label: "+%1 Spell Vitality Damage",
      baseValue: 3,
      perLevel: 3,
    },
    {
      id: "increased-spell-damage",
      label: "%1% increased Spell damage",
      baseValue: 4,
      perLevel: 4,
    },
    {
      id: "increased-spell-ailment-chance",
      label: "%1% increased Spell Ailment chance",
      baseValue: 2,
      perLevel: 2,
    },
  ],
  feats: [
    {
      id: "spell-critical-hit-chance",
      name: "Spell critical hit chance",
      details: ["+3% Spell Critical hit chance"],
    },
    {
      id: "spell-ailment-chance",
      name: "Spell Ailment chance",
      details: ["30% increased Spell Ailment chance"],
    },
    {
      id: "cast speed",
      name: "Cast speed",
      details: ["8% increased cast speed"],
    },
    {
      id: "master-sorcerer",
      name: "Master sorcerer",
      details: ["Unlock master sorcerer"],
    },
    {
      id: "spell-damage",
      name: "Spell damage",
      details: ["25% increased Spell damage"],
    },
    {
      id: "cooldown-rate",
      name: "Cooldown rate",
      details: ["15% increased Spell Cooldown rate"],
    },
  ],
};
