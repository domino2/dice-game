import { IGameController } from "./GameController.ts";
import { IPlayersEngine } from "./PlayersEngine.ts";
import { GameSetBuilder, IGame, IGameBoard, IGameSet } from "./GameBuilder.ts";

export default class Runner {
  private GameSet: IGameSet;
  constructor(
    game: IGame,
    gameBoard: IGameBoard,
    private GameController: IGameController,
    private PlayersEngine: IPlayersEngine,
  ) {
    this.GameSet = GameSetBuilder(game, gameBoard);
  }
  public start() {
    this.GameController.onCalculationFinished(
      () => this.PlayersEngine.prepareNextGeneration(this.GameSet),
    );
    this.PlayersEngine.onNextGenerationReady(() =>
      this.GameController.startCalculation(this.GameSet)
    );
    this.PlayersEngine.prepareNextGeneration(this.GameSet);
  }
}
