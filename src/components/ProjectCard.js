// src/ProjectCard.js
import React from 'react';
import { Col } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';

export const ProjectCard = ({ title, description, imgUrl, onButtonClick }) => {
  return (
    <Col sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="Project" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <p></p>
          <button onClick={onButtonClick}>
            Discover more<ArrowRightCircle size={25} />
          </button>
        </div>
      </div>
    </Col>
  );
};
