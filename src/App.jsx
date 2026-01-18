import Hero from "./components/Hero";
import PainPoints from "./components/PainPoints";
import Audience from "./components/Audience";
import Services from "./components/Services";
import Process from "./components/Process";
import ContactForm from "./components/ContactForm";

function App() {
  return (
    <div className="bg-[#0e1411] text-white overflow-hidden">
      <Hero />
      <PainPoints />
      <Audience />
      <Services />
      <Process />
      <ContactForm />
    </div>
  );
}

export default App;
