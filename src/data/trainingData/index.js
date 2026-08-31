// Re-exports the same `sports` + `trainingPlans` shape the pages import
// (import { sports, trainingPlans } from "@/data/trainingData") — split into
// one file per modality just to keep individual files under ~500 lines.
import { sports } from "./sports";
import { corrida } from "./corrida";
import { natacao } from "./natacao";
import { ciclismo } from "./ciclismo";

export { sports };

export const trainingPlans = { corrida, natacao, ciclismo };
