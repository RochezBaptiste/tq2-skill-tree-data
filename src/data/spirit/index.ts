import { activeTier } from "@/app/data/spirit/actives";
import { passiveTiers } from "@/app/data/spirit/passives";
import { MasteryData } from "@/app/data/types";

export const masteryData: MasteryData = {
  active: activeTier,
  passive: passiveTiers,
};
