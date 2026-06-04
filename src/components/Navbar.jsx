function Navbar() {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>Chris Bunny</h2>
      <ul style={styles.links}>
        <li>
          <a href="#Home" style={styles.link}>
            Home
          </a>
        </li>
        <li>
          <a href="#About" style={styles.link}>
            About
          </a>
        </li>
        <li>
          <a href="#Projects" style={styles.link}>
            Projects
          </a>
        </li>
        <li>
          <a href="#Contact" style={styles.link}>
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
