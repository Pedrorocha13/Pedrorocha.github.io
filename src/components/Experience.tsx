const experiences = [
  {
    period: "2026 — PRESENT",
    role: "Data Engineer I",
    company: "SEEDUC-RJ",
    description:
      "Building and maintaining ETL workflows, improving data pipelines and supporting analytics solutions with a focus on reliability and performance.",
    technologies: [
      "Python",
      "SQL",
      "Airflow",
      "Power BI",
      "SQL Server",
    ],
  },
  {
    period: "2022 - 2026",
    role: "Software Engineer Full Stack",
    company: "DRIC Software",
    description:
      "Worked on backend systems, APIs and database-driven applications, developing a strong software engineering foundation now applied to data platforms.",
    technologies: [
      "Python",
      "Flask",
      "SQL",
      "React",
      "APIs",
      "Linux",
    ],
  },
];

function Experience() {
  return (
    <section className="section container" id="experience">
      <div className="section__header">
        <span className="section__number">03</span>
        <span className="section__label">EXPERIENCE</span>
      </div>

      <div className="experience">
        {experiences.map((experience) => (
          <article
            className="experience__item"
            key={`${experience.role}-${experience.period}`}
          >
            <div className="experience__period">
              {experience.period}
            </div>

            <div className="experience__content">
              <div className="experience__heading">
                <h3>{experience.role}</h3>

                <span>{experience.company}</span>
              </div>

              <p>{experience.description}</p>

              <div className="experience__technologies">
                {experience.technologies.map((technology) => (
                  <span key={technology}>
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Experience;