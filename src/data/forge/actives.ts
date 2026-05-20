import { bladeTrap, forgeCall } from "@/app/data/forge/actives/tier1";
import { chains, mineField, sentry } from "@/app/data/forge/actives/tier2";
import {
  ironclad,
  automaton,
  armorEruption,
  metalWelding,
} from "@/app/data/forge/actives/tier3";
import { forceField, temperedArsenal } from "@/app/data/forge/actives/tier4";
import { Active, Tier } from "@/app/data/types";

export const activeTier: Tier<Active>[] = [
  {
    level: 1,
    skills: [bladeTrap, forgeCall],
  },
  {
    level: 2,
    skills: [mineField, chains, sentry],
  },
  {
    level: 3,
    skills: [armorEruption, metalWelding, ironclad, automaton],
  },
  {
    level: 4,
    skills: [forceField, temperedArsenal],
  },
];
