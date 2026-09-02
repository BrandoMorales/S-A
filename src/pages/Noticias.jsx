import Navbar from "../components/Navbar";

const noticias = [
  {
    fecha: "Internacionalización",
    titulo:
      "S&A participa en ENEXPRO AEC y ExpoEdifica en Santiago de Chile",
    texto:
      "S&A fue invitada por PROCHILE a participar en ENEXPRO AEC en Santiago, generando espacios de networking con empresas chilenas del sector de la ingeniería y la construcción."
  },
  {
    fecha: "Innovación",
    titulo:
      "Visita a la Cámara Chilena de la Construcción",
    texto:
      "Durante la visita se conocieron experiencias y soluciones relacionadas con el comportamiento estructural y tecnologías como los amortiguadores de masa sintonizada."
  },
  {
    fecha: "Proyectos",
    titulo:
      "S&A participa en las soluciones de infraestructura de El Edén",
    texto:
      "Para el proyecto El Edén en Bogotá, S&A participó en el diseño de infraestructura vial de acceso, vías deprimidas, box culvert, puentes y muros de contención."
  }
];

function Noticias() {
  return (
    <>
      <Navbar />

      <main className="inner-page">

        <section className="page-hero">

          <div className="page-hero-content">

            <span className="section-label">
              ACTUALIDAD
            </span>

            <h1>
              Noticias y novedades
              <span> de S&A.</span>
            </h1>

            <p>
              Conozca algunas de nuestras actividades,
              proyectos y experiencias.
            </p>

          </div>

        </section>


        <section className="section">

          <div className="section-container">

            <span className="section-label">
              NOTICIAS
            </span>

            <h2>
              Lo que estamos haciendo
            </h2>


            <div className="news-grid">

              {noticias.map((noticia, index) => (

                <article
                  className="news-card"
                  key={index}
                >

                  <div className="news-image">

                    <span>
                      {noticia.fecha}
                    </span>

                  </div>

                  <div className="news-content">

                    <small>
                      S&A SANTANDER Y ASOCIADOS
                    </small>

                    <h3>
                      {noticia.titulo}
                    </h3>

                    <p>
                      {noticia.texto}
                    </p>

                    <a href="/contacto">
                      Conocer más →
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

export default Noticias;