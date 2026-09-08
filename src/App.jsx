import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Home from "./pages/Home";
import Nosotros from "./pages/Nosotros";
import Servicios from "./pages/Servicios";
import Proyectos from "./pages/Proyectos";
import Experiencia from "./pages/Experiencia";
import Noticias from "./pages/Noticias";
import Contacto from "./pages/Contacto";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import Footer from "./components/Footer";

function AppLayout() {
  const { pathname } = useLocation();
  return (
    <>
      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/nosotros"
          element={<Nosotros />}
        />

        <Route
          path="/servicios"
          element={<Servicios />}
        />

        <Route
          path="/proyectos"
          element={<Proyectos />}
        />

        <Route
          path="/experiencia"
          element={<Experiencia />}
        />

        <Route
          path="/noticias"
          element={<Noticias />}
        />

        <Route
          path="/contacto"
          element={<Contacto />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/admin"
          element={<Admin />}
        />

      </Routes>
      {!["/login","/admin"].includes(pathname) && <Footer />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}

export default App;