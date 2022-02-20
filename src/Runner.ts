import { IBetEngine } from "./BetEngine.ts";
import { ISocietyEngine } from "./SocietyEngine.ts";

export default class Runner {
  private betEngine: IBetEngine;
  private societyEngine: ISocietyEngine;
  constructor(betEngine: IBetEngine, societyEngine: ISocietyEngine) {
    this.betEngine = betEngine;
    this.societyEngine = societyEngine;
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
