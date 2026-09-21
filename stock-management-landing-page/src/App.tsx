import "./index.css";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Highlights } from "./components/Highlights";
import { HowItWorks } from "./components/HowItWorks";
import { About } from "./components/About";
import { Footer } from "./components/Footer";

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Highlights />
      <HowItWorks />
      <About />
      <Footer />
    </main>
  );
}

export default App;
