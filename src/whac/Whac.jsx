import { useEffect, useState } from "react";
import "./styles.css";
import { whac } from "./app";
const Whac = () => {
  const [startedGame, setStartedGame] = useState(false);
  useEffect(() => {
    if (!startedGame) {
      whac();
      setStartedGame(true);
    }
  }, []);
  return (
    <div className="container juego">
      <div className="container-fluid">
        <h2>tu puntaje:</h2>
        <h2 id="score">0</h2>

        <h2>cronometro:</h2>
        <h2 id="time-left">60</h2>
      </div>
      <div className="grid">
        <div className="square" id="1"></div>
        <div className="square" id="2"></div>
        <div className="square" id="3"></div>
        <div className="square" id="4"></div>
        <div className="square" id="5"></div>
        <div className="square" id="6"></div>
        <div className="square" id="7"></div>
        <div className="square" id="8"></div>
        <div className="square" id="9"></div>
      </div>
    </div>
  );
};
export default Whac;
