import React from "react";
import img from "../../Assets/mobile.svg";
import Back from "../common/back";
import Heading from "../common/Heading";
import flutter from "../../Assets/images.jpeg";
import react from "../../Assets/images (1).jpeg";
import kotlin from "../../Assets/download (1).jpeg";
import java from "../../Assets/java2.png";
import swift from "../../Assets/swift-og.png";
import javascript from "../../Assets/javascript.png";
import ruby from "../../Assets/ruby.jpeg";
import csharp from "../../Assets/csharp.png";
import cpp from "../../Assets/cpp.png";
import rust from "../../Assets/rust.jpeg";
import mobileapp from "../../Assets/mobileapp.jpg";
import shape from "../../Assets/footer.png";
import "./mobile.css";
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
      name: "Flutter Frameworks",
      total: "50+ Developed",
    },
    {
      cover: java,
      name: "Java Frameworks",
      total: "25+ Delivered",
    },
    {
      cover: swift,
      name: "Swift Frameworks",
      total: "30+ IOS",
    },
    {
      cover: react,
      name: "React Native",
      total: "20+ App ",
    },
    {
      cover: kotlin,
      name: "Kotlin Frameworks",
      total: "10+ Apps",
    },
    {
      cover: javascript,
      name: "JavaScript",
      total: "30+ Apps",
    },
    {
      cover: ruby,
      name: "Ruby",
      total: "10+ Apps",
    },
    {
      cover: cpp,
      name: "C++",
      total: "26+ Apps",
    },
    {
      cover: csharp,
      name: "Csharp",
      total: "20+ Apps",
    },
    {
      cover: rust,
      name: "Rust Frameworks",
      total: "15+ Apps",
    },
  ];
  return (
    <>
      <section className="about">
        <Back name="App Development" title="What We Give?" cover={img} />
        <div className="container flex mtop">
          <div className="left row">
            <Heading
              title="APP DEVELOPMENT"
              subtitle="Why App Development Important ?"
              data-aos="fade-up"
              data-aos-duration="2100"
            />
            <p data-aos="fade-up" data-aos-duration="2100">
              One of the most significant advantages of mobile apps for
              businesses is this. It aids in the establishment of a direct
              marketing channel between firms and their customers, allowing for
              immediate and effective connection. Here is your solution for
              searching for the best app development company in USA. and then
              you may install and send push and in-app alerts to as many clients
              as you want with your mobile app.
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
              <img src={img} alt="" style={{ width: "300rem" }} />
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
          <div id="cardss" className="cardss">
            <div className="text">
              <h3>Need An Awesome Application?</h3>
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
        <a
          target="_blank"
          title="instagram/web__addict"
          href="https://www.instagram.com/web__addict/"
        >
          <i class="fab fa-instagram"></i>
        </a>
      </div>
      <div className="footer-image">
        <img src={shape} alt="Phot0 not responding" />
      </div>
    </>
  );
};
export default Mobile;
