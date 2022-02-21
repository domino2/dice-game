import { IBetEngine } from "./BetEngine.ts";
import { ISocietyEngine } from "./SocietyEngine.ts";

export default class Runner {
  constructor(
    private betEngine: IBetEngine,
    private societyEngine: ISocietyEngine,
  ) {
  }
  public start() {
    this.betEngine.onCalculationFinished(
      this.societyEngine.prepareNextGeneration,
    );
    this.societyEngine.onNextGenerationReady(this.betEngine.startCalculation);
    this.societyEngine.prepareNextGeneration();
    this.betEngine.startCalculation();
  }
}
