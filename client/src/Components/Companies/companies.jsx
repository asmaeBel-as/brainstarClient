import React from "react";
import img1 from "../../Assets/mav.png";
import img2 from "../../Assets/Untitled (3).png";
import img3 from "../../Assets/natbasma.png";
import img4 from "../../Assets/lc.png";
import img5 from "../../Assets/kathy.png";
import img6 from "../../Assets/dermo.png";
import img7 from "../../Assets/third.png";
import img8 from "../../Assets/bee.png";
import img9 from "../../Assets/hs.png";
import img10 from "../../Assets/good.png";
import img11 from "../../Assets/skims.png";
import img12 from "../../Assets/ANGELA.png";
import img13 from "../../Assets/quick.png";
import img14 from "../../Assets/holly.png";
import img15 from "../../Assets/khait.png";
import img16 from "../../Assets/smart.png";
import img17 from "../../Assets/rww.png";
import img18 from "../../Assets/paper.png";
import img19 from "../../Assets/flour.png";
import img20 from "../../Assets/five.png";
import img21 from "../../Assets/agency.png";
import img22 from "../../Assets/chess.jpg";
import img23 from "../../Assets/gold.png";
import img24 from "../../Assets/komo.png";
import img25 from "../../Assets/strong.png";
import img26 from "../../Assets/AVlogo.png";
import img27 from "../../Assets/jg.png";
import img28 from "../../Assets/dermo.png";
import img29 from "../../Assets/dermo.png";
import img30 from "../../Assets/dermo.png";
import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./companies.css";
import {
  FaChevronLeft,
  FaChevronRight,
  FaConnectdevelop,
} from "react-icons/fa";
const companies = () => {
  const CustomRightArrow = ({ onClick, ...rest }) => {
    const {
      onMove,
      carouselState: { currentSlide, deviceType },
    } = rest;
    // onMove means if dragging or swiping in progress.
    return (
      <button
        className="arrowContainer0 sliderArrowR"
        onClick={() => onClick()}
      >
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
        className="arrowContainer1 sliderArrowL"
        onClick={() => onClick()}
      >
        <FaChevronLeft />
      </button>
    );
  };
  const CustomDot = ({ onClick, ...rest }) => {
    const {
      onMove,
      index,
      active,
      carouselState: { currentSlide, deviceType },
    } = rest;

    return (
      <div className="dots">
        <div className="dot">
          <button
            className={active ? "actives button" : "inactives button"}
            onClick={() => onClick()}
          ></button>
        </div>
      </div>
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
    <>
      <h4 class="separatorC">
        <i>
          <FaConnectdevelop />{" "}
        </i>
      </h4>
      <div class="sectionS">
        <Container>
          <Row>
            <Col xl={12}>
              <Col md={12}>
                <Carousel
                  itemClass="carousel-item-padding-40-px"
                  responsive={responsive}
                  infinite={true}
                  className="logo-carousel "
                  showDots
                  removeArrowOnDeviceType={["tablet", "desktop"]}
                  customRightArrow={<CustomRightArrow />}
                  customLeftArrow={<CustomLeftArrow />}
                  ssr={true}
                  customDot={<CustomDot />}
                  // renderDotsOutside ={true}
                >
                  <div className="carousel-item">
                    <a
                      href="https://www.quickwhip.com.au"
                      target="_blank"
                      title="https://www.quickwhip.com.au"
                    >
                      <img src={img13} alt="" />
                    </a>
                  </div>
                  {/* *************************************************** */}
                  <div className="carousel-item">
                    <a
                      href="https://www.holywellenterprises.eu"
                      target="_blank"
                      title="https://www.holywellenterprises.eu"
                    >
                      <img src={img14} alt="" />
                    </a>
                  </div>
                  {/* *************************************************** */}
                  <div className="carousel-item">
                    <a
                      href="https://khaite.com"
                      target="_blank"
                      title="https://khaite.com"
                    >
                      <img src={img15} alt="" />
                    </a>
                  </div>
                  {/* *************************************************** */}
                  <div className="carousel-item">
                    <a
                      href="https://smarterretirementsolutions.com"
                      target="_blank"
                      title="https://smarterretirementsolutions.com"
                    >
                      <img src={img16} alt="" />
                    </a>
                  </div>
                  <div className="carousel-item">
                    <a
                      href="https://www.mavmadeit.com/"
                      target="_blank"
                      title="https://www.mavmadeit.com/"
                    >
                      <img src={img1} alt="" />
                    </a>
                  </div>
                  <div className="carousel-item">
                    <a
                      href="https://circulon.com"
                      target="_blank"
                      title="https://circulon.com"
                    >
                      <img src={img2} alt="" />
                    </a>
                  </div>
                  <div className="carousel-item">
                    <a
                      href="https://natbasma.com"
                      target="_blank"
                      title="https://natbasma.com"
                    >
                      <img src={img3} alt="" />
                    </a>
                  </div>
                  <div class="carousel-item">
                    <a
                      href="https://lcwatches.com"
                      target="_blank"
                      title="https://lcwatches.com"
                    >
                      <img
                        src={img4}
                        alt=""
                        style={{
                          width: "30%",
                          height: "60%",
                        }}
                      />
                    </a>
                  </div>
                  <div className="carousel-item">
                    <a
                      href="https://kathrynmccarron.com"
                      target="_blank"
                      title="https://kathrynmccarron.com"
                    >
                      <img src={img5} alt="" />
                    </a>
                  </div>
                  <div className="carousel-item">
                    <a
                      href="https://dermlove.com"
                      target="_blank"
                      title="https://dermlove.com"
                    >
                      <img src={img6} alt="" />
                    </a>
                  </div>
                  {/* *************************************************** */}
                  <div className="carousel-item">
                    <a
                      href="https://www.thirdlove.com"
                      target="_blank"
                      title="https://www.thirdlove.com"
                    >
                      <img src={img7} alt="" />
                    </a>
                  </div>
                  {/* *************************************************** */}
                  <div className="carousel-item">
                    <a
                      href="https://www.beekeepersnaturals.com/"
                      target="_blank"
                      title="https://www.beekeepersnaturals.com/"
                    >
                      <img src={img8} alt="" style={{ width: "30%" }} />
                    </a>
                  </div>
                  {/* *************************************************** */}
                  <div className="carousel-item">
                    <a
                      href="https://hukitchen.com"
                      target="_blank"
                      title="https://hukitchen.com"
                    >
                      <img src={img9} alt="" />
                    </a>
                  </div>
                  {/* *************************************************** */}
                  <div className="carousel-item">
                    <a
                      href="https://www.goodamerican.com"
                      target="_blank"
                      title="https://www.goodamerican.com"
                    >
                      <img
                        src={img10}
                        alt=""
                        style={{
                          height: "80px",
                          width: "250px",
                        }}
                      />
                    </a>
                  </div>
                  {/* *************************************************** */}
                  <div className="carousel-item">
                    <a
                      href="https://skims.com"
                      target="_blank"
                      title="https://skims.com"
                    >
                      <img src={img11} alt="" />
                    </a>
                  </div>
                  {/* *************************************************** */}
                  <div className="carousel-item">
                    <a
                      href="https://www.angelacaglia.com"
                      target="_blank"
                      title="https://www.angelacaglia.com"
                    >
                      <img
                        src={img12}
                        alt=""
                        style={{
                          width: "150%",
                        }}
                      />
                    </a>
                  </div>
                  {/* *************************************************** */}
                  {/* *************************************************** */}
                  <div className="carousel-item">
                    <a
                      href="https://ripleyworldwide.com"
                      target="_blank"
                      title="https://ripleyworldwide.com"
                    >
                      <img src={img17} alt="" />
                    </a>
                  </div>
                  {/* *************************************************** */}
                  <div className="carousel-item">
                    <a
                      href="https://papercosmetics.com"
                      target="_blank"
                      title="https://papercosmetics.com"
                    >
                      <img src={img18} alt="" />
                    </a>
                  </div>
                  {/* *************************************************** */}
                  <div className="carousel-item">
                    <a
                      href="https://www.flourandbranch.com"
                      target="_blank"
                      title="https://www.flourandbranch.com"
                    >
                      <img
                        src={img19}
                        alt=""
                        style={{
                          width: "50%",
                        }}
                      />
                    </a>
                  </div>
                  {/* *************************************************** */}
                  <div className="carousel-item">
                    <a
                      href="https://fivedinners.com"
                      target="_blank"
                      title="https://fivedinners.com"
                    >
                      <img src={img20} alt="" />
                    </a>
                  </div>
                  {/* *************************************************** */}
                  <div className="carousel-item">
                    <a
                      href="http://threethirteenagency.com"
                      target="_blank"
                      title="http://threethirteenagency.com"
                    >
                      <img src={img21} alt="" />
                    </a>
                  </div>
                  {/* *************************************************** */}
                  <div className="carousel-item">
                    <a
                      href="https://chessmadefun.com"
                      target="_blank"
                      title="https://chessmadefun.com"
                    >
                      <img src={img22} alt="" />
                    </a>
                  </div>
                  {/* *************************************************** */}
                  <div className="carousel-item">
                    <a
                      href="http://www.ostaszstudio.com"
                      target="_blank"
                      title="http://www.ostaszstudio.com"
                    >
                      <img src={img23} alt="" style={{ width: "150%" }} />
                    </a>
                  </div>
                  {/* *************************************************** */}
                  <div className="carousel-item">
                    <a
                      href="https://kome.no"
                      target="_blank"
                      title="https://kome.no"
                    >
                      <img src={img24} alt="" />
                    </a>
                  </div>
                  {/* *************************************************** */}
                  <div className="carousel-item">
                    <a
                      href="https://thestrongwaterco.com"
                      target="_blank"
                      title="https://thestrongwaterco.com"
                    >
                      <img src={img25} alt="" />
                    </a>
                  </div>
                  {/* *************************************************** */}
                  <div className="carousel-item">
                    <a
                      href="https://charlemagnewines.com"
                      target="_blank"
                      title="https://charlemagnewines.com"
                    >
                      <img src={img26} alt="" />
                    </a>
                  </div>
                  {/* *************************************************** */}
                  <div className="carousel-item">
                    <a
                      href="https://jimmyqgames.com"
                      target="_blank"
                      title="https://jimmyqgames.com"
                    >
                      <img src={img27} alt="" />
                    </a>
                  </div>
                </Carousel>
              </Col>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
export default companies;
