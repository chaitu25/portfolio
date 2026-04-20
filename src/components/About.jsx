import { FaBriefcase, FaGraduationCap, FaMapMarkerAlt } from 'react-icons/fa'

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <h2 className="section__title">About Me</h2>
        <div className="about__content">
          <p className="about__text">
            I am a technology enthusiast with a deep-rooted passion for computer programming
            and machine learning. With over <strong>7 years of professional experience</strong>,
            my expertise bridges the worlds of software engineering and artificial intelligence —
            from architecting enterprise-grade banking platforms to building multimodal
            RAG pipelines and agentic AI systems.
          </p>
          <p className="about__text">
            At <strong>Dell Technologies</strong>, I work within the AI Technology
            &amp; Engineering division where I lead proof-of-concept initiatives that span
            multimodal retrieval-augmented generation, AI-native software development lifecycles,
            and automated vulnerability remediation platforms. My work involves deploying
            transformer-based embedding models on GPU infrastructure, orchestrating
            multi-agent workflows with LangChain and LangGraph, and building containerised
            microservices that bring AI research from prototype to production.
          </p>
          <div className="about__highlights">
            <div className="about__highlight">
              <FaBriefcase className="about__highlight-icon" />
              <div>
                <strong>7+ Years</strong>
                <span>Professional Experience</span>
              </div>
            </div>
            <div className="about__highlight">
              <FaGraduationCap className="about__highlight-icon" />
              <div>
                <strong>M.Sc. Computer Science</strong>
                <span>Trinity College Dublin</span>
              </div>
            </div>
            <div className="about__highlight">
              <FaMapMarkerAlt className="about__highlight-icon" />
              <div>
                <strong>Dublin, Ireland</strong>
                <span>Current Location</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
