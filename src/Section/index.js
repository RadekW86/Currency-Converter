import styled from "styled-components";

const Section = styled.section`
  text-align: center;
  background-color: ${({ theme }) => theme.backgroundColor};
  margin: 10px;
  padding: 20px;
  border: 2px dotted #222;
  border-radius: 30px;

  @media (max-width: 767px) {
    max-width: 350px;
  }
`;

export default Section;