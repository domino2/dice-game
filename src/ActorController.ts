import { Event, IListener } from "./InterfacesEvents.ts";
import { IActor, IActorController, IGame } from "./Interfaces.ts";

export default class implements IActorController {
  private onNextGenerationReadyEvent: Event<IActor[]> = new Event();

  constructor(private game: IGame) {
    this.game = game;
  }

  onNextGenerationReady(listener: IListener<IActor[]>): void {
    this.onNextGenerationReadyEvent.add(listener);
  }

  prepareNextGeneration(): void {
    this.onNextGenerationReadyEvent.trigger([]);
  }
}
