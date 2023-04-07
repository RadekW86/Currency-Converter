import React, { useState } from "react";
import Section from "./Section";
import Header from "./Header";
import Form from "./Form";
import Footer from "./Footer";
import Clock from "./Clock";

function App() {
  return (
    <>
      <Section>
        <Header title={"Currency exchange calculator"} />
      </Section>
      <Section>
        <Clock />
        <Form />
      </Section>
      <Section>
        <Footer />
      </Section>
    </>
  );
}

export default App;
