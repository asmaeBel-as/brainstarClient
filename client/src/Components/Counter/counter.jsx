import React, { useState } from "react";
import "./counter.css";
import { FaConnectdevelop } from "react-icons/fa";
import CountUp from "react-countup";
import purpleblur from "../../Assets/bgcolor - Copy.png";
import colorSharp from "../../Assets/bgcolor.png";
import ScrollTrigger from "react-scroll-trigger";

const counter = () => {
  const [counteron, setCounterOn] = useState(false);
  return (
    <>
      <h4 class="separator">
        <i>
          <FaConnectdevelop />{" "}
        </i>
      </h4>
      <section className="experience" id="experience">
        <img className="background-image-top" src={purpleblur} alt="" />
        <div
          className="achievement"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <ScrollTrigger
            onEnter={() => setCounterOn(true)}
            onExit={() => setCounterOn(false)}
          >
            <div className="circle">
              {" "}
              {counteron && (
                <CountUp
                  start={0}
                  end={256}
                  duration={2}
                  delay={0}
                  className="count"
                />
              )}
              +
            </div>{" "}
          </ScrollTrigger>
          <span>Happy</span>
          <span>customers</span>
        </div>
        <div
          className="achievement"
          data-aos="zoom-in"
          data-aos-duration="1100"
        >
          <div className="circle">
            <ScrollTrigger
              onEnter={() => setCounterOn(true)}
              onExit={() => setCounterOn(false)}
            >
              {counteron && (
                <CountUp
                  start={0}
                  end={25}
                  duration={2}
                  delay={0}
                  className="count"
                />
              )}
              +
            </ScrollTrigger>
          </div>
          <span>Countries</span>
          <span>Worldwide</span>
        </div>
        <div
          className="achievement"
          data-aos="zoom-in"
          data-aos-duration="1200"
        >
          <div className="circle">
            <ScrollTrigger
              onEnter={() => setCounterOn(true)}
              onExit={() => setCounterOn(false)}
            >
              {counteron && (
                <CountUp
                  start={0}
                  end={100}
                  duration={2}
                  delay={0}
                  className="count"
                />
              )}
              +
            </ScrollTrigger>
          </div>
          <span>successful</span>
          <span>projects</span>
        </div>
        <div
          className="achievement"
          data-aos="zoom-in"
          data-aos-duration="1300"
        >
          <div className="circle">
            <ScrollTrigger
              onEnter={() => setCounterOn(true)}
              onExit={() => setCounterOn(false)}
            >
              {counteron && (
                <CountUp
                  start={0}
                  end={8}
                  duration={2}
                  delay={0}
                  className="count"
                />
              )}
              +
            </ScrollTrigger>
          </div>
          <span>years</span>
          <span>experience</span>
        </div>
        {/* <div className="bubbleContainer">
        <div className="bubbles">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div> */}
        <img className="background-image-left" src={colorSharp} alt="Image" />
      </section>
    </>
  );
};
export default counter;
