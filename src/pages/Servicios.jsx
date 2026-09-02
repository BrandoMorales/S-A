import Navbar from "../components/Navbar";

const servicios = [
  {
    numero: "01",
    titulo: "Diseño estructural de intersecciones viales",
    descripcion:
      "Diseño estructural de intersecciones viales en ciudad utilizando diversos sistemas estructurales de concreto o metálicos."
  },
  {
    numero: "02",
    titulo: "Diseño estructural de puentes",
    descripcion:
      "Diseño estructural de puentes nuevos para vías nacionales o municipales en concreto o estructuras metálicas."
  },
  {
    numero: "03",
    titulo: "Diseño estructural de edificaciones",
    descripcion:
      "Diseño estructural de edificaciones desarrolladas en sistemas de concreto o estructuras metálicas."
  },
  {
    numero: "04",
    titulo: "Estructuras para transporte público",
    descripcion:
      "Diseño de estructuras destinadas a sistemas de transporte público y sus diferentes componentes."
  },
  {
    numero: "05",
    titulo: "Inspección de puentes",
    descripcion:
      "Inspección y evaluación de puentes construidos en concreto y estructuras metálicas."
  },
  {
    numero: "06",
    titulo: "Vulnerabilidad y reforzamiento de puentes",
    descripcion:
      "Análisis de vulnerabilidad sísmica, reforzamiento y ampliación de puentes."
  },
  {
    numero: "07",
    titulo: "Puentes peatonales",
    descripcion:
      "Diseño de puentes peatonales en estructura metálica y concreto."
  },
  {
    numero: "08",
    titulo: "Vulnerabilidad de edificaciones",
    descripcion:
      "Análisis de vulnerabilidad sísmica y diseño de soluciones de reforzamiento para edificaciones."
  },
  {
    numero: "09",
    titulo: "Edificaciones industriales",
    descripcion:
      "Diseño estructural de edificaciones destinadas a actividades industriales."
  },
  {
    numero: "10",
    titulo: "Interventoría de obra",
    descripcion:
      "Acompañamiento, seguimiento y control técnico durante la ejecución de proyectos."
  },
  {
    numero: "11",
    titulo: "Estudios integrales",
    descripcion:
      "Desarrollo y coordinación de estudios estructurales, viales, arquitectónicos, hidráulicos y eléctricos."
  }
];

function Servicios() {
  return (
    <>
      <Navbar />

      <main className="inner-page">

        {/* HERO */}
        <section className="page-hero services-hero">

          <div className="page-hero-content">

            <span className="section-label">
              SERVICIOS
            </span>

            <h1>
              Soluciones integrales de
              <span> ingeniería.</span>
            </h1>

            <p>
              Diseñamos, evaluamos y acompañamos proyectos
              de infraestructura y edificación.
            </p>

          </div>

        </section>


        {/* INTRO */}
        <section className="section">

          <div className="section-container service-intro">

            <div>

              <span className="section-label">
                NUESTRA ESPECIALIDAD
              </span>

              <h2>
                Ingeniería estructural para proyectos
                de diferentes escalas
              </h2>

            </div>

            <p>
              Nuestra experiencia comprende proyectos de
              infraestructura, puentes, intersecciones
              viales, edificaciones, estructuras industriales,
              transporte público y estudios integrales.
            </p>

          </div>

        </section>


        {/* SERVICIOS */}
        <section className="section gray-section">

          <div className="section-container">

            <span className="section-label">
              PORTAFOLIO DE SERVICIOS
            </span>

            <h2>
              ¿Qué hacemos?
            </h2>

            <div className="all-services-grid">

              {servicios.map((servicio) => (

                <article
                  className="large-service-card"
                  key={servicio.numero}
                >

                  <span className="service-number">
                    {servicio.numero}
                  </span>

                  <h3>
                    {servicio.titulo}
                  </h3>

                  <p>
                    {servicio.descripcion}
                  </p>

                  <div className="service-line"></div>

                </article>

              ))}

            </div>

          </div>

        </section>


        {/* CTA */}
        <section className="contact-banner">

          <div className="contact-banner-content">

            <span className="section-label">
              HABLEMOS DE SU PROYECTO
            </span>

            <h2>
              ¿Necesita una solución de ingeniería?
            </h2>

            <a
              href="/contacto"
              className="btn-primary"
            >
              Contáctenos
            </a>

          </div>

        </section>

      </main>
    </>
  );
}

export default Servicios;