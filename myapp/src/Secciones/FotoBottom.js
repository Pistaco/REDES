import styled from "styled-components";
import bottom from "../svg/bottom.webp"

const Background = styled.div`
    background-color: black;
    width: 100%;
`

const Foto = styled.img`
    width: 100%;
`


const FotoBottom = () => <>
    <Background>
        <Foto src={bottom}/>
    </Background>
</>

export default FotoBottom