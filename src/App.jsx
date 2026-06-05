import Navbar from "./components/Navbar";
import Hero from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Shuriken from "./assets/shuriken.svg";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <img src={Shuriken} alt="shuriken" style={{ width: "200px" }} />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}
export default App;
