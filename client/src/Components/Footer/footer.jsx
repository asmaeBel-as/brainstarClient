import React from "react";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Twitter from "@iconscout/react-unicons/icons/uil-twitter";
import Google from "@iconscout/react-unicons/icons/uil-google";
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin";
import { ImGooglePlus } from "react-icons/im";
import { BsTwitter } from "react-icons/bs";
import { AiFillMail } from "react-icons/ai";
import { BsChevronRight } from "react-icons/bs";
import { BsMailbox } from "react-icons/bs";
import logo from "../../Assets/logo.png";
import "./footer.css";
import { Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <section className="ffooter">
      <div className="footer" id="footer">
        <div className="waves">
          <div className="wave" id="wave1"></div>
          <div className="wave" id="wave2"></div>
          <div className="wave" id="wave3"></div>
          <div className="wave" id="wave4"></div>
        </div>
        <div className="footerContainer">
          {" "}
          <img src={logo} alt="" style={{ width: "300px" }} />
          <ul className="social_icon">
            <li>
              <a href="">
                <BsTwitter />
              </a>
            </li>
            <li>
              <a href="">
                <Facebook />
              </a>
            </li>
            <li>
              <a href="">
                {" "}
                <Insta />
              </a>
            </li>
            <li>
              <a href="">
                {" "}
                <Linkedin />
              </a>
            </li>
            <li>
              <a href="">
                {" "}
                <Google />
              </a>
            </li>
          </ul>
          <ul className="menu">
            <li>
              <Link to={"/"} onClick={scrollToTop}>
                {" "}
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link to={{ pathname: "/", hash: "#works" }} exact>
                About
              </Link>
            </li>
            <li>
              <Link to={"/AppDev"} onClick={scrollToTop}>
                <a>Services</a>
              </Link>
            </li>
            <li>
              <Link to={{ pathname: "/", hash: "skills" }} exact>
                Technologies
              </Link>
            </li>
            <li>
              <Link to={{ pathname: "/", hash: "#testimonials" }} exact>
                Testimonials
              </Link>
            </li>
            <li>
              <Link to={"/contactus"} onClick={scrollToTop}>
                {" "}
                <a>Contact</a>
              </Link>
            </li>
            <li>
              <Link to={"/blog"} onClick={scrollToTop}>
                <a>Blog</a>
              </Link>
            </li>
          </ul>
          <p>
            © 2023 <strong>Brain Star Technologies</strong>. All Rights
            Reserved.
          </p>
        </div>
      </div>
      <div className="main"></div>
    </section>
  );
};

export default Footer;
