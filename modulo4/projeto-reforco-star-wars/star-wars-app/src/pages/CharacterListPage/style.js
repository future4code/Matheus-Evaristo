import styled from "styled-components";

export const CharCard = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  margin: 10px;
  width: 180px;
  height: 240px;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  font-weight: 500;
  
  &:hover {
    cursor: pointer;
    background-color: lightblue;
  }
`;

export const FlexRow = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 200px);
  grid-template-rows: repeat(5, 300px);
  justify-content: center ;
`

export const BackGround = styled.div `
  background-color: black;
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
   
`
export const H1x = styled.div `
display: flex;
justify-content: center;
color: #FFE81F;
font-family: Georgia, 'Times New Roman', Times, serif;

`
