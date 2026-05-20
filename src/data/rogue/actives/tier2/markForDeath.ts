import { Active } from "@/app/data/types";

export const markForDeath: Active = {
  id: "mark-for-death",
  tier: 2,
  name: "Mark for Death",
  description: [
    "Mark your target.",
    "When you hit the marked enemy, you deal an extra 15% of the hit as Vitality Damage",
    "This Damage cannot critically hit.",
    "This effect ends, when the target is no longer your Mark.",
  ],
  cost: {
    base: 20,
  },
  cooldown: 0,
  castTime: 340,
  critChance: 0,
  ailmentChance: 0,
  tags: ["Rogue", "Active", "Spell", "Shadow"],
  modifiers: [
    {
      id: "apply-doom",
      label: "Apply doom",
      maxRank: 5,
      cost: 1,
      perks: [
        {
          id: "apply-doom",
          label: "On use applies 2 Doom",
        },
        {
          id: "cost",
          label: "+20 Energy cost",
        },
      ],
    },
    {
      id: "weaken",
      label: "Weaken",
      maxRank: 5,
      cost: 1,
      perks: [
        {
          id: "damage-reduction",
          label: "The marked target deals 10% reduced Damage",
        },
        {
          id: "cost",
          label: "+2 Energy cost",
        },
      ],
    },
    {
      id: "poison-burst",
      label: "Poison Burst",
      maxRank: 5,
      cost: 1,
      perks: [
        {
          id: "burst-trigger",
          label:
            "After dealing 663 total damage, Mark is consumed dealing 15% of that as Poison Damage",
        },
      ],
    },
    {
      id: "poison-explosion",
      label: "Poison Explosion",
      maxRank: 5,
      cost: 1,
      requires: [{ id: "poison-burst", label: "Poison Burst" }],
      perks: [
        {
          id: "burst-aoe",
          label:
            "Poison Burst now deals Damage in a 2m radius and triggers when the target dies",
        },
      ],
    },
    {
      id: "shadow-dagger",
      label: "Shadow Dagger",
      maxRank: 5,
      cost: 1,
      perks: [
        {
          id: "crit-dagger",
          label:
            "Critical hits with active abilities trigger a Shadow Dagger for 2 Poison Damage",
        },
      ],
    },
    {
      id: "consume-flow",
      label: "Consume flow",
      maxRank: 5,
      cost: 1,
      perks: [
        {
          id: "flow-daggers",
          label:
            "Consumes Flow to hit target with 4 Shadow Daggers dealing 18 Poison Damage each",
        },
      ],
    },
  ],
};
