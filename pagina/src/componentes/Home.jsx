import { useState } from "react";
import "./Home.css";
import supportImage from "../assets/comida.jpg";

const endpoint = "https://formsubmit.co/ajax/davidalexanderchangosantacruz@gmail.com";

const datosIniciales = {
  nombre: "",
  correo: "",
  telefono: "",
  tipo: "comentario",
  asunto: "",
  mensaje: "",
};

const puntos = [
  "Un solo formulario para comentarios, quejas y sugerencias.",
  "Datos minimos para facilitar respuesta y seguimiento.",
  "Confirmacion visible despues del envio.",
];

function Home() {
  const [formulario, setFormulario] = useState(datosIniciales);
  const [estado, setEstado] = useState({
    cargando: false,
    error: "",
    exito: "",
  });

  const actualizarCampo = (evento) => {
    const { name, value } = evento.target;
    setFormulario((actual) => ({
      ...actual,
      [name]: value,
    }));
  };

  const irAFormulario = () => {
    document.getElementById("formulario")?.scrollIntoView({ behavior: "smooth" });
  };

  const enviarFormulario = async (evento) => {
    evento.preventDefault();

    setEstado({
      cargando: true,
      error: "",
      exito: "",
    });

    try {
      const respuesta = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          nombre: formulario.nombre,
          correo: formulario.correo,
          telefono: formulario.telefono,
          tipo: formulario.tipo,
          asunto: formulario.asunto,
          mensaje: formulario.mensaje,
          _subject: `Nuevo ${formulario.tipo} - ${formulario.asunto}`,
          _template: "table",
          _captcha: "false",
        }),
      });

      const resultado = await respuesta.json();

      if (!respuesta.ok) {
        throw new Error(resultado.message || "No fue posible enviar el formulario.");
      }

      setFormulario(datosIniciales);
      setEstado({
        cargando: false,
        error: "",
        exito:
          "Tu mensaje fue enviado correctamente. Revisa el correo destino para confirmar la recepcion.",
      });
    } catch (error) {
      setEstado({
        cargando: false,
        error:
          error.message ||
          "No se pudo enviar el formulario. Intenta nuevamente en unos minutos.",
        exito: "",
      });
    }
  };

  return (
    <main className="home-page">
      <section className="hero-section" id="inicio">
        <div className="hero-copy">
          <span className="hero-badge">Canal de atencion</span>
          <h2>Registra tu comentario, queja o sugerencia.</h2>
          <p>
            Rediseñamos la pagina para que el proceso sea claro, directo y
            centrado en recibir mensajes que lleguen al correo de soporte.
          </p>

          <button type="button" className="hero-button" onClick={irAFormulario}>
            Ir al formulario
          </button>

          <div className="value-list">
            {puntos.map((punto) => (
              <article key={punto} className="value-card">
                <span className="value-dot" />
                <p>{punto}</p>
              </article>
            ))}
          </div>
        </div>

        <aside className="hero-panel">
          <img src={supportImage} alt="Atencion y soporte Nutrik" className="hero-image" />
          <div className="hero-panel-copy">
            <strong>Correo de destino</strong>
            <p>davidalexanderchangosantacruz@gmail.com</p>
          </div>
        </aside>
      </section>

      <section className="form-layout" id="formulario">
        <div className="form-intro">
          <span className="section-label">Formulario</span>
          <h3>Cuéntanos que paso</h3>
          <p>
            Completa los campos y envia el caso. La informacion se manda al
            correo configurado para revision y seguimiento.
          </p>

          <div className="info-box">
            <h4>Antes de enviar</h4>
            <ul>
              <li>Usa un asunto corto y entendible.</li>
              <li>Describe el caso con el mayor detalle posible.</li>
              <li>Deja un correo valido para respuesta.</li>
            </ul>
          </div>
        </div>

        <div className="form-card">
          <form className="feedback-form" onSubmit={enviarFormulario}>
            <div className="field-grid">
              <label className="field-group">
                <span>Nombre completo</span>
                <input
                  type="text"
                  name="nombre"
                  value={formulario.nombre}
                  onChange={actualizarCampo}
                  placeholder="Escribe tu nombre"
                  required
                />
              </label>

              <label className="field-group">
                <span>Correo electronico</span>
                <input
                  type="email"
                  name="correo"
                  value={formulario.correo}
                  onChange={actualizarCampo}
                  placeholder="correo@ejemplo.com"
                  required
                />
              </label>
            </div>

            <div className="field-grid">
              <label className="field-group">
                <span>Telefono</span>
                <input
                  type="tel"
                  name="telefono"
                  value={formulario.telefono}
                  onChange={actualizarCampo}
                  placeholder="3001234567"
                />
              </label>

              <label className="field-group">
                <span>Tipo</span>
                <select name="tipo" value={formulario.tipo} onChange={actualizarCampo}>
                  <option value="comentario">Comentario</option>
                  <option value="queja">Queja</option>
                  <option value="sugerencia">Sugerencia</option>
                </select>
              </label>
            </div>

            <label className="field-group">
              <span>Asunto</span>
              <input
                type="text"
                name="asunto"
                value={formulario.asunto}
                onChange={actualizarCampo}
                placeholder="Ejemplo: Retraso en respuesta"
                required
              />
            </label>

            <label className="field-group">
              <span>Mensaje</span>
              <textarea
                name="mensaje"
                value={formulario.mensaje}
                onChange={actualizarCampo}
                placeholder="Escribe aqui tu comentario, queja o sugerencia"
                rows="6"
                required
              />
            </label>

            <button type="submit" className="submit-button" disabled={estado.cargando}>
              {estado.cargando ? "Enviando..." : "Enviar formulario"}
            </button>
          </form>

          {estado.exito && (
            <div className="success-box" role="status">
              <h4>Envio completado</h4>
              <p>{estado.exito}</p>
            </div>
          )}

          {estado.error && (
            <div className="error-box" role="alert">
              <h4>No se pudo enviar</h4>
              <p>{estado.error}</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

export default Home;
