import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import img1 from "../../Assets/bg.jpg";
import { BsArrowRightShort } from "react-icons/bs";


import './blog.css'
import BlogPost from "../../BlogDesign/BlogPost";
import SideBlog from "../../utilities/SideBlog";

const blog = () => {
  const [posts, setPosts] = useState([]);
useEffect(() => {
  fetch("http://localhost:4000/post").then((response) => {
    response.json().then((posts) => {
      setPosts(posts);
    });
  });
}, []);

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
              {posts.length > 0 && posts.map(posts => (
                <BlogPost {...posts} />
              ))}
            
            
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
                <SideBlog/>

                
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default blog;
