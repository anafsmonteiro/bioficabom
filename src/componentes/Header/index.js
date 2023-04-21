import logo from '../../assets/logo.png'
import styled from 'styled-components'

const Logo = styled.img`
    margin-top: 10px;
    width: 200px;
    border: 2px solid #000;
    border-radius: 50%;
    background-color: #fff;

`
const Titulo = styled.h1`
    margin-bottom: 1rem;
`
const Paragrafo = styled.p`
    margin: 0 .5rem;
`


export default function Header() {
    return (
        <div>
            <header>
                <Logo src={logo} alt="logo" />
                <Titulo>@grupoficabom</Titulo>
                <Paragrafo>Nossa missão é te lembrar que vale a pena espalhar alegria e amor!</Paragrafo>
            </header>
        </div>
    )
}