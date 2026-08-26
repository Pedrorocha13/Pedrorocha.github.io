const stack = [
  {
    category: "CORE",
    technologies: [
      "Python",
      "SQL",
    ],
  },
  {
    category: "DATA",
    technologies: [
      "Apache Airflow",
      "Apache Spark",
      "Pandas",
    ],
  },
  {
    category: "STORAGE",
    technologies: [
      "PostgreSQL",
      "SQL Server",
      "MinIO",
    ],
  },
  {
    category: "PLATFORM",
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
        {stack.map((group) => (
          <div className="stack__group" key={group.category}>
            <h3>{group.category}</h3>

            <ul>
              {group.technologies.map((technology) => (
                <li key={technology}>
                  {technology}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TechStack;