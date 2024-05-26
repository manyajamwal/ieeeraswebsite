// BoardCard.js
import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import "./BoardCard.css";

function BoardCard({ imgPath, title, description, linkedin, github }) {
  return (
    <div className="border-card">
      <div className="board-card">
        <img src={imgPath} alt={title} className="board-img" />
        <div className="overlay">
          <div className="content">
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
          <div className="social-icons-board">
            <a href={linkedin} target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="linkedin-icon" />
            </a>
            <a href={github} target="_blank" rel="noopener noreferrer">
              <FaGithub className="github-icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BoardCard;
