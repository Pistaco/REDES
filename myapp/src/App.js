import logo from './logo.svg';
import './App.css';
import Inicio from './Secciones/Inicio';
import Tarjetas from "./Secciones/Tarjetas";
import QuienesSomos from "./Secciones/QuienesSomos";
import FotoBottom from "./Secciones/FotoBottom";

function App() {
  return (
      <>
          <Inicio/>
          <Tarjetas/>
          <QuienesSomos/>
          <FotoBottom/>
      </>
  );
}

export default App;
