import React from 'react';
import { activityFeedData, recentActivitiesData } from '../data'; //
import '../CSS/ActivityFeed.css';

const ActivityFeed = () => {
  const { summary } = activityFeedData;
  const activities = recentActivitiesData; 
 
  const barChartData = [
    { day: 'Mon', height: 60 }, 
    { day: 'Tue', height: 80 },
    { day: 'Wed', height: 40 },
    { day: 'Thu', height: 70 },
    { day: 'Fri', height: 50 },
    { day: 'Sat', height: 90 },
    { day: 'Sun', height: 30 },
  ];

  return (
    <section className="activity-feed-section dashboard-card">
      <div className="dashboard-card-header activity-header">
        <h3>Activity</h3>
        <p className="activity-summary">{summary}</p>
      </div>
      <div className="activity-chart-container">
        <div className="bar-chart">
          {barChartData.map((bar, index) => (
            <div key={index} className="bar-item">
              <div className="bar" style={{ height: `${bar.height}%` }}>
                <span className="bar-value">{bar.height}</span> 
              </div>
              <span className="bar-label">{bar.day}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="recent-activities-list">
        <h4>Recent Activities</h4>
        <ul>
          {activities.map(activity => (
            <li key={activity.id} className="activity-item">
              <span className="activity-icon">{activity.icon}</span>
              <div className="activity-details">
                <p className="activity-text">
                  <strong>{activity.user}</strong> {activity.action}
                </p>
                <p className="activity-time">{activity.time}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ActivityFeed;
