import React from 'react'
import img2 from "../Assets/bg-1.jpg";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Twitter from "@iconscout/react-unicons/icons/uil-twitter";
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin";

const SideBlog = () => {
    return (
      <>
        {" "}
        <div className="sidebar-widgett">
          <h3>Brain Star Posts</h3>
          <ul className="widgett-tabs">
            <li>
              <a className="widgett-content active">
                <img src={img2} alt="" />
                <div className="widget-text">
                  <h5>Brainstar Technologies</h5>
                  <span>29 June 2022</span>
                </div>
              </a>
            </li>

            <li>
              <a className="widgett-content">
                <img
                  src="https://synergiseit.com.au/wp-content/uploads/2019/11/1-1170x782.png"
                  alt=""
                />
                <div className="widget-text">
                  <h5>We provide the best IT solutions </h5>
                  <span>3 June 2022</span>
                </div>
              </a>
            </li>

            <li>
              <a className="widgett-content">
                <img
                  src="https://www.michalsons.com/wp-content/uploads/2012/08/Business-Critical-Software-e1563875145259.jpg"
                  alt=""
                />
                <div className="widget-text">
                  <h5>We provide you from concept to finished products</h5>
                  <span>5 June 2022</span>
                </div>
              </a>
            </li>
          </ul>
        </div>
        <div className="sidebar-widget">
          <h3>Social Profiles</h3>
          <div className="freelancer-socials margin-top-25">
            <ul>
              <li>
                <a title="Instagram" data-tippy-placement="top">
                  <Insta />
                </a>
              </li>
              <li>
                <a title="Twitter" data-tippy-placement="top">
                  <Twitter />
                </a>
              </li>
              <li>
                <a title="LinkedIn" data-tippy-placement="top">
                  <Linkedin />
                </a>
              </li>
              <li>
                <a title="Facebook" data-tippy-placement="top">
                  <Facebook />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </>
    );
}

export default SideBlog