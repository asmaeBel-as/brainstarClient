import React, { useState } from "react";
import "./Seo.css";
import shape from "../../Assets/footer.png";
import Swal from "sweetalert2";
import axios from "axios";

const Seo = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [weburl, setWeburl] = useState("");
  const [buttonText, setButtonText] = useState("Send");
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleUsername = (event) => {
    setUsername(event.target.value);
  };

  const handleWeburl = (event) => {
    setWeburl(event.target.value);
  };

  function handleSeoSubmit(event) {

      event.preventDefault();
      setButtonText("Sending...");
      const formData = new FormData();
      formData.append("email", email);
      formData.append("username", username);
      formData.append("weburl", weburl);

      axios
        .post("http://localhost:4000/seo", formData, {
          headers: { "Content-Type": "multipart/form-data" },

          data: {
            username: username,
            email: email,
            weburl: weburl,
          },
         
        })
        .then((response) => {
          console.log(response.data);
          setEmail("");
          setUsername("");
          setWeburl("");
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
  }
  return (
    <>
      {" "}
      <section className="body" id = "seocheck">
        <div className="main-w3layouts wrapper">
          <h1>Free Seo Check</h1>
          <div className="main-agileinfo">
            <div className="agileits-top">
              <form onSubmit={handleSeoSubmit}>
                <input
                  className="text"
                  type="text"
                  name="Username"
                  placeholder="Full Name"
                  required=""
                  value={username}
                  onChange={handleUsername}
                />
                <input
                  className="text email"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required=""
                  value={email}
                  onChange={handleEmail}
                />
                <input
                  className="text"
                  type="text"
                  name="webUrl"
                  placeholder="Website url"
                  required=""
                  value={weburl}
                  onChange={handleWeburl}
                />

                <div className="wthree-text">
                  <div className="clear"> </div>
                </div>
                <button type="submit" className="seoButton">
                  <span>{buttonText}</span>
                </button>
              </form>
            </div>
          </div>
          <ul className="colorlib-bubbles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </section>
      <div className="footer-image">
        <img src={shape} alt="Phot0 not responding" />
      </div>
    </>
  );
};

export default Seo;
