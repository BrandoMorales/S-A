import Navbar from "../components/Navbar";

const proyectos = [
  {
    categoria: "Infraestructura",
    titulo: "Intersección a tres niveles Neomundo",
    ubicacion: "Bucaramanga"
  },
  {
    categoria: "Infraestructura",
    titulo: "Intersección a tres niveles Monumento al Campesino",
    ubicacion: "Pasto"
  },
  {
    categoria: "Infraestructura",
    titulo: "Interconector glorieta Calle 6 con Carrera 10",
    ubicacion: "Bogotá"
  },
  {
    categoria: "Puentes",
    titulo: "Puente El Embalse del Sisga",
    ubicacion: "Briceño – Tunja – Sogamoso"
  },
  {
    categoria: "Puentes",
    titulo: "Puente Carmelo Torres Tovar",
    ubicacion: "Banco, Magdalena – Tamalameque, Cesar"
  },
  {
    categoria: "Edificaciones",
    titulo: "Gran Plaza Soacha",
    ubicacion: "Soacha"
  },
  {
    categoria: "Edificaciones",
    titulo: "Altos de San Antonio",
    ubicacion: "Bogotá"
  },
  {
    categoria: "Edificaciones",
    titulo: "Balcones de San Carlos",
    ubicacion: "Bogotá"
  },
  {
    categoria: "Transporte",
    titulo: "Estación Intermedia Banderas",
    ubicacion: "TransMilenio"
  },
  {
    categoria: "Transporte",
    titulo: "Estación Cabecera Américas",
    ubicacion: "TransMilenio"
  },
  {
    categoria: "Transporte",
    titulo: "Estación TransMilenio Carrera 10",
    ubicacion: "Bogotá"
  },
  {
    categoria: "Edificaciones",
    titulo: "Aeropuerto Gustavo Rojas Pinilla",
    ubicacion: "San Andrés"
  },
  {
    categoria: "Industrial",
    titulo: "Planta de Cemento San Marcos",
    ubicacion: "Colombia"
  }
];

function Proyectos() {
  return (
    <>
      <Navbar />

      <main className="inner-page">

        <section className="page-hero">

          <div className="page-hero-content">

            <span className="section-label">
              PORTAFOLIO
            </span>

            <h1>
              Proyectos que respaldan
              <span> nuestra experiencia.</span>
            </h1>

            <p>
              Una selección de proyectos de infraestructura,
              puentes, edificaciones y transporte.
            </p>

          </div>

        </section>


        <section className="section">

          <div className="section-container">

            <span className="section-label">
              EXPERIENCIA
            </span>

            <h2>
              Proyectos destacados
            </h2>

            <div className="project-filter">

              <button className="active">
                Todos
              </button>

              <button>
                Infraestructura
              </button>

              <button>
                Puentes
              </button>

              <button>
                Edificaciones
              </button>

              <button>
                Transporte
              </button>

              <button>
                Industrial
              </button>

            </div>


            <div className="projects-grid">

              {proyectos.map((proyecto, index) => (

                <article
                  className="project-card"
                  key={index}
                >

                  <div className="project-image">

                    <span>
                      {proyecto.categoria}
                    </span>

                  </div>

                  <div className="project-info">

                    <small>
                      {proyecto.ubicacion}
                    </small>

                    <h3>
                      {proyecto.titulo}
                    </h3>

                    <a href="/contacto">
                      Solicitar información →
                    </a>

                  </div>

                </article>

              ))}

            </div>

          </div>

        </section>

      </main>
    </>
  );
}

export default Proyectos;