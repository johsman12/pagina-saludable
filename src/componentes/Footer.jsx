// 1. Importas el componente (asegúrate de que la ruta sea correcta)
import Footer from './componentes/Footer';

function Home() {
  return (
    <div className="home-container">
      <Header />
      <main>
        {/* Todo el contenido de la página */}
        <h1>Bienvenido a Nutrik</h1>
      </main>

      {/* 2. Lo colocas al final, justo antes de cerrar el div principal */}
      <Footer />
    </div>
  );
}