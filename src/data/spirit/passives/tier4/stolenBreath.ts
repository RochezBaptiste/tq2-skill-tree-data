import { Passive } from "@/app/data/types";

export const stolenBreath: Passive = {
  id: "stolen-breath",
  name: "Stolen breath",
  tier: 4,
  max: 12,
  unlockAt: [6, 12],
  stats: [
    {
      id: "physical-damage-lifesteal",
      label: "+%1% Physical damage lifesteal",
      baseValue: 0.5,
      perLevel: 0.5,
    },
    {
      id: "vitality-damage-lifesteal",
      label: "+%1% Vitality damage lifesteal",
      baseValue: 0.5,
      perLevel: 0.5,
    },
    {
      id: "increase-lifesteal",
      label: "%1% increased lifesteal",
      baseValue: 10,
      perLevel: 10,
    },
    {
      id: "summon-increased-lifesteal",
      label: "Your Summons have %1% increased Lifesteal",
      baseValue: 10,
      perLevel: 10,
    },
  ],
  feats: [
    {
      id: "health-reservation-lifesteal",
      name: "Healt reservation lifesteal",
      details: ["100% increased Lifesteal", "Reserve 10% Health"],
    },
    {
      id: "lifesteal",
      name: "Lifesteal",
      details: ["25% increased Lifesteal"],
    },
    {
      id: "low-health-lifesteal",
      name: "Low health lifesteal",
      details: ["100% increased Lifesteal while on low health"],
    },
    {
      id: "intense-lifesteal",
      name: "Intense lifesteal",
      details: ["200% increased total Lifesteal", "No health regeneration"],
    },
    {
      id: "summon-lifesteal",
      name: "Summon lifesteal",
      details: ["Your Summons have +5% Skill damage Lifesteal"],
    },
  ],
};
