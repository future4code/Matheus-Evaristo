import styled from "styled-components";

export const CharCard = styled.div`
  border: 1px solid black;
  padding: 10px;
  margin: 10px;
  width: 300px;
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
