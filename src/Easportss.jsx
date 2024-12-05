import React from 'react'
import logo from './ea ea last.jpg'
import logos from './sports last.jpg'
import ealogo from './ea logo2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';
import user from './user (1).png';
import { useState } from 'react';
import './easports.css'


function Easportss() {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
      setDropdownOpen(!isDropdownOpen);
    };
  return (
    <div className='main' >
    <div className='nav1' >
      <img className='user' src={user} alt="User Icon" style={{height:'30px'}} />
      <FontAwesomeIcon icon={faQuestion} style={{ color: 'grey' }} className='faQuestion' />
      <img className='ealogo' src={ealogo} alt="EA Logo" style={{height:'20px'}} />
    </div>
    <div className='nav10' >
      <img className="logo" src={logo} alt="EA Logo" />
      <img className="logo1" src={logos} alt="Sports Logo" />
      <div className="navbar">
        <ul className="nav-links">
          <li className="dropdown" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
            <a href="/games">
              GAMES {isDropdownOpen ? '▲' : '▼'}
            </a>
            {isDropdownOpen && (
              <ul className="dropdown-menu">
                <li><a href="/latest-games">Latest Games</a></li>
                <li><a href="/mobile-games">Mobile Games</a></li>
              </ul>
            )}
          </li>
          <li><a href="/news">NEWS</a></li>
          <li><a href="/apparel">APPAREL</a></li>
        </ul>
      </div>
    </div>
    </div>
  )
};

export default Easportss