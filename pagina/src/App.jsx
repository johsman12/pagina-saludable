import Header from "./componentes/Header";
import Botones from "./componentes/Botones";
import Home from "./componentes/Home";
import Footer from "./componentes/Footer";

import "./App.css";

function App() {
  return (
    <div className="app-shell">
      <Header />
      <Botones />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
