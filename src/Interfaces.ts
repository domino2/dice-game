import { IListener } from "./InterfacesEvents.ts";

export interface IRule {
  (board: IBoard): IBoard;
}

export interface IBoard {
  clear(): void;
  hasSpace(): boolean;
}

export interface IGame {
  get Board(): IBoard;
  get Rules(): IRule[];
}

export interface IActor {
  act(board: IBoard, rules: IRule[]): void;
}

export interface IGameController {
  onCalculationFinished(listener: IListener<void>): void;
  startCalculation(actors: IActor[]): void;
}

export interface IActorController {
  onNextGenerationReady(listener: IListener<IActor[]>): void;
  prepareNextGeneration(): void;
}
