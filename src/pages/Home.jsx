import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { getPublicContent, resolveImageUrl } from "../utils/contentApi";

const HERO_FALLBACK_IMAGE = "/images/Fotos/Puentes/Puente Sisga - BTS.jfif";

function Home() {
  const fallbackSlide = {
    subtitulo: "SANTANDER Y ASOCIADOS",
    titulo: "Ingeniería que construye confianza.",
    descripcion: "Soluciones de ingeniería, diseño estructural, consultoría e interventoría para proyectos de infraestructura y edificación.",
    imagen: HERO_FALLBACK_IMAGE,
  };
  const [slides, setSlides] = useState([fallbackSlide]);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    getPublicContent("slider")
      .then((data) => {
        if (data.length) {
          setSlides(data.map((currentSlide) => ({
            ...currentSlide,
            imagen: currentSlide.imagen === "/assets/hero.png" ? HERO_FALLBACK_IMAGE : resolveImageUrl(currentSlide.imagen),
          })));
        }
      })
      .catch(() => {});
  }, []);

  useEffect(() => {
    if (slides.length < 2) return undefined;
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 6500);
    return () => window.clearInterval(timer);
  }, [slides.length]);

  const slide = slides[activeSlide] || fallbackSlide;
  const slideImage = resolveImageUrl(slide.imagen) || HERO_FALLBACK_IMAGE;

  return (
    <>
      <Navbar />


      <main>

        {/* HERO */}
        <section className="hero" style={{ backgroundImage: `linear-gradient(rgba(5, 15, 28, .24), rgba(5, 15, 28, .24)), url(${slideImage})` }}>

          <div className="hero-overlay"></div>

          <div className="hero-content">

            <p className="hero-subtitle">{slide.subtitulo || "SANTANDER Y ASOCIADOS"}</p>

            <h1>{slide.titulo}</h1>

            <p className="hero-description">{slide.descripcion}</p>

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
              <div className="projects-photo-grid">
                <img
                  src="/images/Fotos/Puentes/Puente Sisga - BTS.jfif"
                  alt="Puente El Embalse del Sisga"
                />
                <img
                  src="/images/Fotos/Comercio/CC Gran plaza Soacha Consorcio Conconcreto y Carlos Collins.jpeg"
                  alt="Gran Plaza Soacha"
                />
                <img
                  src="/images/Fotos/Institucionales/Estación Cabecera Américas - Transmilenio.png"
                  alt="Estación Cabecera Américas"
                />
              </div>
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
