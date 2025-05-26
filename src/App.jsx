import React from 'react';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import DashboardMainContent from './Components/DashboardMainContent'; 
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Header />
      <div className="main-layout">
        <Sidebar />
        <main className="main-content">
          <DashboardMainContent />
          
        </main>
      </div>
    </div>
  );
}

export default App;
