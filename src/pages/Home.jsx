import Navbar from "../components/Navbar";

function Home() {
  return (
    <>
      <Navbar />


      <main>

        {/* HERO */}
        <section className="hero">

          <div className="hero-overlay"></div>

          <div className="hero-content">

            <p className="hero-subtitle">
              SANTANDER Y ASOCIADOS
            </p>

            <h1>
              Ingeniería que construye
              <span> confianza.</span>
            </h1>

            <p className="hero-description">
              Soluciones de ingeniería, diseño estructural,
              consultoría e interventoría para proyectos
              de infraestructura y edificación.
            </p>

            <div className="hero-buttons">

              <a href="#proyectos" className="btn-primary">
                Ver proyectos
              </a>

              <a href="#servicios" className="btn-secondary">
                Nuestros servicios
              </a>

            </div>

          </div>

          <div className="hero-scroll">
            <span></span>
            Desliza para conocer más
          </div>

        </section>


        {/* PRESENTACIÓN */}
        <section className="section about-preview">

          <div className="section-container">

            <div className="section-heading">

              <span className="section-label">
                S&A SANTANDER Y ASOCIADOS
              </span>

              <h2>
                Experiencia y conocimiento
                al servicio de la ingeniería
              </h2>

            </div>

            <div className="about-text">

              <p>
                Somos una empresa especializada en servicios
                de ingeniería y consultoría, comprometida con
                el desarrollo de soluciones técnicas para
                proyectos de infraestructura y edificación.
              </p>

              <a href="/nosotros" className="text-link">
                Conozca nuestra historia →
              </a>

            </div>

          </div>

        </section>


        {/* SERVICIOS */}
        <section
          id="servicios"
          className="section services-preview"
        >

          <div className="section-container">

            <span className="section-label">
              NUESTROS SERVICIOS
            </span>

            <h2>
              Soluciones integrales
              de ingeniería
            </h2>

            <div className="services-grid">

              <div className="service-card">
                <span>01</span>
                <h3>Diseño estructural</h3>
                <p>
                  Soluciones estructurales para diferentes
                  tipos de proyectos.
                </p>
              </div>

              <div className="service-card">
                <span>02</span>
                <h3>Interventoría</h3>
                <p>
                  Acompañamiento y control técnico
                  durante la ejecución de proyectos.
                </p>
              </div>

              <div className="service-card">
                <span>03</span>
                <h3>Infraestructura</h3>
                <p>
                  Diseño y consultoría para proyectos
                  de infraestructura.
                </p>
              </div>

              <div className="service-card">
                <span>04</span>
                <h3>Edificaciones</h3>
                <p>
                  Diseño estructural para proyectos
                  residenciales, comerciales e industriales.
                </p>
              </div>

            </div>

            <a href="/servicios" className="section-button">
              Ver todos los servicios →
            </a>

          </div>

        </section>


        {/* PROYECTOS */}
        <section
          id="proyectos"
          className="section projects-preview"
        >

          <div className="section-container">

            <span className="section-label">
              NUESTROS PROYECTOS
            </span>

            <h2>
              Obras que hablan
              por nuestra experiencia
            </h2>

            <div className="projects-placeholder">

              <p>
                Aquí construiremos el portafolio
                de proyectos utilizando las fotografías
                reales de S&A.
              </p>

            </div>

            <a href="/proyectos" className="section-button">
              Explorar proyectos →
            </a>

          </div>

        </section>


        {/* CONTACTO */}
        <section className="contact-banner">

          <div className="contact-banner-content">

            <span className="section-label">
              HABLEMOS DE SU PROYECTO
            </span>

            <h2>
              ¿Tiene un proyecto
              en mente?
            </h2>

            <a href="/contacto" className="btn-primary">
              Contáctenos
            </a>

          </div>

        </section>

      </main>

    </>
  );
}

export default Home;
