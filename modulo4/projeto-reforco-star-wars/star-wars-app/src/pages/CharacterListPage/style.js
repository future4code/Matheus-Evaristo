import styled from "styled-components";
import fundo from '../../assets/background.jpg'

export const CharCard = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 3px solid orange;
  margin: 10px;
  width: 182px;
  height: 240px;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  
  
  &:hover {
    cursor: pointer;
    background-color: lightblue;
  }
`;

export const PlanetCard = styled.div`
  color: orange;
  border: 1px solid #FFE81F;
  padding: 10px;
  margin: 10px;
  width: 90px;
  display: flex;
  background-color: black;
  justify-content: center;
  &:hover {
    cursor: pointer;
    background-color: lightblue;

  }
`;

export const FlexRow = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 200px);
  grid-template-rows: repeat(2, 300px);
  justify-content: center ;
`
export const FlexRowPlanetas = styled.div`
   display: grid;
  grid-template-columns: repeat(5, 100px);
  grid-template-rows: repeat(2, 70px);
  justify-content: center  ;
`

export const BackGround = styled.div`
 
  
  background-image: url(${fundo}); 
  background-size: cover; 
  display: flex;
  flex-direction: column;
  justify-content: center; 
  
`

export const LogoContainer = styled.div `
  display: flex;
  justify-content: center;
  
 
`
export const LogoImage = styled.img `
    width: 70vw;
    max-width: 350px;
    height: 300px;
   
`
export const H1x = styled.div `
display: flex;
justify-content: center;
color: #FFE81F;
font-family: Georgia, 'Times New Roman', Times, serif;

`

export const Jutify = styled.div `
display: flex;
flex-direction: column;
justify-content: center;
`