import React from 'react';
import {
    SidebarContainer,
    SidebarIcon,
    CloseIcon,
    SidebarContent,
    SidebarMenu,
    SidebarLink
}from './SidebarElements';

const SideBar = ({isOpen,toggle}) => {
    return (
        <>
            <SidebarContainer isOpen={isOpen} onClick={toggle}>
                <SidebarIcon onClick={toggle}>
                    <CloseIcon/>
                </SidebarIcon>
                <SidebarContent>
                    <SidebarMenu>
                        <SidebarLink 
                        to='about'
                        offset={20}
                        onClick={toggle}
                        >Quienes Somos
                        </SidebarLink>
                        <SidebarLink
                        to='services'
                        offset={-80}
                        onClick={toggle}
                        >Servicios</SidebarLink>
                        <SidebarLink
                        to='projects'
                        offset={-80}
                        onClick={toggle}
                        >Nuestros Proyectos</SidebarLink>
                        <SidebarLink
                        to='contact'
                        offset={-40}
                        onClick={toggle}
                        >Contacto</SidebarLink>

                    </SidebarMenu>
                </SidebarContent>
            </SidebarContainer>
        </>
    )
}

export default SideBar
