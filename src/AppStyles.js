import styled from "styled-components";

export const NovaDiv = styled.div`
  border: 2px solid green;
  height: 500px;

  > p {
    font-size: 50px;
  }

  & p + p {
    font-size: 30px;
    font-weight: bold;
  }
`;
