import { Active } from "@/app/data/types";

export const mineField: Active = {
  id: "mine-field",
  tier: 2,
  name: "Minefield",
  description: [
    "Throw 10 mines to target location.",
    "They activate after 0.5s",
    "Last for 8s",
    "Explodes on contact dealing 779 Strike damage in a 1m radius",
    "Consecutive explosions on the same target deal 40% less damage",
  ],
  cost: {
    base: 30,
    divineCore: 3,
  },
  cooldown: 5000,
  castTime: 700,
  critChance: 5,
  ailmentChance: 5,
  tags: ["Forge", "Active", "Main", "Spell", "Device"],
  modifiers: [
    {
      id: "enhanced-damage",
      label: "Enhanced Damage",
      maxRank: 10,
      cost: 1,
      perks: [
        {
          id: "description",
          label: "%1% more Damage",
          baseValue: 10,
          perLevel: 10,
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
          id: "description",
          label: "%1% Ailment Chance",
          baseValue: 15,
          perLevel: 15,
        },
      ],
    },
    {
      id: "elemental-infusion",
      label: "Elemental Infusion",
      maxRank: 5,
      cost: 1,
      perks: [
        {
          id: "description",
          label: "Consumes Elemental Infusion",
        },
        {
          id: "description-2",
          label: "+%1 Damage of the consumed type",
          baseValue: 116,
          perLevel: 116,
        },
        {
          id: "description-3",
          label: "%1% of Damage converted to the consumed type",
          baseValue: 10,
          perLevel: 5,
        },
      ],
    },
    {
      id: "enhanced-area",
      label: "Enhanced Area",
      maxRank: 5,
      cost: 1,
      perks: [
        {
          id: "description",
          label: "%1% increased Area Size",
          baseValue: 30,
          perLevel: 30,
        },
      ],
    },
    {
      id: "additional-mines",
      label: "Additional Mines",
      maxRank: 3,
      cost: 2,
      perks: [
        {
          id: "description",
          label: "+%1 additional Mines",
          baseValue: 6,
          perLevel: 3,
        },
        {
          id: "description-2",
          label: "+2 Divine Core Cost",
        },
      ],
    },
    {
      id: "cooldown-charges",
      label: "Cooldown Charges",
      maxRank: 3,
      cost: 2,
      perks: [
        {
          id: "description",
          label: "+%1 Cooldown Charges",
          baseValue: 1,
          perLevel: 1,
        },
        {
          id: "description-2",
          label: "+2 Divine Core Cost",
        },
      ],
    },
    {
      id: "remote-activation",
      label: "Remote Activation",
      maxRank: 1,
      cost: 2,
      perks: [
        {
          id: "description",
          label: "30% more Damage",
        },
        {
          id: "description-2",
          label: "The mines don't detonate automatically when near enemies",
        },
        {
          id: "description-3",
          label: "When you use an Exhaust Skill the mines detonate",
        },
      ],
    },
  ],
};
