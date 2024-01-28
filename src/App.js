import { Routes, Route } from "react-router-dom";

import Inicio from './components/inicio/Inicio.jsx';
import Login from "./components/login/Login.jsx";
import Signup from "./components/signup/Signup.jsx";
import Panel from "./components/panel/Panel.jsx";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Inicio />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<Signup />}></Route>

      <Route path="/panel" element={<Panel />}></Route>

      {/* <Route path="/contacto" element={<Contacto />}></Route>
      <Route path="/favoritos" element={<Favoritos />}></Route>
      <Route path="/login" element={<Login setUsuario={setUsuario} />}></Route> */}
    </Routes>
  );
}

export default App;
