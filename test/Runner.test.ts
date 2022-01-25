import { Rhum } from "https://deno.land/x/rhum@v1.1.10/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";

import Runner from "../src/Runner.ts";
import BetEngine from "../src/BetEngine.ts";
// import SocialEngine from "../src/SocialEngine.ts";


Deno.test("main goes to connect the world", () => {

    const mockedBetEngine = Rhum.mock(BetEngine).create();
    const runner = new Runner(mockedBetEngine);

    // mock.expects("myFunction").returns(2);

    mockedBetEngine.myFunction = () => 2;

    console.log(mockedBetEngine.myFunction())

    runner.start();

    

  // assertEquals(typeof betengine.addgamblers, "function");
  // assertEquals(typeof betengine.startbetting, "function");
  // assertEquals(typeof betengine.evaluateresult, "function");
  // assertEquals(typeof betengine.payback, "function");
});
