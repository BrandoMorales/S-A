import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { getPublicContent, resolveImageUrl } from "../utils/contentApi";

const proyectos = [
  {
    categoria: "Infraestructura",
    titulo: "Intersección a tres niveles Neomundo",
    ubicacion: "Bucaramanga",
    imagen: "/images/Fotos/IMG_20190626_120741352_HDR.jpg"
  },
  {
    categoria: "Infraestructura",
    titulo: "Intersección a tres niveles Monumento al Campesino",
    ubicacion: "Pasto",
    imagen: "/images/Fotos/IMG_20190626_120642731_HDR.jpg"
  },
  {
    categoria: "Infraestructura",
    titulo: "Interconector glorieta Calle 6 con Carrera 10",
    ubicacion: "Bogotá",
    imagen: "/images/Fotos/IMG_20190626_113903953_HDR.jpg"
  },
  {
    categoria: "Puentes",
    titulo: "Puente El Embalse del Sisga",
    ubicacion: "Briceño – Tunja – Sogamoso",
    imagen: "/images/Fotos/Puentes/Puente Sisga - BTS.jfif"
  },
  {
    categoria: "Puentes",
    titulo: "Puente Carmelo Torres Tovar",
    ubicacion: "Banco, Magdalena – Tamalameque, Cesar",
    imagen: "/images/Fotos/Puentes/PTE CARMELO TORRES.png"
  },
  {
    categoria: "Edificaciones",
    titulo: "Gran Plaza Soacha",
    ubicacion: "Soacha",
    imagen: "/images/Fotos/Comercio/CC Gran plaza Soacha Consorcio Conconcreto y Carlos Collins.jpeg"
  },
  {
    categoria: "Edificaciones",
    titulo: "Altos de San Antonio",
    ubicacion: "Bogotá",
    imagen: "/images/Fotos/Vivienda/Mirador de Cervantes  Cra 9na Calle 84 - Construtecnia.jfif"
  },
  {
    categoria: "Edificaciones",
    titulo: "Balcones de San Carlos",
    ubicacion: "Bogotá",
    imagen: "/images/Fotos/Vivienda/Allure Cartagena - KMA.jfif"
  },
  {
    categoria: "Transporte",
    titulo: "Estación Intermedia Banderas",
    ubicacion: "TransMilenio",
    imagen: "/images/Fotos/Institucionales/Estación grupo 9 Av 68 - Transmilenio.jpeg"
  },
  {
    categoria: "Transporte",
    titulo: "Estación Cabecera Américas",
    ubicacion: "TransMilenio",
    imagen: "/images/Fotos/Institucionales/Estación Cabecera Américas - Transmilenio.png"
  },
  {
    categoria: "Transporte",
    titulo: "Estación TransMilenio Carrera 10",
    ubicacion: "Bogotá",
    imagen: "/images/Fotos/Institucionales/Estación cra 10 - Transmilenio.jpg"
  },
  {
    categoria: "Edificaciones",
    titulo: "Aeropuerto Gustavo Rojas Pinilla",
    ubicacion: "San Andrés",
    imagen: "/images/Fotos/IMG-20190703-WA0077.jpg"
  },
  {
    categoria: "Industrial",
    titulo: "Planta de Cemento San Marcos",
    ubicacion: "Colombia",
    imagen: "/images/Fotos/Industrial/Bodegas Puerto Central - Prodesa.jfif"
  }
];

function Proyectos() {
  const [items, setItems] = useState(proyectos);
  const [activeCategory, setActiveCategory] = useState("Todos");

  useEffect(() => {
    getPublicContent("proyectos")
      .then((data) => {
        if (data.length) setItems(data);
      })
      .catch(() => {});
  }, []);

  const categories = ["Todos", "Infraestructura", "Puentes", "Edificaciones", "Transporte", "Industrial"];
  const filteredItems = activeCategory === "Todos"
    ? items
    : items.filter((proyecto) => proyecto.categoria === activeCategory);

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

              {categories.map((category) => (
                <button
                  key={category}
                  className={activeCategory === category ? "active" : ""}
                  onClick={() => setActiveCategory(category)}
                  type="button"
                >
                  {category}
                </button>
              ))}

            </div>


            <div className="projects-grid">

              {filteredItems.map((proyecto, index) => (

                <article
                  className="project-card"
                  key={index}
                >

                  <div className="project-image">

                    {proyecto.imagen ? (
                      <img
                        src={resolveImageUrl(proyecto.imagen)}
                        alt={proyecto.titulo}
                        loading="lazy"
                      />
                    ) : <div className="image-placeholder">Sin imagen</div>}

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

              {filteredItems.length === 0 && (
                <p className="projects-empty">
                  No hay proyectos publicados en esta categoría.
                </p>
              )}

            </div>

          </div>

        </section>

      </main>
    </>
  );
}

export default Proyectos;