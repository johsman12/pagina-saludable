import Header from "./componentes/Header";
import Botones from "./componentes/Botones";
import Home from "./componentes/Home";
import Productos from "./componentes/Productos";
import Footer from "./componentes/Footer";
import Registro from "./componentes/Registro";
import Login from "./componentes/Login";

import "./App.css";

function App() {
  return (
    <div className="app-shell">
      <Header />
      <Botones />
      <Home />
      <Login />
      <Registro />
      <Productos />
      <Footer />
    </div>
  );
}

export default App;
