import { Button } from "../ui/Button";
import "./Hero.css";
import { IoSearchSharp } from "react-icons/io5";
export const Hero = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="search-box">
          <div className="input-wrapper">
            <IoSearchSharp className="search-icon" />
            <input
              className="search-input"
              type="search"
              placeholder="What are you looking for ?"
            />
            <Button>Search</Button>
          </div>
        </div>
        <div className="hero-content">
          <h3>Dubai</h3>
          <h1>Desert Safaris</h1>
        </div>
      </div>
    </section>
  );
};
