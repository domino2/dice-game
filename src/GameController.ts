import { IListener } from "./Events.ts";
import Event from "./Events.ts";
import { GameProperty, WithGameProperty } from "./Game.ts";

export interface IGameController extends GameProperty {
  onCalculationFinished(listener: IListener<void>): void;
  startCalculation(): void;
}

export default WithGameProperty()(
  class GameController {
    private onCalculationFinishedEvent: Event<void> = new Event();

    onCalculationFinished(listener: IListener<void>): void {
      this.onCalculationFinishedEvent.add(listener);
    }

    startCalculation(): void {
      this.onCalculationFinishedEvent.trigger();
    }
  },
);
