import styled, { css } from "styled-components";

export const StyledPopup = styled.div`
  min-height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 20px;
  margin: 15px 0px;

  ${({ color }) =>
    color &&
    css`
      color: ${color};
    `}
`;
