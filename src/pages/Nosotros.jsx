import Navbar from "../components/Navbar";

function Nosotros() {
  return (
    <>
      <Navbar />

      <main className="inner-page">

        {/* ENCABEZADO */}
        <section className="page-hero">
          <div className="page-hero-content">
            <span className="section-label">
              S&A SANTANDER Y ASOCIADOS
            </span>

            <h1>
              Ingeniería basada en
              <span> experiencia y confianza.</span>
            </h1>

            <p>
              Conozca nuestra trayectoria, nuestro equipo
              y los principios que orientan nuestro trabajo.
            </p>
          </div>
        </section>


        {/* HISTORIA */}
        <section className="section">

          <div className="section-container two-column">

            <div>
              <span className="section-label">
                NUESTRA HISTORIA
              </span>

              <h2>
                Más de dos décadas construyendo soluciones
                de ingeniería
              </h2>
            </div>

            <div className="content-text">

              <p>
                S&A Santander y Asociados S.A.S. es una empresa
                colombiana de consultoría en ingeniería civil,
                especializada en diseño estructural, estudios
                integrales, interventoría y asesoría para
                proyectos de infraestructura y edificación.
              </p>

              <p>
                La empresa fue constituida en el año 2003 por
                profesionales con una amplia trayectoria en el
                desarrollo de proyectos de ingeniería.
              </p>

              <p>
                La experiencia acumulada por sus socios y
                profesionales ha permitido participar en
                proyectos de diferentes escalas y complejidades,
                manteniendo como prioridad la calidad técnica
                y el acompañamiento permanente al cliente.
              </p>

            </div>

          </div>

        </section>


        {/* PROPÓSITO */}
        <section className="section gray-section">

          <div className="section-container">

            <div className="section-heading-center">

              <span className="section-label">
                NUESTRO PROPÓSITO
              </span>

              <h2>
                Dar bases sólidas a sus proyectos
              </h2>

            </div>

            <div className="values-grid">

              <div className="value-card">
                <span>01</span>

                <h3>Calidad</h3>

                <p>
                  Desarrollamos nuestros proyectos con
                  criterios técnicos y altos estándares
                  de calidad.
                </p>
              </div>

              <div className="value-card">
                <span>02</span>

                <h3>Experiencia</h3>

                <p>
                  Contamos con profesionales especializados
                  y una amplia trayectoria en ingeniería.
                </p>
              </div>

              <div className="value-card">
                <span>03</span>

                <h3>Confianza</h3>

                <p>
                  Acompañamos a nuestros clientes durante
                  las diferentes etapas de sus proyectos.
                </p>
              </div>

              <div className="value-card">
                <span>04</span>

                <h3>Soluciones</h3>

                <p>
                  Buscamos soluciones técnicas eficientes,
                  seguras y acordes con cada proyecto.
                </p>
              </div>

            </div>

          </div>

        </section>


        {/* MISIÓN Y VISIÓN */}
        <section className="section">

          <div className="section-container mission-grid">

            <div className="mission-card">

              <span className="section-label">
                MISIÓN
              </span>

              <h2>
                Nuestra misión
              </h2>

              <p>
                Prestar servicios de consultoría e
                interventoría en ingeniería civil y
                arquitectura, especialmente en diseño
                estructural, estudios integrales y
                asesoría técnica, buscando la calidad,
                el cumplimiento de los compromisos y
                la satisfacción de nuestros clientes.
              </p>

            </div>


            <div className="mission-card">

              <span className="section-label">
                VISIÓN
              </span>

              <h2>
                Nuestra visión
              </h2>

              <p>
                Ser reconocidos como una empresa líder
                por la alta calidad de sus servicios de
                consultoría e interventoría en ingeniería
                civil y arquitectura, participando en
                proyectos públicos y privados de diferentes
                sectores.
              </p>

            </div>

          </div>

        </section>


        {/* EQUIPO */}
        <section className="section gray-section">

          <div className="section-container">

            <span className="section-label">
              NUESTRO EQUIPO
            </span>

            <h2>
              Profesionales al servicio de cada proyecto
            </h2>

            <div className="team-grid">

              <div className="team-card">
                <div className="team-number">01</div>

                <h3>
                  Jorge Santander
                </h3>

                <strong>
                  Gerente General
                </strong>

                <p>
                  Ingeniero Civil de la Escuela Colombiana
                  de Ingeniería, con especialización en
                  patología estructural y experiencia en
                  diseño de edificaciones.
                </p>
              </div>


              <div className="team-card">
                <div className="team-number">02</div>

                <h3>
                  Nelson Díaz Cárdenas
                </h3>

                <strong>
                  Director de Proyectos
                </strong>

                <p>
                  Ingeniero Civil de la Universidad Nacional
                  y Magíster en Estructuras de la Universidad
                  de los Andes, especializado en infraestructura
                  y obras civiles.
                </p>
              </div>


              <div className="team-card">
                <div className="team-number">03</div>

                <h3>
                  Luis Fernando Santander
                </h3>

                <strong>
                  Director de Proyectos
                </strong>

                <p>
                  Ingeniero Civil de la Escuela Colombiana
                  de Ingeniería, especializado en estructuras
                  por la Universidad Politécnica de Cataluña.
                </p>
              </div>

            </div>

          </div>

        </section>

      </main>
    </>
  );
}

export default Nosotros;