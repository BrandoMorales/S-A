import Navbar from "../components/Navbar";

function Contacto() {
  return (
    <>
      <Navbar />

      <main className="inner-page">

        <section className="page-hero">

          <div className="page-hero-content">

            <span className="section-label">
              CONTACTO
            </span>

            <h1>
              Hablemos de su
              <span> próximo proyecto.</span>
            </h1>

            <p>
              Estamos disponibles para conocer sus
              necesidades y analizar nuevas oportunidades.
            </p>

          </div>

        </section>


        <section className="section">

          <div className="section-container contact-grid">

            {/* INFORMACIÓN */}
            <div className="contact-information">

              <span className="section-label">
                S&A SANTANDER Y ASOCIADOS
              </span>

              <h2>
                Pongámonos en contacto
              </h2>

              <p>
                Para información sobre nuestros servicios,
                proyectos o propuestas, puede comunicarse
                con nosotros a través de nuestros canales
                de contacto.
              </p>


              <div className="contact-item">

                <span>
                  DIRECCIÓN
                </span>

                <p>
                  Calle 98 # 18-71 Oficina 406
                </p>

              </div>


              <div className="contact-item">

                <span>
                  TELÉFONOS
                </span>

                <p>
                  621 0288
                </p>

                <p>
                  311 561 1346
                </p>

              </div>


              <div className="contact-item">

                <span>
                  SITIO WEB
                </span>

                <p>
                  www.sya.com.co
                </p>

              </div>

            </div>


            {/* FORMULARIO */}
            <div className="contact-form-container">

              <form className="contact-form">

                <div className="form-group">

                  <label htmlFor="nombre">
                    Nombre
                  </label>

                  <input
                    id="nombre"
                    type="text"
                    placeholder="Su nombre"
                  />

                </div>


                <div className="form-group">

                  <label htmlFor="empresa">
                    Empresa
                  </label>

                  <input
                    id="empresa"
                    type="text"
                    placeholder="Nombre de su empresa"
                  />

                </div>


                <div className="form-group">

                  <label htmlFor="correo">
                    Correo electrónico
                  </label>

                  <input
                    id="correo"
                    type="email"
                    placeholder="correo@empresa.com"
                  />

                </div>


                <div className="form-group">

                  <label htmlFor="telefono">
                    Teléfono
                  </label>

                  <input
                    id="telefono"
                    type="tel"
                    placeholder="Número de contacto"
                  />

                </div>


                <div className="form-group">

                  <label htmlFor="mensaje">
                    Mensaje
                  </label>

                  <textarea
                    id="mensaje"
                    rows="6"
                    placeholder="Cuéntenos sobre su proyecto..."
                  ></textarea>

                </div>


                <button
                  type="submit"
                  className="form-button"
                >
                  Enviar mensaje →
                </button>

              </form>

            </div>

          </div>

        </section>


        {/* MAPA / UBICACIÓN */}
        <section className="location-section">

          <div className="location-content">

            <span className="section-label">
              NUESTRA UBICACIÓN
            </span>

            <h2>
              Bogotá, Colombia
            </h2>

            <p>
              Calle 98 # 18-71 Oficina 406
            </p>

          </div>

        </section>

      </main>
    </>
  );
}

export default Contacto;