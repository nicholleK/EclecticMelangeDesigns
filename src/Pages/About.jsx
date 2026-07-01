import React from "react";
import Card from "react-bootstrap/Card";
import "../Styles/About.css";
import Container from "react-bootstrap/Container";
import Reveal from "../Components/Reveal";

function About() {
  // blob animation code

  //  useEffect(() => {

  //    const tween = KUTE.fromTo('#blob2',
  //      {path: '#blob2'},
  //      {
  //      path: '#blob1'}, {
  //      repeat: 1000,
  //      yoyo: true,
  //      duration: 2000,

  //    });

  //    tween.start();

  //    return() => {
  //      tween.stop();
  //   };
  //  }, []);

  return (
    <>
      <section className="about-container">
        <Container>
          <div className="about-content">
            <div className="about-intro">
              <p className="about-eyebrow">Who We Are</p>
              <h1 className="about-heading">
                A mélange of disciplines, one design vision
              </h1>
              <p className="about-lead">
                Eclectic Mélange Designs is a multidisciplinary studio blending
                interior decor, digital product design, and visual storytelling.
                We believe good design is as little design as possible —
                purposeful, lasting, and made to connect.
              </p>
            </div>
            <div className="about-intro-image">
              <img
                src="/Images/Carousel/kam-idris-_HqHX3LBN18-unsplash (1).jpg"
                alt="Eclectic Mélange Designs studio interior"
              />
            </div>

            <div className="row about-values">
              <div className="col-12 col-md-4">
                <Reveal className="value-card" delay={0}>
                  <i className="fa-solid fa-paintbrush value-icon"></i>
                  <h3>Craft</h3>
                  <p>Precision in every detail, from pixel to placement.</p>
                </Reveal>
              </div>
              <div className="col-12 col-md-4">
                <Reveal className="value-card" delay={120}>
                  <i className="fa-solid fa-lightbulb value-icon"></i>
                  <h3>Diversity</h3>
                  <p>Inspired by many disciplines, cultures, and mediums.</p>
                </Reveal>
              </div>
              <div className="col-12 col-md-4">
                <Reveal className="value-card" delay={240}>
                  <i className="fa-solid fa-handshake value-icon"></i>
                  <h3>Partnership</h3>
                  <p>Your vision leads; we turn it into something lasting.</p>
                </Reveal>
              </div>
            </div>

            <div className="about-stats">
              <div className="stat">
                <span className="stat-number">120+</span>
                <span className="stat-label">Projects delivered</span>
              </div>
              <div className="stat">
                <span className="stat-number">6</span>
                <span className="stat-label">Service areas</span>
              </div>
              <div className="stat">
                <span className="stat-number">8 yrs</span>
                <span className="stat-label">Of practice</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="services-container">
        <h1 className="service-heading">What We Provide</h1>

        <Container>
          <div className="row">
            <div className="col-12 col-md-4 col-lg-4  top-left ">
              <Card>
                <Card.Img
                  variant="top"
                  src="/Images/essentials/undraw_interior-design_j887.svg"
                />
                <Card.Body>
                  <Card.Title>Interior Decor</Card.Title>
                  <div className="card-text">
                    <ul>
                      <li>Residential Interior Design</li>
                      <li>3D Visualization & Mood Boards</li>
                      <li>Custom Furniture & Decor Selection</li>
                      <li>Home Staging & Layout Optimization</li>
                    </ul>
                  </div>
                </Card.Body>
              </Card>
            </div>

            <div className="col-12 col-md-4 col-lg-4  top-left ">
              <Card>
                <Card.Img
                  variant="top"
                  src="/Images/essentials/undraw_progressive-app_9517.svg"
                />
                <Card.Body>
                  <Card.Title>Software & App Design</Card.Title>
                  <div className="card-text">
                    <ul>
                      <li>Web Application Design</li>
                      <li>Mobile App UI/UX Design</li>
                      <li>Wireframing & Prototyping</li>
                      <li>Interactive Design & Animations</li>
                    </ul>
                  </div>
                </Card.Body>
              </Card>
            </div>

            <div className="col-12 col-md-4 col-lg-4 top-right">
              <Card>
                <Card.Img
                  variant="top"
                  src="/Images/essentials/undraw_design-sprint_7mmb.svg"
                />
                <Card.Body>
                  <Card.Title>Custom Design Solutions</Card.Title>
                  <div className="card-text">
                    <ul>
                      <li>Packaging & Label Design</li>
                      <li>Branding & Identity Design</li>
                      <li>Infographics & Data Visualization</li>
                      <li>Signage & Environmental Graphics</li>
                    </ul>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </div>

          <div className="row">
            <div className="col-12 col-md-4 col-lg-4 ">
              <Card>
                <Card.Img
                  variant="top"
                  src="/Images/essentials/undraw_responsive_csbt.svg"
                />
                <Card.Body>
                  <Card.Title>Web Design & Development</Card.Title>
                  <div className="card-text">
                    <ul>
                      <li>Website Maintenance & Support</li>
                      <li>SEO & Performance Optimization</li>
                      <li>E-commerce Website Development</li>
                      <li> Custom Web Design & Development</li>
                    </ul>
                  </div>
                </Card.Body>
              </Card>
            </div>

            <div className="col-12 col-md-4 col-lg-4 ">
              <Card>
                <Card.Img
                  variant="top"
                  src="/Images/essentials/undraw_product-photography_pouq.svg"
                />
                <Card.Body>
                  <Card.Title>Photography & Videography</Card.Title>
                  <div className="card-text">
                    <ul>
                      <li>Corporate Branding Videos</li>
                      <li>Event Coverage & Highlights</li>
                      <li>Promotional & Marketing Ads</li>
                      <li>Product & Lifestyle Photography</li>
                    </ul>
                  </div>
                </Card.Body>
              </Card>
            </div>

            <div className="col-12 col-md-4 col-lg-4 ">
              <Card>
                <Card.Img
                  variant="top"
                  src="/Images/essentials/undraw_events_0w4f.svg"
                />
                <Card.Body>
                  <Card.Title>Event & Promotional Design</Card.Title>
                  <div className="card-text">
                    <ul>
                      <li>Poster & Banner Design</li>
                      <li>Digital Invitations & Flyers</li>
                      <li>Social Media Event Graphics</li>
                      <li>Event Branding & Visual Identity</li>
                    </ul>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

export default About;
