import { barrier } from "@/app/data/core/actives/barrier";
import { dodge } from "@/app/data/core/actives/dodge";
import { primaryAttack } from "@/app/data/core/actives/primaryAttack";
import { primaryAttack2 } from "@/app/data/core/actives/primaryAttack2";
import { Active, Tier } from "@/app/data/types";

export const activeTier: Tier<Active>[] = [
  {
    level: 0,
    skills: [dodge, barrier, primaryAttack, primaryAttack2],
  },
];
