import { BrowserRouter, Routes, Route } from "react-router";
import "./App.css";
import { Footer } from "./Components/Footer/Footer";
import { Navbar } from "./Components/Header/Navbar";
import { Home } from "./Pages/Home/Home";
import { About } from "./Pages/About/About";
import { Tour } from "./Components/Tour/Tour";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/tour/:id" element={<Tour />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
