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
        <div class="sidebar-widget">
          <h3>Featured Posts</h3>
          <ul class="widget-tabs">
            <li>
              <a href="#" class="widget-content active">
                <img src={img2} alt="" />
                <div class="widget-text">
                  <h5>About The Company</h5>
                  <span>29 June 2022</span>
                </div>
              </a>
            </li>

            <li>
              <a href="#" class="widget-content">
                <img src={img2} alt="" />
                <div class="widget-text">
                  <h5>What It Really Takes to Make $100k Before You Turn 30</h5>
                  <span>3 June 2022</span>
                </div>
              </a>
            </li>

            <li>
              <a href="#" class="widget-content">
                <img src={img2} alt="" />
                <div class="widget-text">
                  <h5>
                    5 Myths That Prevent Job Seekers from Overcoming Failure
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
                <a href="#" title="Instagram" data-tippy-placement="top">
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
      </>
    );
}

export default SideBlog