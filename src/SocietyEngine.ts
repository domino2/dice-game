import { IEvent } from "./Events.ts";

export interface ISocietyEngine {
  onNextGenerationReady: IEvent;
  prepareNextGeneration(): void;
}

export default class SocietyEngine implements ISocietyEngine {
  constructor() {
  }
  onNextGenerationReady(): IEvent {
    throw new Error("Method not implemented.");
  }
  prepareNextGeneration(): void {
    throw new Error("Method not implemented.");
  }
}