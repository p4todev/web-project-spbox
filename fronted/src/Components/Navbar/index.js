import React,{useState,useEffect} from 'react'
import {
    Nav,
    NavbarContainer,
    NavbarLogo,
    Logo,
    Span,
    NavbarMobilIcon,
    NavbarMenu,
    NavbarItem,
    NavbarLink
    } from './NavbarElements'
import {IconContext} from 'react-icons/lib';
import { animateScroll as scroll} from 'react-scroll';




const Navbar = ({toggle}) => {

    const [scrollNav,setScrollNav] = useState(false);

    const changeNav = () => {
        if(window.scrollY>=80){
            setScrollNav(true);
        }else{
            setScrollNav(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav);
    },[]);

    const scrollHome = () => {
        scroll.scrollToTop();
    }


    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                <NavbarLogo to='/' onClick={scrollHome}>
                    <Logo><Span>SP</Span>Box</Logo>
                </NavbarLogo>
                <NavbarMobilIcon onClick={toggle}/>
                <NavbarMenu>
                    <NavbarItem>
                        <NavbarLink 
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}
                        to='/' onClick={scrollHome}>Inicio</NavbarLink>
                    </NavbarItem>
                    <NavbarItem >
                        <NavbarLink 
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={20}
                        to='about'>Quienes Somos</NavbarLink>
                    </NavbarItem>
                    <NavbarItem>
                        <NavbarLink 
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}
                        to='services'>Servicios</NavbarLink>
                    </NavbarItem>
                    <NavbarItem>
                        <NavbarLink 
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact={true}
                        offset={-80}
                        to='projects'>Nuestros Proyectos</NavbarLink>
                    </NavbarItem>
                    <NavbarItem>
                        <NavbarLink
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact={true}
                        offset={-80}
                         to='contact'>Contacto</NavbarLink>
                    </NavbarItem>
                </NavbarMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
