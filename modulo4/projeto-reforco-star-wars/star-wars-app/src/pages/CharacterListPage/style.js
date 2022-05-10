import styled from "styled-components";

export const CharCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  padding: 10px;
  margin: 10px;
  width: 220px;
  &:hover {
    cursor: pointer;
    background-color: lightblue;
  }
`;

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
`
