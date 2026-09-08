import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div>
          <p>
            © {new Date().getFullYear()}
            {" "}
            S&A Santander y Asociados.
            Todos los derechos reservados.
          </p>
        </div>

        <Link to="/admin">
          Acceso administrativo
        </Link>

      </div>

    </footer>
  );
}

export default Footer;