import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./componentes/Header";
import Botones from "./componentes/Botones";
import Home from "./componentes/Home";
import Productos from "./componentes/Productos";
// BORRÉ LA IMPORTACIÓN DEL FOOTER DE AQUÍ
import Registro from "./componentes/Registro";
import Login from './componentes/Login';



import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Botones />
        
        <Routes>
          {/* Esta es la página principal (la de Gilmer) */}
          <Route path="/" element={<Home />} />
          
          {/* Tus páginas */}
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Registro />} />
          
          {/* Otras páginas de tus compañeros */}
          <Route path="/productos" element={<Productos />} />
        </Routes>

        {/* BORRÉ EL <Footer /> DE AQUÍ */}
      </div>
    </Router>

  );
}

export default App;
