import { useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import Navbar from "../components/Navbar";

import {
  Mail,
  Phone,
  MapPin,
  Send,
} from "lucide-react";

import {
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID,
  EMAILJS_PUBLIC_KEY,
} from "../config/email";
import { API_BASE_URL } from "../config/api";

function Contacto() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    asunto: "",
    mensaje: "",
  });

  const [enviando, setEnviando] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.nombre ||
      !formData.email ||
      !formData.mensaje
    ) {
      Swal.fire({
        icon: "warning",
        title: "Campos incompletos",
        text: "Por favor completa nombre, correo y mensaje.",
      });

      return;
    }

    setEnviando(true);

    try {
      /*
       * 1. Guardamos el mensaje en nuestro backend
       */

      const responseBackend = await fetch(
        `${API_BASE_URL}/api/mensajes`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!responseBackend.ok) {
        throw new Error(
          "No se pudo guardar el mensaje"
        );
      }

      /*
       * 2. Enviamos el correo mediante EmailJS
       */

      const emailjsConfigured = [
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        EMAILJS_PUBLIC_KEY,
      ].every(
        (value) => value && !value.startsWith("TU_")
      );

      if (emailjsConfigured) {
        await emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          {
            nombre: formData.nombre,
            email: formData.email,
            telefono: formData.telefono,
            asunto: formData.asunto,
            mensaje: formData.mensaje,
          },
          {
            publicKey: EMAILJS_PUBLIC_KEY,
          }
        );
      }

      Swal.fire({
        icon: "success",
        title: "Mensaje enviado",
        text: "Gracias por contactarnos. Hemos recibido su mensaje correctamente.",
        confirmButtonText: "Aceptar",
      });

      setFormData({
        nombre: "",
        email: "",
        telefono: "",
        asunto: "",
        mensaje: "",
      });
    } catch (error) {
      console.error(error);

      Swal.fire({
        icon: "error",
        title: "No se pudo enviar",
        text: "Ocurrió un problema al enviar el mensaje. Inténtalo nuevamente.",
        confirmButtonText: "Aceptar",
      });
    } finally {
      setEnviando(false);
    }
  };

  return (
    <>
      <Navbar />

      <main className="inner-page">

        <section className="page-hero">
          <div className="page-hero-content">
            <span>CONTACTO</span>

            <h1>
              Hablemos de su
              <span> proyecto.</span>
            </h1>

            <p>
              Estamos disponibles para conocer sus
              necesidades y ofrecer soluciones de
              ingeniería.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="section-container">

            <div className="contact-grid">

              <div className="contact-information">

                <span className="section-label">
                  CONTÁCTENOS
                </span>

                <h2>
                  Estamos aquí para ayudarle
                </h2>

                <p>
                  Si desea conocer más sobre nuestros
                  servicios o tiene un proyecto en
                  desarrollo, puede comunicarse con
                  nosotros.
                </p>

                <div className="contact-item">
                  <div className="contact-icon">
                    <MapPin size={22} />
                  </div>

                  <div>
                    <strong>Dirección</strong>

                    <p>
                      Calle 98 # 18–71 Oficina 406
                    </p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <Phone size={22} />
                  </div>

                  <div>
                    <strong>Teléfono</strong>

                    <p>
                      6210288
                    </p>

                    <p>
                      311 561 1346
                    </p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <Mail size={22} />
                  </div>

                  <div>
                    <strong>Correo</strong>

                    <p>
                      felipemoralesherrera888@gmail.com
                    </p>
                  </div>
                </div>

              </div>

              <div className="contact-form-container">

                <form
                  className="contact-form"
                  onSubmit={handleSubmit}
                >

                  <div className="form-group">
                    <label htmlFor="nombre">
                      Nombre *
                    </label>

                    <input
                      id="nombre"
                      name="nombre"
                      type="text"
                      value={formData.nombre}
                      onChange={handleChange}
                      placeholder="Su nombre"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">
                      Correo electrónico *
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="correo@ejemplo.com"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="telefono">
                      Teléfono
                    </label>

                    <input
                      id="telefono"
                      name="telefono"
                      type="tel"
                      value={formData.telefono}
                      onChange={handleChange}
                      placeholder="Su número de teléfono"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="asunto">
                      Asunto
                    </label>

                    <input
                      id="asunto"
                      name="asunto"
                      type="text"
                      value={formData.asunto}
                      onChange={handleChange}
                      placeholder="Asunto"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="mensaje">
                      Mensaje *
                    </label>

                    <textarea
                      id="mensaje"
                      name="mensaje"
                      rows="6"
                      value={formData.mensaje}
                      onChange={handleChange}
                      placeholder="Cuéntenos sobre su proyecto..."
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="form-button"
                    disabled={enviando}
                  >
                    {enviando ? (
                      "Enviando..."
                    ) : (
                      <>
                        Enviar mensaje
                        <Send size={18} />
                      </>
                    )}
                  </button>

                </form>

              </div>

            </div>

          </div>
        </section>

      </main>
    </>
  );
}

export default Contacto;