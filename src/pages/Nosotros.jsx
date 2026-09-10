import { useState } from "react";
import Navbar from "../components/Navbar";

function Nosotros() {
  const [mostrarTodos, setMostrarTodos] = useState(false);

  // =========================
  // EQUIPO
  // =========================

  const equipo = [
    {
      nombre: "Jorge Alfredo Santander Moya",
      cargo: "Gerente General",
      foto: "/equipo/jorge.jpg",
    },
    {
      nombre: "Jose Nelson Diaz Cardenas",
      cargo: "Director de Proyectos",
      foto: "/equipo/jose.jpg",
    },
    {
      nombre: "Luis Fernando Santander Moya",
      cargo: "Director de Proyectos",
      foto: "/equipo/luis.jpg",
    },
    {
      nombre: "Lizeth Andrea Bautista",
      cargo: "Directora Administrativa",
      foto: "/equipo/lizeth.jpg",
    },
    {
      nombre: "Braham Nicolas Mirque Rodriguez",
      cargo: "Coordinador BIM",
      foto: "/equipo/braham.jpg",
    },
    {
      nombre: "Paulo Cesar Rebolledo Palacios",
      cargo: "Ingeniero de Diseño",
      foto: "/equipo/paulo.jpg",
    },
    {
      nombre: "Luisa Maria Chala Madrigal",
      cargo: "Secretaria",
      foto: "/equipo/luisa.jpg",
    },
    {
      nombre: "Jenny Esperanza Ortiz",
      cargo: "Asesor Externo SST",
      foto: "/equipo/jenny.jpg",
    },
    {
      nombre: "Lina Maria Parga Hernandez",
      cargo: "Ingeniera de Diseño",
      foto: "/equipo/lina.jpg",
    },
    {
      nombre: "Jhon Anderson Lesmes",
      cargo: "Dibujante",
      foto: "/equipo/jhon.jpg",
    },
    {
      nombre: "Jarrison Favian Vaquen Lozano",
      cargo: "Dibujante",
      foto: "/equipo/jarrison.jpg",
    },
    {
      nombre: "Edgar Nicolas Fuentes Alfonso",
      cargo: "Ingeniero de Diseño",
      foto: "/equipo/edgar.jpg",
    },
    {
      nombre: "Edwin Leonardo Gonzalez Rojas",
      cargo: "Dibujante",
      foto: "/equipo/edwin.jpg",
    },
    {
      nombre: "Dayana Patricia Molina Tilano",
      cargo: "Ingeniera de Diseño",
      foto: "/equipo/dayana.jpg",
    },
    {
      nombre: "Dolly Lizeth Fonseca Peña",
      cargo: "Auxiliar Varios",
      foto: "/equipo/dolly.jpg",
    },
    {
      nombre: "Daniel Alejandro Molano Huertas",
      cargo: "Ingeniero de Diseño",
      foto: "/equipo/daniel.jpg",
    },
    {
      nombre: "Brandon Felipe Morales Herrera",
      cargo: "Aprendiz SENA",
      foto: "/equipo/brandon.jpg",
    },
  ];

  // =========================
  // CLIENTES
  // =========================

  const clientes = [
    "/public/images/LOGOS CLIENTES/ARQUIURBANA.png",
    "/public/images/LOGOS CLIENTES/calymayor.png",
    "/public/images/LOGOS CLIENTES/cass.jpg",
    "/public/images/LOGOS CLIENTES/COLPATRIA.png",
    "/public/images/LOGOS CLIENTES/concay.png",
    "/public/images/LOGOS CLIENTES/conconcreto.jpg",
    "/public/images/LOGOS CLIENTES/ENTORNO.jpg",
    "/public/images/LOGOS CLIENTES/gisaico.png",
    "/public/images/LOGOS CLIENTES/gradeco.png",
    "/public/images/LOGOS CLIENTES/hace ingenieros.png",
    "/public/images/LOGOS CLIENTES/KMA.png",
    "/public/images/LOGOS CLIENTES/latinco.jpg",
    "/public/images/LOGOS CLIENTES/NORDESTE.png",
    "/public/images/LOGOS CLIENTES/oxy.png",
    "/public/images/LOGOS CLIENTES/planificadas.png",
    "/public/images/LOGOS CLIENTES/PACIFICO 3.png",
    "/public/images/LOGOS CLIENTES/prourbanos.jpg",
    "/public/images/LOGOS CLIENTES/ruta40.jpg",
    "/public/images/LOGOS CLIENTES/sesac.png",
    "/public/images/LOGOS CLIENTES/SISGA.jpg",
    "/public/images/LOGOS CLIENTES/sonacol.jpg",
    "/public/images/LOGOS CLIENTES/tecnoconsulta.jpg",
    "/public/images/LOGOS CLIENTES/URBANSA.jpg",
  ];

  return (
    <>
      <Navbar />

      <main className="inner-page">

        {/* =========================
            ENCABEZADO
        ========================= */}

        <section className="page-hero">
          <div className="page-hero-content">

            <span className="section-label">
              S&A SANTANDER Y ASOCIADOS SAS
            </span>

            <h1>
              Ingeniería Estructural basada en
              <span> experiencia y confianza.</span>
            </h1>

            <p>
              Conozca nuestra trayectoria, nuestro equipo y los principios
              que orientan nuestro trabajo.
            </p>

          </div>
        </section>


        {/* =========================
            HISTORIA
        ========================= */}

        <section className="section">

          <div className="section-container two-column">

            <div>

              <span className="section-label">
                NUESTRA HISTORIA
              </span>

              <h2>
                Más de dos décadas construyendo soluciones de ingeniería
              </h2>

            </div>

            <div className="content-text">

              <p>
                S&A Santander y Asociados S.A.S. es una empresa colombiana
                de consultoría en ingeniería civil, especializada en diseño
                estructural, estudios integrales, interventoría y asesoría
                para proyectos de infraestructura y edificación.
              </p>

              <p>
                La empresa fue constituida en el año 2003 por profesionales
                con una amplia trayectoria en el desarrollo de proyectos de
                ingeniería.
              </p>

              <p>
                La experiencia acumulada por sus socios y profesionales ha
                permitido participar en proyectos de diferentes escalas y
                complejidades, manteniendo como prioridad la calidad técnica
                y el acompañamiento permanente al cliente.
              </p>

            </div>

          </div>

        </section>


        {/* =========================
            SOCIO FUNDADOR
        ========================= */}

        <section className="section gray-section">

          <div
            className="section-container"
            style={{
              display: "grid",
              gridTemplateColumns:
                "minmax(320px, 0.85fr) minmax(0, 1.4fr)",
              gap: "70px",
              alignItems: "center",
            }}
          >

            {/* =========================
                FOTOS
            ========================= */}

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "25px",
              }}
            >

              {/* FOTO PRINCIPAL */}

              <div
                style={{
                  width: "100%",
                  height: "390px",
                  borderRadius: "20px",
                  overflow: "hidden",
                  background: "#e5e7eb",
                  boxShadow: "0 15px 35px rgba(0,0,0,0.12)",
                }}
              >

                <img
                  src="public/images/PAPA/IMG_8525.jpg"
                  alt="Alfredo Santander"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />

              </div>


              {/* SEGUNDA FOTO */}

              <div
                style={{
                  width: "100%",
                  height: "220px",
                  borderRadius: "20px",
                  overflow: "hidden",
                  background: "#e5e7eb",
                  boxShadow: "0 10px 25px rgba(0,0,0,0.10)",
                }}
              >

                <img
                  src="public/images/PAPA/IMG-6573.JPG"
                  alt="Reconocimiento de Alfredo Santander"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />

              </div>

            </div>


            {/* =========================
                INFORMACIÓN DEL FUNDADOR
            ========================= */}

            <div className="content-text">

              <span className="section-label">
                A NUESTRO SOCIO FUNDADOR
              </span>

              <h2
                style={{
                  marginTop: "12px",
                  marginBottom: "25px",
                }}
              >
                Alfredo Santander
              </h2>

              <p>
                Alfredo Santander, ingeniero civil graduado de la Universidad
                Nacional de Colombia con Magister en estructuras de la misma
                universidad, trabajó en el sector público desde el año 1969
                hasta el año de 1977, en el ministerio de obras públicas y
                transporte, Fondo nacional de Caminos Vecinales, siempre
                dedicado a estudios y diseños.
              </p>

              <p>
                Después de 4 años de trabajar como independiente en el diseño
                de estructuras, en 1981 se asoció con dos ingenieros para
                fundar Proyectistas Civiles Asociados (PCA), la cual fue una
                de las principales compañías de Diseño estructural del país.
              </p>

              <p>
                Posteriormente en el año 2003 fundó S&A Santander & Asociados
                LTDA, junto a sus hijos Luis Fernando y Jorge Alfredo y
                acompañados por los ingenieros Ivonne Avendaño y Nelson Díaz.
              </p>

              <p>
                En su carrera profesional hizo el diseño estructural de cientos
                de puentes a lo largo y ancho del país en todo tipo de sistemas
                estructurales. Sirvió como perito en varios procesos y es
                debido a su gran trayectoria profesional y a los aportes
                importantes que hizo a la ingeniería del país por lo que le
                otorgaron varios premios.
              </p>

              <p>
                Entre los reconocimientos se destacan el Premio Guillermo
                González Zuleta (2009) de la Sociedad Colombia de Ingenieros,
                Premio póstumo “Lámpara de Diógenes” (2019) de la Asociación
                Colombiana de Ingeniería Sísmica – AIS y Docencia Excelente de
                la Universidad Nacional de Colombia – Sede Bogotá.
              </p>

              <p>
                Hoy en día seguimos su legado y continuamos trabajando con la
                misma pasión, dedicación y ética que nuestro socio fundador
                nos inculcó y así nos aseguraremos de darle bases sólidas a
                sus proyectos.
              </p>

            </div>

          </div>

        </section>


        {/* =========================
            PROPÓSITO
        ========================= */}

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

                <h3>CALIDAD</h3>

                <p>
                  Desarrollamos nuestros proyectos con criterios técnicos
                  y altos estándares de calidad.
                </p>

              </div>


              <div className="value-card">

                <h3>EXPERIENCIA</h3>

                <p>
                  Contamos con profesionales especializados y una amplia
                  trayectoria en ingeniería.
                </p>

              </div>


              <div className="value-card">

                <h3>CONFIANZA</h3>

                <p>
                  Acompañamos a nuestros clientes durante las diferentes
                  etapas de sus proyectos.
                </p>

              </div>


              <div className="value-card">

                <h3>SOLUCIONES</h3>

                <p>
                  Buscamos soluciones técnicas eficientes, seguras y
                  acordes con cada proyecto.
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* =========================
            MISIÓN Y VISIÓN
        ========================= */}

        <section className="section">

          <div className="section-container mission-grid">

            <div className="mission-card">

              <h2>
                Nuestra misión
              </h2>

              <p>
                Prestar servicios de consultoría e interventoría en
                ingeniería civil y arquitectura, especialmente en diseño
                estructural, estudios integrales y asesoría técnica,
                buscando la calidad, el cumplimiento de los compromisos
                y la satisfacción de nuestros clientes.
              </p>

            </div>


            <div className="mission-card">

              <h2>
                Nuestra visión
              </h2>

              <p>
                Ser reconocidos como una empresa líder por la alta calidad
                de sus servicios de consultoría e interventoría en
                ingeniería civil y arquitectura, participando en proyectos
                públicos y privados de diferentes sectores.
              </p>

            </div>

          </div>

        </section>


        {/* =========================
            EQUIPO
        ========================= */}

        <section className="section gray-section">

          <div className="section-container">

            <span className="section-label">
              EQUIPO S&A
            </span>

            <h2>
              Profesionales al servicio de cada proyecto
            </h2>


            <div className="team-grid">

              {equipo.map((persona) => (

                <div
                  className="team-card"
                  key={`${persona.nombre}-${persona.cargo}`}
                >

                  {/* FOTO */}

                  <div className="team-photo">

                    <img
                      src={persona.foto}
                      alt={`Foto de ${persona.nombre}`}
                    />

                  </div>


                  {/* NOMBRE */}

                  <h3>
                    {persona.nombre}
                  </h3>


                  {/* CARGO */}

                  <strong>
                    {persona.cargo}
                  </strong>

                </div>

              ))}

            </div>

          </div>

        </section>


        {/* =========================
            NUESTROS CLIENTES
        ========================= */}

        <section className="section clients-section">

          <div className="section-container">

            <div className="section-heading-center">

              <span className="section-label">
                NUESTROS CLIENTES
              </span>

              <h2>
                Empresas que confían en nosotros
              </h2>

              <p className="clients-intro">
                Hemos tenido la oportunidad de trabajar junto a diferentes
                empresas y organizaciones en el desarrollo de proyectos
                de ingeniería.
              </p>

            </div>


            {/* LOGOS */}

            <div className="clients-grid">

              {clientes
                .slice(0, mostrarTodos ? clientes.length : 6)
                .map((logo, index) => (

                  <div
                    className="client-card"
                    key={index}
                  >

                    <img
                      src={logo}
                      alt={`Logo de cliente ${index + 1}`}
                    />

                  </div>

                ))}

            </div>


            {/* BOTÓN */}

            {clientes.length > 6 && (

              <div className="clients-button-container">

                <button
                  className="clients-button"
                  onClick={() => setMostrarTodos(!mostrarTodos)}
                >

                  {mostrarTodos
                    ? "Ver menos"
                    : "Ver más clientes"}

                </button>

              </div>

            )}

          </div>

        </section>

      </main>
    </>
  );
}

export default Nosotros;