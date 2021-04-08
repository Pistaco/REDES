import styled from "styled-components"
import logo from "./../images/isotipo.png"



const BannerStyle = styled.div`
    width: 100%;
    height: 40rem;
    display: grid;
    grid-template-columns: 1fr 1fr ;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;

`

const Logo = styled.img`
    grid-row: 5 span;
    width: 60%;
    justify-self: center;
    align-self: center;
`

const NavBar = styled.div`
    background-color: black;
    grid-column: 1/3;
    grid-row: 1 / 2;
`


const Square = styled.div`
    background-color: bisque;
    z-index: 2;
    grid-row: 1/5;
    grid-column: 1/ 2;
    border-radius: 0 0 25% 0;
    background-image: linear-gradient(134deg, rgba(0, 0, 0, 0.04) 0%, rgba(0, 0, 0, 0.04) 41%,rgba(188, 188, 188, 0.04) 41%, rgba(188, 188, 188, 0.04) 100%),linear-gradient(19deg, rgba(41, 41, 41, 0.04) 0%, rgba(41, 41, 41, 0.04) 46%,rgba(233, 233, 233, 0.04) 46%, rgba(233, 233, 233, 0.04) 100%),linear-gradient(65deg, rgba(24, 24, 24, 0.04) 0%, rgba(24, 24, 24, 0.04) 97%,rgba(108, 108, 108, 0.04) 97%, rgba(108, 108, 108, 0.04) 100%),linear-gradient(311deg, rgba(58, 58, 58, 0.04) 0%, rgba(58, 58, 58, 0.04) 79%,rgba(220, 220, 220, 0.04) 79%, rgba(220, 220, 220, 0.04) 100%),linear-gradient(90deg, rgb(167,22,22),rgb(160,33,33));
`



const Banner = () => 
    <BannerStyle>
        <Square/>
        <NavBar/>
        <Logo src={logo}/>
    </BannerStyle>


export default Banner