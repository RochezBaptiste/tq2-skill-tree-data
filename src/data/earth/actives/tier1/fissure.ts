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
    "the fissure stays for 2s and slows enemies by 20%",
    "Consumes full Overwhelm for 50% more damage",
  ],
  tags: ["Earth", "Active", "Spell", "Overwhelm", "Area", "Exhaust"],
  modifiers: [
    {
      id: "vulnerable",
      label: "Vulnerable on hit",
      maxRank: 1,
      cost: 2,
      perks: [
        {
          id: "hit",
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
          id: "chance",
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
          id: "damage",
          label: "%1% more damage",
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
          id: "duration",
          label: "+%1s Fissure duration",
          baseValue: 1,
          perLevel: 0.5,
        },
        {
          id: "damage",
          label:
            "The fissure is filled with lave and deals 22 Fire damage every 0.5s",
        },
        {
          id: "ailment",
          label: "The lava have 20% ailment chance",
        },
        {
          id: "cost",
          label: "+30 energy cost",
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
            "Hitting a stunned enemy triggers a shockwave dealing 218 Strike Damage in a 1.8m radius",
        },
        {
          id: "cost",
          label: "+2 Energy cost",
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
          id: "transform",
          label:
            "Turns the skill into a melee slam attack dealing 237% weapon damage with 100% weapon speed and 6m range instead.",
        },
        {
          id: "require",
          label: "Requires Axe, Swork, Spear or Blunt Melee Weapon",
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
          label: "+40% added Base Ailment Chance",
        },
        {
          id: "cost",
          label: "+2 Energy cost",
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
          id: "damage",
          label: "5% more damage",
        },
        {
          id: "stun-chance",
          label: "20% chance to Stun for 1.5s",
        },
      ],
    },
    {
      id: "interrupt",
      label: "Interrup",
      maxRank: 3,
      cost: 1,
      perks: [
        {
          id: "damage",
          label:
            "Deals 50% more damage against channeling enemies, stuns them for 1s and refunds 20% Energy spent.",
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
          id: "number",
          label: "Create +1 fissures in cone",
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
          id: "number",
          label: "Consuming full Overwhelm also adds +2 fissure in a cone.",
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
          id: "summons",
          label: "Instead command your Core Dweller to use Fissure",
        },
        {
          id: "damage",
          label: "10% more damage",
        },
      ],
    },
  ],
};
