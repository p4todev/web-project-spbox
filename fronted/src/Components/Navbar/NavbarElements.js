import styled from 'styled-components'
import {FaBars} from 'react-icons/fa'
import {Link as LinkS} from 'react-scroll';

export const Nav = styled.nav` 
    position : sticky;
    top : 0;
    z-index : 99;
    background : #fff;
`

export const NavbarContainer = styled.div`
    display : flex;
    justify-content: space-between;
    align-items: center;
    height : 80px;
    z-index: 1;
` 

export const  NavbarLogo = styled.div` 
    margin-left : 50px;
    font-weight : bold;
    cursor : pointer;
    font-size : 18px;


`

export const Logo = styled.p`
    color : #010606;
`

export const Span = styled.span`
    color : #1D3557;
`

export const NavbarMobilIcon = styled(FaBars)`
    display: none;
    @media screen and (max-width : 768px){
        display: block;
        position : absolute;
        top : 12px;
        right : 0;
        transform : translate(-100%, 60%);
        font-size : 1.7rem;
        cursor : pointer;
        color : #010606;
    }

`

export const NavbarMenu = styled.ul` 
    display :flex;
    list-style : none;
    margin-right : 50px;

    @media screen and (max-width: 768px){
        display : none;
    }

`

export const NavbarItem = styled.li`
    height : 80px;
`

export const NavbarLink = styled(LinkS)` 
    display: flex;
    justify-content : center;
    text-decoration : none;
    outline : none;
    font-size : 16px;
    padding : 0 1rem;
    height : 100%;
    align-items : center;
    cursor : pointer;
    color : #010606;

    &:hover{
        border-bottom : 2px solid #1D3557;
        transition : all .2s ease-in;
    }


`