import "./Home.css";
import heroImage from "../assets/hero.png";
import comidaImage from "../assets/comida.jpg";

const beneficios = [
  "Planes de alimentación personalizados",
  "Recetas balanceadas y fáciles de preparar",
  "Acompañamiento para tus metas de bienestar",
];

function Home() {
  const irARegistro = () => {
    document.getElementById("registro")?.scrollIntoView({ behavior: "smooth" });
  };

  const irAProductos = () => {
    document.getElementById("productos")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="home-section" id="inicio">
      <div className="home-copy">
        <span className="home-badge">Nutrición simple, rica y cercana</span>
        <h2>Come mejor sin complicarte la vida.</h2>
        <p>
          En Nutrik te ayudamos a cuidar tu salud con opciones prácticas,
          asesoría y productos pensados para tu día a día.
        </p>

        <div className="home-actions">
          <button type="button" className="home-primary-btn" onClick={irARegistro}>
            Empezar ahora
          </button>
          <button type="button" className="home-secondary-btn" onClick={irAProductos}>
            Ver productos
          </button>
        </div>

        <div className="home-benefits">
          {beneficios.map((beneficio) => (
            <div key={beneficio} className="benefit-card">
              <span className="benefit-dot" />
              <p>{beneficio}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="home-visual">
        <div className="home-image-card">
          <img src={heroImage} alt="Ilustración de alimentación saludable" />
        </div>

        <div className="home-floating-card">
          <img src={comidaImage} alt="Comida saludable fresca" />
          <div>
            <strong>Menús frescos</strong>
            <p>Ingredientes reales y porciones equilibradas.</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
