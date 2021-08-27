import React,{useState,useEffect} from 'react'
import SliderContent from './SliderContent'
import data from './data'
import Arrows from './Arrows';
import './index.css';
import { animateScroll as scroll} from 'react-scroll';


const Carousel = (props) => {
    const [activeIndex, setActiveIndex ] = useState(0);

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


    const len = data.length - 1;
    
    return (
            <div className="carousels-container">
                <SliderContent activeIndex={activeIndex} imgSlider={data}/>
                <Arrows prevSlide={()=>{setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)} }
                        nextSlide={()=>{setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)}}
                />
            </div>
        
    )
}

export default Carousel
