import React,{useState} from 'react'
import Carousel from '../Components/Carousel';
import Navbar from '../Components/Navbar'
import SideBar from '../Components/Sidebar'
import InfoSection  from '../Components/infoSection';
import {quienesSomos} from '../Components/infoSection/data'
import Servicios from '../Components/serviceSection'
import Footer from '../Components/footer';
import Projects from '../Components/projects';
import Form from '../Components/Form';

const Home = () => {

    const [isOpen,setIsOpen] = useState(false);

    const toggle = ()=>{
        setIsOpen(!isOpen);
    }

    return (
        <>  
            <SideBar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <Carousel />
            <InfoSection {...quienesSomos}/>
            <Servicios/>
            <Projects/>
            <Form />
            <Footer/>

            
        </>
    )
}

export default Home
