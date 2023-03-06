import React from "react";
import mohit from "../../Assets/Mohit.jpg";
import img from "../../Assets/graphicd.png";
import uiux from "../../Assets/uiux.png";
import phone from "../../Assets/phone.jpg";
import web from "../../Assets/devweb.jpg";
import graphic from "../../Assets/graphicd.png";
import seo from "../../Assets/seo.jpg";
import digital from "../../Assets/digital.png";
import Aos from "aos";
import marke from '../../Assets/marketing2.png';
import se from "../../Assets/seo.jpg";
import "aos/dist/aos.css";
import { FaAward } from "react-icons/fa";

import services from "../../Assets/services.jpeg";
import shape from "../../Assets/footer.png";
import "./Appdev.css";
import waving from "../../Assets/wave-hand.gif";
import Modal from "react-bootstrap/Modal";
import Swal from "sweetalert2";


function MyVerticallyCenteredModal(props) {
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Body class="snip1195">
        <h4>Mobile App</h4>
        <div class="image">
          <img
            src="https://img.freepik.com/free-vector/mobile-phone-surrounded-by-colorful-app-icons_52683-23825.jpg?w=2000"
            alt="sq-sample14"
          />
        </div>
        <figcaption>
          <p>
            One of the most significant advantages of mobile apps for businesses
            is this. It aids in the establishment of a direct marketing channel
            between firms and their customers, allowing for immediate and
            effective connection. Here is your solution for searching for the
            best app development company in USA. and then you may install and
            send push and in-app alerts to as many clients as you want with your
            mobile app.
          </p>
        </figcaption>{" "}
        <button class="add-to-cart" onClick={props.onHide}>
          close
        </button>
      </Modal.Body>
    </Modal>
  );
}
function WebDev(props) {
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Body class="snip1195">
        <h4>Web Dev</h4>
        <div class="image">
          <img
            src="https://img.freepik.com/free-vector/desktop-smartphone-app-development_23-2148683810.jpg?w=2000"
            alt="sq-sample14"
          />
        </div>
        <figcaption>
          <p>
            The task of generating a positive first impression on a client falls
            on a website. As a result, your website should digitally represent
            the best aspects of your company. Brainstar Technologies is one of
            the greatest web development company in USA, specializing in virtual
            branding and high-tech website building. We create a website that is
            adaptable to any design. Including everything from mobile web
            development and responsive website design to custom e-commerce and
            intranet experiences using the most up-to-date and proven web
            technologies is one of the best web development in USA.
          </p>
        </figcaption>{" "}
        <button class="add-to-cart" onClick={props.onHide}>
          close
        </button>
      </Modal.Body>
    </Modal>
  );
}
function UxUi(props) {
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Body class="snip1195">
        <h4>UI/UX Design</h4>
        <div class="image">
          <img
            src="https://unit52.pk/wp-content/uploads/2021/08/UI-Design-Img.png"
            alt="sq-sample14"
          />
        </div>
        <figcaption>
          <p>
            UI/UX company works on aspects such as icons, style, colors, size,
            and visual components with the greatest team of web designers to
            give your business website a distinct appearance and feel. Your
            business website design will have a consistent and wonderful user
            experience thanks to the Brain star technologies UI UX design
            services.
          </p>
        </figcaption>{" "}
        <button class="add-to-cart" onClick={props.onHide}>
          close
        </button>
      </Modal.Body>
    </Modal>
  );
}
function Graphic(props) {
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Body class="snip1195">
        <h4>Graphic Design</h4>
        <div class="image">
          <img
            src="https://www.promoteabhi.com/public/frontend/images/graphic-designing/providing-creative.webp"
            alt="sq-sample14"
          />
        </div>
        <figcaption>
          <p>
            Graphic design has several advantages for organizations when applied
            well. It may help increase your marketing and advertising effort by
            providing excellent visual communication. It can assist in
            informing, educating, or persuading your target audience, as well as
            converting them into customers. It may help to promote your brand,
            so select the best graphic design services in USA wisely.
          </p>
        </figcaption>{" "}
        <button class="add-to-cart" onClick={props.onHide}>
          close
        </button>
      </Modal.Body>
    </Modal>
  );
}
function Seo(props) {
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Body class="snip1195">
        <h4>SEO</h4>
        <div class="image">
          <img
            src="https://ocdigitalnetwork.com/wp-content/uploads/2018/04/h3-image-2.png"
            alt="sq-sample14"
          />
        </div>
        <figcaption>
          <p>
            SEO is the technique of using search engine results to increase the
            number and quality of traffic to a website. Your website must appear
            on the first page of the search engine results when it is searched.
            Few people have the strength to continue on to the next page. Our
            cutting-edge SEO strategy ensures that you obtain a significant
            increase in traffic, allowing you to meet all of your company goals.
            Brain star technologies are one of the finest and best SEO services
            company in USA, who gives best SEO service results in all over the
            world.
          </p>
        </figcaption>{" "}
        <button class="add-to-cart" onClick={props.onHide}>
          close
        </button>
      </Modal.Body>
    </Modal>
  );
}
function Digital(props) {
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Body class="snip1195">
        <h4>Digital Marketing</h4>
        <div class="image">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSVbhm_Gmx293aUqOft3gh5v7DNECUfDJLL4UvA1z4Xfa-CaesBV7kmfzXYZ-GOpX9XB0&usqp=CAU"
            alt="sq-sample14"
          />
        </div>
        <figcaption>
          <p>
            Brain star technologies provide a wide range of digital marketing
            services (DMS), including SEO, SMM, and SEM, to help businesses
            become more productive. Brain star Technologies, one of the leading
            digital marketing agency in USA, can help your company grow in a way
            that is suited for it by providing solutions to improve its online
            presence.
          </p>
        </figcaption>{" "}
        <button class="add-to-cart" onClick={props.onHide}>
          close
        </button>
      </Modal.Body>
    </Modal>
  );
}

const Appdev = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [webShow, setWebShow] = React.useState(false);
  const [uxShow, setUxShow] = React.useState(false);
  const [SeoShow, setSeoShow] = React.useState(false);
  const [DigitalShow, setDigitalShow] = React.useState(false);
  const [GraphicShow, setGraphicShow] = React.useState(false);

  return (
    <>
      <section className="more" id="more">
        {/* <Back name="Services" title="Services -All Services" cover={img} /> */}
        <div className="sContainer service__container">
          <div className="ourServices">
            <div className="servicesImage">
              <img src={services} alt="" />
            </div>
          </div>
          <div className="ourServices__content">
            <div className="s__cards">
              <article className="s__card">
                <FaAward className="s_icon" />
                <h5>experience</h5>
                <small>3+ years Working</small>
              </article>
              <article className="s__card">
                <FaAward className="s_icon" />
                <h5>Clients</h5>
                <small>300+ different clients</small>
              </article>
              <article className="s__card">
                <FaAward className="s_icon" />
                <h5>Projects</h5>
                <small>600+ completed projects</small>
              </article>
              <article className="s__card">
                <FaAward className="s_icon" />
                <h5>Location</h5>
                <small>25+ worldwide locations</small>
              </article>
            </div>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum
              numquam iusto exercitationem libero maxime? Obcaecati dolores
              voluptates autem at tempore. Enim reiciendis veniam sit assumenda
              ipsam expedita maiores animi dolores?
            </p>
          </div>
        </div>
        <div className="Ccards">
          {" "}
          <div
            class="container"
            onClick={() => {
              Swal.fire({
                backdrop: `
    rgba(0,0,0,0.4)
    url(${waving})
    left top
    no-repeat
  `,
                imageUrl: phone,
                  imageWidth: 300,
                imageHeight: 200,
                imageAlt: "Custom image",
                html:
                  " One of the most significant advantages of mobile apps for businesses is this. It aids in the establishment of a direct marketing channel between firms and their customers, allowing for immediate and effective connection. Here is your solution for searching for the best app development company in USA. and then you may install and send push and in-app alerts to as many clients as you want with your mobile app.",
              });
            }}
          >
            <div class="container-cards">
              <div class="container-cards-surface container-cards-front">
                <div class="container-cards-front-image">
                  <img src={phone} alt="" />
                </div>
                <div class="container-cards-front-content">
                  <h2>Mobile Dev</h2>
                  <p>
                    {" "}
                    Mobile App Development offers a unique opportunity to reach
                    a big number of potential customers.
                  </p>
                </div>
                <div class="container-cards-front-label">Mobile</div>
                <div class="container-cards-front-button"></div>
              </div>
              <div class="container-cards-surface container-cards-back">
                <div class="container-cards-back-content"></div>
              </div>
            </div>
          </div>
          <div
            class="container"
            onClick={() => {
              Swal.fire({
                backdrop: `
    rgba(0,0,0,0.4)
    url(${waving})
    left top
    no-repeat
  `,
                imageUrl:web,
                  imageWidth: 300,
                imageHeight: 200,
                imageAlt: "Custom image",
                html:
                  " The task of generating a positive first impression on a client falls on a website. As a result, your website should digitally represent the best aspects of your company. Brainstar Technologies is one of the greatest web development company in USA, specializing in virtual branding and high-tech website building. We create a website that is adaptable to any design. Including everything from mobile web development and responsive website design to custom e-commerce and intranet experiences using the most up-to-date and proven web technologies is one of the best web development in USA.",
              });
            }}
          >
            <div class="container-cards">
              <div class="container-cards-surface container-cards-front">
                <div class="container-cards-front-image">
                  <img src={web} alt="" />
                </div>
                <div class="container-cards-front-content">
                  <h2>Web Dev</h2>
                  <p>
                    {" "}
                    Website creation is one of the strategies to assure your
                    company's success by telling people about the products.
                  </p>
                </div>
                <div class="container-cards-front-label">Web</div>
                <div class="container-cards-front-button"></div>
              </div>
              <div class="container-cards-surface container-cards-back1">
                <div class="container-cards-back-content"></div>
              </div>
            </div>
          </div>
          <div
            class="container"
            onClick={() => {
              Swal.fire({
                backdrop: `
    rgba(0,0,0,0.4)
    url(${waving})
    left top
    no-repeat
  `,
                imageUrl: uiux,
                imageWidth: 300,
                imageHeight: 200,
                imageAlt: "Custom image",
                html:
                  " UI/UX company works on aspects such as icons, style, colors, size, and visual components with the greatest team of web designers to give your business website a distinct appearance and feel. Your business website design will have a consistent and wonderful user experience thanks to the Brain star technologies UI UX design services.",
              });
            }}
          >
            <div class="container-cards">
              <div class="container-cards-surface container-cards-front">
                <div class="container-cards-front-image">
                  <img src={uiux} alt="" />
                </div>
                <div class="container-cards-front-content">
                  <h2>UI/UX Design</h2>
                  <p>
                    {" "}
                    Build the product you need on time with an experienced team
                    that uses a clear and effective design process.
                  </p>
                </div>
                <div class="container-cards-front-label">Design</div>
                <div class="container-cards-front-button"></div>
              </div>
              <div class="container-cards-surface container-cards-back2">
                <div class="container-cards-back-content"></div>
              </div>
            </div>
          </div>
          <div
            class="container"
            onClick={() => {
              Swal.fire({
                backdrop: `
    rgba(0,0,0,0.4)
    url(${waving})
    left top
    no-repeat
  `,
                imageUrl:
                  img,
                imageWidth: 300,
                imageHeight: 200,
                imageAlt: "Custom image",
                html:
                  "Graphic design has several advantages for organizations when applied well. It may help increase your marketing and advertising effort by providing excellent visual communication. It can assist in informing, educating, or persuading your target audience, as well as converting them into customers. It may help to promote your brand, so select the best graphic design services in USA wisely.",
              });
            }}
          >
            <div class="container-cards">
              <div class="container-cards-surface container-cards-front">
                <div class="container-cards-front-image">
                  <img src={graphic} alt="" />
                </div>
                <div class="container-cards-front-content">
                  <h2>Graphic Design</h2>
                  <p>
                    {" "}
                    Graphic design is essential for developing a professional
                    brand and optimising your marketing efforts across all
                    media.
                  </p>
                </div>
                <div class="container-cards-front-label">Graphic</div>
                <div class="container-cards-front-button"></div>
              </div>
              <div class="container-cards-surface container-cards-back3">
                <div class="container-cards-back-content"></div>
              </div>
            </div>
          </div>
          <div
            class="container"
            onClick={() => {
              Swal.fire({
                backdrop: `
    rgba(0,0,0,0.4)
    url(${waving})
    left top
    no-repeat
  `,
                imageUrl:
                  se,
                imageWidth: 300,
                imageHeight: 200,
                imageAlt: "Custom image",
                html:
                  "SEO is the technique of using search engine results to increase the number and quality of traffic to a website. Your website must appear on the first page of the search engine results when it is searched.Few people have the strength to continue on to the next page. Our cutting-edge SEO strategy ensures that you obtain a significant increase in traffic, allowing you to meet all of your company goals. Brain star technologies are one of the finest and best SEO services company in USA, who gives best SEO service results in all over the world.",
              });
            }}
          >
            <div class="container-cards">
              <div class="container-cards-surface container-cards-front">
                <div class="container-cards-front-image">
                  <img src={seo} alt="" />
                </div>
                <div class="container-cards-front-content">
                  <h2>SEO</h2>
                  <p>
                    {" "}
                    SEO is the technique of using search engine results to
                    increase the number and quality of traffic to a website.
                  </p>
                </div>
                <div class="container-cards-front-label">SEO</div>
                <div class="container-cards-front-button"></div>
              </div>
              <div class="container-cards-surface container-cards-back4">
                <div class="container-cards-back-content"></div>
              </div>
            </div>
          </div>
          <div
            class="container"
            onClick={() => {
              Swal.fire({
                backdrop: `
    rgba(0,0,0,0.4)
    url(${waving})
    left top
    no-repeat
  `,
                imageUrl: marke,
                imageWidth: 300,
                imageHeight: 200,
                imageAlt: "Custom image",
                html:
                  "  Brain star technologies provide a wide range of digital marketing services (DMS), including SEO, SMM, and SEM, to help businesses become more productive. Brain star Technologies, one of the leading digital marketing agency in USA, can help your company grow in a way that is suited for it by providing solutions to improve its online presence.",
              });
            }}
          >
            <div class="container-cards">
              <div class="container-cards-surface container-cards-front">
                <div class="container-cards-front-image">
                  <img src={digital} alt="" />
                </div>
                <div class="container-cards-front-content">
                  <h2>Digital Marketing</h2>
                  <p>
                    {" "}
                    Our goal is to increase your sales. And one of the most
                    important instruments for doing so is digital marketing.
                  </p>
                </div>
                <div class="container-cards-front-label">Marketing</div>
                <div class="container-cards-front-button"></div>
              </div>
              <div class="container-cards-surface container-cards-back5">
                <div class="container-cards-back-content"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="ffooter-image">
          <img src={shape} alt="Phot0 not responding" />
        </div>
      </section>
      <WebDev show={webShow} onHide={() => setWebShow(false)} />
      <UxUi show={uxShow} onHide={() => setUxShow(false)} />
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <Seo show={SeoShow} onHide={() => setSeoShow(false)} />
      <Digital show={DigitalShow} onHide={() => setDigitalShow(false)} />
      <Graphic show={GraphicShow} onHide={() => setGraphicShow(false)} />
    </>
  );
};
export default Appdev;
