import styled from "styled-components";

export const CardBox = styled.div`
  text-align: justify;
  border: 1px solid black;
  padding: 10px;
  margin: 10px;
  width: 400px;
  &:hover {
    cursor: pointer;
    background-color: lightblue;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
