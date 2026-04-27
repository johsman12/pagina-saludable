
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from "./componentes/Header";
import Botones from "./componentes/Botones";
import Home from "./componentes/Home";
import Productos from "./componentes/Productos";
import Footer from "./componentes/Footer";
import Registro from "./componentes/Registro";
import Login from './componentes/Login';



import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Botones /> {/* Si los botones son parte de la navegación general */}
        
        <Routes>
          {/* Esta es la página principal (la de Gilmer) */}
          <Route path="/" element={<Home />} />
          
          {/* Tus páginas */}
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Registro />} />
          
          {/* Otras páginas de tus compañeros */}
          <Route path="/productos" element={<Productos />} />
        </Routes>

        <Footer />
      </div>
    </Router>

  );
}

export default App;
