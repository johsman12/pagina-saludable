import "./Botones.css";

const enlaces = [
  { etiqueta: "Inicio", destino: "inicio" },
  { etiqueta: "Formulario", destino: "formulario" },
  { etiqueta: "Contacto", destino: "contacto" },
];

function Botones() {
  const navegarASeccion = (destino) => {
    document.getElementById(destino)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="main-nav" aria-label="Navegacion principal">
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
