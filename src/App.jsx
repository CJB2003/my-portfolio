import Navbar from "./components/Navbar";
import Hero from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ShurikenSection from "./components/ShurikenSection";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <ShurikenSection />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}
export default App;
