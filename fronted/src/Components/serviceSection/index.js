import React from 'react'
import {
    ServicesContainer,
    ServiceWrapper,
    TitleWrp,
    Title,
    ServicesInfo,
    Row,
    RowTitle,
    RowSubtitle
} from './serviceElements'

const Services = () => {
    return (
        <>
            <ServicesContainer id='services'>
                <ServiceWrapper>
                    <TitleWrp>
                        <Title>Nuestros Servicios</Title>
                    </TitleWrp>
                    <ServicesInfo>
                        <Row>
                            <RowTitle>Desarrollo</RowTitle>
                            <RowSubtitle>¿WorkFlow, SP, JS?, Respondemos oportunamente y haremos las mejores recomendaciones según tus necesidades.</RowSubtitle>
                        </Row>
                        <Row>
                        <RowTitle>Consultoria</RowTitle>
                        <RowSubtitle>Te ayudamos a revisar tus necesidades, queremos que tu experiencia en Sharepoint sea la mejor y la mas certera para tus ideas</RowSubtitle>

                        </Row>
                        <Row>
                        <RowTitle>Training</RowTitle>
                        <RowSubtitle>¿SharePoint? te guiaremos a conocer y sacarle el máximo provecho a este producto para tu empresa, equipo o colaboradores.</RowSubtitle>
                        </Row>
                        <Row>
                        <RowTitle>Diseño y Experiencia de usuario UX</RowTitle>
                        <RowSubtitle>Logramos modificar la plataforma visual y conceptualmente para que entregue la experiencia que tu quieres a tus usuario y colaboradores con metodologías modernas.</RowSubtitle>
                        </Row>
                        <Row>
                        <RowTitle>Training</RowTitle>
                        <RowSubtitle>Logramos modificar la plataforma visual y conceptualmente para que entregue la experiencia que tu quieres a tus usuario y colaboradores con metodologías modernas.</RowSubtitle>
                        </Row>
                        <Row>
                        <RowTitle>Soporte y troubleshooting</RowTitle>
                        <RowSubtitle>¿Problemas con SharePoint? Te ayudamos con los problemas desde los mas simples y hasta los más complejos.</RowSubtitle>
                        </Row>
                    </ServicesInfo>
                </ServiceWrapper>
            </ServicesContainer>
        </>
    )
}

export default Services
