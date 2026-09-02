import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

import "../styles/navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>

      <div className="navbar-container">

        <a href="/" className="logo">
        <img src="/public/Logo/logo.png" alt="S&A Santander y Asociados" height="90" width="180" />
        </a>

        {/* MENÚ DESKTOP */}
        <nav className="navbar-menu">

          <NavLink to="/" className="nav-link">
            Inicio
          </NavLink>

          <NavLink to="/nosotros" className="nav-link">
            Nosotros
          </NavLink>

          <NavLink to="/servicios" className="nav-link">
            Servicios
          </NavLink>

          <NavLink to="/proyectos" className="nav-link">
            Proyectos
          </NavLink>

          <NavLink to="/experiencia" className="nav-link">
            Experiencia
          </NavLink>

          <NavLink to="/noticias" className="nav-link">
            Noticias
          </NavLink>

          <Link to="/contacto" className="nav-contact">
            Contacto
          </Link>

        </nav>

        {/* BOTÓN MOBILE */}
        <button
          className="mobile-menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      {/* MENÚ MOBILE */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>

        <NavLink to="/" onClick={closeMenu}>
          Inicio
        </NavLink>

        <NavLink to="/nosotros" onClick={closeMenu}>
          Nosotros
        </NavLink>

        <NavLink to="/servicios" onClick={closeMenu}>
          Servicios
        </NavLink>

        <NavLink to="/proyectos" onClick={closeMenu}>
          Proyectos
        </NavLink>

        <NavLink to="/experiencia" onClick={closeMenu}>
          Experiencia
        </NavLink>

        <NavLink to="/noticias" onClick={closeMenu}>
          Noticias
        </NavLink>

        <Link to="/contacto" onClick={closeMenu}>
          Contacto
        </Link>

      </div>

    </header>
  );
}

export default Navbar;