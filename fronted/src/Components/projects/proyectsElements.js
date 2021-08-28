import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'

export const ProjectsContainer = styled.section`
    width : 100%;
`

export const ProjectsTitleContainer = styled.div`
    text-align: center;
    margin: 50px 0;
    font-size : 25px;
`

export const Title = styled.h1`
    color : #010606;
`

export const ProjectsDisplay = styled.div`
    width : 70%;
    margin : 0 auto;
    display : grid;
    grid-template-columns : 1fr 1fr 1fr;
    padding : .6rem;
    overflow: hidden;
    gap : 1rem;

    @media screen and (max-width : 1024px){
        grid-template-columns : repeat(auto-fill,minmax(15rem, 1fr));
    }

`

export const Item = styled.div`
    height : 250px;
    
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    transition : all .2s ease-in;
`

export const ProjectsBtn = styled.div`
display : flex;
justify-content : center;
align-items : center;
margin : 20px 0; 

`

export const Btn = styled(LinkR)`
    background : #1D3557;
    text-decoration : none;
    color : #fff;
    padding : 15px 20px;
    border : 1px solid #1D3557;

    &:hover{
        background : #fff;
        color : #1D3557;
        transition : all .2s ease-in;
    }
`
export const ItemContent = styled.div` 
    margin : 1rem;
    height : calc(100% - 2rem);
    position : relative;

`

export const ItemTitle = styled.h4` 
    text-transform: capitalize;
    font-size : 18px;
    top : 40px;
    position : absolute;
`

export const ItemDate = styled.p` 
    top : 63px;
    font-size :11px;
`

export const ItemDescrip = styled.p`
    position: absolute;
    bottom : 86px;
`

export const ItemBtn = styled(LinkR)`
    padding : .6rem;
    width : 150px;
    background : #fff; 
    text-align: center;
    color : #1D3557;
    position : absolute;
    left : 0;
    right : 0;
    margin : 0 auto;
    bottom : 0;
    border : 1px solid #1D3557;

    &:hover{
        color: #fff;
        background : #1D3557;
        transition : all .2s ease-in;
    }

`


