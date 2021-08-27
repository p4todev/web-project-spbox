import styled from "styled-components";
import {FaTimes} from 'react-icons/fa';
import {Link as LinkS} from 'react-scroll';

export const SidebarContainer = styled.aside`
    position : fixed;
    width : 100%;
    height: 100%;
    background : #fff;
    display : grid;
    z-index : 999;
    opacity : 100%;
    align-items : center;
    top : 0;
    left : 0;
    transition : .3s ease-in-out;
    opacity : ${({ isOpen }) => (isOpen ? '100%' : '0')};
    top : ${({isOpen})=>( isOpen ? '0' : '-100%')};

    ` 

export const SidebarIcon = styled.div` 
    position : absolute;
    top : 28px;
    right : 28px;
    font-size : 30px;
    cursor : pointer;
    outline : none;
`

export const CloseIcon = styled(FaTimes)`
    color : #010606;
`

export const SidebarContent = styled.div`
    color : #010606;
` 

export const SidebarMenu = styled.ul`
    display : grid;
    grid-template-columns : 1fr;
    grid-template-rows : repeat(5,70px);
    text-align : center;

    @media screen and (max-width : 480px){
        grid-template-rows : repeat(5,60px);

    }
` 

export const SidebarLink = styled(LinkS)`
    display : flex;
    cursor : pointer;
    align-items : center;
    justify-content : center;
    text-decoration : none;
    list-style : none;
`