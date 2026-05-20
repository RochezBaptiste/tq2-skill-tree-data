import { activeTier } from "@/app/data/rogue/actives";
import { passiveTiers } from "@/app/data/rogue/passives";
import { MasteryData } from "@/app/data/types";

export const masteryData: MasteryData = {
  active: activeTier,
  passive: passiveTiers,
};
