import { IEvent } from "./IBasics.ts";
import Game from "./Game.ts";

export interface IBetEngine {
  onCalculationFinished: IEvent;
  startCalculation(): void;
}

abstract class ABetEngine implements IBetEngine {
  constructor(protected game: Game) {}
}

export default class BetEngine extends ABetEngine {
  constructor(protected game: Game) {
    super(game);
  }
}
