import Runner from "./src/Runner.ts";
import BetEngine from "./src/BetEngine.ts";
import SocietyEngine from "./src/SocietyEngine.ts";
import DiceGameRules from "./src/GameRules/DiceGame.ts";
import Game from "./src/Game.ts";

(new Runner(
  new BetEngine(new Game(DiceGameRules, 0, 100, 5)),
  new SocietyEngine(),
)).start();
