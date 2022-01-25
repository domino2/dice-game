import { IBetEngine } from "./BetEngine.ts";

export default class Runner {
  private betengine: IBetEngine;
  constructor(betengine: IBetEngine) {
    this.betengine = betengine;
  }
  public start() {
    console.log("Starting your Deno App", this.betengine.myFunction());
  }
}
