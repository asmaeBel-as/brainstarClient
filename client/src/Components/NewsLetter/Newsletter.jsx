import React from 'react'
import { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";
import { ImPointRight } from 'react-icons/im';
import Swal from 'sweetalert2';
import './Newsletter.css'

const Newsletter = ({ onValidated, status, message }) => {
  const [email, setEmail] = useState("");
  const [send, setSend] = useState("Send");

  useEffect(() => {
    if (status === "success")  clearFields() ;
    if (status === "error") setSend("Failed");
    if (status === "sending") setSend("sending...");
    
  }, [status]);
  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
      email.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email,
      });
  };

  const clearFields = () => {
    setEmail("");
    setSend("Send");
  };
    return (
      <div className='mainNews'>
        
        <div class="newsContainer">
          <img
            class="img-head"
            src="https://raw.githubusercontent.com/emnatkins/cdn-codepen/main/LYJWgdK/LYJWgdK.mail.jpg"
            alt="subscribe to email"
          />
          <h1 class="title">subscribe</h1>
          <p class="description">subscribe to our newsletter & stay updated</p>

          <form class="form-box" onSubmit={handleSubmit}>
            <div class="input-main">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-envelope"
                viewBox="0 0 16 16"
              >
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
              </svg>
              <input
                type="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email"
                value={email}
              />
            </div>
            <button class="submit" type="submit">
              {send}
            </button>
          </form>
        </div>
      </div>
    );
};

export default Newsletter