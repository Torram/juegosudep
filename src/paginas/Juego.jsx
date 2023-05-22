import { useEffect } from "react";
import { useParams } from "react-router";
import Gato from "../gato/Gato";
import Quiz from "../quiz/Quiz";
//import Memorama from "../memorama/Memorama";
import Arkanoid from "../arkanoid/Arkanoid";
import Whac from "../whac/Whac";

const Juego = () => {
  const { juego } = useParams("juego");

  const getJuego = () => {
    switch (juego) {
      case "gato":
        return <Gato />;
      //case "tetris":
      //  return <Tetris />;
      case "arkanoid":
        return <Arkanoid />;
      //      case "memorama":
      //        return <Memorama />;
      case "quiz":
        return <Quiz />;
      case "whac":
        return <Whac />;
    }
  };

  return <div className="container text-center">{getJuego()}</div>;
};
export default Juego;
