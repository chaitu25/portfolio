import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa'

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <h2 className="section__title">Let's Connect</h2>
        <p className="contact__text">
          I'm always open to discussing new opportunities, interesting projects,
          or collaborations in AI and software engineering. Feel free to reach out.
        </p>
        <div className="contact__links">
          <a
            href="mailto:chaitanyajoglekar2@gmail.com"
            className="contact__card"
          >
            <FaEnvelope className="contact__icon" />
            <span className="contact__label">Email</span>
            <span className="contact__value">chaitanyajoglekar2@gmail.com</span>
          </a>
          <a
            href="https://www.linkedin.com/in/chaitanya257"
            target="_blank"
            rel="noopener noreferrer"
            className="contact__card"
          >
            <FaLinkedin className="contact__icon" />
            <span className="contact__label">LinkedIn</span>
            <span className="contact__value">chaitanya257</span>
          </a>
          <a
            href="https://github.com/chaitu25"
            target="_blank"
            rel="noopener noreferrer"
            className="contact__card"
          >
            <FaGithub className="contact__icon" />
            <span className="contact__label">GitHub</span>
            <span className="contact__value">chaitu25</span>
          </a>
        </div>
      </div>
    </section>
  )
}
