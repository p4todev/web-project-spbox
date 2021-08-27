import React from 'react'
import styled from 'styled-components'

const DotsContainer = styled.div`

` 
const Span = styled.span`

` 


const Dots = ({activateIndex,onclick,imgSlider}) => {
    return (
        <>
            <DotsContainer>
                {
                    imgSlider.map((slide,index)=>{
                        <Span key={index} className={`${activateIndex === index ? "dot activate-dot" : "dot"}`}
                            onClick={()=>{onclick(index)}}
                        > 
                        </Span>
                    })
                }
            </DotsContainer>
        </>
    )
}

export default Dots
