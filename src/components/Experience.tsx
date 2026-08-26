function Experience() {
  return (
    <section className="section container" id="experience">
      <div className="section__header">
        <span className="section__number">03</span>
        <span className="section__label">EXPERIENCE</span>
      </div>

      <div className="experience">
        <article className="experience__item">
          <div className="experience__period">
            2026 — PRESENT
          </div>

          <div className="experience__content">
            <h3>Data Engineer</h3>

            <span className="experience__company">
              SEEDUC-RJ
            </span>

            <p>
              Building and maintaining ETL workflows,
              improving data pipelines and supporting
              analytics solutions.
            </p>

            <div className="experience__technologies">
              <span>Python</span>
              <span>SQL</span>
              <span>Airflow</span>
              <span>Power BI</span>
            </div>
          </div>
        </article>

        <article className="experience__item">
          <div className="experience__period">
            2022 - 2025
          </div>

          <div className="experience__content">
            <h3>Software Engineer Fullstack</h3>

            <span className="experience__company">
                DRIC Software
            </span>

            <p>
              Software development experience focused on
              backend systems, APIs and database-driven
              applications.
            </p>

            <div className="experience__technologies">
              <span>Python</span>
              <span>Flask</span>
              <span>SQL</span>
              <span>React</span>
              <span>Linux</span>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Experience;