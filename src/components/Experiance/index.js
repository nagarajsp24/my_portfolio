
import React from "react";
import styled from "styled-components";

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
position: relative;
z-index: 1;
align-items: center;
padding: 40px 0px 80px 0px;
@media (max-width: 960px){
    padding: 0px;
}
`;

const Wrapper = styled.div`
max-width: 1100px;
position: relative;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
width: 100%;
gap: 12px;
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

const Desc2 = styled.div`
font-size: 16px;
max-width: 600px;
text-align: center;
color: ${({theme}) =>theme.primary};
@media screen and (max-width: 768px){
    font-size: 14px;
}
`;

const Experiance = () =>{
    return (
        <Container>
            <Wrapper>
                <Title>Experience</Title>
                <Desc>Here are some of my Projects</Desc>
                <Desc2>
                <p>Passionate and eager to embark on a journey in the world of web development,
                    I am currently awaiting opportunities to gain valuable experience and contribute to exciting projects. 
                    Ready to learn, grow, and build an impressive portfolio from scratch.</p>
                </Desc2>
            </Wrapper>
        </Container>
    )
}

export default Experiance;