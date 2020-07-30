import styled from "styled-components";

export const Container = styled.div`
  border: 2px solid red;

  > h1 {
    display: none;
  }

  @media (min-width: 800px) {
    > h1 {
      display: flex;
  }
`;
