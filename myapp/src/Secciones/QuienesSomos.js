import styled from "styled-components";

import background from "../svg/background.webp"
import isotipo from "../svg/isotipo.png"
import naminge from "../svg/naming.png"
import cuadradoIzquierdo from "../svg/cuadradoIzquierdo.webp"
import solucionesDigitales from "../svg/solucionesDigitales.webp"


const opacityLayer1 = 1;
const opacityLayer2 = 1;
const opacityLayer3 = 0;

const StyledDiv = styled.div`
    position: relative;
    
    width: 100%;
    height: 100vh;
    
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 0.5fr 1fr 1fr;
    grid-template-areas: "di rn" "di lg" "ll lg" ;
`

const Barra = styled.div`
    z-index: 20;

    grid-row: 1 / 2;
    grid-column: 1 / -1;
    
    background-color: aquamarine;
    opacity: ${ opacityLayer3 };
`

const Background = styled.div`
    z-index: -1;

    grid-row: 2 / -1;
    grid-column: 1 / -1;
    
    background-color: rebeccapurple;
        
    img {
        width: 100%;
    }
    
`

const Logo = styled.div`
    grid-area: lg;
    opacity: ${ opacityLayer2 };
        
    display: flex;
    justify-content: center;
    align-items: center;
        
    img {
        width: 70%;
    }
`

const DecoracionIzquierda = styled.div`
    grid-area: di;
    opacity: ${ opacityLayer2 };

    div {
            
        display: flex;
        align-items: end;
        justify-content: flex-end;
            
            
        background-image: url("${cuadradoIzquierdo}");
        width: 100%;
        height: 100%;
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
        border-radius: 0 0 20% 0;
    }
        
    img {
        width: 90%;
        padding-right: 5%;
        padding-bottom: 10%;
    }
        
`

const LogoLetras = styled.div`
    grid-area: ll;
    opacity: ${ opacityLayer2 };

    display: flex;
    justify-content: flex-end;
    align-items: center;
        
    img {
        width: 60%;
    }
`

const RellenoNegro = styled.div`
    background-color: black;
    grid-area: rn;
    opacity: ${ opacityLayer2 };
`


const QuienesSomos = () =>
    <StyledDiv>

        <Barra id={"barra"}>barra</Barra>
        <Logo><img src={isotipo}/></Logo>
        <DecoracionIzquierda> <div>
                <img src={solucionesDigitales}/>
        </div> </DecoracionIzquierda>
        <LogoLetras><img src={naminge}/>/></LogoLetras>
        <Background><img src={background}/>/></Background>
        <RellenoNegro>relleno negro</RellenoNegro>
    </StyledDiv>



export default QuienesSomos;