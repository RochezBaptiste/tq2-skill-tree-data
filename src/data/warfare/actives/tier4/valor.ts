import { Active } from "@/app/data/types";

export const valor: Active = {
  id: "valor",
  tier: 4,
  name: "Valor",
  description: [
    "Spawns a giatn sword above your head that buffs you.",
    "After the ability ends, the sword come crashing down to damage enemies.",
    "Buff lasts for 6s and grants",
    "- 30% increased Movement speed",
    "- 10% increase Total damage",
    "Sword crashes down with a 0.7s delay and deals 1305-1741 Pierce damage",
  ],
  cost: {},
  cooldown: 6000,
  castTime: 0,
  critChance: 5,
  ailmentChance: 8,
  tags: ["Warfare", "Active", "Spell", "Blessing", "Area"],
  modifiers: [
    {
      id: "burst-of-speed",
      label: "Burst of Speed",
      maxRank: 3,
      cost: 1,
      perks: [
        {
          id: "increased-attack-speed",
          label: "Grants %1% increased attack and cast speed.",
          baseValue: 10,
          perLevel: 5,
        },
        {
          id: "increased-movement-speed",
          label:
            "When used directly, gain %1% additional movement speed, which decays over 3 seconds.",
          baseValue: 30,
          perLevel: 8,
        },
      ],
    },
    {
      id: "vitality-damage",
      label: "Vitality Damage",
      maxRank: 5,
      cost: 1,
      perks: [
        {
          id: "vitality-damage",
          label: "+%1 vitality weapon damage",
          baseValue: 8,
          perLevel: 7,
        },
        {
          id: "lifesteal",
          label: "+1% lifesteal",
          baseValue: 20,
          perLevel: 20,
        },
        {
          id: "cooldown",
          label: "+%1s cooldown duration.",
          baseValue: 0.5,
          perLevel: 0.5,
        },
      ],
    },
    {
      id: "rapid-regeneration",
      label: "Rapid Regeneration",
      maxRank: 5,
      cost: 1,
      perks: [
        {
          id: "health-regeneration",
          label:
            "Upon activation, for 1 second it grants: +1% health regeneration.%2% increased health regeneration.",
          baseValue: [91, 100],
          perLevel: [77, 25],
        },
      ],
    },
    {
      id: "frenzy",
      label: "Frenzy",
      maxRank: 5,
      cost: 1,
      perks: [
        {
          id: "damage",
          label: "+%1% total damage.Takes +%2% increased damage.",
          baseValue: [24, 12],
          perLevel: [8, 2],
        },
      ],
    },
    {
      id: "deadly-strike",
      label: "Deadly Strike",
      maxRank: 5,
      cost: 1,
      perks: [
        {
          id: "cooldown",
          label: "+%1% damage, %2% cooldown reduction, -50% duration reduction",
          baseValue: [8, 5],
          perLevel: [3, 5],
        },
      ],
    },
    {
      id: "enhanced-ailments",
      label: "Enhanced Ailments",
      maxRank: 5,
      cost: 1,
      perks: [
        {
          id: "ailment",
          label:
            "When active, it grants: ,+%1% ailment chance, +%2% ailment power",
          baseValue: [30, 8],
          perLevel: [30, 8],
        },
      ],
    },
    {
      id: "enhanced-critical-hits",
      label: "Enhanced Critical Hits",
      maxRank: 5,
      cost: 1,
      perks: [
        {
          id: "critical",
          label:
            "When active, it grants: ,+%1% additional critical hit chance, +%2% critical hit damage multiplier",
          baseValue: [2, 6],
          perLevel: [2, 6],
        },
      ],
    },
    {
      id: "enhanced-duration",
      label: "Enhanced Duration",
      maxRank: 3,
      cost: 1,
      perks: [
        {
          id: "duration",
          label: "+%1s duration",
          baseValue: 2,
          perLevel: 2,
        },
      ],
    },
    {
      id: "enhanced-damage",
      label: "Enhanced Damage",
      maxRank: 10,
      cost: 1,
      perks: [
        {
          id: "damage",
          label: "%1% more damage",
          baseValue: 10,
          perLevel: 10,
        },
      ],
    },
    {
      id: "sword-of-damocles",
      label: "Sword of Damocles",
      maxRank: 5,
      cost: 1,
      perks: [
        {
          id: "additional-damage",
          label: "%1% additional damage with the falling sword.",
          baseValue: 60,
          perLevel: 15,
        },
        {
          id: "total-damage",
          label: "The bonus grants %1% increased total damage.",
          baseValue: 15,
          perLevel: 5,
        },
        {
          id: "falling",
          label: "The falling sword also deals 3476 piercing damage to you.",
        },
      ],
    },
  ],
};
