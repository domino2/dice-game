// gamerule object is responsible to provide all possible moves upon the board.

    // let any player to act player.act = (board, gamerules): move

    // player will decide what move is good and will trigger it ....
    // player has not any knowledge about the game, but he can pick any move from the gameRules array
    // and return the move object ... move object is transformation the board from one state to another

    // kostkam staci pouze loger, predchozi stav hry nikoho nezajima, takze jde jen o playera, ktery sazi
    // sazka je volba itemu z gamerules array jako volba strategie a sazka ....
    // uzivatel muze vybrat ruzne strategie a za kazdou plati
    // to znamena, ze hrac rekne co bude delat a pokud zadny dalsi hrac nemusi cekat na ostatni hrace, ucini tak vsichni
    // Game class implementace pak losuje nahohodna cisla a vyhodnoti volbu hracu, ulozi si vklad a vyplati vyhry

    // tady probiha hra vech uzivatelu dokud hra neskonci
    // nebylo by spatne spawn another thread