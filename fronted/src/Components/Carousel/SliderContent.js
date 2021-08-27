import React from 'react'
import {Link} from 'react-scroll'

const SliderContent = ({activeIndex,imgSlider}) => {

    return (
        <>
            <div className='slide-container' >
            {
                imgSlider.map((slide, index) => {
                    return(            
                    <div key={index}
                    className={index === activeIndex ? "active" : "inactive"}>
                        {console.log(slide.titulo)}
                        <video src={slide.video} autoPlay loop muted/>
                        <h1>{slide.titulo}</h1>
                        <p>{slide.descrip}</p>
                        <Link
                        className='link' 
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={20}
                        to={slide.vinculo}>{slide.btnInfo}</Link>
                    </div>)
                })
            }
            
            </div>
            
        </>
    )
}



export default SliderContent
