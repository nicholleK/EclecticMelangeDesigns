import React, { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/Home.css";
import "../Styles/index.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useSpring, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";
import CarouselItem from "react-bootstrap/esm/CarouselItem";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import AutoScroll from "embla-carousel-auto-scroll";
import ContactModal from "../Components/ContactModal";
import MediumsTicker from "../Components/MediumsTicker";
import Testimonials from "../Components/Testimonials";

gsap.registerPlugin(ScrollTrigger); //registers scroll trigger

function Home() {
  //options for auto scroll
  const autoScrollOptions = {
    speed: 1,
    direction: "forward",
    stopOnInteraction: false,
    useTouch: true,
  };

  const autoPlayOptions = {
    delay: 3500,
  };

  //for carousel loop , autoplay and wheel gesture plugins
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    AutoScroll(autoScrollOptions),
  ]);


  /* -----------------------------------------------------------------------------------------------  */
  //Variables
  const contentRef = useRef(null);
  const boxRef = useRef(null);
  const spanRef = useRef(null);
  const textRef = useRef(null);
  const [grayScale, setGrayscale] = useState(0);
  const navigate = useNavigate(); //programmatically navigates

  /* -----------------------------------------------------------------------------------------------  */

  //for txt-box grayscale transitions
  function handleMouseMove(event) {
    const boxRect = event.target.getBoundingClientRect();
    const mouseX = event.clientX - boxRect.left;
    const percX = mouseX / boxRect.width;
    const newGrayscale = percX * 100;
    setGrayscale(newGrayscale);
  }

  function handleTouchMove(event) {
    const boxRect = event.target.getBoundingClientRect();
    const touchX = event.touches[0].clientX - boxRect.left;
    const percX = touchX / boxRect.width;
    const newGrayscale = percX * 100;
    setGrayscale(newGrayscale);
  }

  function handleMouseLeave() {
    setGrayscale(0);
  }

  function handleTouchEnd() {
    setGrayscale(0);
  }

  /* -----------------------------------------------------------------------------------------------  */

  //for home content slide up effect

  useEffect(() => {
    const element = contentRef.current;
    gsap.from(element, {
      y: 50,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: element,
        start: "top 90%",
        toggleActions: "play none none none",
      },
    });
  }, []);

  /* -----------------------------------------------------------------------------------------------  */
  //redirect to designs

  function handleBtnClick() {
    navigate("/designs");
  }

  /* -----------------------------------------------------------------------------------------------  */

  //for headline drop effect animations
  useEffect(() => {
    const letters = document.querySelectorAll(".headline span");

    gsap.fromTo(
      letters,
      {
        y: -100, //starting postion
        opacity: 0, //invisible start
      },

      {
        y: 0, //final position - onscreen
        opacity: 1, //visible
        stagger: 0.1, //delay for each letter
        duration: 1, //duration of each animation
        ease: "power4.out", //ease for a smooth drop effect
      }
    );
  }, []);
  /* -----------------------------------------------------------------------------------------------  */

  /* -----------------------------------------------------------------------------------------------  */
  //for scroll effect of cta-container

  const { ref, inView } = useInView({
    triggerOnce: false, //trigger only when element comes into view
    threshold: 0.2, //determines how much of the element must be in view for animation to trigger
  });

  const animationProps = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(50px)", // slide up effect
    config: { mass: 1, tension: 100, friction: 30 }, //smooth animation config
  });
  /* -----------------------------------------------------------------------------------------------  */

  /* -----------------------------------------------------------------------------------------------  */

  //for txt-box:nth-child(4) animations
  useEffect(() => {
    if (inView) {
      const letters = document.querySelectorAll(".txt-box span");

      gsap.fromTo(
        letters,
        {
          rotateY: 180,
          opacity: 0,
        },

        {
          rotateY: 0, //flip back to normal
          duration: 5, //duration for each letter
          opacity: 1,
          stagger: 0.1, //delay between each letter's animation
          ease: "power2.out", //ease for smooth transition
        }
      );
    }
  }, [inView]); //trigger effect everytime inView changesS
  /* -----------------------------------------------------------------------------------------------  */

  /* -----------------------------------------------------------------------------------------------  */

  //for txt-box(1) slide in  from left effect

  useEffect(() => {
    const element = boxRef.current;
    const span = spanRef.current;

    if (span) {
      span.style.display = "inline-block";
      span.style.textAlign = "center";
      span.style.color = "black";
      span.style.width = "20px";
      span.style.whiteSpace = "nowrap";
    }

    gsap.fromTo(
      element, // Target element
      { opacity: 0, x: -100 }, // Start state
      {
        opacity: 1,
        x: 0, // End state
        onStart: () => {
          //hide span when animation starts
          if (span) {
            span.style.display = "none";
          }
        },
        scrollTrigger: {
          //start and stop animation. smooth scrubbing
          trigger: element,
          start: "left 80%",
          end: "left 30%",
          scrub: 1,
        },
      }
    );

    if (span) {
      span.style.display = "inline-block";
      span.style.textAlign = "center";
      span.style.color = "black";
      span.style.width = "20px";
      span.style.whiteSpace = "nowrap";
    }
  }, []);

  /* -----------------------------------------------------------------------------------------------  */

  //cta-container-alt horizontal scroll code

  /* -----------------------------------------------------------------------------------------------  */

  //modal code

  const [show, setShow] = useState(false);
  const [alertVisible, setAlertVisible] = useState(false);

  function handleClose() {
    setShow(false);
  }

  function handleShow() {
    setShow(true);
  }

  function handleAlert() {
    setAlertVisible(true);
    setTimeout(() => {
      setAlertVisible(false);
    }, 3000);
  }
  {
    /* ------------------------------------------------------------------------------------------- */
  }

  //strip code

  const colors = [
    "#A6CDC6",
    "#C890A7",
    "#574964",
    "#FFEB00",
    "#578E7E",
    "#123524",
    "#E82561",
    "#8D0B41",
    "#CDC1FF",
    "#D8C4B6",
    "#D6C0B3",
  ];
  const [strips, setStrips] = useState([]);

  //generate random colors
  function generateRandomColors() {
    return colors[Math.floor(Math.random() * colors.length)];
  }

  //create strips dynamically
  useEffect(() => {
    const numStrips = 80;
    const generatedStrips = Array.from({ length: numStrips }, () =>
      generateRandomColors()
    );
    setStrips(generatedStrips);
  }, []);

  {
    /* ------------------------------------------------------------------------------------------- */
  }

  {
    /* ------------------------------------------------------------------------------------------- */
  }

  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <div className="left-hero-section">
            <img
              className="left-hero-image"
              src="/Images/emanuel-haas-MZ4fq4uTh0k-unsplash.jpg"
              alt="Fashion editorial"
            />{" "}
          </div>
          <div className="headline-container">
            <h1 className="headline">
              <span>I</span>
              <span>n</span>
              <span>s</span>
              <span>p</span>
              <span>i</span>
              <span>r</span>
              <span>e</span>
              <span>d</span>
              <br />
              <span>B</span>
              <span>y</span>

              <br />
              <span>D</span>
              <span>i</span>
              <span>v</span>
              <span>e</span>
              <span>r</span>
              <span>s</span>
              <span>i</span>
              <span>t</span>
              <span>y</span>
            </h1>
          </div>
          <div className="right-hero-section">
            <img
              className="right-hero-image"
              src="/Images/emanuel-haas-MZ4fq4uTh0k-unsplash.jpg"
              alt="Fashion editorial mirrored"
            />{" "}
          </div>
        </div>

        <video className="video-bg position-relative" autoPlay muted loop>
          <source
            src="/Videos/1722882-uhd_3840_2160_25fps.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        <div className="hero-headline position-absolute ">
          <div className="row">
            <div className="col-12">
              <p>
                {" "}
                As <b>Dieter Rams</b> said,{" "}
                <em>'Good design is as little design as possible'</em>, so we at{" "}
                <strong>
                  <em>Eclectic Mélange Designs</em>
                </strong>{" "}
                embrace this simplicity, blending creativity with precision to
                craft meaningful, lasting designs.{" "}
              </p>
              <br></br>
              <span>
                {" "}
                Ready to transform your ideas into exceptional designs?{" "}
                <br></br> Let’s create something unforgettable together.{" "}
              </span>

              <Button
                className="btn m-4"
                style={{
                  backgroundColor: "#F8E1B7",
                  border: "none",
                  color: "black",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                  width: "120px",
                  height: "40px",
                  fontFamily: "Lora , sans-serif",
                  fontWeight: "500",
                  borderRadius: "25px",
                }}
                onClick={handleShow}
              >
                Get in touch
              </Button>

              {show && (
                <ContactModal
                  show={show}
                  onHide={handleClose}
                  onAlert={handleAlert}
                  alertVisible={alertVisible}
                />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------------------------------- */}

      {/* Mobile-only CTA that replaces the collage on small screens */}
      <section className="mobile-cta">
        <p className="mcta-eyebrow">Eclectic by nature</p>
        <h2 className="mcta-title">
          <span>Design</span> <span>that</span> <span>connects</span>
        </h2>
        <p className="mcta-text">
          From interiors to interfaces — thoughtful design, crafted around you.
        </p>
        <div className="mcta-actions">
          <button
            className="mcta-btn mcta-primary"
            onClick={() => navigate("/designs")}
          >
            Explore designs
          </button>
          <button className="mcta-btn mcta-outline" onClick={handleShow}>
            Get in touch
          </button>
        </div>
      </section>

      {/* ------------------------------------------------------------------------------------------- */}

      <animated.div
        style={{
          ...animationProps,
          position: "relative",
          backgroundColor: "#D9DFC6",
        }}
      >
        <section className="cta-container" ref={ref}>
          <div className="box txt-box">
            {" "}
            <span className="txt-box1-span" ref={spanRef}>
              Eclectic &nbsp; Elegance
            </span>{" "}
            <p ref={boxRef}> Innovative style </p>{" "}
          </div>
          <div className="box img-box"> </div>
          <div className="box img-box"> </div>
          <div
            className="box txt-box "
            ref={textRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{
              display: "flex",
              overflow: "hidden",
              transition: "filter 0.3s ease",
              filter: `grayscale(${grayScale}%)`,
            }}
          >
            {" "}
            <span>E</span>
            <span>x</span>
            <span>p</span>
            <span>r</span>
            <span>e</span>
            <span>s</span>
            <span>s</span>
            <span>i</span>
            <span>v</span>
            <span>e</span> <span>&nbsp;</span>
            <span>D</span>
            <span>e</span>
            <span>s</span>
            <span>i</span>
            <span>g</span>
            <span>n</span>{" "}
          </div>
        </section>
      </animated.div>

      <div className="cta-container-alt ">
        <div className="row">
          <div className="col-4">
            <h1>
              Your Vision, <br /> Perfectly Designed
            </h1>
            <br />
            <p>
              {" "}
              <em>
                {" "}
                &ldquo;Every design is a blend of passion and purpose, tailored
                to connect with your audience and elevate your brand. <br />{" "}
                <br /> From concept to creation, we’re here to turn your vision
                into designs that leave a lasting impression.&rdquo;{" "}
              </em>{" "}
            </p>
          </div>
          <div className="col-8">
            <video className="right-side-video" autoPlay muted loop>
              <source src="/Videos/larger screens.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>

      <center>
        <section className="cta-section">
          <div className="containers position-relative">
            <div className="row">
              <div className="col-12">
                <p>
                  {" "}
                  As <b>Dieter Rams</b> said,{" "}
                  <em>'Good design is as little design as possible'</em>, so we
                  at{" "}
                  <strong>
                    <em>Eclectic Mélange Designs</em>
                  </strong>{" "}
                  embrace this simplicity, blending creativity with precision to
                  craft meaningful, lasting designs.{" "}
                </p>
                <br></br>
                <span>
                  {" "}
                  Ready to transform your ideas into exceptional designs?{" "}
                  <br></br> Let’s create something unforgettable together.{" "}
                </span>

                <Button
                  className="btn  m-4"
                  style={{
                    border: "none",
                    backgroundColor: "#F8E1B7",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    cursor: "pointer",
                    width: "120px",
                    height: "40px",
                    fontFamily: "Lora , sans-serif",
                    fontWeight: "500",
                    borderRadius: "25px",
                    color: "black",
                  }}
                  onClick={handleShow}
                >
                  Get in touch
                </Button>

                {show && (
                  <ContactModal
                    show={show}
                    onHide={handleClose}
                    onAlert={handleAlert}
                    alertVisible={alertVisible}
                  />
                )}
              </div>
            </div>
          </div>

          <div className="video-overlay position-absolute ">
            <video autoPlay muted loop playsInline>
              <source
                src="/Videos/1722882-uhd_3840_2160_25fps.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </section>
      </center>
      {/* ------------------------------------------------------------------------------------------- */}

      <section className="design-section">
        <div
          className="row d-flex design-section-row"
          style={{ width: "100%", height: "100%" }}
        >
          <div
            className="col flex-container d-lg-none "
            style={{ padding: "1px" }}
          >
            <div className="strip-container  " id="strip-container">
              {strips.map((color, index) => (
                <div
                  key={index}
                  className="strip"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
            <div className="carousel-container position-absolute d-md-flex d-lg-block">
              <div className="embla" ref={emblaRef}>
                <div className="embla__container">
                  <div className="embla__slide">
                    <img
                      src="/Images/Carousel/kam-idris-_HqHX3LBN18-unsplash (1).jpg"
                      alt="interior design image"
                      className="img-fluid"
                    />
                  </div>
                  <div className="embla__slide">
                    <img
                      src="/Images/Carousel/jonas-jacobsson-2xaF4TbjXT0-unsplash.jpg"
                      alt="chairs"
                    />
                  </div>
                  <div className="embla__slide">
                    <img
                      src="/Images/Carousel/anders-jilden-Sc5RKXLBjGg-unsplash.jpg"
                      alt="architecture image"
                    />
                  </div>
                  <div className="embla__slide">
                    <img
                      src="/Images/Carousel/kelly-sikkema-io0ZLYbu31s-unsplash.jpg"
                      alt="person sketching a mobile wireframe"
                    />
                  </div>
                  <div className="embla__slide">
                    <img
                      src="/Images/Carousel/rhondak-native-florida-folk-artist-_Yc7OtfFn-0-unsplash.jpg"
                      alt="color-stained paint brushes"
                    />
                  </div>
                  <div className="embla__slide">
                    <img
                      src="/Images/Carousel/vinicius-amnx-amano-OHPdgstNFGs-unsplash.jpg"
                      alt="rainbow shiny paper on clear background"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Container>
          <div className="larger-screen d-none d-lg-block">
            <div className="row">
              <div className="col-4">
                <h1>
                  Your Vision, <br /> Perfectly Designed
                </h1>
                <p>
                  {" "}
                  <em>
                    {" "}
                    &ldquo;Every design is a blend of passion and purpose,
                    tailored to connect with your audience and elevate your
                    brand. <br /> <br /> From concept to creation, we’re here to
                    turn your vision into designs that leave a lasting
                    impression.&rdquo;{" "}
                  </em>{" "}
                </p>
              </div>
              <div className="col-8">
                <video
                  className="right-side-video"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source src="/Videos/larger screens.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ------------------------------------------------------------------------------------------- */}

      <MediumsTicker />

      <section className="home-content">
        <div className="content-container" ref={contentRef}>
          <p className="services-eyebrow">What we do</p>
          <h1>Services Overview</h1>
          <h4>
            <ul className="list">
              <li>
                {" "}
                <i className="fa-solid fa-house  fa-xs"></i> Interior Decor{" "}
              </li>
              <li>
                {" "}
                <i className="fa-solid fa-mobile-alt fa-xs"></i> Software & App
                Design{" "}
              </li>
              <li>
                <i className="fa-solid fa-palette  fa-xs"></i> Custom Design
                Solutions
              </li>
              <li>
                {" "}
                <i className="fa-solid fa-laptop-code fa-xs"></i> Web Design &
                Development{" "}
              </li>
              <li>
                {" "}
                <i className="fa-solid fa-camera-retro  fa-xs"></i> Photography
                & Videography{" "}
              </li>
              <li>
                {" "}
                <i className="fa-solid fa-calendar-days fa-xs"></i> Event &
                Promotional Design
              </li>
            </ul>
          </h4>

          <div className="button-container">
            <button
              className="button"
              onClick={handleBtnClick}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
                width: "180px",
                height: "40px",
                fontFamily: "Lora , sans-serif",
                fontWeight: "500",
                borderRadius: "25px",
              }}
            >
              Explore Designs
            </button>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------------------------------- */}

      <Testimonials />

      {/* ------------------------------------------------------------------------------------------- */}
    </>
  );
}

export default Home;
