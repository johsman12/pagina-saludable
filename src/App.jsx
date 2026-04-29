import { useState } from "react";
import heroImage from "./assets/comida.jpg";
import "./App.css";

const initialForm = {
  nombre: "",
  correo: "",
  telefono: "",
  tipo: "Queja",
  asunto: "",
  mensaje: "",
};

function App() {
  const [formData, setFormData] = useState(initialForm);
  const [status, setStatus] = useState("");

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const subject = encodeURIComponent(
      `${formData.tipo}: ${formData.asunto || "Nuevo mensaje desde la app"}`
    );

    const body = encodeURIComponent(
      [
        `Tipo de mensaje: ${formData.tipo}`,
        `Nombre: ${formData.nombre}`,
        `Correo: ${formData.correo}`,
        `Telefono: ${formData.telefono || "No proporcionado"}`,
        "",
        "Mensaje:",
        formData.mensaje,
      ].join("\n")
    );

    window.location.href = `mailto:davidalexanderchangosantacruz@gmail.com?subject=${subject}&body=${body}`;

    setStatus(
      "Abrimos tu correo para completar el envio. Si no se abre automaticamente, revisa que tengas una app de correo configurada."
    );
    setFormData(initialForm);
  };

  return (
    <div className="app-shell">
      <header className="support-header">
        <div className="support-header__content">
          <span className="support-badge">Atencion al usuario</span>
          <h1>Quejas, reclamos, sugerencias y recomendaciones</h1>
          <p>
            Comparte tu experiencia de forma clara y directa. Este formulario
            organiza tu mensaje y lo prepara para enviarlo al correo de
            atencion.
          </p>
          <a className="support-header__cta" href="#formulario-contacto">
            Enviar mensaje
          </a>
        </div>

        <div className="support-highlight">
          <div className="support-highlight__image">
            <img
              src={heroImage}
              alt="Alimentos saludables presentados como imagen principal"
            />
          </div>
          <div className="support-highlight__card">
            <strong>Canal unificado</strong>
            <p>
              Usa este espacio para reportar una queja, hacer un reclamo o
              dejar una idea de mejora en un solo lugar.
            </p>
          </div>
        </div>
      </header>

      <main className="support-main">
        <section className="support-intro">
          <article className="support-info-card">
            <h2>Tu opinion ayuda a mejorar</h2>
            <p>
              Selecciona el tipo de mensaje, cuentanos lo ocurrido y agrega tus
              datos para poder responderte de forma adecuada.
            </p>
          </article>

          <article className="support-info-card support-info-card--soft">
            <h2>Correo de destino</h2>
            <p className="support-email">
              davidalexanderchangosantacruz@gmail.com
            </p>
            <p>
              El formulario genera automaticamente el asunto y el cuerpo del
              mensaje para que lo envies mas rapido.
            </p>
          </article>
        </section>

        <section className="support-form-section" id="formulario-contacto">
          <div className="support-form-copy">
            <span className="section-tag">Formulario de contacto</span>
            <h2>Escribenos con confianza</h2>
            <p>
              Puedes usar este formulario para registrar una situacion, pedir
              revision de un caso, dejar una sugerencia o recomendar una mejora
              del servicio.
            </p>

            <div className="support-points">
              <div className="support-point">
                <span className="support-point__dot" />
                <p>Quejas por inconformidades en la atencion o el servicio.</p>
              </div>
              <div className="support-point">
                <span className="support-point__dot" />
                <p>Reclamos para solicitar revision o solucion de un caso.</p>
              </div>
              <div className="support-point">
                <span className="support-point__dot" />
                <p>Sugerencias y recomendaciones para seguir mejorando.</p>
              </div>
            </div>
          </div>

          <form className="support-form" onSubmit={handleSubmit}>
            <label>
              Nombre completo
              <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                placeholder="Escribe tu nombre"
                required
              />
            </label>

            <div className="support-form__grid">
              <label>
                Correo electronico
                <input
                  type="email"
                  name="correo"
                  value={formData.correo}
                  onChange={handleChange}
                  placeholder="tunombre@correo.com"
                  required
                />
              </label>

              <label>
                Telefono
                <input
                  type="tel"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  placeholder="Opcional"
                />
              </label>
            </div>

            <div className="support-form__grid">
              <label>
                Tipo de mensaje
                <select
                  name="tipo"
                  value={formData.tipo}
                  onChange={handleChange}
                >
                  <option>Queja</option>
                  <option>Reclamo</option>
                  <option>Sugerencia</option>
                  <option>Recomendacion</option>
                </select>
              </label>

              <label>
                Asunto
                <input
                  type="text"
                  name="asunto"
                  value={formData.asunto}
                  onChange={handleChange}
                  placeholder="Resumen breve del mensaje"
                  required
                />
              </label>
            </div>

            <label>
              Describe tu mensaje
              <textarea
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                rows="7"
                placeholder="Cuentanos lo que paso o la recomendacion que quieres compartir"
                required
              />
            </label>

            <button type="submit">Preparar correo</button>

            {status ? <p className="support-form__status">{status}</p> : null}
          </form>
        </section>
      </main>

      <footer className="support-footer">
        <p>Canal de contacto para atencion, seguimiento y mejora del servicio.</p>
        <a href="mailto:davidalexanderchangosantacruz@gmail.com">
          davidalexanderchangosantacruz@gmail.com
        </a>
      </footer>
    </div>
  );
}

export default App;
