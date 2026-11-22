import { Active } from "@/app/data/types";

export const fissure: Active = {
  id: "fissure",
  tier: 1,
  name: "Fissure",
  cost: {
    base: 70,
  },
  cooldown: 0,
  castTime: 670,
  critChance: 5,
  ailmentChance: 10,
  description: [
    "Split the ground in front of you to deal 516 Strike Damage in a 8m line.",
    "The fissure stays for 2s and slows enemies by 20%",
    "Consumes full Overwhelm for 50% more damage",
  ],
  tags: ["Earth", "Active", "Main", "Spell", "Overwhelm", "Area", "Exhaust"],
  modifiers: [
    {
      id: "vulnerable",
      label: "Vulnerable on hit",
      maxRank: 1,
      cost: 2,
      perks: [
        {
          id: "description",
          label: "Applies Vulnerable on hit for 4s",
        },
      ],
    },
    {
      id: "bulwark",
      label: "Bulwark on hit",
      maxRank: 1,
      cost: 2,
      perks: [
        {
          id: "description",
          label: "On hit, 50% chance to gain 3 Bulwark",
        },
      ],
    },
    {
      id: "damage",
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
      id: "lava",
      label: "Lava fissure",
      maxRank: 3,
      cost: 1,
      perks: [
        {
          id: "description",
          label: "+%1s Fissure duration",
          baseValue: 1,
          perLevel: 0.5,
        },
        {
          id: "description-2",
          label:
            "The fissure is filled with lava and deals %1 Fire Damage every 0.5s with %2% Ailment Chance.",
          baseValue: [38, 20],
          perLevel: [20, 10],
        },

        {
          id: "description-3",
          label: "+%1 energy cost",
          baseValue: 30,
          perLevel: 10,
        },
      ],
    },
    {
      id: "shockwave",
      label: "Shockwave",
      maxRank: 3,
      cost: 1,
      perks: [
        {
          id: "damage",
          label:
            "Hitting a stunned enemy triggers a shockwave dealing %1 Strike Damage in a %2m radius.",
          baseValue: [384, 1.8],
          perLevel: [77, 0.4],
        },
        {
          id: "cost",
          label: "%1 Energy cost",
          baseValue: 2,
          perLevel: 2,
        },
      ],
    },
    {
      id: "slam",
      label: "Slam attack",
      maxRank: 1,
      cost: 1,
      tags: ["Weapon Attack"],
      perks: [
        {
          id: "description",
          label:
            "Turns the skill into a melee slam attack dealing 240% Weapon Damage with 100% Weapon Speed and 6m",
        },
        {
          id: "description-2",
          label: "Requires Axe, Sword, Spear or Blunt Melee Weapon",
        },
      ],
    },
    {
      id: "spikes",
      label: "Spikes",
      maxRank: 3,
      cost: 1,
      perks: [
        {
          id: "convert",
          label: "100% Hit Damage converted to Pierce Damage",
        },
        {
          id: "ailement-chance",
          label: "+%1% added Base Ailment Chance",
          baseValue: 40,
          perLevel: 40,
        },
        {
          id: "cost",
          label: "+%1 Energy cost",
          baseValue: 2,
          perLevel: 2,
        },
      ],
    },
    {
      id: "staggering-force",
      label: "Staggering Force",
      maxRank: 3,
      cost: 1,
      perks: [
        {
          id: "description",
          label: "%1% more damage",
          baseValue: 5,
          perLevel: 5,
        },
        {
          id: "description-2",
          label: "%1% chance to Stun for 1.5s",
          baseValue: 20,
          perLevel: 10,
        },
      ],
    },
    {
      id: "interrupt",
      label: "Interrupt",
      maxRank: 3,
      cost: 1,
      perks: [
        {
          id: "damage",
          label:
            "Deals %1% more damage against channeling enemies, stuns them for 1s and refunds %2% Energy spent.",
          baseValue: [50, 20],
          perLevel: [50, 20],
        },
      ],
    },
    {
      id: "fissure-add",
      label: "Additional Fissures",
      maxRank: 2,
      cost: 2,
      perks: [
        {
          id: "description",
          label: "Create +%1 fissures in cone",
          baseValue: 1,
          perLevel: 1,
        },
      ],
    },
    {
      id: "consume-overwhelm",
      label: "Consume Overwhelm",
      maxRank: 1,
      cost: 2,
      requires: [{ id: "fissure-add", label: "Additional Fissures" }],
      perks: [
        {
          id: "description",
          label: "Consuming full Overwhelm also adds +2 fissures in a cone.",
        },
      ],
    },
    {
      id: "core-dweller",
      label: "Core dweller command",
      maxRank: 1,
      cost: 2,
      perks: [
        {
          id: "description",
          label: "Instead command your Core Dweller to use Fissure",
        },
        {
          id: "descripion-2",
          label: "10% more damage",
        },
      ],
    },
  ],
};
