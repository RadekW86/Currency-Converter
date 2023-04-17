import { useState } from "react";
import Section from "./Section";
import Header from "./Header";
import Clock from "./Clock";
import EssentialContent from "./EssentialContent";
import { useImportedCurrencies } from "./useImportedCurrencies";
import ThemeChoice from "./Theme";
import { ThemeProvider } from "styled-components";
import themes from "./themes";
import Footer from "./Footer";

function App() {
  const [theme, setTheme] = useState(themes[0]);
  const { status } = useImportedCurrencies();

  return (
    <ThemeProvider theme={theme}>
      <Section>
        <Header title={"Currency exchange calculator"} />
      </Section>
      <Section>
        <Clock />
        <EssentialContent status={status} />
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
