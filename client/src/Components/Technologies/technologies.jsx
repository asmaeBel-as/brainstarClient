import meter1 from "../../Assets/meter1.svg";
import meter2 from "../../Assets/meter2.svg";
import meter3 from "../../Assets/meter3.svg";
import Carousel from "react-multi-carousel";
import flutter from "../../Assets/flutter.png";
import kotlin from "../../Assets/kotlin.jpeg";
import swift from "../../Assets/swift-og.png";
import java from "../../Assets/java.png";
import purpleblur from "../../Assets/bgcolor - Copy.png";
import "react-multi-carousel/lib/styles.css";
import React from "react";
import colorSharp from "../../Assets/bgcolor.png";
import "./technologies.css";
import php from "../../Assets/download.png";
import html from "../../Assets/html.png";
import css from "../../Assets/css.jpeg";
import react from "../../Assets/images (1).jpeg";
import drupal from "../../Assets/drupal.png";
import shopify from "../../Assets/shopify.jpeg";
import wordpress from "../../Assets/wordpress.png";
import joomla from "../../Assets/joomla.png";
import { Col, Container, Row } from "react-bootstrap";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animation";
const technologies = (props) => {

  let location = useLocation();
  useEffect(() => {
    if (location.hash) {
      let elem = document.getElementById(location.hash.slice(1));
      if (elem) {
        elem.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest",
        });
      }
    } else {
      window.scrollTo({ top: 0, left: 0 });
    }
  }, [location]);
  
  const CustomRightArrow = ({ onClick, ...rest }) => {
    const {
      onMove,
      carouselState: { currentSlide, deviceType },
    } = rest;
    // onMove means if dragging or swiping in progress.
    return (
      <button className="arrowContainer sliderArrow" onClick={() => onClick()}>
        <FaChevronRight />
      </button>
    );
  };
  const CustomLeftArrow = ({ onClick, ...rest }) => {
    const {
      onMove,
      carouselState: { currentSlide, deviceType },
    } = rest;
    // onMove means if dragging or swiping in progress.
    return (
      <button
        className="arrowContainer2 sliderArrow2"
        onClick={() => onClick()}
      >
        <FaChevronLeft />
      </button>
    );
  };
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 540, min: 0 },
      items: 1,
    },
  };
  return (
    <section className="skill" id="technologies">
      <img className="background-image-top" src={purpleblur} alt="" />
      <Container>
        <Row>
          <Col size={18}>
            <div className="skill-bx wow zoomIn">
              <h2>Techologies</h2>
              <p>
                We offer Services with various Technologies<br></br> Lorem Ipsum
                has been the industry's standard dummy text.
              </p>
              <Carousel
                itemClass="carousel-item-padding-40-px"
                responsive={responsive}
                infinite={true}
                className=" owl-theme skill-slider"
                containerClass="container"
                autoPlay
                autoPlaySpeed={1000}
                customRightArrow={<CustomRightArrow />}
                customLeftArrow={<CustomLeftArrow />}
              >
                <div className="item">
                  <div className="image__container">
                    {" "}
                    <img src={flutter} alt="Image" />
                  </div>
                  <h5>Flutter</h5>
                </div>
                <div className="item">
                  <div className="image__container">
                    {" "}
                    <img src={php} alt="Image" />
                  </div>
                  <h5>PHP</h5>
                </div>
                <div className="item">
                  <div className="image__container">
                    {" "}
                    <img src={html} alt="Image" />
                  </div>
                  <h5>HTML</h5>
                </div>
                <div className="item">
                  <div className="image__container">
                    {" "}
                    <img src={react} alt="Image" />
                  </div>
                  <h5>React</h5>
                </div>
                <div className="item">
                  <div className="image__container">
                    {" "}
                    <img src={css} alt="Image" />
                  </div>
                  <h5>CSS</h5>
                </div>
                <div className="item">
                  <div className="image__container">
                    {" "}
                    <img src={kotlin} alt="Image" />
                  </div>
                  <h5>Kotlin</h5>
                </div>
                <div className="item">
                  <div className="image__container">
                    <img src={swift} alt="Image" />
                  </div>
                  <h5>Swift</h5>
                </div>
                <div className="item">
                  <div className="image__container">
                    {" "}
                    <img src={java} alt="Image" />
                  </div>
                  <h5>java</h5>
                </div>
                <div className="item">
                  <div className="image__container">
                    {" "}
                    <img src={drupal} alt="Image" />
                  </div>
                  <h5>Drupal</h5>
                </div>
                <div className="item">
                  <div className="image__container">
                    {" "}
                    <img src={wordpress} alt="Image" />
                  </div>
                  <h5>Wordpress</h5>
                </div>
                <div className="item">
                  <div className="image__container">
                    {" "}
                    <img src={shopify} alt="Image" />
                  </div>
                  <h5>Shopify</h5>
                </div>
                <div className="item">
                  <div className="image__container">
                    {" "}
                    <img src={joomla} alt="Image" />
                  </div>
                  <h5>Joomla</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
export default technologies;
