import { Rhum } from "./testEnvironment/Rhum.ts";
import { assertEquals, assertInstanceOf } from "./testEnvironment/asserts.ts";

import GameController from "../src/GameController.ts";
import { NullGame } from "../src/Game.ts";

const mockedGameController = Rhum.mock(GameController).create();

Deno.test("GameController implements the IGameController", () => {
  assertEquals(typeof mockedGameController.onCalculationFinished, "function");
  assertEquals(typeof mockedGameController.startCalculation, "function");
});

Deno.test("GameController has the Game property", () => {
  assertInstanceOf(mockedGameController.Game, NullGame);
});
