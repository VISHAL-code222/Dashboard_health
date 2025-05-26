import React from 'react';
import { anatomicalHealthData } from '../data';
import '../CSS/AnatomySection.css';
import img2 from "../assets/image3.png"

const AnatomySection = () => {
  const {  indicators } = anatomicalHealthData;

  return (
    <div className="anatomy-section">
      <div className="anatomy-image-container">
        <img src={img2} alt="Anatomical Illustration" className="anatomy-image" />
        {indicators.map((indicator) => (
          <div
            key={indicator.id}
            className={`health-indicator ${indicator.status}`}
            style={{ top: indicator.position.top, left: indicator.position.left }}
          >
            <span className="indicator-dot"></span>
            <span className="indicator-text">{indicator.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnatomySection;
