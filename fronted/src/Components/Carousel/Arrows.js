import React from 'react'
import { MdKeyboardArrowLeft} from 'react-icons/md';
import {MdKeyboardArrowRight} from 'react-icons/md'

const Arrows = ({prevSlide,nextSlide}) => {
    return (
        
        <div className="arrows-container">
            <MdKeyboardArrowLeft className="prev" onClick={prevSlide}/>
            <MdKeyboardArrowRight className="next" onClick={nextSlide} />
        </div>
        
    )
}

export default Arrows
