import React, { useEffect } from "react";
import img from "../../Assets/digital.jpg";
import Back from "../common/back";
import Heading from "../common/Heading";
import flutter from "../../Assets/email.png";
import react from "../../Assets/pay.png";
import seo from "../../Assets/seo.png";
import php from "../../Assets/content.jpg";
import affi from "../../Assets/affi.png";
import Analysis from "../../Assets/download (2).jpeg";
import research from "../../Assets/download (3).jpeg";
import internet from "../../Assets/internet.jpeg";
import html from "../../Assets/scm.jpg";
import unsplash from "../../Assets/unsplash.jpg";
import css from "../../Assets/viral.png";
import mobileapp from "../../Assets/marketing2.png";
import shape from "../../Assets/footer.png";
import "./digital.css";
import { ChevronBarRight } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

const Digital = () => {
    useEffect(() => {
      Aos.init({ duration: 2000 });
    }, []);
      const scrollToTop = () => {
        window.scrollTo(0, 0);
      };
  const featured = [
    {
      cover: flutter,
      name: "Email Marketing",
      //  total: "122 Property",
    },
    {
      cover: html,
      name: "Social Media",
      //  total: "155 Property",
    },
    {
      cover: css,
      name: "Viral Marketing",
      //  total: "300 Property",
    },
    {
      cover: react,
      name: "Pay Per Click",
      // total: "80 Property",
    },
    {
      cover: php,
      name: "Content Marketing",
      //  total: "80 Property",
    },
    {
      cover: seo,
      name: "Seo Marketing",
      //  total: "80 Property",
    },
    {
      cover: research,
      name: "Research Marketing",
      //  total: "80 Property",
    },
    {
      cover: Analysis,
      name: "Analysis Marketing",
      //  total: "80 Property",
    },
    {
      cover: internet,
      name: "Internet Marketing",
      //  total: "80 Property",
    },
    {
      cover: affi,
      name: "Affilitate Marketing",
      //  total: "80 Property",
    },
  ];
  return (
    <>
      <section className="about">
        <Back name="DIGITAL MARKETING" title="What We Give?" cover={img} />
        <div className="container flex mtop">
          <div className="left row">
            <Heading
              title="DIGITAL MARKETING"
              subtitle="What We Provide? ?"
              data-aos="fade-up"
              data-aos-duration="2100"
            />
            <p data-aos="fade-up" data-aos-duration="2100">
              Brain star technologies provide a wide range of digital marketing
              services (DMS), including SEO, SMM, and SEM, to help businesses
              become more productive. Brain star Technologies, one of the
              leading digital marketing agency in USA, can help your company
              grow in a way that is suited for it by providing solutions to
              improve its online presence.
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
                  data-aos="fade-up-left"
                  data-aos-duration="1000"
                >
                  QUALITY
                </div>
                <div
                  className="miniCard text"
                  data-aos="fade-up-left"
                  data-aos-duration="1100"
                >
                  RELIABILITY
                </div>
                <div
                  className="miniCard text"
                  data-aos="fade-up-left"
                  data-aos-duration="1200"
                >
                  EXPERTISE
                </div>
              </div>
            </div>
            <div
              class="mt-40"
              data-aos="fade-up-right"
              data-aos-duration="1000"
            >
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
export default Digital;
