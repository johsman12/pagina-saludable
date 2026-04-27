function Home() {
  return (
    <section className="hero">

      {/* TEXTO */}
      <div className="hero-texto">
        <p className="hero-tag">PLATAFORMA DE ALIMENTACIÓN SALUDABLE</p>

        <h1>
          Come saludable <br />
          sin complicaciones...
        </h1>

        <p className="hero-desc">
          Disfruta alimentos frescos, naturales y deliciosos que cuidan tu cuerpo 
          y mejoran tu estilo de vida todos los días.
        </p>

        <div className="hero-botones">
          <button className="btn-primary">Explorar productos</button>
          <button className="btn-outline">Ver planes</button>
        </div>
      </div>

      {/* IMAGEN */}
      <div className="hero-img">
        <div className="circulo">
          <img
            src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600"
            alt="comida saludable"
          />
        </div>

        {/* CARDS */}
        <div className="card card1">
          🥗 Ingredientes 100% naturales
        </div>

        <div className="card card2">
          🚚 Entrega rápida a tu casa
        </div>

        <div className="card card3">
          💪 Mejora tu estilo de vida
        </div>
      </div>

    </section>
  );
}

export default Home;