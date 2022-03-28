import { IListener } from "./Events.ts";
import Event from "./Events.ts";
import { GameProperty, WithGameProperty } from "./Game.ts";

export interface IPlayersEngine extends GameProperty {
  onNextGenerationReady(listener: IListener<void>): void;
  prepareNextGeneration(): void;
}

export default WithGameProperty()(
  class PlayersEngine {
    private onNextGenerationReadyEvent: Event<void> = new Event();

    onNextGenerationReady(listener: IListener<void>): void {
      this.onNextGenerationReadyEvent.add(listener);
    }

    prepareNextGeneration(): void {
      console.log("prepareNextGeneration");
      this.onNextGenerationReadyEvent.trigger();
    }
  },
);
