import React, { useEffect } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./testimonial.css";
import lady from "../../Assets/user1.jpg";
import mike from "../../Assets/user2.jpg";
import man from "../../Assets/user3.jpg";
import man2 from "../../Assets/user4.jpg";
import shape from "../../Assets/footer.png";
import { FaQuoteRight } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { useLocation } from "react-router-dom";
export default function Testimonial(props) {
 
  let location = useLocation();
  useEffect(() => {
    if (location.hash) {
      let elem = document.getElementById(location.hash.slice(1));
      if (elem) {
        elem.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest",
        });
      }
    } else {
      window.scrollTo({ top: 0, left: 0 });
    }
  }, [location]);
  const options = {
    loop: true,
    margin: 0,
    nav: true,
    animateIn: "bounceInRight",
    animateOut: "bounceOutRight",
    dots: true,
    autoplay: true,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      1000: {
        items: 3,
      },
    },
  };
  return (
    <div>
      <section className="testimonial-section fade-in" id="testimonials" >
        <div className="container">
          <div className="row">
            <OwlCarousel
              className="owl-carousel"
              id="testimonial-carousel"
              {...options}
            >
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      <FaQuoteLeft className="quote" />
                      Brain Star Technologies Solutions has done a great job
                      taking our company’s idea and developing a website as per
                      our niche specifications. The team is technically strong
                      and creative. I will not hesitate to recommend them.
                      <FaQuoteRight className="quote" />
                    </p>
                    <ul className="stars list-unstyled">
                      <li>
                        <FaStar className="stars" />
                      </li>
                      <li>
                        <FaStar className="stars" />
                      </li>
                      <li>
                        <FaStar className="stars" />
                      </li>
                      <li>
                        <FaStar className="stars" />
                      </li>
                      <li>
                        <FaStarHalfAlt className="stars" />
                      </li>
                    </ul>
                  </div>
                  <div className="client-info">
                    <img src={lady} alt="no internet connection"></img>
                    <h5>Daisy</h5>
                    <p></p>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      <FaQuoteLeft className="quote" />
                      Brain Star Technologies has a solid technology team and on
                      time delivery. Very happy to be associated with them Great
                      work!!! The team was solid, efficient and knowledgeable.
                      They did an amazing job on my very challenging app. I will
                      be using them again. Thank you for doing such a great job!
                      <FaQuoteRight className="quote" />
                    </p>
                    <ul className="stars list-unstyled">
                      <li>
                        <FaStar className="stars" />
                      </li>
                      <li>
                        <FaStar className="stars" />
                      </li>
                      <li>
                        <FaStar className="stars" />
                      </li>
                      <li>
                        <FaStar className="stars" />
                      </li>
                      <li>
                        <FaStarHalfAlt className="stars" />
                      </li>
                    </ul>
                  </div>
                  <div className="client-info">
                    <img src={mike} alt="no internet connection"></img>
                    <h5>Casi</h5>
                    <p></p>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      <FaQuoteLeft className="quote" />
                      Brain Star Technologies is driven by a passion to create
                      and deliver on new ideas and that is reflected in their
                      work. It is a team that strives for excellence and is open
                      to experimenting and creating new trends in the business.
                      Our work relationship has been productive and we have
                      collectively been able to achieve great results.
                      <FaQuoteRight className="quote" />
                    </p>
                    <ul className="stars list-unstyled">
                      <li>
                        <FaStar className="stars" />
                      </li>
                      <li>
                        <FaStar className="stars" />
                      </li>
                      <li>
                        <FaStar className="stars" />
                      </li>
                      <li>
                        <FaStar className="stars" />
                      </li>
                      <li>
                        <FaStarHalfAlt className="stars" />
                      </li>
                    </ul>
                  </div>
                  <div className="client-info">
                    <img src={man} alt="no internet connection"></img>
                    <h5>Suzanne</h5>
                    <p></p>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      <FaQuoteLeft className="quote" />
                      Thanks Brain Star Technologies for great support on our
                      project. They not only showed their commitment and hard
                      work in our project, but also helped us take care of some
                      points that got missed by us and did not belong to their
                      scope.
                      <FaQuoteRight className="quote" />
                    </p>
                    <ul className="stars list-unstyled">
                      <li>
                        <FaStar className="stars" />
                      </li>
                      <li>
                        <FaStar className="stars" />
                      </li>
                      <li>
                        <FaStar className="stars" />
                      </li>{" "}
                      <li>
                        <FaStar className="stars" />
                      </li>
                      <li>
                        <FaStarHalfAlt className="stars" />
                      </li>
                    </ul>
                  </div>
                  <div className="client-info">
                    <img src={man2} alt="no internet connection"></img>
                    <h5>Mike</h5>
                    <p></p>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
        <div className="bcontainer">
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
        </div>
      </section>
      <div className="footer-image">
        <img src={shape} alt="Phot0 not responding" />
      </div>
    </div>
  );
}
