import styled from 'styled-components'
import logo from '../../assets/logo.png'

const Rodape = styled.footer`
background-color: #e7323b;
padding: .5rem;
`
const Logo = styled.img`
width: 70px;
border: 1px solid #000;
border-radius: 50%;
margin: 1rem 0;
background-color: #fff;
`
const Paragrafo = styled.p`
font-size: 12px;
margin-bottom: 1rem;
font-weight: bold;

`


export default function Footer(){
    return(
        <Rodape>
            <Logo src={logo} alt='Logo'/>
            <Paragrafo>Grupo voluntário sem fins lucrativos</Paragrafo>
        </Rodape>
    )
}