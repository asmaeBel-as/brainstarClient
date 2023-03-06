import React, { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import contactImg from "../../Assets/contact-img.svg";
import "./contactUs.css";
import "bootstrap/dist/css/bootstrap.min.css";
import shape from "../../Assets/footer.png";
import axios from "axios";
import Swal from "sweetalert2";

function ContactUs() {
  const [buttonText, setButtonText] = useState("Send");
  const [file, setFile] = useState(null);
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [budget, setBudget] = useState("");
  const [message, setMessage] = useState("");
  const [skype, setSkype] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

   
     setButtonText("Sending...");
    const formData = new FormData();
    formData.append("file", file);
    formData.append("email", email);
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("phone", phone);
    formData.append("skype", skype);
    formData.append("message", message);
    formData.append("budget", budget);

    axios
      .post("http://localhost:4000/send-email", formData, {
        headers: { "Content-Type": "multipart/form-data" },

        data: {
          firstName: firstName,
          lastName: lastName,
          phone: phone,
          skype: skype,
          message: message,
          budget: budget,
        },
      })
      .then((response) => {
        if (
          !email ||
          !firstName ||
          !lastName ||
          !message ||
          phone.length === 0 ||
          skype.length === 0 ||
          budget.length === 0
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
        setFirstName("");
        setLastName("");
        setPhone("");
        setBudget("");
        setFile("");
        setMessage("");
        setSkype("");
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
  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };
  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleSkypeChange = (event) => {
    setSkype(event.target.value);
  };
  const handlebudgetChange = (event) => {
    setBudget(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  return (
    <>
      <section className="contact" id="connect">
        <Container>
          <Row className="align-items-center">
            <Col size={12} md={6}>
              <img
                className={"animate__animated animate__zoomIn"}
                src={contactImg}
                alt="Contact Us"
              />
            </Col>
            <Col size={12} md={6}>
              <div className={"animate__animated animate__fadeIn"}>
                <h2>Get In Touch</h2>
                <form onSubmit={handleSubmit}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input
                        type="text"
                        value={firstName}
                        placeholder="First Name"
                        onChange={handleFirstNameChange}
                      />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input
                        type="text"
                        value={lastName}
                        placeholder="Last Name"
                        onChange={handleLastNameChange}
                      />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input
                        type="email"
                        placeholder="Email Address"
                        value={email}
                        onChange={handleEmailChange}
                      />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input
                        type="tel"
                        value={phone}
                        placeholder="Phone No."
                        onChange={handlePhoneChange}
                      />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input
                        type="text"
                        value={skype}
                        placeholder="Skype Id"
                        onChange={handleSkypeChange}
                      />
                    </Col>

                    <Col size={12} sm={6} className="px-1">
                      <select
                        class="form-select form-select-lg mb-3  px-1"
                        aria-label=".form-select-lg example"
                        onChange={handlebudgetChange}
                        value={budget}
                      >
                        <option selected>Select your budget</option>
                        <option value="Less Than $10k">Less Than $10k</option>
                        <option value="Between $10k And $50k">
                          Between $10k And $50k
                        </option>
                        <option value="More than $50k">More than $50k</option>
                      </select>
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
                      <textarea
                        rows="6"
                        value={message}
                        placeholder="Product Description"
                        onChange={handleMessageChange}
                      ></textarea>
                      <button type="submit">
                        <span>{buttonText}</span>
                      </button>
                    </Col>
                  </Row>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
        
      </section>
      <div className="footer-image">
        <img src={shape} alt="Phot0 not responding" />
      </div>
    </>
  );
}

export default ContactUs;
