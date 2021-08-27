import React from 'react'
import {
    InfoContainer,
    InfoWrapper,
    InfoRow,
    Column1,
    Column2,
    TextWrapper,
    Title,
    Subtitle,
    ImgWrap,
    Img,
    
} from './infoElements'

const HeroSection = ({
    id,
    blueBg,
    imgStart,
    darkText,
    titulo,
    descrip,
    img
}) => {
    return (
        <>
            <InfoContainer id='about' BlueBg={blueBg}>
                <InfoWrapper>
                    <InfoRow ImgStart={imgStart}>
                        <Column1>
                        <TextWrapper>
                            <Title DarkText={darkText}>{titulo}</Title>
                            <Subtitle DarkText={darkText}>{descrip}</Subtitle>
                        </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img}/>
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
            
        </>
    )
}

export default HeroSection
