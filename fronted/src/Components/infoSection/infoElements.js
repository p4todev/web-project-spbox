import styled from "styled-components";

export const InfoContainer = styled.div` 
    color : #fff;
    background: ${({BlueBg}) => (BlueBg ? '#f9f9f9' : '#1D3557')};
    @media screen and (max-width : 768px){
        padding : 100px 0;
    }
    margin : 0;

`

export const InfoWrapper = styled.div` 
    display : grid;
    z-index: 1;
    height : calc(100vh + 20px);
    width :100%;
    max-width : 1100px;
    margin-right : auto;
    margin-left : auto;
    padding : 0 24px;
    justify-content : center;
`

export const InfoRow = styled.div` 
    display : grid;
    grid-auto-colums : minmax(auto, 3fr);
    align-items : center;
    grid-template-areas : ${({ImgStart}) => (ImgStart ? `'col2 col1'` : `'col1 col2'`)};
    @media screen and (max-width : 768px){
        grid-template-areas : ${({ImgStart}) => (ImgStart ? `'col1 col1' 'col2 col2'` : `'col1 col1' 'col2 col2'`)};
    }
`

export const Column1 = styled.div`
    width : 100%;
    margin : 0 60px 15px 0;
    padding : 0 15px;
    grid-area : col1;
` 
export const Column2 = styled.div`
    display : flex;
    margin-bottom : 15px;
    justify-content: flex-end;
    padding : 0 15px;
    grid-area : col2;
` 

export const TextWrapper = styled.div` 
    max-width : 540px;
    padding-top : 0 ;
    padding-bottom : 60px;

`


export const Title = styled.h1`
    margin-bottom : 24px;
    font-size:  48px;
    line-height: 1.1;
    font-weight: 600;
    color : ${({DarkText})=>( DarkText ? '#f7f8fa' : '#010606')};
    @media screen and (max-width : 480px){
        font-size : 32px; 
    } 
`

export const Subtitle = styled.p`
    max-width : 440px;
    margin : 0 0 30px 0;
    font-size : 18px;
    line-height: 23px;
    color : ${({DarkText}) => ( DarkText ? '#fff' : '#010606' )};
`


export const ImgWrap = styled.div`
    max-width : 500px;
    height : 100%;
` 

export const Img = styled.img`
    width : 100%;
    margin : 0 0 10px 0;
    padding-right : 0;
`