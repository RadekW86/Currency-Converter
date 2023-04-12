import React, { useState } from "react";
import Section from "./Section";
import Header from "./Section/Header";
import Form from "./Section/Form";
import Footer from "./Section/Footer";
import Clock from "./Section/Clock";

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
