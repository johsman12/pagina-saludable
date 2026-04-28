<<<<<<< HEAD
import "./Productos.css";
import heroImage from "../assets/hero.png";
import comidaImage from "../assets/comida.jpg";
import logoImage from "../assets/Nutrik.jpg";

const productos = [
  {
    nombre: "Bowls Vitales",
=======
import { useState } from "react";
import "./Productos.css";
import "./Carrito.css";
import snack from "../assets/snack.jpg";
import comidaImage from "../assets/comida.jpg";
import Kits from "../assets/Kits.png";

const productosDisponibles = [
  {
    id: 1,
    nombre: "Bowls Vitales",
    precio: 18500,
>>>>>>> origin/dev-carlos
    descripcion: "Combinaciones balanceadas de vegetales, proteína y granos para almuerzos completos.",
    imagen: comidaImage,
  },
  {
<<<<<<< HEAD
    nombre: "Snacks Nutrik",
    descripcion: "Opciones ligeras para media mañana o tarde con foco en energía y saciedad.",
    imagen: heroImage,
  },
  {
    nombre: "Kits Semanales",
    descripcion: "Selecciones listas para organizar tu semana sin perder sabor ni nutrición.",
    imagen: logoImage,
=======
    id: 2,
    nombre: "Snacks Nutrik",
    precio: 9000,
    descripcion: "Opciones ligeras para media mañana o tarde con foco en energía y saciedad.",
    imagen: snack,
  },
  {
    id: 3,
    nombre: "Kits Semanales",
    precio: 35000,
    descripcion: "Selecciones listas para organizar tu semana sin perder sabor ni nutrición.",
    imagen: Kits,
>>>>>>> origin/dev-carlos
  },
];

function Productos() {
<<<<<<< HEAD
=======
  const [carrito, setCarrito] = useState([]);

  // Agrega un produc al carrito s
  function agregar(producto) {
    const existe = carrito.find((item) => item.id === producto.id);
    if (existe) {
      setCarrito(
        carrito.map((item) =>
          item.id === producto.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        )
      );
    } else {
      setCarrito([...carrito, { ...producto, cantidad: 1 }]);
    }
  }

  // Elimina 
  function quitar(id) {
    setCarrito(carrito.filter((item) => item.id !== id));
  }

  //calcula la suma precio * cantidad 
  const total = carrito.reduce(
    (suma, item) => suma + item.precio * item.cantidad,
    0
  );

>>>>>>> origin/dev-carlos
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
<<<<<<< HEAD
        {productos.map((producto) => (
          <article key={producto.nombre} className="producto-card">
            <img src={producto.imagen} alt={producto.nombre} className="producto-image" />
            <div className="producto-content">
              <h3>{producto.nombre}</h3>
              <p>{producto.descripcion}</p>
              <button type="button">Comprar ahora</button>
=======
        {productosDisponibles.map((producto) => (
          <article key={producto.id} className="producto-card">
            <img
              src={producto.imagen}
              alt={producto.nombre}
              className="producto-image"
            />
            <div className="producto-content">
              <h3>{producto.nombre}</h3>
              <p>{producto.descripcion}</p>
              <p>${producto.precio.toLocaleString()}</p>
              <button type="button" onClick={() => agregar(producto)}>
                Agregar al carrito
              </button>
>>>>>>> origin/dev-carlos
            </div>
          </article>
        ))}
      </div>
<<<<<<< HEAD
=======

      <div className="carrito-inicio">
        <h3 className="titulo">Tu carrito</h3>

        {carrito.length === 0 ? (
          <p className="carrito-vacio">No hay productos...</p>
        ) : (
          <>
            {carrito.map((item) => (
              <div key={item.id} className="carrito-item">
                <span>{item.nombre}</span>
                <span>x{item.cantidad}</span>
                <span>${(item.precio * item.cantidad).toLocaleString()}</span>
                <button className="btn-quitar" onClick={() => quitar(item.id)}>
                  Quitar
                </button>
              </div>
            ))}
            <div className="carrito-total">
              <strong>Total: ${total.toLocaleString()}</strong>
            </div>
            <button className="btn-seguir">comprar</button>
          </>
        )}
      </div>
>>>>>>> origin/dev-carlos
    </section>
  );
}

<<<<<<< HEAD
export default Productos;
=======
export default Productos;
>>>>>>> origin/dev-carlos
