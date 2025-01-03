import DubiLogo from "../../images/logo.png";
import { FaHome } from "react-icons/fa";
import {
  IoLogInSharp,
  IoMenuSharp,
  IoPersonAdd,
  IoCloseSharp,
} from "react-icons/io5";
import { BsBank2 } from "react-icons/bs";
import "./Navbar.css";
import { useState } from "react";
export const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <header className="header">
      <nav className="container">
        <div className="logo-content">
          <img src={DubiLogo} alt="logo" className="logo-img" />
          <div className="logo-text">
            <strong>DUBAI</strong>
            <strong>DESERT</strong>
            <strong>SAFARI</strong>
          </div>
        </div>
        <ul
          style={{
            clipPath: toggle && "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          }}
        >
          <li>
            <a onClick={()=>{setToggle(prev=>!prev)}} href="#">
              <FaHome />
              Home
            </a>
          </li>
          <li>
            <a onClick={()=>{setToggle(prev=>!prev)}} href="#">
              <BsBank2 />
              About
            </a>
          </li>
          <li>
            <a onClick={()=>{setToggle(prev=>!prev)}} href="#">
              <IoLogInSharp />
              Login
            </a>
          </li>
          <li>
            <a onClick={()=>{setToggle(prev=>!prev)}} href="#">
              <IoPersonAdd />
              Register
            </a>
          </li>
        </ul>
        <div
          className="toggle-menu"
          onClick={() => {
            setToggle((prev) => !prev);
          }}
        >
          {toggle ? <IoCloseSharp className="animate-icon" /> : <IoMenuSharp />}
        </div>
      </nav>
    </header>
  );
};
