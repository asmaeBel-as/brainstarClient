import React from "react";
import { GiTechnoHeart } from "react-icons/gi";
import sumit from "../../Assets/sumit.jpg";
import mohit from "../../Assets/Mohit.jpg";
import kelley from "../../Assets/kelley.jpeg";
import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";
import { Container, Row, Col, Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import user from "../../Assets/user.png";
import oli from "../../Assets/oli.png";
import './chat.css'

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      dialogClassName={"primaryModal"}
      //   	aria-labelledby="contained-modal-title-vcenter"
   
    >
      <Modal.Body>
        <div className="messages-container-inner">
          <div className="message-content">
            <div className="messages-headline">
              <h4>Brain Star Technologies</h4>
            </div>

            <div className="message-content-inner">
              <div className="message-bubble">
                <div className="message-bubble-inner">
                  <div className="message-avatar">
                    <img src={oli} alt="" />
                  </div>
                  <div className="message-text">
                    <p>Hi There! How can I help you? 😎</p>
                  </div>
                </div>
                <div className="clearfix"></div>
              </div>

              <div className="message-bubble me">
                <div className="message-bubble-inner">
                  <div className="message-avatar">
                    <img src={user} alt="" />
                  </div>
                  <div className="message-text">
                    <p>
                      Hello,I'd like to know more about the company, and the
                      services that you provide. 🙂
                    </p>
                  </div>
                </div>
                <div className="clearfix"></div>
              </div>

              <div className="message-bubble">
                <div className="message-bubble-inner">
                  <div className="message-avatar">
                    <img src={oli} alt="" />
                  </div>
                  <div className="message-text">
                    <div className="typing-indicator">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                </div>
                <div className="clearfix"></div>
              </div>
            </div>

            <div className="message-reply">
              <textarea
                cols="1"
                rows="1"
                placeholder="Your Message"
                data-autoresize
              ></textarea>
              <button className="button ripple-effect">Send</button>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}


const chatbox = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [sumitShow, setSumitShow] = React.useState(false);
  return (
    <>
      <section className="">
        <div className="">
          <div className="imagecontainer">
            <img src={oli} alt="" onClick={() => setModalShow(true)} />
          </div>
          
        </div>

        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </section>
    </>
  );
};

export default chatbox;
