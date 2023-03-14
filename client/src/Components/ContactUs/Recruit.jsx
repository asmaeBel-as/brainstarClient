import React, { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import contactImg from "../../Assets/contact-img.svg";
import "./contactUs.css";
import "bootstrap/dist/css/bootstrap.min.css";
import shape from "../../Assets/footer.png";
import axios from "axios";
import Swal from "sweetalert2";
import { FaConnectdevelop } from "react-icons/fa";

function Recruit() {
  const [buttonText, setButtonText] = useState("Send");
  const [file, setFile] = useState(null);
  const [email, setEmail] = useState("");
  

  const handleSubmit = (event) => {
    event.preventDefault();

    setButtonText("Sending...");
    const formData = new FormData();
    formData.append("file", file);
    formData.append("email", email);

    axios
      .post("http://localhost:4000/recruit", formData, {
        headers: { "Content-Type": "multipart/form-data" },

      })
      .then((response) => {
        if (
          !email
        ) {
          Swal.fire({
            title: "Error!",
            text: "Please provide an email and select a file",
            icon: "error",
            confirmButtonText: "OK",
          });
        }
        console.log(response.data);
          setEmail("");
        setFile(null);
        Swal.fire({
          title: "Success!",
          text: "Email sent successfully!",
          icon: "success",
          confirmButtonText: "OK",
        });
        setButtonText("Send");
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          title: "Error!",
          text: "Failed to send email",
          icon: "error",
          confirmButtonText: "OK",
        });
        setButtonText("Send");
      });
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  
  return (
    <>
      <h4 class="separatorRec">
        <i>
          <FaConnectdevelop />{" "}
        </i>
      </h4>
      <section className="contact" style={{ marginTop: "6rem" }}>
        <Container>
          <Row className="align-items-center">
            <Col size={12} md={6}>
              <div className={"animate__animated animate__fadeIn"}>
                <h2>We are Hiring,</h2>
                <h2> Send your CV</h2>
                <form onSubmit={handleSubmit}>
                  <Row>
                    <Col size={12} sm={12} className="px-1">
                      <input
                        type="email"
                        placeholder="Email Address"
                        value={email}
                        onChange={handleEmailChange}
                      />
                    </Col>
                    <Col size={12} sm={12} className="px-1">
                      <input
                        className="form-control"
                        type="file"
                        id="file"
                        name="file"
                        onChange={handleFileChange}
                      />
                    </Col>
                    <Col size={12} className="px-1">
                      <button type="submit">
                        <span>{buttonText}</span>
                      </button>
                    </Col>
                  </Row>
                </form>
              </div>
            </Col>
            <Col size={12} md={6}>
              <img
                className={"animate__animated animate__zoomIn"}
                src="https://www.jobsoid.com/wp-content/uploads/2019/03/Homepage-Illustration.svg"
                alt="Contact Us"
              />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Recruit;
