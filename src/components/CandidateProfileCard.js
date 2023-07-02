import React from "react";
import "../CandidateProfileCard.css";

const CandidateProfileCard = ({
  name,
  location,
  role,
  imageUrl,
  socialLinks,
}) => {
  return (
    <div className="container">
      <div className="image">
        <img src={imageUrl} alt="Candidate" />
      </div>
      <div className="content">
        <div className="info">
          <h2>{name}</h2>
          <div className="info-details">
            <span>{role}</span>
            <span>{location}</span>
          </div>
        </div>
      </div>
      <ul>
        {socialLinks.map((link, index) => (
          <li key={index}>
            <a href={link.url} className="social-link">
              <span className={link.icon}></span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CandidateProfileCard;
