import Section from "./Section";
import Header from "./Header";
import Form from "./Form";
import Footer from "./Footer";

function App() {
  return (
    <>
      <Section>
        <Header title={"Currency exchange calculator"} />
      </Section>
      <Section>
        <Form />
      </Section>
      <Section>
        <Footer />
      </Section>
    </>
  );
}

export default App;
