import styled from "styled-components";

export const CharCard = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  padding: 10px;
  margin: 10px;
  width: 200px;
  &:hover {
    cursor: pointer;
    background-color: lightblue;
  }
`;
