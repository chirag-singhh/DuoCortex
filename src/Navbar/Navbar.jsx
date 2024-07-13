import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [active, setActive] = useState('home');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleClick = (item) => {
    setActive(item);
    setSidebarOpen(false); // Close sidebar when an item is clicked

    // Scroll to the section
    const section = document.getElementById(item);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <button className="navbar-toggle" onClick={toggleSidebar}>
          ☰
        </button>
        <ul className={`navbar-list ${sidebarOpen ? 'open' : ''}`}>
          {['home', 'about', 'service', 'projects', 'team', 'contact', 'other'].map((item) => (
            <li
              key={item}
              className={`navbar-item ${active === item ? 'active' : ''}`}
              onClick={() => handleClick(item)}
            >
              <a href={`#${item}`}>{item.charAt(0).toUpperCase() + item.slice(1)}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
