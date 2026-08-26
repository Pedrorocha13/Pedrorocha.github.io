function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container contact__container">
        <div className="section__header contact__header">
          <span className="section__number">05</span>
          <span className="section__label">CONTACT</span>
        </div>

        <div className="contact__content">
          <div className="contact__headline">
            <h2>
              Let's build something
              <br />
              with data.
            </h2>

            <p>
              Interested in data engineering, software,
              analytics or just want to talk about technology?
              Feel free to reach out.
            </p>
          </div>

          <div className="contact__links">
            <a
              href="https://github.com/Pedrorocha13"
              target="_blank"
              rel="noreferrer"
            >
              <span>GitHub</span>
              <span>↗</span>
            </a>

            <a
              href="https://linkedin.com/in/pedro-rocha-de-jesus-286b481a1/"
              target="_blank"
              rel="noreferrer"
            >
              <span>LinkedIn</span>
              <span>↗</span>
            </a>

            <a href="mailto:pedrorochadejesus.70@gmail.com">
              <span>Email</span>
              <span>↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;