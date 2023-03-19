import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import img1 from "../../Assets/bg.jpg";
import { BsArrowRightShort } from "react-icons/bs";


import './blog.css'
import BlogPost from "../../BlogDesign/BlogPost";
import SideBlog from "../../utilities/SideBlog";

const blog = () => {
  const [posts, setPosts] = useState({ data: [], pagination: {} });
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
              {/* <Row>
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
              </Row> */}
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
