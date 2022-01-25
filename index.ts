import BetEngine from "./src/BetEngine.ts";
import Runner from "./src/Runner.ts";

const runner = new Runner(new BetEngine());
runner.start();
