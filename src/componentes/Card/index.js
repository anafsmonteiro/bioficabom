import styled from "styled-components"

const Sessao = styled.section`
margin: 1rem;
padding: .5rem;
border: 2px solid #CA505D;
border-radius: 10px;
shadow-box: 8px 5px 10px #000;
`
const Titulo = styled.h2`
    margin-bottom: 1rem;
`
const Subtitulo = styled.h4`
margin-bottom: 1rem;

`
const Paragrafo = styled.p`
margin-bottom: 1rem;
`


export default function Card({title, text, subtitle, textAlternative}){
    return(
        <Sessao>
            <Titulo>{title}</Titulo>
            <Paragrafo>{text}</Paragrafo>
            <Subtitulo>{subtitle}</Subtitulo>
            <Paragrafo>{textAlternative}</Paragrafo>
        </Sessao>
    )
}