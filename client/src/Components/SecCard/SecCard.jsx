import React from "react";
import { Link } from "react-router-dom";
import "./SecCard.css";

const SecCard = ({ emoji, heading, detail, color, link }) => {
  return (
    <div className="seccard" style={{ borderColor: { color } }}>
      <img src={emoji} alt="" />
      <span className="heading">{heading}</span>
      <span className="desc">{detail}</span>
      <button className="c-button">
        <Link to={link}></Link>LEARN MORE
      </button>
    </div>
  );
};

export default SecCard;
