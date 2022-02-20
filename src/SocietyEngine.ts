import { IEvent } from "./IBasics.ts";

export interface ISocietyEngine {
  onNextGenerationReady: IEvent;
  prepareNextGeneration(): void;
}
