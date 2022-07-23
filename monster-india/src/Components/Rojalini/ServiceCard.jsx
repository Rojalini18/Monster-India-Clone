import React from "react";
import "./ServiceCard.css";
function ServiceCard({ img, head, description }) {
  return (
    <div className="serviceCard">
      <img src={img} alt="logo" />
      <div>
        <h2 style={{ fontSize:"22px",fontWeight:"bold",marginBottom:"20px"}}>{head}</h2>
        <p>{description}</p>
        <button style={{ marginBottom:"-20px"}}>KNOW MORE</button>
      </div>
    </div>
  );
}

export default ServiceCard;
