import React, { useState, useEffect } from "react";
import "./home.css";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import TrackVisibility from "react-on-screen";
import { Link } from "react-router-dom";
import sample from "../../Assets/bvideo.mp4";
const home = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 50);
  const [index, setIndex] = useState(1);
  const toRotate = [
    "Are Brain Star Technologies",
    "Give Best IT Solutions",
    "Provide From Concept to Finished Products",
  ];
  const period = 100;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);
  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(200);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <>
      <section className="banner" id="home">
        <video autoPlay muted loop id="bg-video">
          <source src={sample} type="video/mp4" />
        </video>
        {/* <div class="star-field">
          <div class="layer"></div>
          <div class="layer"></div>
          <div class="layer"></div>
        </div> */}

        {/* <TrackVisibility>
          <div className="shooting">
            <img src={shooting} alt="Header Img" />
          </div>
        </TrackVisibility>
        <TrackVisibility>
          <div className="shooting1">
            <img src={shooting} alt="Header Img" />
          </div>
        </TrackVisibility>
        <TrackVisibility>
          <div className="shooting2">
            <img src={shooting} alt="Header Img" />
          </div>
        </TrackVisibility>
        <TrackVisibility>
          <div className="shooting3">
            <img src={shooting} alt="Header Img" />
          </div>
        </TrackVisibility>
        <TrackVisibility>
          <div className="shooting4">
            <img src={shooting} alt="Header Img" />
          </div>
        </TrackVisibility> */}

        {/* <div className="keyy">
          <img src={img} alt="Header Img" />
        </div> */}

        <Container>
          <Row className="aligh-items-center">
            <Col xs={12} md={6} xl={7}>
              <TrackVisibility>
                {({ isVisible }) => (
                  <div
                    className={
                      isVisible ? "animate__animated animate__fadeIn" : ""
                    }
                  >
                    <h1>
                      {`Hi! We `}{" "}
                      <span
                        className="txt-rotate"
                        data-rotate='[ "Web Developement", "Web Designs", "UI/UX Designs" ]'
                      >
                        <span className="wrap">{text}</span>
                      </span>
                    </h1>

                    <button className="contact">
                      <Link
                        to="/contactus"
                        exact
                        style={{ color: "whitesmoke" }}
                      >
                        Contact Us <ArrowRightCircle size={25} />
                      </Link>
                    </button>
                  </div>
                )}
              </TrackVisibility>
            </Col>

            <Col xs={12} md={6} xl={5}>
              <TrackVisibility>
                {/* {({ isVisible }) => (
                  // <div className={"img"}>
                  //   <img src={headerImg} alt="Header Img" />
                  // </div>
                  <div className="video-background">
                    <img className="video" src={sample} alt="Header Img" />
                  </div>
                )} */}
              </TrackVisibility>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default home;
