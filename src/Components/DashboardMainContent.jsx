import React from 'react';
import '../CSS/DashboardMainContent.css';
import DashboardOverview from '../Components/DashboardOverview';
import CalendarView from '../Components/CalendarView';
import UpcomingSchedule from '../Components/UpcomingSchedule';
import ActivityFeed from '../Components/ActivityFeed';

const DashboardMainContent = () => {
  return (
    <div className="dashboard-main-content">
      <DashboardOverview />
      <div className="dashboard-bottom-row">
        <CalendarView />
        <UpcomingSchedule />
      </div>
      <ActivityFeed />
     
    </div>
  );
};

export default DashboardMainContent;
