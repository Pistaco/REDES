import styled from "styled-components";
import zonamedia from "../svg/zonamedia.webp"
import quienesSomos from "../svg/quienesSomos.webp"

const gradosRotacion = -20;

const Container = styled.div`
    width: 100%;
    height: 150vh;
`

const Background = styled.div`
    z-index: 20;
    position: relative;
    top: -300px;
    
    width: 100%;
    height: 150vh;
    
    background-image: url("${zonamedia}");
    background-size: 100vw;
    background-position: top;
    background-repeat: no-repeat;
    
    display: flex ;
    align-items: center;
    justify-content: center;
    
`

const Background2 = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    top: 280px;

    background-image: url("${quienesSomos}");
    background-size: 100vw;
    background-position: top;
    background-repeat: no-repeat;
`

const Relleno = styled.div`
    position: absolute;
    z-index: -10;
    background-color: black;
    width: 100%;
    height: 150vh;
`




const QuienesSomos = () => <>
    <Container>
        <Relleno/>
        <Background>
            <Background2>
            </Background2>
        </Background>/>
    </Container>
    </>


export default QuienesSomos;
