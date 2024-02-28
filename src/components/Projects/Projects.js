
import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { Projectcard } from "../Cards/Projectcard";
import { projects } from "../../Data/constants";

const Container = styled.div`
background: linerar-gradient(
    343.07deg,
    rgba(132, 59, 206, 0.06) 5.17%,
    rgba(132, 59, 206, 0) 64.83%,
);
display: flex;
flex-direction: column;
justify-content: center;
position: relative;
z-index: 1;
align-items: center;
`;

const Wrapper = styled.div`
max-width: 1350px;
position: relative;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
width: 100%;
gap: 12px;
padding: 10px 0px 100px 0;
`;

const Title = styled.div`
font-size: 42px;
font-weight: 600;
text-align: center;
margin-top:12px;
color: ${({theme}) => theme.text_primary};
@media screen and (max-width: 768px){
    margin-top: 12px;
    font-size: 32px;
}
`;

const Desc = styled.div`
font-size: 18px;
max-width: 600px;
text-align: center;
color: ${({theme}) =>theme.text_secondary};
@media screen and (max-width: 768px){
    font-size: 16px;
}
`;

const ToggleGroup = styled.div`
display: flex;
border: 1.5px solid ${({theme}) => theme.primary};
color:${({theme}) => theme.primary};
font-size: 16px;
border-radius: 12px;
font-weight: 500;
margin: 22px 0;
@media (max-width: 768px){
    font-size: 12px;
}
`;

const ToggleButton =styled.div`
padding: 8px 18px;
cursor: pointer;
border-radius: 6px;
${({active, theme})=>
active && 
`background-color: ${theme.primary+20};`
}
&:hover {
    background-color: ${({theme})=> theme.primary + 8};
}
@media (max-width: 768px) {
    padding: 6px 8px;
    border-radius: 4px;
}
`;

const Devider = styled.div`
width: 1.5px;
background-color: ${({theme}) => theme.primary};
`;

const CardContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
gap: 28px;
padding-bottom: 20px;
`;

const Projects =() => {
    const[toggle, setToggle] = useState("all")
    return (
        <Container id="projects">
            <Wrapper>
                <Title>Projects</Title>
                <Desc>
                    i have worked on a wide range of projects. From web application to android apps. Here are some of my projects. 
                </Desc>
                <ToggleGroup>
                    {toggle === "all" ?
                        (<ToggleButton active value="all" onClick={()=>setToggle("all")}>
                            All
                            </ToggleButton>):
                        (<ToggleButton value="all" onClick={()=>setToggle("all")}>
                            All</ToggleButton>)
                    }
                    <Devider />
                    {toggle === "web app" ? 
                        (<ToggleButton active onClick={()=>setToggle("web app")} >
                            Web App's
                        </ToggleButton>) :
                        (<ToggleButton onClick={()=>setToggle("web app")} >
                            Web App's
                            </ToggleButton>)
                    }
                    <Devider />
                    {toggle === "reactjs" ?
                        (<ToggleButton active onClick={()=>setToggle("reactjs")}>
                            ReactJs
                        </ToggleButton>):
                        (<ToggleButton onClick={()=>setToggle("reactjs")}>
                            ReactJs
                        </ToggleButton>)
                    }
                </ToggleGroup>
                <CardContainer>
                    {toggle === "all"  && projects.map((project)=>
                        <Projectcard project = {project} />
                    )}
                    {projects.filter((item)=> item.category === toggle).map((project)=>
                    (<Projectcard project={project} />
                    ))}
                </CardContainer>
            </Wrapper>
        </Container>
    );
};

export default Projects;