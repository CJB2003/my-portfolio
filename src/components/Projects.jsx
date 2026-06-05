import "../styling/Projects.css";

function Projects() {
  return (
    <section id="Projects" className="projects">
      <h1>Projects</h1>
      <div className="project-card">
        <h3>BNY Finance Ledger</h3>
        <p>
          A finance ledger application built with JavaFX and MySQL, allowing
          users to track their expenses and income.
        </p>
        <a href="https://github.com/CJB2003/bny-finance-ledger">
          View on GitHub
        </a>
      </div>
      <div className="project-card">
        <h3>Golden Crunch Chicken</h3>
        <p>
          A Java CLI project with a frontend website built with React that is a
          point-of-sale ordering application for a premium Korean fried chicken
          restaurant. Customers can fully customize their order — choosing their
          chicken cut, prep style, toppings, sauces, drinks, and sides — before
          checking out and receiving a timestamped receipt file.
        </p>
        <a href="https://github.com/CJB2003/golden-crunch-chicken">
          View on GitHub
        </a>
      </div>
    </section>
  );
}
export default Projects;
