import { Active } from "@/app/data/types";

export const mineField: Active = {
  id: "mine-field",
  tier: 2,
  name: "Minefield",
  description: [
    "Throw 10 mines to target location.",
    "They activate after 0.5s",
    "Last for 8s",
    "Explodes on contact dealing X Strike damage in a 1m radius",
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
  tags: ["Forge", "Active", "Spell", "Device"],
  modifiers: [
    {
      id: "enhanced-damage",
      label: "Enhanced Damage",
      maxRank: 10,
      cost: 1,
      perks: [],
    },
    {
      id: "enhanced-ailments",
      label: "Enhanced Ailments",
      maxRank: 5,
      cost: 1,
      perks: [],
    },
    {
      id: "elemental-infusion",
      label: "Elemental Infusion",
      maxRank: 5,
      cost: 1,
      perks: [],
    },
    {
      id: "enhanced-area",
      label: "Enhanced Area",
      maxRank: 5,
      cost: 1,
      perks: [],
    },
    {
      id: "additional-mines",
      label: "Additional Mines",
      maxRank: 3,
      cost: 2,
      perks: [],
    },
    {
      id: "cooldown-charges",
      label: "Cooldown Charges",
      maxRank: 3,
      cost: 2,
      perks: [],
    },
    {
      id: "remote-activation",
      label: "Remote Activation",
      maxRank: 1,
      cost: 2,
      perks: [],
    },
  ],
};
