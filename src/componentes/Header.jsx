import "./Header.css";
// import logoNutrick from "./img/logoNutrick.png";
import avatar from "./img/Usuario.svg";
// import carrito from "./img/carrito.png";
import logo from "./img/logoN.svg";
import tienda from "./img/Tienda.svg";
import nuevo from "./img/Nuevo.svg";
import descuento from "./img/Descuento.svg";
import sugerencias from "./img/Sugerencia.svg";
import categoria from "./img/Categoria.svg";
import producto from "./img/Producto.svg"
import dieta from "./img/Dieta.svg";
import deseo from "./img/Deseo.svg";
import carrito from "./img/Carrito03.svg";
import busqueda from "./img/Busqueda.svg";

function Header() {
  return (
    <header className="header-container">
      <div className="fila-superior">
      <div className="logo">
        {/* <img className="img-logo" src={logoNutrick} alt="Logo" title="img" /> */}
        <img className="img-logo" src={logo} alt="Logo" title="Nutrick" />
      </div>

      <form className="buscador">
        <input type="text" placeholder="Buscar..." />
        <button type="submit"><img src={busqueda}alt="" /></button>
      </form>
      <div className="grupo-iconos">
        <div className="icono-user"  >
          <img className="user" src={avatar} alt="Avatar" />
        </div>
        <div className="icono-carrito">
          <img className="carrito" src={carrito} alt="Carrito" />
        </div>
        
          <img className="icono-circulo-deseo" src={deseo} alt="Deseo"  width={40} height={40} />
        
      </div>
      






      </div>
      <nav className="navegacion">
        <ul>
          <li><button className="btn-nav"><img src={categoria} alt="Categoría" width={20} height={20}  /><a href="">CATEGORIA</a></button></li>
          <li><button className="btn-nav"><img src={producto} alt="Producto" width={20} height={20}  /><a href="">PRODUCTOS</a></button></li>
          <li><button className="btn-nav"><img src={dieta} alt="Dieta" width={20} height={20}  /><a href="">DIETAS</a></button></li>

          <div className="divisor"></div>
          <div className="nav-extra">

          
          <li className="nav-extra">
            <span className="icono-circulo"><img src={tienda} alt="Tienda" /></span>
            <a href="#">Tienda</a>
          </li>

          <li className="nav-extra">
            <span className="icono-circulo"><img src={nuevo} alt="Nuevo" /></span>
            <a href="#">Lo nuevo</a>
          </li>

          <li className="nav-extra">
            <span className="icono-circulo"><img src={descuento} alt="Descuento" /></span>
            <a href="#">Descuento</a>
          </li>

          <li className="nav-extra">
            <span className="icono-circulo"><img src={sugerencias} alt="Sugerencias" /></span>
            <a href="#">Sugerencias</a>
          </li>
        </div>



        </ul>
        
      </nav>

    </header>
  );
}

export default Header;