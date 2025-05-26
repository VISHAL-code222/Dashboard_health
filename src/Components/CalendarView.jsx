import React from 'react';
import { calendarData } from '../data';
import '../CSS/CalendarView.css';

const CalendarView = () => {
  const { month, year, appointments, detailedAppointments } = calendarData;

 
 
  const daysInMonth = Array.from({ length: 31 }, (_, i) => i + 1);
  const firstDayOfMonthOffset = 4; 
  const calendarCells = Array(firstDayOfMonthOffset).fill(null).concat(daysInMonth);


  const getAppointmentsForDay = (day) => {
    const appt = appointments.find(a => a.day === day);
    return appt ? appt.times : [];
  };

  return (
    <section className="calendar-view-section dashboard-card">
      <div className="calendar-header">
        <h3>{month} {year}</h3>
        <div className="calendar-nav">
          <button>{'<'}</button>
          <button>{'>'}</button>
        </div>
      </div>
      <div className="calendar-grid">
        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(dayName => (
          <div key={dayName} className="calendar-day-name">{dayName}</div>
        ))}
        {calendarCells.map((day, index) => (
          <div key={index} className={`calendar-day ${day ? '' : 'empty'}`}>
            {day && <span className="day-number">{day}</span>}
            {day && getAppointmentsForDay(day).length > 0 && (
              <div className="appointments-on-day">
                {getAppointmentsForDay(day).map((time, i) => (
                  <div key={i} className="day-appointment-time">{time}</div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="detailed-appointments-container">
        {detailedAppointments.map(appt => (
          <div key={appt.id} className="detailed-appointment-card">
            <div className="appt-card-icon">{appt.icon}</div>
            <div className="appt-card-info">
              <h4>{appt.type}</h4>
              <p>{appt.doctor}</p>
            </div>
            <div className="appt-card-time">
              <p>{appt.date}</p>
              <p>{appt.time}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CalendarView;
