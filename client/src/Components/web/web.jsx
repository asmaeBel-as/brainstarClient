import React from "react";
import img from '../../Assets/devweb.jpg';
import Back from '../common/back'
import Heading from "../common/Heading";
import flutter from "../../Assets/python.png";
import react from "../../Assets/images (1).jpeg";
import php from "../../Assets/download.png";
import html from "../../Assets/html.png";
import css from "../../Assets/css.jpeg";
import cpp from "../../Assets/cpp.png";
import csharp from "../../Assets/csharp.png";
import JavaScript from "../../Assets/javascript.png";
import ruby from "../../Assets/ruby.jpeg";
import ang from "../../Assets/ang.png";
import mobileapp from "../../Assets/webb.jpeg";
import shape from "../../Assets/footer.png";
import './web.css'
import { Link } from "react-router-dom";
import { ChevronBarRight } from "react-bootstrap-icons";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Mobile = () => {
     useEffect(() => {
       Aos.init({ duration: 2000 });
     }, []);
    const scrollToTop = () => {
      window.scrollTo(0, 0);
    };
     const featured = [
       {
         cover: flutter,
         name: "Python",
        //  total: "122 Property",
       },
       {
         cover: html,
         name: "HTML5",
        //  total: "155 Property",
       },
       {
         cover: css,
         name: "CSS 3",
        //  total: "300 Property",
       },
       {
         cover: react,
         name: "ReactJS",
        // total: "80 Property",
       },
       {
         cover: php,
         name: "PHP",
        //  total: "80 Property",
       },
       {
         cover: JavaScript,
         name: "JavaScript",
        //  total: "80 Property",
       },
       {
         cover: ruby,
         name: "Ruby",
        //  total: "80 Property",
       },
       {
         cover: cpp,
         name: "C++",
        //  total: "80 Property",
       },
       {
         cover: csharp,
         name: "C#",
        //  total: "80 Property",
       },
       {
         cover: ang,
         name: "Angular",
        //  total: "80 Property",
       },
     ];
  return (
    <>
      <section className="about">
        <Back name="WEB DEVELOPMENT" title="What We Give?" cover={img} />
        <div className="container flex mtop">
          <div className="left row">
            <Heading
              title="WEB DEVELOPMENT"
              subtitle="What We Provide?"
              data-aos="fade-up"
              data-aos-duration="2100"
            />

            <p data-aos="fade-up" data-aos-duration="2100">
              The task of generating a positive first impression on a client
              falls on a website. As a result, your website should digitally
              represent the best aspects of your company. Brainstar Technologies
              is one of the greatest web development company in USA,
              specializing in virtual branding and high-tech website building.
              We create a website that is adaptable to any design. Including
              everything from mobile web development and responsive website
              design to custom e-commerce and intranet experiences using the
              most up-to-date and proven web technologies is one of the best web
              development in USA.
            </p>
            <p data-aos="fade-up" data-aos-duration="2100">
              Many of the world's biggest corporations, SMEs, and technological
              competitors choose Brainstartechnology as their partner of choice.
              Through custom software development, product design, QA, and
              consulting services, we help businesses increase their value. You
              may prototype, test, and validate your ideas using our product
              design service.
            </p>
          </div>
          <div className="swing">
            {" "}
            <div className="right row">
              <img src={img} alt="" style={{ width: "400rem" }} />
            </div>
          </div>
        </div>
      </section>

      <div
        className="featured container"
        data-aos="fade-up"
        data-aos-duration="2100"
      >
        <div className="content grid5 mtop">
          {featured.map((items, index) => (
            <div className="box" key={index}>
              <img src={items.cover} alt="" />
              <h4>{items.name}</h4>
              <label>{items.total}</label>
            </div>
          ))}
        </div>
      </div>
      <div
        className="ContainerGlass"
        data-aos="fade-up"
        data-aos-duration="2100"
      >
        <div class="canvas">
          <div class="circle"></div>
          <div id="cardss" class="cardss">
            <div className="text">
              <h3>Need An Awesome Marketing?</h3>
              <h5>We Provide :</h5>
              <div className="mini__cards text">
                <div
                  className="miniCard text"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  QUALITY
                </div>
                <div
                  className="miniCard text"
                  data-aos="fade-up"
                  data-aos-duration="1100"
                >
                  RELIABILITY
                </div>
                <div
                  className="miniCard text"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  EXPERTISE
                </div>
              </div>
            </div>
            <div class="mt-40">
              <Link to={"/contactus"} onClick={scrollToTop}>
                <a href="" className="buttons btn-lg btn-color btn-icon">
                  <span>Get In Touch</span>
                  <i>
                    {" "}
                    <ChevronBarRight />
                  </i>
                </a>
              </Link>
            </div>
          </div>
          <div className="imageGlassContainer">
            <img src={mobileapp} alt="" />
          </div>
          <div class="circle"></div>
        </div>
      </div>
      <div className="footer-image">
        <img src={shape} alt="Phot0 not responding" />
      </div>
    </>
  );
};
export default Mobile;
