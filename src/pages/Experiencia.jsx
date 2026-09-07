import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { getPublicContent, resolveImageUrl } from "../utils/contentApi";

const fotosExperiencia = [
  {
    src: "/images/Fotos/IMG-20190703-WA0076.jpg",
    alt: "Registro de obra de S&A",
  },
  {
    src: "/images/Fotos/IMG-20190628-WA0014.jpg",
    alt: "Visita técnica de S&A",
  },
  {
    src: "/images/Fotos/IMG-20190628-WA0012.jpg",
    alt: "Estructura en proceso de construcción",
  },
  {
    src: "/images/Fotos/IMG-20190628-WA0010.jpg",
    alt: "Inspección de estructura",
  },
  {
    src: "/images/Fotos/IMG_20190627_113725721.jpg",
    alt: "Proyecto de infraestructura",
  },
  {
    src: "/images/Fotos/IMG_20190627_095936708_HDR.jpg",
    alt: "Detalle de obra de ingeniería",
  },
  {
    src: "/images/Fotos/IMG_20190627_095838609_HDR.jpg",
    alt: "Trabajo de campo de S&A",
  },
  {
    src: "/images/Fotos/IMG_20190626_125939610.jpg",
    alt: "Estructura de proyecto civil",
  },
  {
    src: "/images/Fotos/IMG_20190626_125744907.jpg",
    alt: "Avance de proyecto de ingeniería",
  },
  {
    src: "/images/Fotos/IMG_20190629_131124430.jpg",
    alt: "Obra visitada por el equipo S&A",
  },
  {
    src: "/images/Fotos/IMG_20190628_104625009.jpg",
    alt: "Supervisión técnica en obra",
  },
  {
    src: "/images/Fotos/IMG_20190627_113729372.jpg",
    alt: "Solución estructural en obra",
  },
];

function Experiencia() {
  const [gallery, setGallery] = useState(fotosExperiencia);

  useEffect(() => {
    getPublicContent("experiencia")
      .then((data) => {
        if (data.length) {
          setGallery(data.map((item) => ({
            src: resolveImageUrl(item.imagen),
            alt: item.titulo || item.descripcion || "Experiencia de S&A",
          })));
        }
      })
      .catch(() => {});
  }, []);

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

            <div className="experience-gallery">
              {gallery.map((foto) => (
                <figure key={foto.src}>
                  <img
                    src={foto.src}
                    alt={foto.alt}
                    loading="lazy"
                  />
                </figure>
              ))}
            </div>

          </div>

        </section>

      </main>
    </>
  );
}

export default Experiencia;