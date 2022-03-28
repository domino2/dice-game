export interface IGameRule {
  (input: number[], amount: number): number;
}

// deno-lint-ignore no-empty-interface
export interface IGame {}

export interface GameProperty {
  set Game(game: IGame);
  get Game(): IGame;
}

export class NullGame implements IGame {}

export function WithGameProperty() {
  return <T extends new (...args: any[]) => any>(GameProperty: T) => {
    return class extends GameProperty {
      private game: IGame = new NullGame();

      public set Game(game: IGame) {
        this.game = game;
      }

      public get Game() {
        return this.game;
      }
    };
  };
}
