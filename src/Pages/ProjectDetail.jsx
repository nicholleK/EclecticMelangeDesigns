import React from "react";
import { useParams, Link } from "react-router-dom";
import { PROJECTS, getProject } from "../data/projects";
import Reveal from "../Components/Reveal";
import "../Styles/ProjectDetail.css";

function ProjectDetail() {
  const { slug } = useParams();
  const project = getProject(slug);

  if (!project) {
    return (
      <section className="project-missing">
        <h1>Project not found</h1>
        <p>The work you're looking for doesn't exist or has moved.</p>
        <Link to="/designs" className="project-back-btn">
          Back to all work
        </Link>
      </section>
    );
  }

  const currentIndex = PROJECTS.findIndex((p) => p.slug === slug);
  const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];

  return (
    <article className="project-detail">
      <div
        className="project-hero"
        style={{ backgroundImage: `url("${project.image}")` }}
      >
        <div className="project-hero-overlay">
          <Link to="/designs" className="project-back">
            <i className="fa-solid fa-arrow-left"></i> All work
          </Link>
          <p className="project-hero-cat">{project.category}</p>
          <h1 className="project-hero-title">{project.title}</h1>
        </div>
      </div>

      <div className="project-body">
        <div className="project-meta">
          <div>
            <span className="project-meta-label">Client</span>
            <span className="project-meta-value">{project.client}</span>
          </div>
          <div>
            <span className="project-meta-label">Year</span>
            <span className="project-meta-value">{project.year}</span>
          </div>
          <div>
            <span className="project-meta-label">Discipline</span>
            <span className="project-meta-value">{project.category}</span>
          </div>
        </div>

        <Reveal className="project-overview" as="p">
          {project.overview}
        </Reveal>

        <div className="project-services">
          {project.services.map((s) => (
            <span className="project-service-chip" key={s}>
              {s}
            </span>
          ))}
        </div>

        <div className="project-columns">
          <Reveal className="project-col">
            <h3>The challenge</h3>
            <p>{project.challenge}</p>
          </Reveal>
          <Reveal className="project-col" delay={120}>
            <h3>The outcome</h3>
            <p>{project.outcome}</p>
          </Reveal>
        </div>

        <div className="project-gallery">
          {project.gallery.map((src, i) => (
            <Reveal className="project-gallery-item" key={src} delay={i * 90}>
              <img src={src} alt={`${project.title} ${i + 1}`} loading="lazy" />
            </Reveal>
          ))}
        </div>
      </div>

      <div className="project-next">
        <span className="project-next-label">Next project</span>
        <Link to={`/designs/${nextProject.slug}`} className="project-next-title">
          {nextProject.title} <i className="fa-solid fa-arrow-right"></i>
        </Link>
      </div>

      <section className="designs-cta">
        <h2>Like what you see?</h2>
        <p>Let's create something worth remembering together.</p>
        <Link to="/contact" className="designs-cta-btn">
          Start a project
        </Link>
      </section>
    </article>
  );
}

export default ProjectDetail;
