import { Link } from "react-router-dom";
import "../styles/Header.css";

const Header = () => (
  <header className="header">
    <h1 className="logo">Aarambha Kitchen</h1>
    <nav className="nav">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/services">Services</Link>
      <Link to="/why-choose">Why Choose Us</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  </header>
);

export default Header;
