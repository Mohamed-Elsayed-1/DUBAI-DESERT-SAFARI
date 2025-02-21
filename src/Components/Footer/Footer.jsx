import { FaInstagram, FaFacebook } from "react-icons/fa6";
import { FaTwitter, FaLinkedin } from "react-icons/fa";

import "./Footer.css";
export const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-item">
          <h3 className="footer-item-title">Support</h3>
          <ul className="footer-item-list">
            <li>
              <a>Contact</a>
            </li>
            <li>
              <a>Legel Notice</a>
            </li>
            <li>
              <a>Privacy Police</a>
            </li>
            <li>
              <a>General Item</a>
            </li>
            <li>
              <a>Sitemap</a>
            </li>
          </ul>
        </div>
        <div className="footer-item">
          <h3 className="footer-item-title">Company</h3>
          <ul className="footer-item-list">
            <li>
              <a>About Us</a>
            </li>
            <li>
              <a>Careers</a>
            </li>
            <li>
              <a>Blog</a>
            </li>
            <li>
              <a>Press</a>
            </li>
            <li>
              <a>Gift Cards</a>
            </li>
            <li>
              <a>Magazine</a>
            </li>
            <li>
              <a>Travel Giudes</a>
            </li>
          </ul>
        </div>
        <div className="footer-item">
          <h3 className="footer-item-title">Work With Us</h3>
          <ul className="footer-item-list">
            <li>
              <a>Become a Supplier</a>
            </li>
            <li>
              <a>Become a Affiliate Partner</a>
            </li>
          </ul>
          <div className="footer-icon">
            <FaInstagram />
            <FaFacebook />
            <FaTwitter />
            <FaLinkedin />
          </div>
        </div>
      </div>
    </footer>
  );
};
