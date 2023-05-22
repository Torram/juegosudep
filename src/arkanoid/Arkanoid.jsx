import { useEffect, useState } from "react";
import { juego } from "./arka";
import "./style.css";

const Arkanoid = () => {
  const [juegoIniciado, setJuegoIniciado] = useState(false);
  useEffect(() => {
    if (!juegoIniciado) {
      setJuegoIniciado(true);
      return juego();
    }
  }, []);

  return (
    <div className="container juego">
      {console.log(juegoIniciado)}
      <canvas id="myCanvas" width="800px" height="600px"></canvas>
      <button id="iniciar">Iniciar partida</button>
    </div>
  );
};
export default Arkanoid;
