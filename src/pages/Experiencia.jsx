import Navbar from "../components/Navbar";

function Experiencia() {
  return (
    <>
      <Navbar />

      <main className="inner-page">

        <section className="page-hero">

          <div className="page-hero-content">

            <span className="section-label">
              EXPERIENCIA
            </span>

            <h1>
              Conocimiento construido
              <span> proyecto a proyecto.</span>
            </h1>

            <p>
              Nuestra trayectoria reúne experiencia en
              infraestructura, estructuras, puentes y
              edificaciones.
            </p>

          </div>

        </section>


        <section className="section">

          <div className="section-container">

            <div className="experience-intro">

              <span className="section-label">
                TRAYECTORIA
              </span>

              <h2>
                Experiencia que permite encontrar
                mejores soluciones
              </h2>

              <p>
                La experiencia de S&A se ha desarrollado
                alrededor de proyectos de ingeniería civil
                de diferentes características, combinando
                conocimiento técnico, diseño estructural,
                consultoría e interventoría.
              </p>

            </div>


            <div className="stats-grid">

              <div className="stat-card">
                <strong>
                  2003
                </strong>

                <span>
                  Año de constitución de S&A
                </span>
              </div>

              <div className="stat-card">
                <strong>
                  +20
                </strong>

                <span>
                  Años de trayectoria empresarial
                </span>
              </div>

              <div className="stat-card">
                <strong>
                  4
                </strong>

                <span>
                  Áreas principales de experiencia
                </span>
              </div>

              <div className="stat-card">
                <strong>
                  +100
                </strong>

                <span>
                  Proyectos y experiencias acumuladas
                </span>
              </div>

            </div>

          </div>

        </section>


        <section className="section gray-section">

          <div className="section-container">

            <span className="section-label">
              ÁREAS DE EXPERIENCIA
            </span>

            <h2>
              Sectores en los que participamos
            </h2>

            <div className="experience-grid">

              <div>
                <span>01</span>
                <h3>Puentes</h3>
                <p>
                  Diseño, inspección, evaluación,
                  reforzamiento y ampliación.
                </p>
              </div>

              <div>
                <span>02</span>
                <h3>Infraestructura</h3>
                <p>
                  Intersecciones, vías y diferentes
                  obras civiles.
                </p>
              </div>

              <div>
                <span>03</span>
                <h3>Edificaciones</h3>
                <p>
                  Proyectos residenciales, comerciales,
                  institucionales e industriales.
                </p>
              </div>

              <div>
                <span>04</span>
                <h3>Transporte</h3>
                <p>
                  Estructuras relacionadas con sistemas
                  de transporte público.
                </p>
              </div>

            </div>

          </div>

        </section>

      </main>
    </>
  );
}

export default Experiencia;