import "./Registro.css";
import logo from "../assets/Nutrik.jpg";

const Registro = () => {
  return (
    <section className="main-container" id="registro">
      <div className="header-registro">
        <div className="logo-circle">
          <img src={logo} alt="Logo Nutrik" className="logo-img" />
        </div>
        <div className="header-text">
          <h1>Únete a Nutrik</h1>
          <p>Tu plan comienza aquí</p>
        </div>
      </div>

      <div className="form-container">
        <div className="card-registro">
          <h2 className="card-title">Crea tu perfil</h2>

          <form className="register-form">
            <label className="field-label">Nombre completo</label>
            <div className="input-row">
              <div className="input-group">
                <input type="text" placeholder="Nombre" required />
              </div>
              <div className="input-group">
                <input type="text" placeholder="Apellido" required />
              </div>
            </div>

            <label className="field-label">Correo electrónico</label>
            <div className="input-group">
              <input type="email" placeholder="Correo electrónico" required />
            </div>

            <label className="field-label">Tus datos</label>
            <div className="input-row">
              <div className="input-group">
                <input type="number" placeholder="Edad" />
              </div>
              <div className="input-group">
                <input type="number" placeholder="Peso (kg)" />
              </div>
              <div className="input-group">
                <input type="number" placeholder="Estatura (cm)" />
              </div>
            </div>

            <label className="field-label">Objetivo</label>
            <div className="input-group">
              <select className="select-custom" defaultValue="">
                <option value="" disabled>Selecciona tu objetivo</option>
                <option value="perder">Perder peso</option>
                <option value="musculo">Ganar músculo</option>
                <option value="mantener">Mantener hábitos saludables</option>
              </select>
            </div>

            <button className="btn-submit" type="submit">Empezar</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Registro;
