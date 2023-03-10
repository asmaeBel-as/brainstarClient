import React, { useEffect, useState } from "react";
import "./navbar.css";
import { NavLink, useLocation } from "react-router-dom";
import { Link } from "react-scroll-trigger";
import logo from "../../Assets/logo.png";
import { FaBlog, FaCode } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa"; 
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";
import { FiMail } from "react-icons/fi";
import { animateScroll } from "react-scroll";
import {
  Instagram,
  Twitter,
} from "react-bootstrap-icons";
const Navbar = () => {

  
   function animation() {
     const tabsNewAnim = document.querySelector("#navbarSupportedContent");
     const activeItemNewAnim = tabsNewAnim.querySelector(".active");
     const activeWidthNewAnimHeight = activeItemNewAnim.clientHeight;
     const activeWidthNewAnimWidth = activeItemNewAnim.clientWidth;
     const itemPosNewAnimTop = activeItemNewAnim.offsetTop;
     const itemPosNewAnimLeft = activeItemNewAnim.offsetLeft;
     const horiSelector = document.querySelector(".hori-selector");
     horiSelector.style.top = itemPosNewAnimTop + "px";
     horiSelector.style.left = itemPosNewAnimLeft + "px";
     horiSelector.style.height = activeWidthNewAnimHeight + "px";
     horiSelector.style.width = activeWidthNewAnimWidth + "px";
     tabsNewAnim.addEventListener("click", function(e) {
       const target = e.target.closest("li");
       if (target) {
         const activeWidthNewAnimHeight = target.clientHeight;
         const activeWidthNewAnimWidth = target.clientWidth;
         const itemPosNewAnimTop = target.offsetTop;
         const itemPosNewAnimLeft = target.offsetLeft;
         document
           .querySelectorAll("#navbarSupportedContent ul li")
           .forEach((li) => li.classList.remove("active"));
         target.classList.add("active");
         horiSelector.style.top = itemPosNewAnimTop + "px";
         horiSelector.style.left = itemPosNewAnimLeft + "px";
         horiSelector.style.height = activeWidthNewAnimHeight + "px";
         horiSelector.style.width = activeWidthNewAnimWidth + "px";
       }
     });
   }
   useEffect(() => {
     animation();
     function handleResize() {
       setTimeout(function() {
            const tabsNewAnim = document.querySelector(
              "#navbarSupportedContent"
            );
            const activeItemNewAnim = tabsNewAnim.querySelector(".active");
            const activeWidthNewAnimHeight = activeItemNewAnim.clientHeight;
            const activeWidthNewAnimWidth = activeItemNewAnim.clientWidth;
            const itemPosNewAnimTop = activeItemNewAnim.offsetTop;
            const itemPosNewAnimLeft = activeItemNewAnim.offsetLeft;
            const horiSelector = document.querySelector(".hori-selector");
            horiSelector.style.top = itemPosNewAnimTop + "px";
            horiSelector.style.left = itemPosNewAnimLeft + "px";
            horiSelector.style.height = activeWidthNewAnimHeight + "px";
            horiSelector.style.width = activeWidthNewAnimWidth + "px";
            tabsNewAnim.addEventListener("click", function(e) {
              const target = e.target.closest("li");
              if (target) {
                const activeWidthNewAnimHeight = target.clientHeight;
                const activeWidthNewAnimWidth = target.clientWidth;
                const itemPosNewAnimTop = target.offsetTop;
                const itemPosNewAnimLeft = target.offsetLeft;
                document
                  .querySelectorAll("#navbarSupportedContent ul li")
                  .forEach((li) => li.classList.remove("active"));
                target.classList.add("active");
                horiSelector.style.top = itemPosNewAnimTop + "px";
                horiSelector.style.left = itemPosNewAnimLeft + "px";
                horiSelector.style.height = activeWidthNewAnimHeight + "px";
                horiSelector.style.width = activeWidthNewAnimWidth + "px";
              }
            });
         window.addEventListener("scroll", function() {
    const activeItemNewAnim = tabsNewAnim.querySelector(".active");
    const itemPosNewAnimTop = activeItemNewAnim.offsetTop;
    const itemPosNewAnimLeft = activeItemNewAnim.offsetLeft;
    horiSelector.style.top = itemPosNewAnimTop + "px";
    horiSelector.style.left = itemPosNewAnimLeft + "px";
  });
       }, 100);
     }
     window.addEventListener("resize", handleResize);
     return () => {
       window.removeEventListener("resize", handleResize);
     };
   }, []);

  
  const [active, setActive] = useState("navBar");

  //code statement to add a background color to the header.
  const [transparent, setTransparent] = useState("header");
  const addBg = () => {
    if (window.scrollY >= 10) {
      setTransparent("header activeHeader");
    } else {
      setTransparent("header");
    }
  };
  window.addEventListener("scroll", addBg);
  return (
    <>
      <div id="top-header">
        <div className="container">
          <ul className="header-links pull-left">
            <li>
              <a href="">
                <i>
                  <FiMail />
                </i>
              </a>
            </li>
            <span className="info">
              <a className="a" href="">
                {" "}
                info@brainstartechnologies.com
              </a>
            </span>
          </ul>
          <ul className="header-links pull-right">
            <li>
              <a href="https://www.facebook.com/brainstartech">
                <i>
                  <FaFacebook />
                </i>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/brain-star-technologies/">
                <i>
                  <FaLinkedin />
                </i>
              </a>
            </li>
            <li>
              <a href="https://wa.me/+917986324471">
                <i>
                  <FaWhatsapp />
                </i>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/BrainStarTech">
                <i>
                  <Twitter />
                </i>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/brainstartechnologies">
                <i>
                  <Instagram />
                </i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg navbar-mainbg">
        <NavLink to="/" exact className="logo flex">
          <img src={logo} alt="" style={{ width: "200px" }} />
        </NavLink>

        <button
          className="navbar-toggler"
          onClick={function() {
            setTimeout(function() {
              animation();
            });
          }}
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars text-white"></i>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <div className="hori-selector">
              <div className="left"></div>
              <div className="right"></div>
            </div>

            <li className="nav-item active">
              <NavLink className="nav-link" to="/" exact>
                <i className="fas fa-tachometer-alt"></i>Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className="navLink"
                to={{ pathname: "/", hash: "#about" }}
                exact
              >
                <i className="far fa-address-book"></i>About
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/services" exact>
                <i className="far fa-clone"></i>Services
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to={{ pathname: "/", hash: "#technologies" }}
                exact
              >
                <i>
                  {" "}
                  <FaCode />
                </i>
                Technologies
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to={{ pathname: "/", hash: "#testimonials" }}
                exact
              >
                <i className="far fa-chart-bar"></i>Testimonial
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contactus" exact>
                <i className="far fa-copy"></i>Contact Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/blog" exact>
                <i>
                  {" "}
                  <FaBlog />
                </i>
                Blog
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
