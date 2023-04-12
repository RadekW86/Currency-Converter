import Section from "./Section";
import Header from "./Section/Header";
import Form from "./Section/Form";
import ThemeChoice from "./Section/Theme";
import Footer from "./Section/Footer";
import Clock from "./Section/Clock";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import themes from "./themes";

function App() {
  const [theme, setTheme] = useState(themes[0]);

  return (
    <ThemeProvider theme={theme}>
      <Section>
        <Header title={"Currency exchange calculator"} />
      </Section>
      <Section>
        <Clock />
        <Form />
      </Section>
      <Section>
        <ThemeChoice theme={theme} setTheme={setTheme} />
      </Section>
      <Section>
        <Footer />
      </Section>
    </ThemeProvider>
  );
}

export default App;
