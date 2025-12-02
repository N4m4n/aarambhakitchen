import { Routes, Route } from "react-router-dom";
import Header from "./common/Header.js";
import Footer from "./common/Footer.js";
import Home from "./applicationPages/Home.js";
import About from "./applicationPages/About.js";
import Services from "./applicationPages/Services.js";
import Contact from "./applicationPages/Contact.js";

export default function App() {
  return (
    <>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}