function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container contact__content">
        <div className="section__header section__header--light">
          <span className="section__number">05</span>
          <span className="section__label">CONTACT</span>
        </div>

        <div className="contact__grid">
          <h2>
            Let's build something
            <br />
            with data.
          </h2>

          <div className="contact__links">
            <a
              href="https://github.com/Pedrorocha13"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>

            <a
              href="https://linkedin.com/in/pedro-rocha-de-jesus-286b481a1/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>

            <a href="mailto:pedrorochadejesus.70@gmail.com">
              Email ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;