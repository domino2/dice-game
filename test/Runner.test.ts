import { Rhum } from "./testEnvironment/Rhum.ts";
import { assertEquals, assert } from "./testEnvironment/asserts.ts";

import Runner from "../src/Runner.ts";
import { NullGame } from "../src/Game.ts";
import GameController from "../src/GameController.ts";
import PlayersEngine from "../src/PlayersEngine.ts";

const mockedGame = Rhum.mock(NullGame).create();
const mockedGameController = Rhum.mock(GameController).create();
const mockedPlayersEngine = Rhum.mock(PlayersEngine).create();
const mockedRunner = Rhum.mock(Runner).withConstructorArgs(
  mockedGame,
  mockedGameController,
  mockedPlayersEngine,
).create();

Deno.test("The Runner has a start function", () => {
  assertEquals(typeof mockedRunner.start, "function");
});

Deno.test("The Runner assign same Game reference", () => {
  assertEquals(mockedPlayersEngine.Game, mockedGameController.Game);
});

Deno.test("The Runner starts the calculation", () => {
  let startCalculationCalled = false;
  mockedGameController.startCalculation = () => { startCalculationCalled = true; };
  mockedRunner.start();
  assertEquals(mockedPlayersEngine.calls.prepareNextGeneration, 1);
  assert(startCalculationCalled);
});
