import { Event, IListener } from "./InterfacesEvents.ts";
import { IActor, IGame, IGameController } from "./Interfaces.ts";

export default class implements IGameController {
  private onCalculationFinishedEvent: Event<void> = new Event();

  constructor(private game: IGame) {
    this.game = game;
  }

  onCalculationFinished(listener: IListener<void>): void {
    this.onCalculationFinishedEvent.add(listener);
  }

  startCalculation(actors: IActor[]): void {
    this.game.Board.clear();

    let boardStillHasSpace = Boolean(actors.length);

    do {
      for (let i = 0; i < actors.length && boardStillHasSpace; i += 1) {
        actors[i].act(this.game.Board, this.game.Rules);
        boardStillHasSpace = this.game.Board.hasSpace();
      }
    } while (boardStillHasSpace);

    this.onCalculationFinishedEvent.trigger();
  }
}
