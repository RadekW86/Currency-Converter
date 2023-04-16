import { createGlobalStyle } from "styled-components";
import background from "./money_faces.jpg";

export const GlobalStyle = createGlobalStyle`
 html {
  box-sizing: border-box;
 }

 *, ::before, ::after {
  box-sizing: inherit;
 }

 body {
  max-width: 900px;
  min-height: 600px;
  margin: 0 auto;
  overflow-x: auto;
  font-size: 16px;
  line-height: 1.5;
  color: #222;
  font-family: "Roboto", sans-serif;
  background-image: url("${background}");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
 }
`;
