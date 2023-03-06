import React, { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import img1 from "../../Assets/bg.jpg";
import img2 from "../../Assets/bg-1.jpg";
import { BsArrowRightShort } from "react-icons/bs";
// import { MdKingBed } from "react-icons/md";
// import { FaWifi } from "react-icons/fa";
// import { MdBathtub } from "react-icons/md";
// import { MdAirportShuttle } from "react-icons/md";
// import { MdLocationOn } from "react-icons/md";
// import { BsPlus } from "react-icons/bs";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Twitter from "@iconscout/react-unicons/icons/uil-twitter";
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin";
import Search from "@iconscout/react-unicons/icons/uil-search";

import './blog.css'

const blog = () => {


  return (
    <section className="wrapper" id="wrapper">
      <div class="section white padding-top-0 padding-bottom-60 full-width-carousel-fix">
        <Container>
          <Row>
            <Col xl={12}>
              <div class="blog-carousel">
                <a href="#" class="blog-compact-item-container">
                  <div class="blog-compact-item">
                    <img src={img1} alt="" />
                    <span class="blog-item-tag">Tips</span>
                    <div class="blog-compact-item-content">
                      <ul class="blog-post-tags">
                        <li>20 May 2022</li>
                      </ul>
                      <h3>
                        5 Myths That Prevent Job Seekers from Overcoming Failure
                      </h3>
                      <p>
                        Distinctively reengineer revolutionary meta-services and
                        premium architectures intuitive opportunities.
                      </p>
                    </div>
                  </div>
                </a>

                <a href="#" class="blog-compact-item-container">
                  <div class="blog-compact-item">
                    <img src={img1} alt="" />
                    <span class="blog-item-tag">Recruiting</span>
                    <div class="blog-compact-item-content">
                      <ul class="blog-post-tags">
                        <li>28 April 2022</li>
                      </ul>
                      <h3>12 Dog-Friendly Companies Hiring Now</h3>
                      <p>
                        Compellingly embrace empowered e-business after user
                        friendly intellectual capital. Interactively front-end.
                      </p>
                    </div>
                  </div>
                </a>

                <a href="#" class="blog-compact-item-container">
                  <div class="blog-compact-item">
                    <img src={img1} alt="" />
                    <span class="blog-item-tag">Marketing</span>
                    <div class="blog-compact-item-content">
                      <ul class="blog-post-tags">
                        <li>10 June 2022</li>
                      </ul>
                      <h3>
                        11 Tips to Help You Get New Clients Through Cold Calling
                      </h3>
                      <p>
                        Compellingly embrace empowered e-business after user
                        friendly intellectual capital. Interactively front-end.
                      </p>
                    </div>
                  </div>
                </a>
                <a href="#" class="blog-compact-item-container">
                  <div class="blog-compact-item">
                    <img src={img1} alt="" />
                    <span class="blog-item-tag">Recruiting</span>
                    <div class="blog-compact-item-content">
                      <ul class="blog-post-tags">
                        <li>9 June 2022</li>
                      </ul>
                      <h3>Follow Up On Job Application With This Template</h3>
                      <p>
                        Appropriately empower dynamic leadership skills after
                        business portals. Globally myocardinate interactive.
                      </p>
                    </div>
                  </div>
                </a>

                <a href="#" class="blog-compact-item-container">
                  <div class="blog-compact-item">
                    <img src="images/blog-07a.jpg" alt="" />
                    <span class="blog-item-tag">Recruiting</span>
                    <div class="blog-compact-item-content">
                      <ul class="blog-post-tags">
                        <li>3 June 2022</li>
                      </ul>
                      <h3>
                        What It Really Takes to Make $100k Before You Turn 30
                      </h3>
                      <p>
                        Appropriately empower dynamic leadership skills after
                        business portals. Globally myocardinate interactive.
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div class="section gray">
        <Container>
          <Row>
            <Col xl={8} lg={8}>
              <div class="section-headline margin-top-60 margin-bottom-35">
               
                <h4>Recent Posts</h4>
              </div>
              <a href="#" class="blog-post">
                <div class="blog-post-thumbnail">
                  <div class="blog-post-thumbnail-inner">
                    <span class="blog-item-tag">Tips</span>
                    <img src={img2} alt="" />
                  </div>
                </div>

                <div class="blog-post-content">
                  <span class="blog-post-date">22 July 2022</span>
                  <h3>16 Ridiculously Easy Ways to Find & Keep a Remote Job</h3>
                  <p>
                    Efficiently myocardinate market-driven innovation via
                    open-source alignments. Dramatically engage high-payoff
                    infomediaries rather than.{" "}
                  </p>
                </div>

                <div class="entry-icon"></div>
              </a>

              <a href="#" class="blog-post">
                <div class="blog-post-thumbnail">
                  <div class="blog-post-thumbnail-inner">
                    <span class="blog-item-tag">Recruiting</span>
                    <img src={img2} alt="" />
                  </div>
                </div>

                <div class="blog-post-content">
                  <span class="blog-post-date">29 June 2022</span>
                  <h3>How to "Woo" a Recruiter and Land Your Dream Job</h3>
                  <p>
                    Efficiently myocardinate market-driven innovation via
                    open-source alignments. Dramatically engage high-payoff
                    infomediaries rather than.{" "}
                  </p>
                </div>
              </a>

              <a href="#" class="blog-post">
                <div class="blog-post-thumbnail">
                  <div class="blog-post-thumbnail-inner">
                    <span class="blog-item-tag">Marketing</span>
                    <img src={img2} alt="" />
                  </div>
                </div>

                <div class="blog-post-content">
                  <span class="blog-post-date">10 June 2022</span>
                  <h3>
                    11 Tips to Help You Get New Clients Through Cold Calling
                  </h3>
                  <p>
                    Efficiently myocardinate market-driven innovation via
                    open-source alignments. Dramatically engage high-payoff
                    infomediaries rather than.{" "}
                  </p>
                </div>
              </a>

              <a href="#" class="blog-post">
                <div class="blog-post-thumbnail">
                  <div class="blog-post-thumbnail-inner">
                    <span class="blog-item-tag">Tips</span>
                    <img src={img2} alt="" />
                  </div>
                </div>

                <div class="blog-post-content">
                  <span class="blog-post-date">5 June 2022</span>
                  <h3>
                    5 Myths That Prevent Job Seekers from Overcoming Failure
                  </h3>
                  <p>
                    Efficiently myocardinate market-driven innovation via
                    open-source alignments. Dramatically engage high-payoff
                    infomediaries rather than.{" "}
                  </p>
                </div>
              </a>
              <div class="clearfix"></div>
              <Row>
                <Col md={12}>
                  <div class="pagination-container margin-top-10 margin-bottom-20">
                    <nav class="pagination">
                      <ul>
                        <li>
                          <a href="#" class="current-page ripple-effect">
                            1
                          </a>
                        </li>
                        <li>
                          <a href="#" class="ripple-effect">
                            2
                          </a>
                        </li>
                        <li>
                          <a href="#" class="ripple-effect">
                            3
                          </a>
                        </li>
                        <li class="pagination-arrow">
                          <a href="#" class="ripple-effect">
                            <BsArrowRightShort />
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col xl={4} lg={4}>
              <div class="sidebar-container margin-top-65">
                <div class="sidebar-widget margin-bottom-40">
                  
                </div>

                <div class="sidebar-widget">
                  <h3>Trending Posts</h3>
                  <ul class="widget-tabs">
                    <li>
                      <a href="#" class="widget-content active">
                        <img src={img2} alt="" />
                        <div class="widget-text">
                          <h5>
                            How to "Woo" a Recruiter and Land Your Dream Job
                          </h5>
                          <span>29 June 2022</span>
                        </div>
                      </a>
                    </li>

                    <li>
                      <a href="#" class="widget-content">
                        <img src={img2} alt="" />
                        <div class="widget-text">
                          <h5>
                            What It Really Takes to Make $100k Before You Turn
                            30
                          </h5>
                          <span>3 June 2022</span>
                        </div>
                      </a>
                    </li>

                    <li>
                      <a href="#" class="widget-content">
                        <img src={img2} alt="" />
                        <div class="widget-text">
                          <h5>
                            5 Myths That Prevent Job Seekers from Overcoming
                            Failure
                          </h5>
                          <span>5 June 2022</span>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>

                <div class="sidebar-widget">
                  <h3>Social Profiles</h3>
                  <div class="freelancer-socials margin-top-25">
                    <ul>
                      <li>
                        <a
                          href="#"
                          title="Instagram"
                          data-tippy-placement="top"
                        >
                          <Insta />
                        </a>
                      </li>
                      <li>
                        <a href="#" title="Twitter" data-tippy-placement="top">
                          <Twitter />
                        </a>
                      </li>
                      <li>
                        <a href="#" title="LinkedIn" data-tippy-placement="top">
                          <Linkedin />
                        </a>
                      </li>
                      <li>
                        <a href="#" title="Facebook" data-tippy-placement="top">
                          <Facebook />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div class="sidebar-widget">
                  <h3>Tags</h3>
                  <div class="task-tags">
                    <a href="#">
                      <span>employer</span>
                    </a>
                    <a href="#">
                      <span>recruiting</span>
                    </a>
                    <a href="#">
                      <span>work</span>
                    </a>
                    <a href="#">
                      <span>salary</span>
                    </a>
                    <a href="#">
                      <span>tips</span>
                    </a>
                    <a href="#">
                      <span>income</span>
                    </a>
                    <a href="#">
                      <span>application</span>
                    </a>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default blog;
