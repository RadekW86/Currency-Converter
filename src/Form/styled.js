import styled from "styled-components";

export const StyledForm = styled.form`
  min-height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  font-weight: 700;
  margin: 15px 0px;
`;

export const StyledLabel = styled.label`
  font-weight: 700;
`;

export const StyledInput = styled.input`
  width: 250px;
  height: 35px;
  text-align: center;
`;

export const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.buttonColor};
  color: white;
  height: 40px;
  width: 150px;
  border: 2px solid white;
  outline: 2px solid black;
  border-radius: 5px;

  &:hover {
    box-shadow: 7px 7px 10px black;
  }
`;

export const StyledInfo = styled.div`
  text-align: center;
  font-weight: 100;
  font-size: 14px;
  font-family: "Courier New", Courier, monospace;
`;
