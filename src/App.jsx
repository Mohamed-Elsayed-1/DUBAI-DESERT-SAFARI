import { BrowserRouter, Routes, Route } from "react-router";
import "./App.css";
import { Footer } from "./Components/Footer/Footer";
import { Navbar } from "./Components/Header/Navbar";
import { Home } from "./Pages/Home/Home";
import { About } from "./Pages/About/About";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
