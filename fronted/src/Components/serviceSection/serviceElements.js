import styled from 'styled-components';

export const ServicesContainer = styled.section`
    width: 100%;
    background : #1d3557;
`

export const ServiceWrapper = styled.div`
    position : relative;
    display : flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const TitleWrp = styled.div`
    text-align: center;
    padding: 50px 0 ;

    @media screen and (max-width : 768px){
        margin : 5px 0;
    }
    
`

export const Title = styled.h1`
    color : #fff;
    font-size : 40px;

@media screen and (max-width : 768px){
    font-size : 30px;
    }
`

export const ServicesInfo = styled.div`
    display: grid;
    justify-content: space-between;
    grid-template-columns : repeat(auto-fill,minmax(15rem,1fr));
    gap : 3rem;
    color : #fff;
    width : 57%;
    padding : 1rem;
    margin-bottom : 50px;

    @media screen and (max-width :1200px){
        width : 100%;
    }

    @media screen and (max-width :768px){
        width : 100%;
    }

`
export const Row = styled.div`
    height : 200px;
}
`

export const RowTitle = styled.h3`
    font-size : 25px;
    margin : 10px 0;
    top: 3px;

    @media screen and (max-width :768px){
        text-align: center;
    }

`

export const RowSubtitle = styled.p`

@media screen and (max-width :768px){
        text-align: center;
    }
`