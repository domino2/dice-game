import { IListener } from "./Events.ts";
import Event from "./Events.ts";
import { IGameSet } from "./GameBuilder.ts";

export interface IGameController {
  onCalculationFinished(listener: IListener<void>): void;
  startCalculation(gs: IGameSet): void;
}

export default class implements IGameController {
  private onCalculationFinishedEvent: Event<void> = new Event();

  onCalculationFinished(listener: IListener<void>): void {
    this.onCalculationFinishedEvent.add(listener);
  }

  startCalculation(): void {
    this.onCalculationFinishedEvent.trigger();
  }
}
