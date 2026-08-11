import { Passive } from "@/app/data/types";

export const echoingWard: Passive = {
  id: "echoing-ward",
  name: "Echoing ward",
  tier: 4,
  max: 10,
  unlockAt: [5, 10],
  stats: [
    {
      id: "barrier-regeneration",
      label: "+%1 Barrier regeneration",
      baseValue: 8,
      perLevel: 8,
    },
    {
      id: "barrier-decay-threshold",
      label: "+%1 Barrier Decay Threshold",
      baseValue: 24,
      perLevel: 24,
    },
  ],
  feats: [
    {
      id: "barrier-for-health",
      name: "Barrier for health",
      details: ["Recover Barrier equal to 10% of Health spent"],
    },
    {
      id: "barrier-decay-threshold",
      name: "Barrier decay Threshold",
      details: ["+80% Barrier Decay Threshold"],
    },
    {
      id: "barrier-regeneration",
      name: "Barrier regeneration",
      details: ["+24 Barrier Regeneration"],
    },
    {
      id: "barrier-cooldown-rate",
      name: "Barrier cooldown rate",
      details: ["+15% increased Barrier Cooldown rate"],
    },
    {
      id: "summon-death-barrier",
      name: "Summon death barrier",
      details: [
        "When a Lessen Summon you control dies, reduce your Barrier Cooldown by 0.5s",
        "When a greater Summon you control dies, reduce your Barrier Cooldown by 2s",
      ],
    },
  ],
};
