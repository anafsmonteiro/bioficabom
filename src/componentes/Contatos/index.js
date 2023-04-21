import Links from "../Links";
import styled from "styled-components";

const ListaContatos = styled.section`
    margin-top: 2rem;
    display: flex;
    flex-direction: column
    `

export default function Contatos(){
    return (
        <ListaContatos>
            <Links linkExterno='https://docs.google.com/forms/d/e/1FAIpQLSf_gx0BjCBClgYKkniYzMzkH4aIs26w_lVU789ggZjLenEtMA/viewform?usp=sf_link'>Inscrição</Links>

            <Links linkExterno='https://api.whatsapp.com/send?phone=5585998073146'>WhatsApp</Links>

            <Links linkExterno='https://www.instagram.com/grupoficabom/'>Instagram</Links>

            <Links linkExterno='https://www.facebook.com/grupoficabom'>Facebook</Links>


        </ListaContatos>
    )
}