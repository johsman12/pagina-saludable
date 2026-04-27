import "./Footer.css";

function Footer() {
  return (
    <footer className="site-footer" id="contacto">
      <div>
        <h3>Nutrik</h3>
        <p>Formulario digital para comentarios, quejas y sugerencias.</p>
      </div>

      <div className="footer-links">
        <a href="#inicio">Inicio</a>
        <a href="#formulario">Formulario</a>
        <a href="mailto:davidalexanderchangosantacruz@gmail.com">
          davidalexanderchangosantacruz@gmail.com
        </a>
      </div>

      <p className="footer-copy">© 2026 Nutrik. Canal de atencion al cliente.</p>
    </footer>
  );
}

export default Footer;
