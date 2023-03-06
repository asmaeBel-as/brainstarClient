import React from "react";
import "./services.css";
import { RiCustomerService2Fill } from "react-icons/ri";
import thumbup from "../../Assets/coding-removebg-preview.png";
import good from "../../Assets/design.png";
import code from "../../Assets/marketing-removebg-preview.png";
import SecCard from "../SecCard/SecCard";
import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";
import { Link } from "react-router-dom";
import { FaConnectdevelop } from "react-icons/fa";
const services = () => {
  const transition = { duration: 2, type: "spring" };
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <>
      <h4 class="separator1">
        <i>
          <FaConnectdevelop />{" "}
        </i>
      </h4>
      <section className="services__section">
        <div className="container programs__container">
          <div className="program__headss">
            <span data-aos="fade-up" data-aos-duration="2000">
              {<RiCustomerService2Fill />}
            </span>
            <h2 data-aos="fade-up" data-aos-duration="2100">
              Our Services
            </h2>
          </div>
          <div className="services">
            <div className="awesome">
              <span data-aos="fade-down" data-aos-duration="2000">
                Our
              </span>
              <span data-aos="fade-down" data-aos-duration="1000">
                Services
              </span>
              <span data-aos="fade-right" data-aos-duration="1000">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                Vitae saepe incidunt quibusdam a, explicabo impedit quis quia
                consequatur,
                <br /> in sit, iusto odit eaque officiis quae natus blanditiis
                odio! Voluptates, aperiam.
              </span>
              <Link
                onClick={scrollToTop}
                to={"/AppDev"}
                className="btn s-button"
                data-aos="fade-right"
                data-aos-duration="2000"
              >
                More information
              </Link>
              <div
                className="blur s-blur"
                style={{
                  background: "#bc2c337a",
                  top: "18rem",
                  width: "15rem",
                  height: "11rem",
                  filter: "blur(90px)",
                  zIndex: "-9",
                }}
              ></div>
            </div>
            <div className="cards">
              <motion.div
                whileInView={{ left: "26rem" }}
                initial={{ left: "25rem" }}
                transition={{ transition }}
                style={{ left: "14rem" }}
                className="graphic"
              >
                <Link to={"/graphic"} onClick={scrollToTop}>
                  <SecCard
                    emoji={good}
                    heading={"Graphic Design"}
                    detail={
                      "Graphic design is essential for developing a professional brand and optimising your marketing efforts across all media…"
                    }
                  />
                </Link>
              </motion.div>
              <motion.div
                whileInView={{ left: "-7rem" }}
                initial={{ left: "-14rem" }}
                transition={{ transition }}
                style={{ top: "15rem", left: "-7rem" }}
                className="lastone"
              >
                <Link to={"/web"} onClick={scrollToTop}>
                  <SecCard
                    emoji={thumbup}
                    heading={"Web & App Development"}
                    detail={
                      "Website creation is one of the strategies to assure your company’s success by telling people about the products and services you provide…"
                    }
                  />
                </Link>
              </motion.div>
              <motion.div
                whileInView={{ left: "15rem" }}
                initial={{ left: "20rem" }}
                transition={{ transition }}
                style={{ top: "25rem", left: "15rem" }}
                className="digital"
              >
                <Link onClick={scrollToTop} to={"/digital"}>
                  <SecCard
                    emoji={code}
                    heading={"Digital Marketing"}
                    detail={
                      "Our goal is to increase your sales. And one of the most important instruments for doing so is digital marketing. Will work with your plan.."
                    }
                  />
                </Link>
              </motion.div>
              <motion.div
                whileInView={{ top: "-10rem", left: "-3rem" }}
                initial={{ top: "-10rem", left: "-8rem" }}
                transition={{ transition }}
                style={{ left: "14rem" }}
                className="appd"
              >
                <Link to={"/mobile"} onClick={scrollToTop}>
                  {" "}
                  <SecCard
                    emoji={good}
                    heading={"App dev"}
                    detail={
                      "Graphic design is essential for developing a professional brand and optimising your marketing efforts across all media…"
                    }
                  />
                </Link>
              </motion.div>
            </div>{" "}
            <div
              className="blur s-blur2"
              style={{
                background: "#C1F5FF",
                top: "18rem",
                width: "15rem",
                height: "11rem",
                left: "-3rem",
                filter: "blur(72px)",
                zIndex: "-9",
              }}
            ></div>
          </div>
        </div>
      </section>
    </>
  );
};
export default services;
