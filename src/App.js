import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

import Agregar from "./pages/Agregar";
import Multas from "./pages/Multas";
import Editar from "./pages/Editar";
import Cabecera from "./components/Cabecera";

import "./styles.css";
import AgregarMultas from "./pages/AgregarMultas";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Cabecera />
        {/* //Contenido dinámico */}
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>

        <Routes>
          <Route path="/agregar" element={<Agregar />} />
        </Routes>

        <Routes>
          <Route path="/multas" element={<Multas />} />
        </Routes>

        <Routes>
          <Route path="/agregarMultas" element={<AgregarMultas />} />
        </Routes>

        <Routes>
          <Route path="/editar" element={<Editar />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
