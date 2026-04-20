import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero__content">
        <div className="hero__text">
          <p className="hero__greeting">Hello, I'm</p>
          <h1 className="hero__name">Chaitanya Joglekar</h1>
          <p className="hero__title">
            Senior Software Engineer
            <span className="hero__separator"> | </span>
            AI Technology &amp; Engineering
          </p>
          <p className="hero__subtitle">
            Designing multimodal RAG pipelines, agentic AI workflows, and enterprise
            automation systems at Dell Technologies. From AI-native SDLC to
            GPU-optimised retrieval services — turning research into production-ready solutions.
          </p>
          <div className="hero__cta">
            <a href="#contact" className="btn btn--primary">Get in Touch</a>
            <a href="#experience" className="btn btn--outline">View My Work</a>
          </div>
          <div className="hero__socials">
            <a href="https://www.linkedin.com/in/chaitanya257" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="https://github.com/chaitu25" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="mailto:chaitanyajoglekar2@gmail.com" aria-label="Email">
              <FaEnvelope />
            </a>
          </div>
        </div>
        <div className="hero__image">
          <div className="hero__image-placeholder">
            {/* Replace the content below with: <img src="your-photo.jpg" alt="Chaitanya Joglekar" /> */}
            <span className="hero__initials">CJ</span>
          </div>
        </div>
      </div>
    </section>
  )
}
