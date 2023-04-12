import styled from "styled-components";

export const StyledSection = styled.section`
  text-align: center;
  background-color: hsl(80, 61%, 80%);
  margin: 10px;
  padding: 20px;
  border: 2px dotted #222;
  border-radius: 30px;

  @media (max-width: 767px) {
    max-width: 350px;
  }
`;
