import "./Header.css";
import logo from "../assets/Nutrik.jpg";

function Header() {
  return (
    <header className="site-header">
      <div className="brand-lockup">
        <img src={logo} alt="Logo Nutrik" className="brand-logo" />
        <div>
          <h1>Nutrik</h1>
          <p>Tu salud empieza aquí</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
