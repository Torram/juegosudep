import { useEffect, useState } from "react";
import "./quiz.css";
import { onLoad } from "./index";
import { preguntas } from "./base-preguntas";
import Swal from "sweetalert2";

const Quiz = () => {
  const [pregunta, setPregunta] = useState({});
  const [suspendButtons, setSuspendButtons] = useState(false);
  const [randomQuestions, setRandomQuestions] = useState(true);
  const [showGameOver, setShowGameOver] = useState(true);
  const [restartGame, setRestartGame] = useState(true);
  const [questionsMade, setQuestionsMade] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [possibleAnswers, setPossibleAnswers] = useState([]);
  const [nPreguntas, setNPreguntas] = useState([]);
  const [score, setScore] = useState("");
  const [number, setNumber] = useState("");

  const desordenarRespuestas = (preguntaElegida) => {
    const posibles_respuestas = [
      preguntaElegida.respuesta,
      preguntaElegida.incorrecta1,
      preguntaElegida.incorrecta2,
      preguntaElegida.incorrecta3,
    ];
    posibles_respuestas.sort(() => Math.random() - 0.5);
    setPossibleAnswers(posibles_respuestas);
  };

  const oprimirBoton = (e) => {
    console.log(suspendButtons);
    if (suspendButtons) {
      return;
    }
    setSuspendButtons(true);
    if (e.target.innerHTML === pregunta.respuesta) {
      setCorrectAnswers(correctAnswers + 1);
      e.target.style = { ...e.target.style, background: "lightgreen" };
    } else {
      e.target.style = { ...e.target.style, background: "pink" };
    }
    for (let j = 0; j < 4; j++) {
      if (possibleAnswers[j] == pregunta.respuesta) {
        e.target.style = { ...e.target.style, background: "lightgreen" };
      }
    }
    setTimeout(() => {
      reiniciar();
      setSuspendButtons(false);
    }, 1000);
  };

  const escogerPreguntaAleatoria = async () => {
    let n;
    if (randomQuestions) {
      n = Math.floor(Math.random() * preguntas.length);
    } else {
      n = 0;
    }

    while (nPreguntas.includes(n)) {
      n++;
      if (n >= preguntas.length) {
        n = 0;
      }
      if (nPreguntas.length === preguntas.length) {
        console.log("GAME OVER", showGameOver);
        if (showGameOver) {
          await Swal.fire({
            title: "Juego finalizado",
            text:
              "Puntuación: " +
              correctAnswers +
              "/" +
              (questionsMade - 1) +
              "\n" +
              "\n Desarrollador: Ricardo Escobar",
            icon: "success",
          });
        }
        console.log(restartGame);
        if (restartGame) {
          setCorrectAnswers(0);
          setQuestionsMade(0);
        }
        setNPreguntas([]);
      }
    }
    setNPreguntas([...nPreguntas, n]);
    setQuestionsMade(questionsMade + 1);
    escogerPregunta(n);
    setNumber(n);
  };

  const escogerPregunta = (n) => {
    setPregunta(preguntas[n]);
    let pc = correctAnswers;
    if (questionsMade > 1) {
      setScore(pc + "/" + (questionsMade - 1));
    } else setScore("");
    desordenarRespuestas(preguntas[n]);
  };

  const reiniciar = () => {
    escogerPreguntaAleatoria();
  };

  useEffect(() => {
    escogerPreguntaAleatoria();
  }, []);

  return (
    <div className="container">
      <h2 style={{ color: "white" }}>Preguntas y Respuestas</h2>
      <hr />
      <div className="contenedor">
        <div className="puntaje" id="puntaje" style={{ display: "none" }}>
          {score}
        </div>
        <div className="encabezado">
          <div className="categoria" id="categoria" style={{ display: "none" }}>
            {pregunta.categoria}
          </div>
          <div className="numero" id="numero">
            {number}
          </div>
          <div className="pregunta" id="pregunta">
            {pregunta.pregunta}
          </div>
          <img
            src={pregunta?.imagen ?? "#"}
            style={{
              objectFit: "cover",
              height: pregunta.imagen ? "200px" : "",
              width: pregunta.imagen ? "100%" : "",
            }}
            className="imagen"
            id="imagen"
          />
        </div>
        <div className="btn" id="btn1" onClick={oprimirBoton}>
          {possibleAnswers[0]}
        </div>
        <div className="btn" id="btn2" onClick={oprimirBoton}>
          {possibleAnswers[1]}
        </div>
        <div className="btn" id="btn3" onClick={oprimirBoton}>
          {possibleAnswers[2]}
        </div>
        <div className="btn" id="btn4" onClick={oprimirBoton}>
          {possibleAnswers[3]}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
