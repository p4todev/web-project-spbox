import React from 'react'
import { 
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinksItems,
    FooterLinksTitle,
    FooterLink}
from './FooterElements'

const Footer = () => {
    return (
        <>
            <FooterContainer>
                <FooterWrap>
                    <FooterLinksContainer>
                        <FooterLinksWrapper>
                            <FooterLinksItems>
                                <FooterLinksTitle>Sobre nosotros</FooterLinksTitle>
                                    <FooterLink >Informacion</FooterLink>
                                    <FooterLink >Nuestro motivo</FooterLink>
                                    <FooterLink >Trabaja con nosotros</FooterLink>
                            </FooterLinksItems>
                            <FooterLinksItems>
                                <FooterLinksTitle>Preguntas frecuentes</FooterLinksTitle>
                                    <FooterLink >Proyectos</FooterLink>
                                    <FooterLink >Consultoria</FooterLink>
                                    <FooterLink >Prestamos de servicios</FooterLink>
                            </FooterLinksItems>
                            <FooterLinksItems>
                                <FooterLinksTitle>Redes sociales</FooterLinksTitle>
                                    <FooterLink >Facebook</FooterLink>
                                    <FooterLink >Instagram</FooterLink>
                                    <FooterLink >Linkdin</FooterLink>
                                    <FooterLink >Tik-Tok</FooterLink>
                            </FooterLinksItems>
                            <FooterLinksItems>
                                <FooterLinksTitle>Contactenos</FooterLinksTitle>
                                    <FooterLink >Correos</FooterLink>
                                    <FooterLink >Numeros</FooterLink>
                                    <FooterLink >Direcciones</FooterLink>
                                    <FooterLink >Asistente virtual</FooterLink>
                            </FooterLinksItems>
                        </FooterLinksWrapper>
                    </FooterLinksContainer>
                </FooterWrap>
            </FooterContainer> 
        </>
    )
}

export default Footer
