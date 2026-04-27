import "./Header.css";
import logo from "../assets/Nutrik.jpg";

function Header() {
  return (
    <header className="site-header">
      <div className="brand-lockup">
        <img src={logo} alt="Logo Nutrik" className="brand-logo" />
        <div>
          <h1>Nutrik</h1>
          <p>Formulario de comentarios, quejas y sugerencias</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
