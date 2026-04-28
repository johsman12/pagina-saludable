import "./Botones.css";

const enlaces = [
  { etiqueta: "Inicio", destino: "inicio" },
  { etiqueta: "Productos", destino: "productos" },
  { etiqueta: "Iniciar sesión", destino: "login" },
  { etiqueta: "Registro", destino: "registro" },
  {etiqueta: "Carrito" , destino: "Carrito"}
];

function Botones() {
  const navegarASeccion = (destino) => {
    document.getElementById(destino)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="main-nav" aria-label="Navegación principal">
      {enlaces.map((enlace) => (
        <button
          key={enlace.destino}
          type="button"
          className="nav-button"
          onClick={() => navegarASeccion(enlace.destino)}
        >
          {enlace.etiqueta}
        </button>
      ))}
    </nav>
  );
}

export default Botones;
