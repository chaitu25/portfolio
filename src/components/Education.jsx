import { FaGraduationCap } from 'react-icons/fa'

export default function Education() {
  const education = [
    {
      institution: 'Trinity College Dublin',
      degree: 'Master of Science — Computer Science',
      period: 'September 2021 — August 2022',
      location: 'Dublin, Ireland',
    },
    {
      institution: 'KJ Somaiya College of Engineering',
      degree: 'Bachelor of Engineering — Information Technology',
      period: '2014 — 2017',
      location: 'Mumbai, India',
    },
  ]

  const certifications = [
    'Generative AI with Large Language Models',
    'Neural Networks and Deep Learning',
    'Attention in Transformers: Concepts and Code in PyTorch',
    'Natural Language Processing in TensorFlow',
    'Introduction to Large Language Models',
  ]

  const publications = [
    'The Internet of Things: Governance Model',
    'Skin Cancer Detection and Classification',
  ]

  return (
    <section id="education" className="section education">
      <div className="container">
        <h2 className="section__title">Education &amp; Credentials</h2>

        <div className="education__grid">
          {/* Degrees */}
          <div className="education__degrees">
            <h3 className="education__subtitle">Academic Background</h3>
            {education.map((edu, i) => (
              <div key={i} className="education__card">
                <FaGraduationCap className="education__icon" />
                <div>
                  <h4 className="education__institution">{edu.institution}</h4>
                  <p className="education__degree">{edu.degree}</p>
                  <p className="education__meta">
                    {edu.period} &middot; {edu.location}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Certifications & Publications */}
          <div className="education__sidebar">
            <div className="education__certs">
              <h3 className="education__subtitle">Certifications</h3>
              <ul className="education__list">
                {certifications.map((cert, i) => (
                  <li key={i}>{cert}</li>
                ))}
              </ul>
            </div>

            <div className="education__pubs">
              <h3 className="education__subtitle">Publications</h3>
              <ul className="education__list">
                {publications.map((pub, i) => (
                  <li key={i}>{pub}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
