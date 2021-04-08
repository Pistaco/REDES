import Banner from "./componentes/banner"
import styled from "styled-components"

const zona = (height, color) => styled.div`
  width: 100%;
  height: ${height + "rem"};
  background-color: ${color};
`

const Tarjetas = zona(100, "red")
const QuienesSomos = zona(50, "green")
const Contacto = zona(70, "cyan")
const Formulario = zona(50, "Gold")
const Footer = zona(10, "Gainsboro")

const App = () => <div className="HI">
  <Banner><h1>BANNER</h1></Banner>
  <Tarjetas/>
  <QuienesSomos/>
  <Contacto/>
  <Formulario/>
  <Footer/>
</div>




export default App;
