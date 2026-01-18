// src/App.jsx  (примерный фрагмент)
import React from "react";
import Hero from "./components/Hero";        // уже есть в проекте. :contentReference[oaicite:2]{index=2}
import PainPoints from "./components/PainPoints"; // :contentReference[oaicite:3]{index=3}
import AutomationExamples from "./components/AutomationExamples"; // новый
import Services from "./components/Services";  // :contentReference[oaicite:4]{index=4}
import Process from "./components/Process";    // :contentReference[oaicite:5]{index=5}
import Audience from "./components/Audience";  // :contentReference[oaicite:6]{index=6}
import ContactForm from "./components/ContactForm"; // :contentReference[oaicite:7]{index=7}

function App() {
  return (
    <>
      <Hero />
      <PainPoints />
      <AutomationExamples />  {/* <-- новая вставка */}
      <Services />
      <Process />
      <Audience />
      <ContactForm />
    </>
  );
}

export default App;

