const stack = [
  {
    category: "CORE",
    description: "Languages and foundations",
    technologies: [
      "Python",
      "SQL",
    ],
  },
  {
    category: "DATA",
    description: "Processing and orchestration",
    technologies: [
      "Apache Airflow",
      "Apache Spark",
      "Pandas",
    ],
  },
  {
    category: "STORAGE",
    description: "Databases and object storage",
    technologies: [
      "PostgreSQL",
      "SQL Server",
      "MinIO",
    ],
  },
  {
    category: "PLATFORM",
    description: "Infrastructure and delivery",
    technologies: [
      "Docker",
      "Git",
      "GitHub Actions",
    ],
  },
];

function TechStack() {
  return (
    <section className="section container" id="stack">
      <div className="section__header">
        <span className="section__number">04</span>
        <span className="section__label">STACK</span>
      </div>

      <div className="stack">
        {stack.map((group, index) => (
          <article className="stack__group" key={group.category}>
            <div className="stack__heading">
              <span className="stack__number">
                0{index + 1}
              </span>

              <h3>{group.category}</h3>
            </div>

            <p className="stack__description">
              {group.description}
            </p>

            <ul className="stack__technologies">
              {group.technologies.map((technology) => (
                <li key={technology}>
                  {technology}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

export default TechStack;