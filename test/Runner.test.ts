import { Rhum } from "https://deno.land/x/rhum@v1.1.10/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";

import Runner from "../src/Runner.ts";
import BetEngine from "../src/BetEngine.ts";
import SocietyEngine from "../src/SocietyEngine.ts";

const mockedBetEngine = Rhum.mock(BetEngine).create();
const mockedSocietyEngine = Rhum.mock(SocietyEngine).create();
const runner = new Runner(mockedBetEngine, mockedSocietyEngine);

Deno.test("that the Runner has a start function", () => {
  assertEquals(typeof runner.start, "function");
});
