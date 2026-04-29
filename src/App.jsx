import { useState } from "react";
import heroImage from "./assets/comida.jpg";
import "./App.css";

const FORMSUBMIT_ENDPOINT =
  "https://formsubmit.co/ajax/davidalexanderchangosantacruz@gmail.com";

const initialForm = {
  nombre: "",
  correo: "",
  telefono: "",
  tipo: "Queja",
  asunto: "",
  mensaje: "",
  website: "",
};

function App() {
  const [formData, setFormData] = useState(initialForm);
  const [status, setStatus] = useState({
    type: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (formData.website) {
      return;
    }

    setIsSending(true);
    setStatus({
      type: "",
      message: "",
    });

    try {
      const response = await fetch(FORMSUBMIT_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: `${formData.tipo}: ${formData.asunto}`,
          _template: "table",
          _replyto: formData.correo,
          nombre: formData.nombre,
          correo: formData.correo,
          telefono: formData.telefono || "No proporcionado",
          tipo: formData.tipo,
          asunto: formData.asunto,
          mensaje: formData.mensaje,
        }),
      });

      const data = await response.json();

      if (!response.ok || data.success === false) {
        throw new Error(data.message || "No se pudo enviar el formulario.");
      }

      setStatus({
        type: "success",
        message:
          "Tu mensaje fue enviado correctamente. Revisa tambien el correo de destino para confirmar la activacion del formulario la primera vez.",
      });
      setFormData(initialForm);
    } catch (error) {
      setStatus({
        type: "error",
        message:
          "No pudimos enviar tu mensaje en este momento. Intenta de nuevo en unos segundos.",
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="app-shell">
      <header className="support-header">
        <div className="support-header__content">
          <span className="support-badge">Atencion al usuario</span>
          <h1>Quejas, reclamos, sugerencias y recomendaciones</h1>
          <p>
            Comparte tu experiencia de forma clara y directa. Este formulario
            ahora envia el mensaje directamente al correo de atencion, sin abrir
            aplicaciones externas.
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
              El envio es directo desde la pagina. La primera vez debes
              confirmar la activacion del formulario desde el correo que envia
              FormSubmit.
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
            <input
              className="support-form__hidden"
              type="text"
              name="website"
              value={formData.website}
              onChange={handleChange}
              tabIndex="-1"
              autoComplete="off"
            />

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

            <button type="submit" disabled={isSending}>
              {isSending ? "Enviando..." : "Enviar mensaje"}
            </button>

            {status.message ? (
              <p className={`support-form__status support-form__status--${status.type}`}>
                {status.message}
              </p>
            ) : null}
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
