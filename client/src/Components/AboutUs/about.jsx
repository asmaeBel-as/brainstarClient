import React, { useEffect } from "react";
import "./about.css";
import vector1 from "../../Assets/Vector.png";
import vector2 from "../../Assets/Vector0.png";
import company from "../../Assets/company.png";
import professional from "../../Assets/professonal.png";
import quality from "../../Assets/quality.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { RiQuestionFill } from "react-icons/ri";
import { BsFillJournalBookmarkFill } from "react-icons/bs";
import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";
import Upwork from "../../Assets/mobile-app-development.png";
import secure from "../../Assets/cg.png";
import cloud from "../../Assets/web-app-dev.png";
import consult from "../../Assets/stt.png";
import backup from "../../Assets/gd.png";
import Animations from "../../utilities/Animation";
import ScrollService from "../../utilities/ScrollService";
import { Link, useLocation } from "react-router-dom";
const About = () => {
let location = useLocation();
useEffect(() => {
  if (location.hash) {
    let elem = document.getElementById(location.hash.slice(1));
    if (elem) {
      elem.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }
}, []);

  
 
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  const transition = { duration: 2, type: "spring" };
  return (
    <section className="about-us-container" id="about">
      <div className="program__heada">
        <span>{<BsFillJournalBookmarkFill />}</span>
        <h2>About Us</h2>
      </div>
      <div className="works">
        {/* left side */}
        <div className="w-left">
          <div className="awesome">
            {/* dark Mode */}
            <span>Hello, We Are</span>
            <span>Brain Star Technologies</span>
            <spane data-aos="fade-up-left" data-aos-duration="1100">
              Brain Star technologies deliver a wide range of software
              development solutions that includes <br /> Digital marketing
              services, affordable SEO services, Social Media Marketing, Website
              Design
              <br />
              and Development, Email Outreach, Content Writing, and
              Optimization, we do it all. <br /> We assure you to get more
              leads. more sales. Increased revenue. <br /> In short with Brain
              star Technologies you may establish your digital <br /> presence
              today and explore your market potential as we are one <br />
              of the best web design company in USA. We thrive to be the best{" "}
              <br />
              digital marketing company in USA and
              <br />
              are a full-service digital marketing agency that helps your
              <br />
              company expand into new markets, attract more employees, and
              <br />
              achieve incredible results in your field. So, don’t think anymore
              <br />
              and call us today!
              <br />
            </spane>
            <Link
              onClick={scrollToTop}
              to={"./contactus"}
              className="btn s-button"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              Contact Us{" "}
            </Link>
            <div
              className="blur s-blur1"
              style={{ background: "#ABF1FF94" }}
            ></div>
          </div>
          {/* right side */}
        </div>
        <div
          className="w-right"
          data-aos="fade-up-right"
          data-aos-duration="1000"
        >
          <motion.div
            initial={{ rotate: 45 }}
            whileInView={{ rotate: 0 }}
            viewport={{ margin: "-40px" }}
            transition={{ duration: 3.5, type: "spring" }}
            className="w-mainCircle"
          >
            <div className="w-secCircle">
              <img src={Upwork} alt="" style={{ width: "150%" }} />
            </div>
            <div className="w-secCircle">
              <img src={cloud} alt="" style={{ width: "150%" }} />
            </div>
            <div className="w-secCircle">
              <img src={backup} alt="" style={{ width: "150%" }} />
            </div>{" "}
            <div className="w-secCircle">
              <img src={consult} alt="" style={{ width: "200%" }} />
            </div>
            <div className="w-secCircle">
              <img src={secure} alt="" style={{ width: "200%" }} />
            </div>
          </motion.div>
          {/* background Circles */}
          <div
            data-aos="fade-up-right"
            data-aos-duration="1000"
            className="w-backCircle blueCircle"
          ></div>
          <div
            data-aos="fade-up-right"
            data-aos-duration="1000"
            className="w-backCircle yellowCircle"
          ></div>
        </div>
      </div>
    </section>
  );
};
export default About;
