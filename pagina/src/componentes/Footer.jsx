import "./Footer.css";

function Footer() {
  return (
    <footer className="site-footer" id="footer">
      <div>
        <h3>Nutrik</h3>
        <p>Hábitos saludables, productos frescos y una experiencia más humana.</p>
      </div>

      <div className="footer-links">
        <a href="#inicio">Inicio</a>
        <a href="#productos">Productos</a>
        <a href="#registro">Registro</a>
      </div>

      <p className="footer-copy">© 2026 Nutrik. Alimentación saludable para todos.</p>
    </footer>
  );
}

export default Footer;
