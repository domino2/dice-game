export interface IGameRule {
  (input: number[], amount: number): number;
}

// deno-lint-ignore no-empty-interface
export interface IGame {}

// deno-lint-ignore no-empty-interface
export interface IGameBoard {}

export class NoGame implements IGame {}

export class NoBoard implements IGameBoard {}

export interface IGameSet {
  set Game(game: IGame);
  get Game(): IGame;
  set GameBoard(gameBoard: IGameBoard);
  get GameBoard(): IGameBoard;
}

export function GameSetBuilder(game: IGame, gameBoard: IGameBoard) {
  return new class implements IGameSet {
    constructor(private game: IGame, private gameBoard: IGameBoard) {
    }

    public set Game(game: IGame) {
      this.game = game;
    }

    public get Game() {
      return this.game;
    }

    public set GameBoard(gameBoard: IGameBoard) {
      this.gameBoard = gameBoard;
    }

    public get GameBoard() {
      return this.gameBoard;
    }
  }(game, gameBoard);
}
