import styled from "styled-components";

export const StyledForm = styled.form`
  min-height: 280px;
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

export const StyledSelect = styled.select`
  width: 250px;
  height: 35px;
  text-align: center;
`;

export const StyledButton = styled.button`
  background-color: darkolivegreen;
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
