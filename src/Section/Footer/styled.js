import styled from "styled-components";

export const StyledFooter = styled.footer`
  font-size: 12px;
  color: #555;
`;

export const StyledIcon = styled.img`
  transition: 0.3s;

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    border: 2px solid black;
  }
`;
