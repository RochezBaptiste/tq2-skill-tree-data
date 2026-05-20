import { Passive } from "@/app/data/types";

export const lightningBringer: Passive = {
  id: "lightning-bringer",
  name: "Lightning bringer",
  tier: 4,
  max: 16,
  unlockAt: [8, 16],
  stats: [
    {
      id: "strike-damage",
      label: "+1% Lightning Strike damage",
      baseValue: 9,
      perLevel: 8,
    },
  ],
  feats: [
    {
      id: "fire-explosion",
      name: "Fire explosion",
      details: [
        "When your Lightning Strikes hit a burning ennemy, you have a 20% chance to cause an explosion dealing 109 Fire damage in a 2.5m radius",
      ],
    },
    {
      id: "reservation",
      name: "Reservation",
      details: [
        "Reserve 10% Energy, Lightning Strikes deal 43.5% of reserved energy as additional Lightning damage",
      ],
    },
    {
      id: "critical-chance",
      name: "Critical hit chance",
      details: ["Lightning Strikes have +10% base critical hit chance"],
    },
  ],
};
