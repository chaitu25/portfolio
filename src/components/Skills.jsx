export default function Skills() {
  const categories = [
    {
      title: 'AI & Machine Learning',
      skills: [
        'Large Language Models (LLMs)',
        'AI Agents & Agentic Workflows',
        'Retrieval-Augmented Generation (RAG)',
        'Multimodal Embeddings (ColPali)',
        'Transformers & Attention Mechanisms',
        'Natural Language Processing',
        'Model Evaluation & Benchmarking',
        'Edge AI Deployment',
      ],
    },
    {
      title: 'Frameworks & Tools',
      skills: [
        'LangChain / LangGraph',
        'FastAPI',
        'Model Context Protocol (MCP)',
        'Docker / Kubernetes',
        'Conductor (Workflow Orchestration)',
        'Ansible',
        'OpenWebUI',
        'PyTorch / TensorFlow',
      ],
    },
    {
      title: 'Languages & Platforms',
      skills: [
        'Python',
        'Java',
        'JavaScript / TypeScript',
        'Go',
        'CUDA / GPU Computing',
        'vSphere / VMware',
        'MongoDB',
        'React',
      ],
    },
    {
      title: 'Architecture & Engineering',
      skills: [
        'Microservices Design',
        'RESTful API Architecture',
        'Containerisation & Deployment',
        'System Design & HLD',
        'OAuth 2.0 / OpenID Connect',
        'CI/CD & DevOps',
        'Open Banking APIs',
        'Enterprise Platform Integration',
      ],
    },
  ]

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <h2 className="section__title">Skills &amp; Expertise</h2>
        <div className="skills__grid">
          {categories.map((cat, i) => (
            <div key={i} className="skills__category">
              <h3 className="skills__category-title">{cat.title}</h3>
              <div className="skills__tags">
                {cat.skills.map((skill, j) => (
                  <span key={j} className="skills__tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
