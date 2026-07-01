import React, { useState } from "react";
import { Link } from "react-router-dom";
import Reveal from "../Components/Reveal";
import { PROJECTS, CATEGORIES } from "../data/projects";
import "../Styles/Designs.css";

const PROCESS = [
  {
    step: "01",
    title: "Discover",
    text: "We listen, research, and map out your goals, audience, and story.",
  },
  {
    step: "02",
    title: "Design",
    text: "Concepts take shape — moodboards, drafts, and considered iterations.",
  },
  {
    step: "03",
    title: "Refine",
    text: "We polish every detail together until it feels unmistakably yours.",
  },
  {
    step: "04",
    title: "Deliver",
    text: "Final assets, handover, and ongoing support to bring it to life.",
  },
];

function Designs() {
  const [activeCategory, setActiveCategory] = useState("All");

  const visibleProjects =
    activeCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((project) => project.category === activeCategory);

  return (
    <>
    <section className="designs-page">
      <div className="designs-header">
        <p className="designs-eyebrow">Our Portfolio</p>
        <h1 className="designs-title">Selected Works</h1>
        <div className="designs-underline" />
        <p className="designs-sub">
          A cross-disciplinary body of work — interiors, brands, screens, and
          stories, each shaped around the people it's made for.
        </p>
      </div>

      <div className="designs-filters">
        {CATEGORIES.map((category) => (
          <button
            key={category}
            className={
              category === activeCategory
                ? "designs-filter active"
                : "designs-filter"
            }
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="designs-grid">
        {visibleProjects.map((project, index) => (
          <Reveal
            key={project.slug}
            as="div"
            delay={(index % 3) * 90}
            className={
              project.large ? "design-card design-card-large" : "design-card"
            }
          >
            <Link to={`/designs/${project.slug}`} className="design-card-link">
              <img src={project.image} alt={project.title} loading="lazy" />
              <div className="design-card-overlay">
                <p className="design-card-title">{project.title}</p>
                <p className="design-card-meta">
                  {project.category} · {project.year}
                </p>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>

    <section className="designs-process">
      <div className="designs-header">
        <p className="designs-eyebrow">How we work</p>
        <h2 className="designs-section-title">From idea to impression</h2>
        <div className="designs-underline" />
      </div>
      <div className="process-grid">
        {PROCESS.map((p, index) => (
          <Reveal className="process-card" key={p.step} delay={index * 100}>
            <span className="process-step">{p.step}</span>
            <h3>{p.title}</h3>
            <p>{p.text}</p>
          </Reveal>
        ))}
      </div>
    </section>

    <section className="designs-cta">
      <h2>Have a project in mind?</h2>
      <p>Let's turn your vision into something worth remembering.</p>
      <Link to="/contact" className="designs-cta-btn">
        Start a project
      </Link>
    </section>
    </>
  );
}

export default Designs;
