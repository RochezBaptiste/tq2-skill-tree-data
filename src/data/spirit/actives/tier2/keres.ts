import { Active } from "@/app/data/types";

export const keres: Active = {
  id: "keres",
  tier: 2,
  name: "Keres",
  description: ["When you or your Summons kill an enemy, summon 1 Keres."],
  cost: {
    reserved: 50,
  },
  cooldown: 0,
  castTime: 0,
  tags: ["Spirit", "Sustained", "Lesser Summon"],
  modifiers: [
    {
      id: "doom",
      label: "Doom",
      maxRank: 3,
      cost: 1,
      perks: [
        {
          id: "description",
          label: "On debuff application also apply 3 Doom",
        },
      ],
    },
    {
      id: "execution-threshold",
      label: "Execution Threshold",
      maxRank: 3,
      cost: 1,
      perks: [
        {
          id: "description",
          label: "This debuff applies +2,374 Execution Threshold",
        },
      ],
    },
    {
      id: "carnage",
      label: "Carnage",
      maxRank: 3,
      cost: 1,
      perks: [
        {
          id: "description",
          label:
            "When the afflected enemy dies, you have a 25% chance to gain 2 Carnage",
        },
      ],
    },
    {
      id: "weaken",
      label: "Weaken",
      maxRank: 3,
      cost: 1,
      perks: [
        {
          id: "description",
          label:
            "When you or your Summons hit the affected enemy, apply 1 Weakened, no more than once every 2s",
        },
      ],
    },
    {
      id: "doom-on-hit",
      label: "Doom on Hit",
      maxRank: 3,
      cost: 1,
      perks: [
        {
          id: "description",
          label:
            "When you or your Summons hit the affected enemy, apply 1 Doom, not more than once every 1s",
        },
      ],
    },
    {
      id: "vitality-burst",
      label: "Vitality Burst",
      maxRank: 3,
      cost: 1,
      perks: [
        {
          id: "description",
          label:
            "After you and your allies have dealt a total of 964 damage to the affected enemy, deal 10% of that as unscaled Vitality damage",
        },
      ],
    },
    {
      id: "drink-essence",
      label: "Drink Essence",
      maxRank: 1,
      cost: 2,
      perks: [
        {
          id: "description",
          label: "When the affected enemy dies, recover 51 health",
        },
      ],
    },
    {
      id: "rampage",
      label: "Rampage",
      maxRank: 1,
      cost: 2,
      perks: [
        {
          id: "description",
          label:
            "When you hit an enemy, you have a 20% chance to summon a Keres, rolls no more than once every 2s",
        },
      ],
    },
  ],
};
