import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { getPublicContent, resolveImageUrl } from "../utils/contentApi";

const servicios = [
  {
    titulo: "Diseño estructural de intersecciones viales",
    descripcion:
      "Diseño estructural de intersecciones viales en ciudad utilizando diversos sistemas estructurales de concreto o metálicos.",
  },
  {
    titulo: "Diseño estructural de puentes",
    descripcion:
      "Diseño estructural de puentes nuevos para vías nacionales o municipales en concreto o estructuras metálicas.",
  },
  {
    titulo: "Diseño estructural de edificaciones",
    descripcion:
      "Diseño estructural de edificaciones desarrolladas en sistemas de concreto o estructuras metálicas.",
  },
  {
    titulo: "Estructuras para transporte público",
    descripcion:
      "Diseño de estructuras destinadas a sistemas de transporte público y sus diferentes componentes.",
  },
  {
    titulo: "Inspección de puentes",
    descripcion:
      "Inspección y evaluación de puentes construidos en concreto y estructuras metálicas.",
  },
  {
    titulo: "Vulnerabilidad y reforzamiento de puentes",
    descripcion:
      "Análisis de vulnerabilidad sísmica, reforzamiento y ampliación de puentes.",
  },
  {
    titulo: "Puentes peatonales",
    descripcion:
      "Diseño de puentes peatonales en estructura metálica y concreto.",
  },
  {
    titulo: "Vulnerabilidad de edificaciones",
    descripcion:
      "Análisis de vulnerabilidad sísmica y diseño de soluciones de reforzamiento para edificaciones.",
  },
  {
    titulo: "Edificaciones industriales",
    descripcion:
      "Diseño estructural de edificaciones destinadas a actividades industriales.",
  },
  {
    titulo: "Interventoría de obra",
    descripcion:
      "Acompañamiento, seguimiento y control técnico durante la ejecución de proyectos.",
  },
  {
    titulo: "Estudios integrales",
    descripcion:
      "Desarrollo y coordinación de estudios estructurales, viales, arquitectónicos, hidráulicos y eléctricos.",
  },
];

function Servicios() {
  const [items, setItems] = useState(servicios);

  useEffect(() => {
    getPublicContent("servicios")
      .then((data) => {
        if (data.length) {
          setItems(data);
        }
      })
      .catch(() => {});
  }, []);

  return (
    <>
      <Navbar />

      <main className="inner-page">

        {/* =====================================
            HERO
        ===================================== */}

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


        {/* =====================================
            INTRODUCCIÓN
        ===================================== */}

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


        {/* =====================================
            PRINCIPALES SERVICIOS
        ===================================== */}

        <section className="main-services-section">

          <div className="main-services-container">

            <h2 className="main-services-title">
              PRINCIPALES <strong>SERVICIOS</strong>
            </h2>


            <div className="main-services-list">

              {/* CONSULTORÍA */}

              <div className="main-service-item">

                <div className="main-service-icon">

                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 19V5" />
                    <path d="M4 19H21" />
                    <rect x="7" y="12" width="2.5" height="5" />
                    <rect x="11" y="9" width="2.5" height="8" />
                    <rect x="15" y="6" width="2.5" height="11" />
                  </svg>

                </div>

                <span>
                  CONSULTORÍA
                </span>

              </div>


              {/* ASESORÍA */}

              <div className="main-service-item">

                <div className="main-service-icon">

                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M6 3h9l4 4v14H6z" />
                    <path d="M15 3v5h4" />
                    <path d="M9 12h6" />
                    <path d="M9 15h6" />
                    <path d="M9 18h4" />
                  </svg>

                </div>

                <span>
                  ASESORÍA
                </span>

              </div>


              {/* INTERVENTORÍA */}

              <div className="main-service-item">

                <div className="main-service-icon">

                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M14 6l4 4" />
                    <path d="M5 19l2.5-.7L17.5 8.3a2.1 2.1 0 0 0-3-3L4.5 15.3z" />
                    <path d="M13 18h6" />
                    <path d="M7 15l2 2" />
                  </svg>

                </div>

                <span>
                  INTERVENTORÍA
                </span>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================
            SERVICIOS DEL BACKEND
        ===================================== */}

        <section className="section gray-section">

          <div className="section-container">

            <span className="section-label">
              PORTAFOLIO DE SERVICIOS
            </span>

            <h2>
              ¿Qué hacemos?
            </h2>


            <div className="all-services-grid">

              {items.map((servicio, index) => (

                <article
                  className="large-service-card"
                  key={
                    servicio.id ||
                    servicio.slug ||
                    servicio.titulo ||
                    index
                  }
                >

                  {/* IMAGEN DEL SERVICIO */}

                  {servicio.imagen && (

                    <div className="service-image">

                      <img
                        src={resolveImageUrl(servicio.imagen)}
                        alt={servicio.titulo}
                        loading="lazy"
                      />

                    </div>

                  )}


                  {/* TÍTULO */}

                  <h3>
                    {servicio.titulo}
                  </h3>


                  {/* DESCRIPCIÓN */}

                  <p>
                    {servicio.descripcion}
                  </p>


                  <div className="service-line"></div>

                </article>

              ))}

            </div>

          </div>

        </section>


        {/* =====================================
            CTA
        ===================================== */}

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