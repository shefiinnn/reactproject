import React, { useState } from 'react';
import './easports.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebookF} from '@fortawesome/free-brands-svg-icons';
import {faXTwitter} from '@fortawesome/free-brands-svg-icons';
import {faInstagram} from '@fortawesome/free-brands-svg-icons';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import usflag from './us flag1.jpg';
import seal from './seal.svg';
import ring from './ring.png';
import esrb from './esrb.svg';
import eafoot from "./eafoot.png";

function Footer() {
  return (
    <>
       <footer className="footer">
    
    <div className="footer-links">
      <a href="#" className='foot'>Careers</a>
      <a href="#"className='foot'>Executives</a>
      <a href="#"className='foot'>Impact Report</a>
      <a href="#"className='foot'>Our Commitments</a>
      <a href="#"className='foot'>Partner With Us</a>
    </div>

  
    <div className="footer-social">
      <span>JOIN THE CONVERSATION<br/></span>
      <a href="#">{<FontAwesomeIcon icon={faFacebookF}  className='icon'/>}</a> 
      <a href="#">{<FontAwesomeIcon icon={faXTwitter} className='icon'/>}</a> 
      <a href="#">{<FontAwesomeIcon icon={faInstagram} className='icon'/>}</a> 
      <a href="#">{<FontAwesomeIcon icon={faLinkedin} className='icon'/>}</a> 
    </div>

    <hr className="footer-divider" />

    {/* Logo and Disclaimer */}
    <div className="footer-content">
      {/* EA Sports Logo */}
      <div className="logo-placeholder"><img className='footimg' src={eafoot} alt="foot Icon"/></div>

      {/* ESRB Rating Image */}
      <div className="esrb-placeholder"><img className='esrb' src={esrb} alt="foot Icon"/></div>

      <h3 className="footer-disclaimer">
        *Conditions & restrictions apply. See <a href="http://www.ea.com/games/nhl/nhl-25/disclaimers">http://www.ea.com/games/nhl/nhl-25/disclaimers</a> for details.
      </h3>
    </div>
  </footer>
  <footer className="footer1">
  <img src={ring} alt='ring' className='ring'/>
    <div className="footer-links1">  
      

      <a href="/">BROWSE GAMES</a>
      <a href="/">LATEST NEWS</a>
      <a href="/">HELP CENTER</a>
      <a href="/">EA FORUMS</a>
      <a href="/" >ABOUT US</a><br/>
      <a href="/"style={{position:"relative",left:"5px", top:"20px"}}>CAREERS</a>
      <div className="country-selector">
        <img src={usflag} alt="United States" />
        <span style={{color:"grey"}}>United States</span>
        <h2 className="arrow-down" style={{color:"grey"}}>˅</h2>
      </div>
    </div>

    <div className="footer-bottom1">
     
      <div className="legal-links">
        <a href="/">Legal & Privacy</a>
        <a href="/">User Agreement</a>
        <a href="/">Privacy & Cookie Policy (Your Privacy Rights)</a><br/><br/>
        <a href="/">Online Service Updates</a>
        <a href="/">Security</a>
        <a href="/">YouTube Terms of Service</a>
        <a href="/">Google Privacy Policy</a>  <br/> <br/>

        <a href="/">Cookie Preferences</a>
      </div>
      <div className="copyright">
        © 2024 Electronic Arts Inc.
      </div>
      <div className="trustarc">
        <img src={seal} alt="TrustArc" />
      </div>
    </div>
  </footer>
  </>
);
}


export default Footer