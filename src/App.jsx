import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './componentes/Home';
import Login from './componentes/Login';
import Botones from './componentes/Botones'; // Importas tu barra de navegación

function App() {
  return (
    <Router>
      {/* Si quieres que los botones aparezcan en TODAS las páginas, ponlos fuera de Routes */}
      <Botones /> 
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        {/* Aquí irías agregando las demás: comprar, registro, contacto */}
      </Routes>
    </Router>
  );
}
