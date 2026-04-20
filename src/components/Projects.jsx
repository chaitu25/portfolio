import { FaGithub, FaLock } from 'react-icons/fa'

export default function Projects() {
  const corporateProjects = [
    {
      name: 'Multimodal RAG Pipeline',
      description:
        'End-to-end multimodal retrieval-augmented generation service for enterprise document search. Built with ColPali and NVIDIA llama-nemoretriever-colembed-3b-v1, serving page-level image embeddings via FastAPI on GPU-optimised Docker containers.',
      tags: ['Python', 'FastAPI', 'ColPali', 'Docker', 'CUDA'],
    },
    {
      name: 'AI-Native SDLC',
      description:
        'Agentic workflow automating the full software development lifecycle — from requirement classification and issue triaging to code generation and pull request creation using LangChain, LangGraph, and a headless coding agent sandbox deployed as Kubernetes Jobs.',
      tags: ['Python', 'LangChain', 'LangGraph', 'Kubernetes', 'Docker'],
    },
    {
      name: 'RENBE Vulnerability Remediation',
      description:
        'Enterprise-scale automated vulnerability remediation platform with LLM-powered Ansible playbook generation, Conductor workflow orchestration, ReAct feedback agents, non-blocking remediation workers, and vSphere VM lifecycle management.',
      tags: ['Python', 'Go', 'Ansible', 'Conductor', 'MongoDB'],
    },
    {
      name: 'AI Research Assistant (ARIA)',
      description:
        'Enterprise adaptation of the Aria Zotero plugin for LLM-powered academic research — integrated custom model endpoints hosted on Dell ACE infrastructure with response parsing and error handling.',
      tags: ['TypeScript', 'Zotero', 'LLM', 'Plugin Development'],
    },
    {
      name: 'LLM Evaluation & Vulnerability Classification',
      description:
        'Benchmarking framework evaluating multiple LLMs (Llama 3.x, CodeLlama, Granite Code, DeepSeek, Qwen) for automated Ansible playbook generation across real-world vulnerability scenarios, with an LLM-powered vulnerability classifier.',
      tags: ['Go', 'Python', 'LLM Evaluation', 'Ansible'],
    },
    {
      name: 'Model Context Protocol (MCP)',
      description:
        'Implementation of the Model Context Protocol for seamless LLM tool integration using LangChain, with a JSON-based configuration system for managing multiple MCP server connections.',
      tags: ['Python', 'LangChain', 'MCP'],
    },
  ]

  const personalProjects = [
    {
      name: 'Custom Coding Agent',
      description:
        'An AI-powered coding agent designed to work autonomously on Python projects — leveraging large language models for code generation and task execution.',
      tags: ['Python', 'AI Agents', 'LLM'],
      github: 'https://github.com/chaitu25/custom-coding-agent',
    },
    {
      name: 'Queuing Model Simulation',
      description:
        'A simulation of queuing systems built in Java, demonstrating distributed systems concepts and mathematical modelling of service processes.',
      tags: ['Java', 'Distributed Systems', 'Simulation'],
      github: 'https://github.com/chaitu25/QueingModel',
    },
    {
      name: 'Beyond22 — Virtual Archive Chatbot',
      description:
        'A conversational AI chatbot for virtual archive exploration, showcasing natural language understanding and interactive user experiences.',
      tags: ['JavaScript', 'Chatbot', 'NLP'],
      github: 'https://github.com/chaitu25/Beyond22',
    },
    {
      name: 'Smart Library System',
      description:
        'IoT firmware for an intelligent library management system — integrating hardware sensors with software to automate book tracking and management.',
      tags: ['Python', 'IoT', 'Embedded Systems'],
      github: 'https://github.com/chaitu25/SmartLibrary',
    },
    {
      name: 'Smart Beacon Plugin',
      description:
        'A custom Apache Cordova plugin for scanning iBeacons on Android, enabling location-aware mobile applications using Bluetooth Low Energy.',
      tags: ['Java', 'Cordova', 'BLE / iBeacon'],
      github: 'https://github.com/chaitu25/SmartBeaconPlugin',
    },
    {
      name: 'MusicGraph',
      description:
        'A KDE project that visualises music data as interactive graphs, combining data processing with creative front-end visualisation.',
      tags: ['JavaScript', 'Data Visualisation', 'KDE'],
      github: 'https://github.com/chaitu25/MusicGraph',
    },
  ]

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <h2 className="section__title">Projects</h2>

        <h3 className="projects__section-label">
          <FaLock className="projects__section-icon" />
          Corporate Projects — Dell Technologies
        </h3>
        <div className="projects__grid">
          {corporateProjects.map((project, i) => (
            <div key={i} className="project__card project__card--corporate">
              <div className="project__card-header">
                <h3 className="project__name">{project.name}</h3>
                <span className="project__badge">Internal</span>
              </div>
              <p className="project__description">{project.description}</p>
              <div className="project__tags">
                {project.tags.map((tag, j) => (
                  <span key={j} className="project__tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <h3 className="projects__section-label">
          <FaGithub className="projects__section-icon" />
          Personal &amp; Open Source
        </h3>
        <div className="projects__grid">
          {personalProjects.map((project, i) => (
            <div key={i} className="project__card">
              <div className="project__card-header">
                <h3 className="project__name">{project.name}</h3>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project__link"
                  aria-label={`View ${project.name} on GitHub`}
                >
                  <FaGithub />
                </a>
              </div>
              <p className="project__description">{project.description}</p>
              <div className="project__tags">
                {project.tags.map((tag, j) => (
                  <span key={j} className="project__tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
