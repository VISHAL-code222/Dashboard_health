import React from 'react';
import { upcomingScheduleData } from '../data';
import SimpleAppointmentCard from './SimpleAppointmentCard'; // To be created
import '../CSS/UpcomingSchedule.css';

const UpcomingSchedule = () => {
  return (
    <section className="upcoming-schedule-section dashboard-card">
      <div className="dashboard-card-header">
        <h3>The Upcoming Schedule</h3>
       
      </div>
      <div className="schedule-content">
        {Object.entries(upcomingScheduleData).map(([dayGroup, appointments]) => (
          <div key={dayGroup} className="day-group">
            <h4>
              {dayGroup === 'onThursday' && 'On Thursday'}
              {dayGroup === 'onSaturday' && 'On Saturday'}
              
            </h4>
            <div className="appointments-list">
              {appointments.map(appt => (
                <SimpleAppointmentCard
                  key={appt.id}
                  title={appt.title}
                  time={appt.time}
                  icon={appt.icon}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UpcomingSchedule;
