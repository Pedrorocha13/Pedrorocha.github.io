function About() {
  return (
    <section className="section container" id="about">
      <div className="section__header">
        <span className="section__number">01</span>
        <span className="section__label">ABOUT</span>
      </div>

      <div className="about">
        <div className="about__headline">
          <h2 className="section__title">
            Software engineering
            <br />
            meets data engineering.
          </h2>
        </div>

        <div className="about__content">
          <p className="about__lead">
            I build data solutions with a software engineering mindset.
          </p>

          <p>
            My work focuses on designing and maintaining data pipelines,
            automating workflows and transforming raw information into
            reliable systems for analytics and decision-making.
          </p>

          <p>
            I enjoy working across the entire data lifecycle — from APIs and
            ingestion to processing, storage, orchestration and analytics.
          </p>

          <div className="about__focus">
            <span>PIPELINES</span>
            <span>DATA PLATFORMS</span>
            <span>AUTOMATION</span>
            <span>ANALYTICS</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;