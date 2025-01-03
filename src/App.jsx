import "./App.css";
import { Navbar } from "./Components/Header/Navbar";
import { Hero } from "./Components/Hero/Hero";
import { Services } from "./Components/Services/Services";
import { Tours } from "./Components/Tours/Tours";
function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services/>
        <Tours/>
      </main>
    </>
  );
}

export default App;
