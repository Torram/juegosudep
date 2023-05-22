import { Link } from "react-router-dom";
const Home = () => {
  const style = { color: "white" };
  return (
    <div className="container text-center" style={style}>
      <hr />
      <h3>
        <Link to="/juego/gato">Gato</Link> - Por Oscar Jahyr Niño Gallegos
      </h3>
      <hr />
      <h3>
        <Link to="/juego/quiz">Preguntas y Respuestas</Link> - Por Ricardo Alan
        Gómez Escobar
      </h3>
      <hr />
      <h3>
        <Link to="/juego/arkanoid">Arkanoid</Link>- Por Abdahi Salvador Huerta
        Chaverria
      </h3>
      <hr />
      <h3>
        <Link to="/juego/whac">Whac-a-Mole</Link>- Por Francisco Javier Palomo
        García
      </h3>
      <hr />
      <h3>
        <Link></Link>
      </h3>
      <hr />
      <h3>
        <Link></Link>
      </h3>
    </div>
  );
};

export default Home;
