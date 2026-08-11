import { Passive } from "@/app/data/types";

export const layeredVeil: Passive = {
  id: "layered-veil",
  name: "Layered veil",
  tier: 2,
  max: 12,
  unlockAt: [6, 12],
  stats: [
    {
      id: "increased-maximum-barrier",
      label: "%1% increased Maximum Barrier",
      baseValue: 7,
      perLevel: 7,
    },
    {
      id: "increased-barrier-conversion-rate",
      label: "%1% increased Barrier conversion rate",
      baseValue: 10,
      perLevel: 10,
    },
  ],
  feats: [
    {
      id: "life-barrier",
      name: "Life barrier",
      details: [
        "Grants you Free Barrier and barrier Decay threshold equal to your reserved Health",
        "Reserve 10% Health",
      ],
    },
    {
      id: "burst-barrier",
      name: "Burst barrier",
      details: [
        "100% increased Maximum Barrier",
        "30% increased Barrier Decay rate",
      ],
    },
    {
      id: "shade-consume",
      name: "Shade consume",
      details: ["When you consume a Shade, recover 20 Barrier"],
    },
    {
      id: "summon-damage",
      name: "Summon damage",
      details: [
        "Your Summons have added Skill Damage equal to 1% of your Current Barrier",
      ],
    },
    {
      id: "barrier-regeneration",
      name: "Barrier regeneration",
      details: ["+24 Barrier regeneration"],
    },
    {
      id: "barrier-decay-threshold",
      name: "Barrier decay threshold",
      details: ["+80 Barrier Decay Threshold"],
    },
  ],
};
