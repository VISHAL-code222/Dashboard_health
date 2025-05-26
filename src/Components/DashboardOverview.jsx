import React from 'react';
import '../CSS/DashboardOverview.css';
import AnatomySection from './AnatomySection';
import HealthStatusCards from './HealthStatusCards';

const DashboardOverview = () => {
  return (
    <section className="dashboard-overview-section dashboard-card">
      <AnatomySection />
      <HealthStatusCards />
     
    </section>
  );
};

export default DashboardOverview;
