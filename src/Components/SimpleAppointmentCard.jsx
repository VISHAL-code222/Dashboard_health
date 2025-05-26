import React from 'react';
import '../CSS/SimpleAppointmentCard.css';

const SimpleAppointmentCard = ({ title, time, icon }) => {
  return (
    <div className="simple-appointment-card">
      <div className="card-icon-container">
        {icon && <span className="appointment-icon">{icon}</span>}
      </div>
      <div className="appointment-details">
        <h5 className="appointment-title">{title}</h5>
        <p className="appointment-time">{time}</p>
      </div>
      <div className="appointment-options">
       
        <span className="options-icon">⋮</span> 
      </div>
    </div>
  );
};

export default SimpleAppointmentCard;
