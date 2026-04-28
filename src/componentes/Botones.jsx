import { Link } from 'react-router-dom';

function Botones() {
  return (
    <nav>
      {/* Usamos Link en lugar de button para la navegación */}
      <Link to="/"><button>Inicio</button></Link>
      <Link to="/comprar"><button>Comprar</button></Link>
      <Link to="/login"><button>Iniciar Sesión</button></Link>
      <Link to="/registro"><button>Registrarse</button></Link>
      <Link to="/contacto"><button>Contacto</button></Link>
    </nav>
  );
}

export default Botones;
