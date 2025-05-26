import React from 'react';
import { navigationLinks } from '../data';
import '../CSS/Sidebar.css';

const Sidebar = () => {
  return (
    <aside className="dashboard-sidebar">
      <div className="sidebar-header">
        <h3>General</h3>
      </div>
      <nav className="sidebar-nav">
        <ul>
          {navigationLinks.map((link) => (
            <li key={link.id} className="nav-item">
              <a href="#" className="nav-link"> 
                <span className="nav-icon">{link.icon}</span>
                <span className="nav-text">{link.text}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
     
    </aside>
  );
};

export default Sidebar;
