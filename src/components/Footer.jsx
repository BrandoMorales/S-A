import { MapPin, Phone, Mail, ChevronUp, Lock } from "lucide-react";
import { Link } from "react-router-dom";
import "../styles/footer.css";

function Footer() {
  const scrollToTop = () => { window.scrollTo({ top: 0, behavior: "smooth" }); };
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-line"></div>

        <div className="footer-social">
          <a href="https://www.instagram.com/santanderyasociados?stkn=OXI2MXFnZ2dzOWZm"
             target="_blank" rel="noopener noreferrer"
             aria-label="Instagram de Santander y Asociados">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <circle cx="12" cy="12" r="4"/>
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
            </svg>
          </a>
          <a href="https://www.facebook.com/share/19JkuJ9XJa/?mibextid=wwXIfr"
             target="_blank" rel="noopener noreferrer"
             aria-label="Facebook de Santander y Asociados">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
            </svg>
          </a>
        </div>

        <div className="footer-info">
          <span><strong>S&amp;A SANTANDER &amp; ASOCIADOS</strong></span>
          <span className="footer-sep">|</span>
          <span><MapPin size={14} /> Bogotá D.C. - Colombia</span>
          <span className="footer-sep">|</span>
          <span><Phone size={14} /> 311 561 1346</span>
          <span className="footer-sep">|</span>
          <a href="mailto:info@sya.com.co" className="footer-email">
            <Mail size={14} /> sya@sya.com.co
          </a>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} S&amp;A Santander &amp; Asociados. Todos los derechos reservados.</p>
          <Link to="/login" className="admin-link"><Lock size={12} /> Acceso administrativo</Link>
        </div>

      </div>
      <button className="scroll-top" onClick={scrollToTop} aria-label="Volver arriba">
        <ChevronUp size={22} />
      </button>
    </footer>
  );
}

export default Footer;