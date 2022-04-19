import { IGameController } from "./GameController.ts";
import { IPlayersEngine } from "./PlayersEngine.ts";
import { IGame } from "./Game.ts";

export default class Runner {
  constructor(
    private game: IGame,
    private GameController: IGameController,
    private PlayersEngine: IPlayersEngine,
  ) {
    GameController.Game = game;
    PlayersEngine.Game = game;
  }
  public start() {
    this.GameController.onCalculationFinished(
      () => this.PlayersEngine.prepareNextGeneration(),
    );
    this.PlayersEngine.onNextGenerationReady(() =>
      this.GameController.startCalculation()
    );
    this.PlayersEngine.prepareNextGeneration();
  }
}
