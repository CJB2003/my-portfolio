import "./Navbar.css";
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
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
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

const styles = {
  nav: {
    backgroundColor: "#333",
    color: "#fff",
    padding: "1rem",
  },
  logo: {
    fontSize: "1.5rem",
    fontWeight: "bold",
  },
  links: {
    display: "flex",
    gap: "2rem",
    listStyle: "none",
    margin: 0,
    padding: 0,
  },
  link: {
    color: "#fff",
    textDecoration: "none",
  },
};

export default Navbar;
