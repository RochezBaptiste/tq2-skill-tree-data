import { activeTier } from "@/app/data/warfare/actives";
import { passiveTiers } from "@/app/data/warfare/passives";
import { MasteryData } from "@/app/data/types";

export const masteryData: MasteryData = {
  active: activeTier,
  passive: passiveTiers,
};
