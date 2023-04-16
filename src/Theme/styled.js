import styled, { css } from "styled-components";

export const StyledList = styled.ul`
  list-style-type: none;
  padding-left: 0;
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: space-evenly;
  margin: 0;
`;

export const StyledInput = styled.input`
  margin-left: 0;
  margin-right: 5px;
`;

export const StyledLabel = styled.label`
  font-weight: 700;
  border: 1px solid #222;
  border-radius: 10px;
  padding: 5px;

  ${({ backgroundColor }) =>
    backgroundColor &&
    css`
      background-color: ${backgroundColor};
    `}

  ${({ color }) =>
    color &&
    css`
      color: ${color};
    `}
`;

export const StyledHeading = styled.h2`
  color: #555;
  margin: 0;
  margin-bottom: 10px;
  font-size: 18px;
`;
