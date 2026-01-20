import React from "react";

import Hero from "./components/Hero";
import PainPoints from "./components/PainPoints";
import About from "./components/About";
import AutomationExamples from "./components/AutomationExamples";
import Services from "./components/Services";
import Process from "./components/Process";
import Audience from "./components/Audience";
import ContactForm from "./components/ContactForm";

function App() {
  return (
    <>
      <Hero />
      <PainPoints />
      <About />
      <AutomationExamples />
      <Services />
      <Process />
      <Audience />
      <ContactForm />
    </>
  );
}

export default App;
