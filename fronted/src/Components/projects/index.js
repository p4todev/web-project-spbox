import React,{useState,useEffect} from 'react'
import axios from 'axios';
import{
    ProjectsContainer,
    ProjectsTitleContainer,
    Title,
    ProjectsDisplay,
    Item,
    ProjectsBtn,
    Btn,
    ItemContent,
    ItemTitle,
    ItemDate,
    ItenDescrip,
    ItemDescrip,
    ItemBtn
} from './proyectsElements'

//axios
const api = axios.create({
    baseURL : 'http://localhost:3001/api/proyectos'
});

const Projects = props => {

    const [proyectos, setProject] = useState([]);
    const [visible, setVisible] = useState(8);

    const showMoreProjects = () => {
        setVisible(preValue => preValue + 8);
    };

    useEffect(()=>{
        consulta();
      },[]);

    const consulta = () => {
        api.get('/')
        .then((res)=>{
          setProject((res.data));
        })
        .catch(e=>console.log(e));
      }
    
    return (
        <>
            <ProjectsContainer id="projects">
                <ProjectsTitleContainer>
                    <Title>Proyectos</Title>
                </ProjectsTitleContainer>
                <ProjectsDisplay>
                {proyectos.slice(0,visible).map((proyecto)=>{
                    return(
                        <>
                        <Item className="projects--item">
                            <ItemContent>
                                <ItemTitle>{proyecto.nombreCliente}</ItemTitle>
                                <ItemDate>{proyecto.fechaEjecucion}</ItemDate>
                                <ItemDescrip>{proyecto.resumen}</ItemDescrip>
                                <ItemBtn id={proyecto._id}>Conocer</ItemBtn>
                            </ItemContent>
                        </Item>
                        </>
                        );
                    }
                )}
                </ProjectsDisplay>
                <ProjectsBtn>
                    <Btn onClick={showMoreProjects}>Ver mas</Btn>
                </ProjectsBtn>
            </ProjectsContainer>
        </>
    )
}

export default Projects;
