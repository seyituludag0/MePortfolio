import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Services from "./components/Services";
import Sidebar from "./components/Sidebar";
import "semantic-ui-css/semantic.min.css";

function App() {
  return (
    <div>
      <Sidebar />
      <Home />
      <About />
      <Resume />
      <Projects />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
