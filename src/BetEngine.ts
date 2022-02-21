import { IEvent } from "./Events.ts";
import Game from "./Game.ts";

export interface IBetEngine {
  onCalculationFinished: IEvent;
  startCalculation(): void;
}

export default class BetEngine implements IBetEngine {
  constructor(private game: Game) {
  }
  onCalculationFinished(): IEvent {
    throw new Error("Method not implemented.");
  }
  startCalculation(): void {
    throw new Error("Method not implemented.");
  }
}
