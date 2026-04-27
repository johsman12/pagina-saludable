import { Link } from 'react-router-dom';

function Botones() {
  return (
    <div className="botones-container">
      {/* Botón de Inicio: lleva a la raíz / */}
      <Link to="/">
        <button className="btn-nav">Inicio</button>
      </Link>

      {/* Botón de Registrarse: lleva a tu página /registro */}
      <Link to="/registro">
        <button className="btn-nav">Registrarse</button>
      </Link>

      {/* Botón de Iniciar Sesión: lleva a tu página /login */}
      <Link to="/login">
        <button className="btn-nav">Iniciar Sesión</button>
      </Link>
    </div>
  );
}

export default Botones;
