function Hero() {
  return (
    <section className="hero container" id="home">
      <div className="hero__content">
        <span className="eyebrow">
          PEDRO ROCHA — DATA ENGINEER
        </span>

        <h1 className="hero__title">
          I build data systems
          <br />
          that make sense.
        </h1>

        <p className="hero__description">
          Building reliable data pipelines, scalable data platforms
          and analytics systems.
        </p>

        <div className="hero__actions">
          <a className="button button--primary" href="#projects">
            View projects
          </a>

          <a
            className="button button--link"
            href="https://github.com/Pedrorocha13"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>
        </div>
      </div>

      <div className="hero__visual" aria-label="Data pipeline">
        <div className="hero__visual-inner">
          <span className="pipeline__label">
            DATA FLOW / 001
          </span>

          <div className="pipeline">
            <div className="pipeline__node pipeline__node--1">
              <span>01</span>
              API
            </div>

            <div className="pipeline__line pipeline__line--1" />

            <div className="pipeline__node pipeline__node--2">
              <span>02</span>
              Ingestion
            </div>

            <div className="pipeline__line pipeline__line--2" />

            <div className="pipeline__node pipeline__node--3 pipeline__node--accent">
              <span>03</span>
              Data Lake
            </div>

            <div className="pipeline__line pipeline__line--3" />

            <div className="pipeline__node pipeline__node--4">
              <span>04</span>
              Processing
            </div>

            <div className="pipeline__line pipeline__line--4" />

            <div className="pipeline__node pipeline__node--5">
              <span>05</span>
              Analytics
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;