import React from 'react';
import { healthStatusCardsData } from '../data';
import '../CSS/HealthStatusCards.css';

const HealthStatusCards = () => {
  return (
    <div className="health-status-cards-section">
      {healthStatusCardsData.map((card) => (
        <div key={card.id} className={`health-card ${card.status.toLowerCase().replace(' ', '-')}`}>
          <div className="card-icon">{card.icon}</div>
          <div className="card-details">
            <h4 className="card-organ">{card.organ}</h4>
            <p className="card-date">{card.date}</p>
          </div>
          <div className="card-status-indicator"></div>
        </div>
      ))}
    </div>
  );
};

export default HealthStatusCards;
