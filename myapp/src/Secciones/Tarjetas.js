import styled from "styled-components";

import pelota from "../svg/pelota.webp"
import corchetes from "../svg/corchetes.webp"
import celular from "../svg/celular.webp"

const StyleTarjetasConteiner = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: flex-end;
    height: 180vh;
    width: 100%;
`

const StyleTarjeta = styled.div`
    background-color: ${props => props.red ? "red" : "black"};
    width: 30vw;
    height: 90%;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    
    border-top-right-radius: 100px;
    border-top-left-radius: 100px;
    
    h1 {
    color: white;
    font-size: 3.8rem;
    }
    
    img {
        padding-top: ${props => props.red ? "10%" : "25%"};
        width: 30%;
    }
`

const Tarjetas = () => <StyleTarjetasConteiner>
    <StyleTarjeta red={false}>
        <img src={pelota}/>
        <h1>PAGINAS WEB</h1>
    </StyleTarjeta>
    <StyleTarjeta red={true}>
        <img src={corchetes}/>
        <h1>PROGRAMACION</h1>
    </StyleTarjeta>
    <StyleTarjeta red={false}>
        <img src={celular}/>
        <h1>APPS</h1>
    </StyleTarjeta>
</StyleTarjetasConteiner>


export default Tarjetas;