export interface IGameRule {
  (input: number[], amount: number): number
}

export default class Game {
  constructor(
    private gameRules: Array<IGameRule>,
    readonly betAmountMin: number,
    readonly betAmountMax: number,
    readonly step: number,
  ) {
  }
}
