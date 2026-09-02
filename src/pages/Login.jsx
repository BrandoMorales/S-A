import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Lock, User, LogIn } from "lucide-react";
import { API_BASE_URL } from "../config/api";

function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await fetch(
        `${API_BASE_URL}/api/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username,
            password,
          }),
        }
      );

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(data.message);
      }

      localStorage.setItem(
        "sya_admin_token",
        data.token
      );

      localStorage.setItem(
        "sya_admin_user",
        JSON.stringify(data.user)
      );

      await Swal.fire({
        icon: "success",
        title: "Bienvenido",
        text: "Inicio de sesión correcto.",
        timer: 1200,
        showConfirmButton: false,
      });

      navigate("/admin");
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Acceso denegado",
        text:
          error.message === "Failed to fetch"
            ? "No se pudo conectar con el servidor. Verifica que el backend esté iniciado."
            : error.message || "Usuario o contraseña incorrectos.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="login-page">

      <div className="login-container">

        <div className="login-header">

          <div className="login-icon">
            <Lock size={30} />
          </div>

          <h1>
            Acceso administrativo
          </h1>

          <p>
            S&A Santander y Asociados
          </p>

        </div>

        <form
          className="login-form"
          onSubmit={handleSubmit}
        >

          <div className="form-group">

            <label>
              Usuario
            </label>

            <div className="input-icon">
              <User size={18} />

              <input
                type="text"
                value={username}
                onChange={(e) =>
                  setUsername(e.target.value)
                }
                placeholder="Usuario"
                required
              />
            </div>

          </div>

          <div className="form-group">

            <label>
              Contraseña
            </label>

            <div className="input-icon">
              <Lock size={18} />

              <input
                type="password"
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
                placeholder="Contraseña"
                required
              />
            </div>

          </div>

          <button
            type="submit"
            className="login-button"
            disabled={loading}
          >
            {loading
              ? "Ingresando..."
              : "Iniciar sesión"}

            {!loading && <LogIn size={18} />}
          </button>

        </form>

      </div>

    </main>
  );
}

export default Login;