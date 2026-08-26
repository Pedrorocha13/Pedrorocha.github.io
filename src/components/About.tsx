function About() {
  return (
    <section className="section container" id="about">
      <div className="section__header">
        <span className="section__number">01</span>
        <span className="section__label">ABOUT</span>
      </div>

      <div className="about__grid">
        <h2 className="section__title">
          Software engineering
          <br />
          meets data engineering.
        </h2>

        <div className="about__content">
          <p>
            I build and maintain data pipelines, automate data workflows
            and transform raw information into reliable systems for
            analytics and decision-making.
          </p>

          <p>
            My background in software engineering helps me approach
            data problems with a strong focus on architecture,
            maintainability and automation.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;