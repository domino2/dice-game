import { IListener } from "./Events.ts";
import Event from "./Events.ts";
import { IGameSet } from "./GameBuilder.ts";

export interface IPlayersEngine {
  onNextGenerationReady(listener: IListener<void>): void;
  prepareNextGeneration(gs: IGameSet): void;
}

export default class implements IPlayersEngine {
  private onNextGenerationReadyEvent: Event<void> = new Event();

  onNextGenerationReady(listener: IListener<void>): void {
    this.onNextGenerationReadyEvent.add(listener);
  }

  prepareNextGeneration(gs: IGameSet): void {
    this.onNextGenerationReadyEvent.trigger();
  }
}
