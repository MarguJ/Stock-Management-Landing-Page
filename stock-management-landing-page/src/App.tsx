import "./index.css";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <div className="bg-gray-400 min-w-screen min-h-screen">
      <header>
        <Navbar></Navbar>
      </header>
      <section id="1" className="welcome">
        <div className="bg-gray-450 min-h-screen min-w-screen">
          <img className="min-h-screen" src="../images/pasillo.jpg" />
        </div>
      </section>
      <section id="2" className="about us">
        <div className="font-[Kdam Thmor Pro] bg-red-600 min-w-screen min-h-40 text-white text-7xl flex items-center justify-center">
          ¿Quienes somos?
        </div>
      </section>
      <section id="3" className="app facts"></section>
      <section id="4" className="contact us"></section>
    </div>
  );
}

export default App;
