import { arcaneInflux, ragingMind } from "@/app/data/storm/passives/tier1";
import {
  stormAffliction,
  stormAttunement,
  stormGuidance,
  stormProtection,
  stormInvoker,
} from "@/app/data/storm/passives/tier2";
import {
  lightningEvoker,
  overcharge,
  ragingStorm,
  stormAdaptation,
  tempestEssence,
} from "@/app/data/storm/passives/tier3";
import {
  arcaneShielding,
  deepFreeze,
  lightningBringer,
} from "@/app/data/storm/passives/tier4";
import { Passive, Tier } from "@/app/data/types";

export const passiveTiers: Tier<Passive>[] = [
  {
    level: 1,
    skills: [ragingMind, arcaneInflux],
  },
  {
    level: 2,
    skills: [
      stormAttunement,
      stormAffliction,
      stormGuidance,
      stormProtection,
      stormInvoker,
    ],
  },
  {
    level: 3,
    skills: [
      lightningEvoker,
      overcharge,
      ragingStorm,
      stormAdaptation,
      tempestEssence,
    ],
  },
  {
    level: 4,
    skills: [deepFreeze, lightningBringer, arcaneShielding],
  },
];
