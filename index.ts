import Runner from "./src/Runner.ts";
import GameController from "./src/GameController.ts";
import PlayersEngine from "./src/PlayersEngine.ts";
import DiceGame from "./src/GameRules/DiceGame.ts";

(new Runner(
  new DiceGame(),
  new GameController(),
  new PlayersEngine(),
)).start();
