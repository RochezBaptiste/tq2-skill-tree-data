import { Passive } from "@/app/data/types";

export const ephemeralRites: Passive = {
  id: "ephemeral-rites",
  name: "Ephemeral rites",
  tier: 2,
  max: 10,
  unlockAt: [5, 10],
  stats: [
    {
      id: "increased-skill-damage",
      label: "%1% increased Skill damage",
      baseValue: 2,
      perLevel: 2,
    },
    {
      id: "increased-cooldown-rate",
      label: "%1% increased Cooldown rate",
      baseValue: 2,
      perLevel: 2,
    },
    {
      id: "summons-increased-damage",
      label: "Your Summons have %1% increased Damage",
      baseValue: 2,
      perLevel: 2,
    },
    {
      id: "summons-increased-cooldown-rate",
      label: "Your Summons have %1% increased Cooldown rate",
      baseValue: 2,
      perLevel: 2,
    },
  ],
  feats: [
    {
      id: "cooldown-rate",
      name: "Cooldown rate",
      details: ["10% increased Cooldown rate"],
    },
    {
      id: "main-skills-cooldown-rate",
      name: "Main skills cooldown rate",
      details: ["15% increased Cooldown Rate with Main skills"],
    },
    {
      id: "summon-cooldown-rate",
      name: "Summon cooldown rate",
      details: ["Your summons have 15% increased Cooldown rate"],
    },
    {
      id: "soulburn",
      name: "Soulburn",
      details: ["15% increased Cooldown rate with Soulburn skills"],
    },
    {
      id: "barrier-recovery",
      name: "Barrier recovery",
      details: ["When you use a Cooldown Main skill, recover 120 Barrier"],
    },
    {
      id: "energy-recovery",
      name: "Energy recovery",
      details: [
        "When you use a Cooldown Main skill, recover 60 Energy over 5s",
      ],
    },
    {
      id: "cooldown-reduction",
      name: "Cooldown reduction",
      details: [
        "For every 30 Energy spent globally, reduce you Main skill Cooldowns by 0.1s",
      ],
    },
    {
      id: "summon-damage",
      name: "Summon damage",
      details: ["Your Summons have 35% increased Damage with Cooldown skills"],
    },
    {
      id: "summon-death-cooldown",
      name: "Summon death cooldown",
      details: [
        "When a Summon you control dies, reduce the Cooldown of your Main skills by 1s",
      ],
    },
  ],
};
