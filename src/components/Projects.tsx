const projects = [
  {
    number: "01",
    title: "MeepleLake",
    description:
      "End-to-end data platform designed around a Medallion Architecture for collecting, processing and analyzing board game data.",
    architecture: [
      "API",
      "MinIO",
      "Spark",
      "Iceberg",
      "Analytics",
    ],
    technologies: [
      "Python",
      "Spark",
      "Airflow",
      "MinIO",
      "Iceberg",
    ],
    link: "#",
  },
  {
    number: "02",
    title: "MusicPulse",
    description:
      "Automated data pipeline for ingesting, transforming and storing music streaming data for analytical workloads.",
    architecture: [
      "API",
      "Airflow",
      "PostgreSQL",
      "Analytics",
    ],
    technologies: [
      "Python",
      "Airflow",
      "PostgreSQL",
      "Docker",
    ],
    link: "#",
  },
  {
    number: "03",
    title: "Weather Data Pipeline",
    description:
      "Automated ingestion and transformation pipeline built around weather API data.",
    architecture: [
      "OpenWeather",
      "Python",
      "Airflow",
      "PostgreSQL",
    ],
    technologies: [
      "Python",
      "Airflow",
      "PostgreSQL",
      "Docker",
    ],
    link: "#",
  },
];

function Projects() {
  return (
    <section className="section container" id="projects">
      <div className="section__header">
        <span className="section__number">02</span>
        <span className="section__label">SELECTED WORK</span>
      </div>

      <div className="projects">
        {projects.map((project) => (
          <article className="project" key={project.title}>
            <div className="project__number">
              {project.number}
            </div>

            <div className="project__content">
              <div className="project__heading">
                <h3>{project.title}</h3>

                <a
                  className="project__link"
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open ${project.title}`}
                >
                  ↗
                </a>
              </div>

              <p className="project__description">
                {project.description}
              </p>

              <div className="project__architecture">
                {project.architecture.map((step, index) => (
                  <span key={step}>
                    {step}

                    {index < project.architecture.length - 1 && (
                      <span className="project__arrow">→</span>
                    )}
                  </span>
                ))}
              </div>

              <div className="project__technologies">
                {project.technologies.map((technology) => (
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

export default Projects;