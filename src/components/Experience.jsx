export default function Experience() {
  const experiences = [
    {
      company: 'Dell Technologies',
      role: 'Senior Software Engineer',
      team: 'AI Technology & Engineering (OCTO)',
      period: 'November 2022 — Present',
      location: 'Ireland',
      highlights: [
        'Architected and built a multimodal RAG pipeline using the ColPali framework and NVIDIA llama-nemoretriever-colembed-3b-v1 embedding model, enabling PDF document retrieval through page-level image embeddings with a FastAPI service and GPU-optimised Docker deployment (CUDA 12.8).',
        'Led the AI-Native SDLC proof of concept — designed an end-to-end agentic workflow using LangChain and LangGraph that automates requirement classification, GitHub issue triaging, code generation, pull request creation, and deployment with human-in-the-loop review.',
        'Developed the Ansible Playbook Triage Service for an enterprise vulnerability remediation platform (RENBE), including an LLM-powered ReAct feedback agent that validates generated playbooks via dry-run execution loops.',
        'Built and containerised microservices for the RENBE automation pipeline — remediation service with Conductor workflow orchestration, non-blocking workers, vSphere VM snapshot management, and MongoDB integration.',
        'Evaluated Oracle AI platform capabilities including AI Agent frameworks, model finetuning pipelines, guardrails (content moderation, prompt injection, PII protection), and SQL tooling for agentic database interaction.',
        'Benchmarked Llama 3.2 (1B and 3B) models for edge deployment scenarios, comparing compute, latency, and accuracy against previously tested LLMs to assess suitability for resource-constrained environments.',
        'Implemented the Model Context Protocol (MCP) for seamless LLM tool integration using LangChain, with a JSON-based configuration system for managing multiple MCP server connections.',
      ],
    },
    {
      company: 'Oracle Financial Services',
      role: 'Application Developer II',
      team: 'Product Innovation Team',
      period: 'January 2021 — August 2021',
      location: 'Mumbai, India',
      highlights: [
        'Designed and implemented an NLP framework for automating service request processing in retail and corporate banking.',
        'Developed regression and clustering models using Oracle Data Mining for use cases such as optimal branch teller counter prediction.',
        'Architected cloud-native microservices for managing and consuming AI/ML models across the product suite.',
      ],
    },
    {
      company: 'Oracle Financial Services',
      role: 'Application Developer',
      team: 'Digital Banking Platform',
      period: 'August 2017 — January 2021',
      location: 'Mumbai, India',
      highlights: [
        'Developed retail and corporate payments modules for enterprise banking clients.',
        'Built a digital banking chatbot for enhanced customer self-service.',
        'Implemented custom frameworks for OAuth 2.0 and OpenID Connect security protocols.',
        'Integrated open banking standard APIs into the Oracle Digital Banking Experience Platform.',
      ],
    },
  ]

  return (
    <section id="experience" className="section experience">
      <div className="container">
        <h2 className="section__title">Professional Experience</h2>
        <div className="experience__timeline">
          {experiences.map((exp, i) => (
            <div key={i} className="experience__card">
              <div className="experience__dot" />
              <div className="experience__header">
                <div>
                  <h3 className="experience__role">{exp.role}</h3>
                  <p className="experience__company">
                    {exp.company} <span className="experience__team">— {exp.team}</span>
                  </p>
                </div>
                <div className="experience__meta">
                  <span className="experience__period">{exp.period}</span>
                  <span className="experience__location">{exp.location}</span>
                </div>
              </div>
              <ul className="experience__highlights">
                {exp.highlights.map((h, j) => (
                  <li key={j}>{h}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
