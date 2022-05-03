import Runner from "./src/Runner.ts";
import GameController from "./src/GameController.ts";
import PlayersEngine from "./src/PlayersEngine.ts";
import DiceGame from "./src/GameRules/DiceGame.ts";
import DiceGameBoard from "./src/GameRules/DiceGameBoard.ts";

(new Runner(
  new DiceGame(),
  new DiceGameBoard(),
  new GameController(),
  new PlayersEngine(),
)).start();
