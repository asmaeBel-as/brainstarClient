import React from "react";
import { GiTechnoHeart } from "react-icons/gi";
import "./Founders.css";
import sumit from "../../Assets/sumit.jpg";
import mohit from "../../Assets/Mohit.jpg";
import kelley from "../../Assets/kelley.jpeg";
import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";
import { Container, Row, Col, Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { RiTeamLine } from "react-icons/ri";
import { ChevronBarRight } from "react-bootstrap-icons";
import { FaConnectdevelop } from "react-icons/fa";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      dialogClassName={"founderModal"}
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Mohit Kumar
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="mohit" id="mohit">
          {/* left side */}
          <Container>
            <Row className="align-items-center">
              <Col size={12} md={6}>
                <div className="imageContainer">
                  <img src={mohit} alt="" />
                </div>
              </Col>
              <Col size={12} md={6}>
                <spane data-aos="fade-up-left" data-aos-duration="1100">
                  Mr. Mohit Kumar is the Chief Financial Officer of the company.
                  He holds an LLB degree and comes with deep knowledge of
                  tracking cash flow and financial planning as well as analyzing
                  the company’s financial strengths and weaknesses and proposing
                  corrective actions. He is also responsible for the planning,
                  implementation, managing, and running of all the finance
                  activities of a company, including business planning,
                  budgeting, forecasting, and negotiations. Also, he does
                  internal and external financial reporting, stewardship of a
                  company’s assets, and ownership of cash management. He started
                  the organization back in 2016 with Mr. Sumit Kumar and has
                  been an asset to the organization since then. He is a
                  motivated person with a high degree of professionalism,
                  confidentiality, and integrity. He’s worked really hard over
                  the years and progressed steadily, revealing his passion and
                  enthusiasm for his position at the organization. These 5 years
                  as a CEO, his performance has been commendable. Mr. Kumar is
                  an effective, independent professional who is always the first
                  to volunteer to take an additional task, and often puts in
                  work hours equivalent to full-time staff.
                </spane>
              </Col>

              <div class="relative__container">
                <div class="full__width object__fit">
                  <img
                    src="https://res.cloudinary.com/diod8pjhj/image/upload/v1670218349/bluegears2_sswjhb.jpg"
                    alt="background picture"
                  />
                  <div class="absolute">
                    {/* <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon"
                      viewBox="0 0 512 512"
                    >
                      <path
                        d="M436.67 184.11a27.17 27.17 0 01-38.3 0l-22.48-22.49a27.15 27.15 0 010-38.29l50.89-50.89a.85.85 0 00-.26-1.38C393.68 57 351.09 64.15 324.05 91c-25.88 25.69-27.35 64.27-17.87 98a27 27 0 01-7.67 27.14l-173 160.76a40.76 40.76 0 1057.57 57.54l162.15-173.3a27 27 0 0126.77-7.7c33.46 8.94 71.49 7.26 97.07-17.94 27.49-27.08 33.42-74.94 20.1-102.33a.85.85 0 00-1.36-.22z"
                        fill="none"
                        stroke-linecap="round"
                        stroke-miterlimit="10"
                        stroke-width="20"
                      />
                      <path
                        d="M224 284c-17.48-17-25.49-24.91-31-30.29a18.24 18.24 0 01-3.33-21.35 20.76 20.76 0 013.5-4.62l15.68-15.29a18.66 18.66 0 015.63-3.87 18.11 18.11 0 0120 3.62c5.45 5.29 15.43 15 33.41 32.52M317.07 291.3c40.95 38.1 90.62 83.27 110 99.41a13.46 13.46 0 01.94 19.92L394.63 444a14 14 0 01-20.29-.76c-16.53-19.18-61.09-67.11-99.27-107"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="20"
                      />
                      <path
                        d="M17.34 193.5l29.41-28.74a4.71 4.71 0 013.41-1.35 4.85 4.85 0 013.41 1.35h0a9.86 9.86 0 008.19 2.77c3.83-.42 7.92-1.6 10.57-4.12 6-5.8-.94-17.23 4.34-24.54a207 207 0 0119.78-22.6c6-5.88 29.84-28.32 69.9-44.45A107.31 107.31 0 01206.67 64c22.59 0 40 10 46.26 15.67a89.54 89.54 0 0110.28 11.64 78.92 78.92 0 00-9.21-2.77 68.82 68.82 0 00-20-1.26c-13.33 1.09-29.41 7.26-38 14-13.9 11-19.87 25.72-20.81 44.71-.68 14.12 2.72 22.1 36.1 55.49a6.6 6.6 0 01-.34 9.16l-18.22 18a6.88 6.88 0 01-9.54.09c-21.94-21.94-36.65-33.09-45-38.16s-15.07-6.5-18.3-6.85a30.85 30.85 0 00-18.27 3.87 11.39 11.39 0 00-2.64 2 14.14 14.14 0 00.42 20.08l1.71 1.6a4.63 4.63 0 010 6.64L71.73 246.6a4.71 4.71 0 01-3.41 1.4 4.86 4.86 0 01-3.41-1.35l-47.57-46.43a4.88 4.88 0 010-6.72z"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="20"
                      />
                    </svg> */}
                    <h1>Message from our CEO</h1>
                    <p className="p">
                      "People have believed that the CEO's responsibility was to
                      advise you whenever you didn't have enough budget or to
                      solely report economic performance after the fact. CEOs
                      must now think of themselves as more of a strategic
                      position in the organization, instead of a number
                      cruncher. I today am proactive, comprehending industry
                      standards, and know how to maximize the company's
                      potential. It the essential for someone to reduce the
                      deficit, analyze the figures, and do crucial routine tasks
                      that will always exist, but today’s modern CEO position is
                      substantially more dynamic. Looking forward to make
                      Brainstar Technologies one of the finest financially
                      stable organizations around the globe. "
                    </p>
                  </div>
                </div>
              </div>
            </Row>
          </Container>
          {/* dark Mode */}
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} className="close-btn">
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
function Sumit(props) {
  return (
    <Modal
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      dialogClassName={"founderModal"}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Sumit Kumar
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="Sumit" id="Sumit">
          {/* left side */}
          <Container>
            <Row className="align-items-center">
              <Col size={12} md={6}>
                <div className="imageContainer">
                  <img src={sumit} alt="" />
                </div>
              </Col>
              <Col size={12} md={6}>
                <spane data-aos="fade-up-left" data-aos-duration="1100">
                  Mr. Sumit Kumar is the Chief Executive Officer of the company.
                  He holds a master degree in Computer Applications and comes
                  with deep knowledge of software development solutions that
                  includes Enterprise and SaaS Applications, Website Design and
                  Development, Product Engineering, Content Management System,
                  Customer Relationship Management, Travel Portal and E-commerce
                  solutions. He started the organization back in 2016 and has
                  been amusing the industry since then. His unmatched strengths
                  are understanding clients’ needs and improving business ROI as
                  a whole. For 5 years as a CEO, his performance has been
                  exceptional. His management style is extremely accessible and
                  he is a very hands-on administrator. He is fearless in his
                  business approach and his instincts are impeccable. Mr. Kumar
                  has turned the little company into an industry powerhouse over
                  the years and he managed to do it while still making friends
                  in the industry.
                </spane>
              </Col>
              <div class="relative__container">
                <div class="full__width object__fit">
                  <img
                    src="https://res.cloudinary.com/diod8pjhj/image/upload/v1670218349/bluegears2_sswjhb.jpg"
                    alt="background picture"
                  />
                  <div class="absolute">
                    {/* <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon"
                      viewBox="0 0 512 512"
                    >
                      <path
                        d="M436.67 184.11a27.17 27.17 0 01-38.3 0l-22.48-22.49a27.15 27.15 0 010-38.29l50.89-50.89a.85.85 0 00-.26-1.38C393.68 57 351.09 64.15 324.05 91c-25.88 25.69-27.35 64.27-17.87 98a27 27 0 01-7.67 27.14l-173 160.76a40.76 40.76 0 1057.57 57.54l162.15-173.3a27 27 0 0126.77-7.7c33.46 8.94 71.49 7.26 97.07-17.94 27.49-27.08 33.42-74.94 20.1-102.33a.85.85 0 00-1.36-.22z"
                        fill="none"
                        stroke-linecap="round"
                        stroke-miterlimit="10"
                        stroke-width="20"
                      />
                      <path
                        d="M224 284c-17.48-17-25.49-24.91-31-30.29a18.24 18.24 0 01-3.33-21.35 20.76 20.76 0 013.5-4.62l15.68-15.29a18.66 18.66 0 015.63-3.87 18.11 18.11 0 0120 3.62c5.45 5.29 15.43 15 33.41 32.52M317.07 291.3c40.95 38.1 90.62 83.27 110 99.41a13.46 13.46 0 01.94 19.92L394.63 444a14 14 0 01-20.29-.76c-16.53-19.18-61.09-67.11-99.27-107"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="20"
                      />
                      <path
                        d="M17.34 193.5l29.41-28.74a4.71 4.71 0 013.41-1.35 4.85 4.85 0 013.41 1.35h0a9.86 9.86 0 008.19 2.77c3.83-.42 7.92-1.6 10.57-4.12 6-5.8-.94-17.23 4.34-24.54a207 207 0 0119.78-22.6c6-5.88 29.84-28.32 69.9-44.45A107.31 107.31 0 01206.67 64c22.59 0 40 10 46.26 15.67a89.54 89.54 0 0110.28 11.64 78.92 78.92 0 00-9.21-2.77 68.82 68.82 0 00-20-1.26c-13.33 1.09-29.41 7.26-38 14-13.9 11-19.87 25.72-20.81 44.71-.68 14.12 2.72 22.1 36.1 55.49a6.6 6.6 0 01-.34 9.16l-18.22 18a6.88 6.88 0 01-9.54.09c-21.94-21.94-36.65-33.09-45-38.16s-15.07-6.5-18.3-6.85a30.85 30.85 0 00-18.27 3.87 11.39 11.39 0 00-2.64 2 14.14 14.14 0 00.42 20.08l1.71 1.6a4.63 4.63 0 010 6.64L71.73 246.6a4.71 4.71 0 01-3.41 1.4 4.86 4.86 0 01-3.41-1.35l-47.57-46.43a4.88 4.88 0 010-6.72z"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="20"
                      />
                    </svg> */}
                    <h1>Message from our CEO</h1>
                    <p className="p">
                      "As you navigate our website, I hope you learn more about
                      the qualities that make our company an outstanding
                      provider of essential digital solution services and a
                      wonderful place to build a career. "
                    </p>
                  </div>
                </div>
              </div>
            </Row>
          </Container>
          {/* dark Mode */}
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} className="close-btn">
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
function Kelley(props) {
  return (
    <Modal
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      dialogClassName={"founderModal"}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          KELLEY PHELAN
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="mohit" id="mohit">
          {/* left side */}
          <Container>
            <Row className="align-items-center">
              <Col size={12} md={6}>
                <div className="imageContainer">
                  <img src={kelley} alt="" />
                </div>
              </Col>
              <Col size={12} md={6}>
                <spane data-aos="fade-up-left" data-aos-duration="1100">
                  I went to Fashion Careers College in San Diego, CA. Honor
                  student with perfect attendance. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Dolorum vitae eligendi fugit
                  atque numquam maxime minus consequuntur in quia? Quaerat
                  minima autem pariatur, magnam officia recusandae quas
                  laudantium ea perspiciatis?
                </spane>
              </Col>
              <div class="rrelative__container">
                <div class="full__width object__fit">
                  <img
                    src="https://res.cloudinary.com/diod8pjhj/image/upload/v1670218349/bluegears2_sswjhb.jpg"
                    alt="background picture"
                  />
                  <div class="absolute">
                    {/* <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon"
                      viewBox="0 0 512 512"
                    >
                      <path
                        d="M436.67 184.11a27.17 27.17 0 01-38.3 0l-22.48-22.49a27.15 27.15 0 010-38.29l50.89-50.89a.85.85 0 00-.26-1.38C393.68 57 351.09 64.15 324.05 91c-25.88 25.69-27.35 64.27-17.87 98a27 27 0 01-7.67 27.14l-173 160.76a40.76 40.76 0 1057.57 57.54l162.15-173.3a27 27 0 0126.77-7.7c33.46 8.94 71.49 7.26 97.07-17.94 27.49-27.08 33.42-74.94 20.1-102.33a.85.85 0 00-1.36-.22z"
                        fill="none"
                        stroke-linecap="round"
                        stroke-miterlimit="10"
                        stroke-width="20"
                      />
                      <path
                        d="M224 284c-17.48-17-25.49-24.91-31-30.29a18.24 18.24 0 01-3.33-21.35 20.76 20.76 0 013.5-4.62l15.68-15.29a18.66 18.66 0 015.63-3.87 18.11 18.11 0 0120 3.62c5.45 5.29 15.43 15 33.41 32.52M317.07 291.3c40.95 38.1 90.62 83.27 110 99.41a13.46 13.46 0 01.94 19.92L394.63 444a14 14 0 01-20.29-.76c-16.53-19.18-61.09-67.11-99.27-107"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="20"
                      />
                      <path
                        d="M17.34 193.5l29.41-28.74a4.71 4.71 0 013.41-1.35 4.85 4.85 0 013.41 1.35h0a9.86 9.86 0 008.19 2.77c3.83-.42 7.92-1.6 10.57-4.12 6-5.8-.94-17.23 4.34-24.54a207 207 0 0119.78-22.6c6-5.88 29.84-28.32 69.9-44.45A107.31 107.31 0 01206.67 64c22.59 0 40 10 46.26 15.67a89.54 89.54 0 0110.28 11.64 78.92 78.92 0 00-9.21-2.77 68.82 68.82 0 00-20-1.26c-13.33 1.09-29.41 7.26-38 14-13.9 11-19.87 25.72-20.81 44.71-.68 14.12 2.72 22.1 36.1 55.49a6.6 6.6 0 01-.34 9.16l-18.22 18a6.88 6.88 0 01-9.54.09c-21.94-21.94-36.65-33.09-45-38.16s-15.07-6.5-18.3-6.85a30.85 30.85 0 00-18.27 3.87 11.39 11.39 0 00-2.64 2 14.14 14.14 0 00.42 20.08l1.71 1.6a4.63 4.63 0 010 6.64L71.73 246.6a4.71 4.71 0 01-3.41 1.4 4.86 4.86 0 01-3.41-1.35l-47.57-46.43a4.88 4.88 0 010-6.72z"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="20"
                      />
                    </svg> */}
                    <h1>Message from our CEO</h1>
                    <p className="p">
                      "People have believed that the CEO's responsibility was to
                      advise you whenever you didn't have enough budget or to
                      solely report economic performance after the fact. CEOs
                      must now think of themselves as more of a strategic
                      position in the organization, instead of a number
                      cruncher. I today am proactive, comprehending industry
                      standards, and know how to maximize the company's
                      potential. It the essential for someone to reduce the
                      deficit, analyze the figures, and do crucial routine tasks
                      that will always exist, but today’s modern CEO position is
                      substantially more dynamic. Looking forward to make
                      Brainstar Technologies one of the finest financially
                      stable organizations around the globe. "
                    </p>
                  </div>
                </div>
              </div>
            </Row>
          </Container>
          {/* dark Mode */}
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} className="close-btn">
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

const Founders = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [sumitShow, setSumitShow] = React.useState(false);
  const [KelleyShow, setKelleyShow] = React.useState(false);
  return (
    <>
      <h4 class="separatorf">
        <i>
          <FaConnectdevelop />{" "}
        </i>
      </h4>
      {/* <section className="founders padding">
        <div className="container">
          <div
            className="content grid3 ltop"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <div className="box">
              <img src={sumit} alt="" />
              
            </div>
            <div className="box">
              <img src={mohit} alt="" />
              
            </div>
            <div className="box">
              <img src={kelley} alt="" />
              
            </div>
          </div>
        </div>
      </section> */}
      <div className="program__headf">
        <span data-aos="fade-up" data-aos-duration="2000">
          {<RiTeamLine />}
        </span>
        <h2 data-aos="fade-up" data-aos-duration="2100">
          Our Founders
        </h2>
      </div>
      <section className="founders">
        <div className="cardFounder">
          <div className="image__container">
            <img src={sumit} alt="" />
          </div>
          <div className="founder_content">
            <div className="details">
              <h2>
                Sumit Kumar <br />
                <span>CEO</span>{" "}
              </h2>

              <div className="data"></div>
              <div className="actions__button">
                <button onClick={() => setSumitShow(true)}>More</button>
                <button>
                  <a href="https://www.linkedin.com/in/sumitkumar2610/">
                    {" "}
                    Contact
                  </a>{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="cardFounder">
          <div className="image__container">
            <img src={mohit} alt="" />
          </div>
          <div className="founder_content">
            <div className="details">
              <h2>
                MOHIT KUMAR <br />
                <span>CEO</span>{" "}
              </h2>

              <div className="data"></div>
              <div className="actions__button">
                <button onClick={() => setModalShow(true)}>More</button>
                <button>
                  <a href="https://www.linkedin.com/in/mohit-thakur-b32a5b51/">
                    {" "}
                    Contact
                  </a>{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="cardFounder">
          <div className="image__container">
            <img src={kelley} alt="" />
          </div>
          <div className="founder_content">
            <div className="details">
              <h2>
                KELLEY PHELAN <br />
                <span>CEO</span>{" "}
              </h2>

              <div className="data"></div>
              <div className="actions__button">
                <button onClick={() => setKelleyShow(true)}>More</button>
                <button>
                  {" "}
                  <a href="https://www.linkedin.com/in/kelley-phelan-268083234/">
                    Contact
                  </a>{" "}
                </button>
              </div>
            </div>
          </div>
        </div>

        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
        <Sumit show={sumitShow} onHide={() => setSumitShow(false)} />
        <Kelley show={KelleyShow} onHide={() => setKelleyShow(false)} />
      </section>
    </>
  );
};

export default Founders;
