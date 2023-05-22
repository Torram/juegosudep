import { useEffect, useState } from "react";
import "./gato.css";
const Gato = () => {
  const INI_GAME_STATE = ["", "", "", "", "", "", "", "", ""];
  const [status, setStatus] = useState("");
  const [gameActive, setGameActive] = useState(true);
  const [currentPlayer, setCurrentPlayer] = useState("O");
  const [gameState, setGameState] = useState(INI_GAME_STATE);

  const WINNINGS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  const CURRENT_PLAYER_TURN = `Turno del jugador ${currentPlayer}`,
    DRAW_MESSAGE = `El juego ha terminado en empate!`,
    WIN_MESSAGE = `El jugador ${currentPlayer} ha ganado!`;

  const handleStatusDisplay = (message) => {
    setStatus(message);
  };
  const handlePlayerChange = () => {
    currentPlayer === "X" ? setCurrentPlayer("O") : setCurrentPlayer("X");
    handleStatusDisplay(CURRENT_PLAYER_TURN);
  };

  const handleCellClick = (e) => {
    const clickedCell = e.target;
    if (clickedCell.classList.contains("game-cell")) {
      const clickedCellIndex = Array.from(
        clickedCell.parentNode.children
      ).indexOf(clickedCell);
      if (gameState[clickedCellIndex] !== "" || !gameActive) {
        return false;
      }
      handleCellPlayed(clickedCellIndex);
      handleResultValidation();
    }
  };
  const handleCellPlayed = (index) => {
    let state = gameState;
    state[index] = currentPlayer;
    setGameState(state);
  };
  const handleRestartGame = () => {
    setGameActive(true);
    setCurrentPlayer("X");
    setGameState(INI_GAME_STATE);
    handleStatusDisplay(CURRENT_PLAYER_TURN);
  };
  const handleResultValidation = () => {
    let roundWon = false;
    for (let i = 0; i < WINNINGS.length; i++) {
      const winCondition = WINNINGS[i];
      let position1 = gameState[winCondition[0]];
      let position2 = gameState[winCondition[1]];
      let position3 = gameState[winCondition[2]];

      if (position1 === "" || position2 === "" || position3 === "") continue;
      if (position1 === position2 && position2 === position3) {
        roundWon = true;
        break;
      }
    }
    if (roundWon) {
      handleStatusDisplay(WIN_MESSAGE);
      setGameActive(false);
      return;
    }
    let roundDraw = !gameState.includes("");
    if (roundDraw) {
      handleStatusDisplay(DRAW_MESSAGE);
      setGameActive(false);
      return;
    }
    handlePlayerChange();
  };

  const main = () => {
    handleStatusDisplay(CURRENT_PLAYER_TURN);
  };

  useEffect(() => {
    main();
  }, []);

  return (
    <div className="bk-color container">
      <h1>Gato </h1>
      <h2>Desarrollado por Oscar Jahyr Niño Gallegos</h2>
      <div className="game-container" onClick={handleCellClick}>
        <div className="game-cell">{gameState[0]}</div>
        <div className="game-cell">{gameState[1]}</div>
        <div className="game-cell">{gameState[2]}</div>
        <div className="game-cell">{gameState[3]}</div>
        <div className="game-cell">{gameState[4]}</div>
        <div className="game-cell">{gameState[5]}</div>
        <div className="game-cell">{gameState[6]}</div>
        <div className="game-cell">{gameState[7]}</div>
        <div className="game-cell">{gameState[8]}</div>
      </div>
      <h2 className="game-notification">{status}</h2>
      <button className="game-restart" onClick={handleRestartGame}>
        Restablecer
      </button>
      <hr />
    </div>
  );
};
export default Gato;
