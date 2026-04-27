import { Link } from 'react-router-dom';
import './Botones.css'; // Asegúrate de que este archivo exista e incluya los estilos

function Botones() {
  return (
    <nav className="botones-container">
      {/* Usamos un estilo simple para evitar que el Link subraye el texto */}
      <Link to="/" style={{ textDecoration: 'none' }}>
        <button className="btn-nav">Inicio</button>
      </Link>

      <Link to="/registro" style={{ textDecoration: 'none' }}>
        <button className="btn-nav">Registrarse</button>
      </Link>

      <Link to="/login" style={{ textDecoration: 'none' }}>
        <button className="btn-nav">Iniciar Sesión</button>
      </Link>
    </nav>
  );
}

export default Botones;