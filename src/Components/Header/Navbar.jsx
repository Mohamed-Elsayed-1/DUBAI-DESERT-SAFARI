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
import { NavLink } from "react-router";
import { Modal } from "../ui/Modal";
export const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [opName, setOpName] = useState("");
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
            <NavLink
              onClick={() => {
                setToggle((prev) => !prev);
              }}
              to="/"
            >
              <FaHome />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => {
                setToggle((prev) => !prev);
              }}
              to="/about"
            >
              <BsBank2 />
              About
            </NavLink>
          </li>
          <li>
            <a
              onClick={() => {
                setOpenModal(true);
                setOpName("login");
                setToggle((prev) => !prev);
              }}
            >
              <IoLogInSharp />
              Login
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                setToggle((prev) => !prev);
                setOpenModal(true);
                setOpName("register");
              }}
            >
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
      <Modal
        openModal={openModal}
        setOpenModal={setOpenModal}
        opName={opName}
        setOpName={setOpName}
      />
    </header>
  );
};
