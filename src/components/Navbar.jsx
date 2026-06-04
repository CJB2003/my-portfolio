import "../styling/Navbar.css";
import { useState, useEffect } from "react";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav id="Navbar" className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <h2 className="logo">Chris Bunny</h2>
      <ul className="links">
        <li>
          <a href="#Home" className="link">
            Home
          </a>
        </li>
        <li>
          <a href="#About" className="link">
            About
          </a>
        </li>
        <li>
          <a href="#Projects" className="link">
            Projects
          </a>
        </li>
        <li>
          <a href="#Contact" className="link">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
