import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import {
  Mail,
  Trash2,
  CheckCircle,
  LogOut,
  RefreshCw,
} from "lucide-react";

import Navbar from "../components/Navbar";
import { API_BASE_URL } from "../config/api";

function Admin() {
  const navigate = useNavigate();

  const [mensajes, setMensajes] = useState([]);
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem(
    "sya_admin_token"
  );

  useEffect(() => {
    if (!token) {
      navigate("/login");
      return;
    }

    cargarMensajes();
  }, []);

  const cargarMensajes = async () => {
    try {
      setLoading(true);

      const adminToken = localStorage.getItem(
        "sya_admin_token"
      );

      const response = await fetch(
        `${API_BASE_URL}/api/mensajes`,
        {
          headers: {
            Authorization: `Bearer ${adminToken}`,
          },
        }
      );

      if (response.status === 401) {
        cerrarSesion();
        return;
      }

      const data = await response.json();

      setMensajes(data);
    } catch (error) {
      console.error(error);

      Swal.fire({
        icon: "error",
        title: "Error",
        text: "No se pudieron cargar los mensajes.",
      });
    } finally {
      setLoading(false);
    }
  };

  const marcarLeido = async (id) => {
    try {
      const adminToken = localStorage.getItem(
        "sya_admin_token"
      );

      await fetch(
        `${API_BASE_URL}/api/mensajes/${id}`,
        {
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${adminToken}`,
          },
        }
      );

      cargarMensajes();
    } catch (error) {
      console.error(error);
    }
  };

  const eliminarMensaje = async (id) => {
    const result = await Swal.fire({
      icon: "warning",
      title: "¿Eliminar mensaje?",
      text: "Esta acción no se puede deshacer.",
      showCancelButton: true,
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    });

    if (!result.isConfirmed) {
      return;
    }

    try {
      const adminToken = localStorage.getItem(
        "sya_admin_token"
      );

      const response = await fetch(
        `${API_BASE_URL}/api/mensajes/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${adminToken}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error();
      }

      Swal.fire({
        icon: "success",
        title: "Eliminado",
        text: "El mensaje fue eliminado.",
        timer: 1200,
        showConfirmButton: false,
      });

      cargarMensajes();
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "No se pudo eliminar el mensaje.",
      });
    }
  };

  const cerrarSesion = () => {
    localStorage.removeItem("sya_admin_token");
    localStorage.removeItem("sya_admin_user");

    navigate("/login");
  };

  return (
    <>
      <Navbar />

      <main className="admin-page">

        <div className="admin-container">

          <div className="admin-header">

            <div>
              <span className="section-label">
                ADMINISTRACIÓN
              </span>

              <h1>
                Mensajes recibidos
              </h1>

              <p>
                Gestione las solicitudes enviadas
                desde el sitio web.
              </p>
            </div>

            <div className="admin-actions">

              <button
                onClick={cargarMensajes}
                className="admin-refresh"
              >
                <RefreshCw size={18} />
                Actualizar
              </button>

              <button
                onClick={cerrarSesion}
                className="admin-logout"
              >
                <LogOut size={18} />
                Cerrar sesión
              </button>

            </div>

          </div>

          <div className="admin-stats">

            <div className="admin-stat">
              <Mail size={25} />

              <div>
                <strong>
                  {mensajes.length}
                </strong>

                <span>
                  Mensajes
                </span>
              </div>
            </div>

            <div className="admin-stat">
              <CheckCircle size={25} />

              <div>
                <strong>
                  {
                    mensajes.filter(
                      (m) => m.leido
                    ).length
                  }
                </strong>

                <span>
                  Leídos
                </span>
              </div>
            </div>

            <div className="admin-stat">
              <Mail size={25} />

              <div>
                <strong>
                  {
                    mensajes.filter(
                      (m) => !m.leido
                    ).length
                  }
                </strong>

                <span>
                  Pendientes
                </span>
              </div>
            </div>

          </div>

          {loading ? (
            <div className="admin-empty">
              <p>
                Cargando mensajes...
              </p>
            </div>
          ) : mensajes.length === 0 ? (
            <div className="admin-empty">
              <Mail size={45} />

              <h2>
                No hay mensajes
              </h2>

              <p>
                Los mensajes enviados desde el
                formulario aparecerán aquí.
              </p>
            </div>
          ) : (
            <div className="messages-list">

              {mensajes.map((mensaje) => (

                <article
                  key={mensaje.id}
                  className={`message-card ${
                    mensaje.leido
                      ? "message-read"
                      : "message-unread"
                  }`}
                >

                  <div className="message-header">

                    <div>
                      <span className="message-status">
                        {mensaje.leido
                          ? "LEÍDO"
                          : "NUEVO"}
                      </span>

                      <h2>
                        {mensaje.asunto ||
                          "Sin asunto"}
                      </h2>
                    </div>

                    <span className="message-date">
                      {new Date(
                        mensaje.fecha
                      ).toLocaleString(
                        "es-CO"
                      )}
                    </span>

                  </div>

                  <div className="message-contact">

                    <strong>
                      {mensaje.nombre}
                    </strong>

                    <a
                      href={`mailto:${mensaje.email}`}
                    >
                      {mensaje.email}
                    </a>

                    {mensaje.telefono && (
                      <span>
                        {mensaje.telefono}
                      </span>
                    )}

                  </div>

                  <div className="message-body">
                    {mensaje.mensaje}
                  </div>

                  <div className="message-actions">

                    {!mensaje.leido && (
                      <button
                        onClick={() =>
                          marcarLeido(
                            mensaje.id
                          )
                        }
                        className="message-read-button"
                      >
                        <CheckCircle
                          size={17}
                        />

                        Marcar como leído
                      </button>
                    )}

                    <button
                      onClick={() =>
                        eliminarMensaje(
                          mensaje.id
                        )
                      }
                      className="message-delete-button"
                    >
                      <Trash2 size={17} />

                      Eliminar
                    </button>

                  </div>

                </article>

              ))}

            </div>
          )}

        </div>

      </main>
    </>
  );
}

export default Admin;