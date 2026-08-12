import { Passive } from "@/app/data/types";

export const spiritConduit: Passive = {
  id: "spirit-conduit",
  name: "Spirit conduit",
  tier: 2,
  max: 12,
  unlockAt: [6, 12],
  stats: [
    {
      id: "increased-elemental-damage",
      label: "%1% increased Elemental damage",
      baseValue: 3,
      perLevel: 3,
    },
    {
      id: "increased-damage-infusion-skills",
      label: "%1% increased damage with Infusion skills",
      baseValue: 2,
      perLevel: 2,
    },
    {
      id: "increased-damage-elemental-ailments",
      label: "%1% increased damage with Elemental Ailments",
      baseValue: 4,
      perLevel: 4,
    },
  ],
  feats: [
    {
      id: "elemental-damage",
      name: "Elemental damage",
      details: ["25% increased Elemental damage"],
    },
    {
      id: "maximum-elemental-infusion",
      name: "Maximum Elemental infusion",
      details: ["+1 Maximum Elemental infusion"],
    },
    {
      id: "shade-generation",
      name: "Shade generation",
      details: [
        "Consuming Elemental Infusion progresses your Shade generation by 2s",
      ],
    },
    {
      id: "soulburn-infusion",
      name: "Soulburn Infusion",
      details: [
        "100% increased Elemental Damage with skills that are tagged both Soulburn and Infusion",
      ],
    },
    {
      id: "summon-elemental-damage",
      name: "Summon Elemental damage",
      details: ["Your Summons have 25% increased Elemental Damage"],
    },
  ],
};
