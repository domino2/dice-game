import { IBoard, IGame } from "../../Interfaces.ts";
import Board from "./Board.ts";

export default class implements IGame {
  private gameBoard: IBoard;

  constructor() {
    this.gameBoard = new Board();
  }

  public get Board() {
    return this.gameBoard;
  }

  public get Rules() {
    return [];
  }
}
