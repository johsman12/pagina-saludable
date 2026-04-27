import "./Login.css";
import logo from "../assets/Nutrik.jpg";

const Login = () => {
  return (
    <section className="login-page" id="login">
      <div className="info-content">
        <img src={logo} alt="Logo Nutrik" className="login-logo" />
        <h1 className="welcome-text">Bienvenido</h1>
        <p>Lleva una vida saludable con nosotros</p>
      </div>

      <div className="login-form-side">
        <div className="form-content">
          <h2>Bienvenido de nuevo</h2>
          <p>¿No tienes cuenta? <a href="#registro">Crea una ahora</a></p>

          <form>
            <div className="input-field">
              <input type="email" placeholder="Email" />
            </div>
            <div className="input-field">
              <input type="password" placeholder="Password" />
            </div>

            <button className="btn-login" type="submit">Iniciar sesión</button>
            <button className="btn-google" type="button">Iniciar sesión con Google</button>
          </form>

          <p className="forgot-pass">¿Olvidaste tu clave? <a href="#footer">Haz clic aquí</a></p>
        </div>
      </div>
    </section>
  );
};

export default Login;
