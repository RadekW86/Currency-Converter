import Section from "./Section";
import Header from "./Header";
import Form from "./Form";
import ThemeChoice from "./Theme";
import Footer from "./Footer";
import Clock from "./Clock";
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
