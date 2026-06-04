import "../styling/About.css";

function About() {
  return (
    <section id="About" className="about">
      <h2>About Me</h2>
      <p>
        I'm a passionate software developer with experience in both frontend and
        backend technologies.
      </p>
      <ul className="card-grid">
        <li className="card">
          <p>Proficient in Python, C++, Java, JavaScript, React, and JavaFX.</p>
        </li>
      </ul>
      <ul className="card-grid">
        <li className="card">
          <p>Experience with MySQL databases.</p>
        </li>
      </ul>
      <ul className="card-grid">
        <li className="card">
          <p>
            Strong problem-solving skills and a love for learning new
            technologies.
          </p>
        </li>
      </ul>
    </section>
  );
}
export default About;
