import Runner from "./src/Runner.ts";
import BetEngine from "./src/BetEngine.ts";
import SocietyEngine from "./src/SocietyEngine.ts";
import { IBetEngine } from "./src/BetEngine.ts";
import DiceGame from "./src/Games/DiceGame.ts";

(new Runner(new BetEngine(DiceGame), new SocietyEngine())).start();
