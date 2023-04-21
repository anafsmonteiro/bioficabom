import styled from "styled-components";

const Link = styled.a`
background-color: ${props => props.corDeFundo || '#f2e036'};
color: #000;
padding: 1em;
border-radius: 10px;
font-size: 16px;
font-weight: bold;
text-decoration: none;
text-transform: uppercase;
margin: .5rem 1rem;
cursor: pointer;
`

export default function Links(props) {

    const linkExterno = props.linkExterno || '#';

    return <Link href={linkExterno}> {props.children} </Link>
}