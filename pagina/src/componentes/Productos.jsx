import "./Productos.css";
import heroImage from "../assets/hero.png";
import comidaImage from "../assets/comida.jpg";
import logoImage from "../assets/Nutrik.jpg";

const productos = [
  {
    nombre: "Bowls Vitales",
    descripcion: "Combinaciones balanceadas de vegetales, proteína y granos para almuerzos completos.",
    imagen: comidaImage,
  },
  {
    nombre: "Snacks Nutrik",
    descripcion: "Opciones ligeras para media mañana o tarde con foco en energía y saciedad.",
    imagen: heroImage,
  },
  {
    nombre: "Kits Semanales",
    descripcion: "Selecciones listas para organizar tu semana sin perder sabor ni nutrición.",
    imagen: logoImage,
  },
];

function Productos() {
  return (
    <section className="productos-section" id="productos">
      <div className="productos-heading">
        <span>Nuestros destacados</span>
        <h2>Productos pensados para una rutina saludable</h2>
        <p>
          Cada opción fue diseñada para ayudarte a comer mejor sin dejar de
          disfrutar.
        </p>
      </div>

      <div className="productos-grid">
        {productos.map((producto) => (
          <article key={producto.nombre} className="producto-card">
            <img src={producto.imagen} alt={producto.nombre} className="producto-image" />
            <div className="producto-content">
              <h3>{producto.nombre}</h3>
              <p>{producto.descripcion}</p>
              <button type="button">Comprar ahora</button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Productos;
