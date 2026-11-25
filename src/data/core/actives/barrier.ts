import { Active } from "@/app/data/types";

export const barrier: Active = {
  id: "barrier",
  tier: 0,
  name: "Barrier",
  cost: {},
  cooldown: 12000,
  castTime: 0,
  description: [
    "Create a Barrier around you that absorbs damage and decay over time.",
    "Total is determined by your Free Barrier and Energy Barrier",
    "On cast, consume x Energy to dain up to 333 Barrier",
    "Cost is based on Barrier conversion reate (1 Energy = 8.4 Energy Barrier)",
  ],
  tags: ["Active"],
  modifiers: [
    {
      id: "guard",
      label: "Guard",
      maxRank: 1,
      cost: 1,
      incompatibles: [{ id: "preparation", label: "Preparation" }],
      perks: [
        {
          id: "description",
          label: "400% increased global Barrier Decay rate",
        },
        {
          id: "description-2",
          label: "100% increased global Free Barrier",
        },
        {
          id: "description-3",
          label: "On use Barrier Decay is paused for 2.0s",
        },
        {
          id: "description-4",
          label: "-4s Base cooldown duration",
        },
        {
          id: "description-5",
          label: "Cooldown starts after 2.0s",
        },
      ],
    },
    {
      id: "barrier-heal",
      label: "Barrier Heal",
      maxRank: 3,
      cost: 1,
      perks: [
        {
          id: "description",
          label: "5% reduced Total Barrier",
        },
        {
          id: "description-2",
          label: "Regenerate health per second equal to 4% of current Barrier",
        },
      ],
    },
    {
      id: "preparation",
      label: "Preparation",
      maxRank: 1,
      cost: 1,
      incompatibles: [{ id: "guard", label: "Guard" }],
      perks: [
        {
          id: "description",
          label: "Cast time 0.6s",
        },
        {
          id: "description-2",
          label: "Cannot be used during Incapacitation",
        },
        {
          id: "description-3",
          label: "50% increased Total Barrier",
        },
        {
          id: "description-4",
          label: "50% less global Barrier Decay Rate",
        },
      ],
    },
    {
      id: "invigorating-guard",
      label: "Invigorating Guard",
      maxRank: 3,
      cost: 1,
      perks: [
        {
          id: "description",
          label: "For 2.0s after use, you heal for 100% of damage taken",
        },
      ],
    },
    {
      id: "reflecting-guard",
      label: "Reflecting Guard",
      maxRank: 3,
      cost: 1,
      perks: [
        {
          id: "description",
          label:
            "For 2.0s after use, reflect 40% of damage taken from hits as true damage",
        },
      ],
    },
    {
      id: "ailment-cleanse",
      label: "Ailment Cleanse",
      maxRank: 1,
      cost: 1,
      perks: [
        {
          id: "description",
          label: "On use cleanse all Ailments",
        },
      ],
    },
    {
      id: "enduring-barrier",
      label: "Enduring Barrier",
      maxRank: 3,
      cost: 1,
      perks: [
        {
          id: "description",
          label: "10% less global Barrier Decay rate",
        },
        {
          id: "description-2",
          label: "For 3.0s after use, generate 340 Barrier every second",
        },
      ],
    },
    {
      id: "fast-barrier",
      label: "Fast Barrier",
      maxRank: 3,
      cost: 1,
      perks: [
        {
          id: "description",
          label: "15% increased global Barrier Conversion rate",
        },
        {
          id: "description-2",
          label: "-1s Base cooldown duration",
        },
      ],
    },
    {
      id: "fleeting-barrier",
      label: "Fleeting Barrier",
      maxRank: 3,
      cost: 1,
      perks: [
        {
          id: "description",
          label: "50% increased global Barrier Decay rate",
        },
        {
          id: "description-2",
          label: "25% increased Total Barrier",
        },
      ],
    },

    //  Masteries
    {
      id: "rage-gain",
      label: "Rage Gain",
      maxRank: 3,
      cost: 1,
      perks: [
        {
          id: "description",
          label: "On use gain 1 Rage",
        },
        {
          id: "description-2",
          label: "For 5s after use, gain 77 Barrier whenever you gain Rage",
        },
      ],
      masteries: ["storm", "warfare"],
    },
  ],
};
