// src/Popups.js
import React from 'react';
import './popUp.css';
import sourceImg from "../assets/img/github-mark.png"

const Popups = ({ trigger, onClose, children }) => {
    return trigger ? (
        <div className="popup-overlay">
            <div className="popup-content">
                <button className="close-button" onClick={onClose}>&times;</button>
                {children}
                <div className="social-icon">
                    <a href='#'><img src={sourceImg} /></a>
                </div>
            </div>
        </div>
    ) : null;
};

export default Popups;
