import { Link } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <h2>Aarambha Kitchen</h2>

      <div
        className="mobile-menu"
        onClick={() => setOpen(!open)}
      >
        ☰
      </div>

      <nav className={`nav-links ${open ? "open" : ""}`}>
        <Link to="/" onClick={() => setOpen(false)}>Home</Link>
        <Link to="/about" onClick={() => setOpen(false)}>About</Link>
        <Link to="/services" onClick={() => setOpen(false)}>Services</Link>
        <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
      </nav>
    </header>
  );
}
