import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import BlogPost from '../BlogPost';
import SideBar from '../BlogSideBar/SideBar';
import './post.css';

const BlogHome = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/post").then((response) => {
      response.json().then((posts) => {
        setPosts(posts);
      });
    });
  }, []);
  return (
    <>
      <SideBar />
      <div style={{ backgroundColor: "#00071d"}}>
        <Container style={{ marginLeft: "25rem" }}>
          <Row>
            <Col xl={8} lg={8}>
              <div style={{ marginTop: "5rem" }}></div>
              {posts.length > 0 && posts.map((post) => <BlogPost {...post} />)}
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default BlogHome