import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../assets/styles/GlobalStyle";
import { theme } from "../assets/styles/theme";
import { Wrapper } from "./Root.styles";
import Form from "../components/organisms/Form/Form";

function Root() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper>
        <Form />
      </Wrapper>
    </ThemeProvider>
  );
}

export default Root;
