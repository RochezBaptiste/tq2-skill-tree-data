import { Active, Tier } from "@/app/data/types";
import { chthonicPulse, reap, eidolonGuard } from "./actives/tier1";
import { deathchillAura, deathwardBeam, keres } from "./actives/tier2";
import { athanekros, soulVortex, darkPact } from "./actives/tier3";
import { deathNova } from "./actives/tier4";

export const activeTier: Tier<Active>[] = [
  {
    level: 1,
    skills: [chthonicPulse, reap, eidolonGuard],
  },
  {
    level: 2,
    skills: [deathchillAura, deathwardBeam, keres],
  },
  {
    level: 3,
    skills: [athanekros, soulVortex, darkPact],
  },
  {
    level: 4,
    skills: [deathNova],
  },
];
