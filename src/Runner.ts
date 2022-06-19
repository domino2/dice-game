import { IActorController, IGameController } from "./Interfaces.ts";

export default class Runner {
  constructor(
    private GameController: IGameController,
    private ActorController: IActorController,
  ) {}
  public start() {
    this.GameController.onCalculationFinished(
      () => {
        // NOTE: this is commented out for now as single cycle is good enough to see the code in action
        // this.ActorController.prepareNextGeneration();
        console.log("Calculation Finished");
      },
    );
    this.ActorController.onNextGenerationReady((actors) =>
      console.log("Next Generation is ready", actors)
      // this.GameController.startCalculation(actors)
    );
    this.ActorController.prepareNextGeneration();
  }
}
