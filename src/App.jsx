import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./pages/Home";
import Nosotros from "./pages/Nosotros";
import Servicios from "./pages/Servicios";
import Proyectos from "./pages/Proyectos";
import Experiencia from "./pages/Experiencia";
import Noticias from "./pages/Noticias";
import Contacto from "./pages/Contacto";
import Login from "./pages/Login";
import Admin from "./pages/Admin";

function App() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}

export default App;