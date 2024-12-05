import React, { useState } from 'react';
import './easports.css';
import EaLogo from './ea-logo-hero-1920x1100.svg';
import madden from "./madden25.jpg";
import nhl from "./nhl25.jpg";
import fc from "./fc25.jpg";
import fcmob from "./fc mob.jpg";
import f124 from "./f124.jpg";
import madmob from "./madden mob.png";
import nba from "./nba.jpg";
import ufc from "./ufc5.jpg";
import cfb from "./cfb25.jpg";
import n1 from "./pic1.png";
import n2 from "./pic2.jpg";
import n3 from "./pic3.jpg";
import n4 from "./pic4.jpg";
import n5 from "./pic5.jpg";
import n6 from "./pic6.png";
import Easportss from './Easportss';
import Footer from './Footer';
function Easports() {
  return (
    <>
    <Easportss/>
      <div className='video'>
      <video
      autoPlay
      loop
      muted
      controls={false} 
      playsInline
      style={{ width: "100%",position:'relative',top:'40px',height:"100%"}} 
    >
      <source
        src="https://media.contentapi.ea.com/content/dam/ea/sports/v2-2024/homepage/common/video-v2/eacom-edit-v5-1920x1100.mp4"
        type="video/mp4"
        media="(min-width: 1950px)"
      />
      <source
        src="https://media.contentapi.ea.com/content/dam/ea/sports/v2-2024/homepage/common/video-v2/eacom-edit-v5-1456x1110.mp4"
        type="video/mp4"
        media="(min-width: 1456px)"
      />
      <source
        src="https://media.contentapi.ea.com/content/dam/ea/sports/v2-2024/homepage/common/video-v2/eacom-edit-v5-1022x870.mp4"
        type="video/mp4"
        media="(min-width: 1022px)"
      />
      <source
        src="https://media.contentapi.ea.com/content/dam/ea/sports/v2-2024/homepage/common/video-v2/eacom-edit-v5-768x1278.mp4"
        type="video/mp4"
        media="(min-width: 768px)"
      />
      <source
        src="https://media.contentapi.ea.com/content/dam/ea/sports/v2-2024/homepage/common/video-v2/eacom-edit-v5-1920x1100.webm"
        type="video/mp4"
        media="(min-width: 1920px)"
      />
      <source
        src="https://media.contentapi.ea.com/content/dam/ea/sports/v2-2024/homepage/common/video-v2/eacom-edit-v5-1456x1110.webm"
        type="video/mp4"
        media="(min-width: 1456px)"
      />
      <source
        src="https://media.contentapi.ea.com/content/dam/ea/sports/v2-2024/homepage/common/video-v2/eacom-edit-v5-1022x870.webm"
        type="video/mp4"
        media="(min-width: 1022px)"
      />
      <source
        src="https://media.contentapi.ea.com/content/dam/ea/sports/v2-2024/homepage/common/video-v2/eacom-edit-v5-768x1278.webm"
        type="video/mp4"
        media="(min-width: 768px)"
      />
      Your browser does not support the video tag.
    </video>
    <div className="svg-overlay">
        <img src={EaLogo} alt='ea'/>
      </div>
      </div>
      <div className='games'>
        <h1 className='head2'style={{color:'white'}}><center>LATEST SPORTS GAMES</center></h1>

    <div className="container" >
      <div className="grid-item">
        <img className='img1' src={nhl} alt="nhl"/>       
      </div>
      <div className="grid-item"><img className='img2' src={fc} alt="nhl" />  </div>
      <div className="grid-item"><img className='img3' src={madden} alt="nhl" />  </div>
      <div className="grid-item"><img className='img4' src={madmob} alt="nhl" />  </div>
      <div className="grid-item"><img className='img5' src={cfb} alt="nhl" />  </div>
      <div className="grid-item"><img className='img6' src={f124} alt="nhl" />  </div>
      <div className="grid-item"><img className='img7' src={ufc} alt="nhl" />  </div>
      <div className="grid-item"><img className='img8' src={fcmob} alt="nhl" />  </div>
      <div className="grid-item"><img className='img9' src={nba} alt="nhl" />  </div>
    </div>
    <div className="button">
      <button className="hover-button">See All Games</button>
    </div>
    <div className='news'>
    <h1 className='head3'style={{color:'black'}}><center>LATEST NEWS</center></h1>
    </div>
    <div className="newscard">
      <div className="news-grid">
        <div className="news-card">
          <div className="image-container">
            <img src={n1} alt="EA Sports App" className='imagen' style={{width:'350px' , height:'200px'}} />
          </div>
          <h2>INTRODUCING THE EA SPORTS™ APP A NEW INTERACTIVE PLATFORM FOR SPORTS FANS</h2>
          <p className="subtitle">A new interactive platform for sports fans
            EA SPORTS Launches The EA SPORTS App </p>
        </div>

        <div className="news-card">
          <div className="image-container">
            <img src={n2} alt="Gen EA Sports Program" className='imagen' style={{width:'350px' , height:'200px',marginTop:'-2px'}}/>
          </div>
          <h2>EA SPORTS REVEALS “GEN / EA SPORTS” PROGRAM</h2>
          <p className="subtitle">
        
        EA SPORTS Launches “GEN / EA SPORTS” Athlete Engagement Program To Fuel The Next Generation Of Sport
    
    </p>
         
        </div>

        <div className="news-card">
          <div className="image-container">
            <img src={n3} alt="EA Sports Apparel Collection" className='imagen' style={{width:'350px' , height:'200px',marginTop:'-2px'}}/>
          </div>
          <h2>EA SPORTS APPAREL COLLECTION</h2>
          <p className="subtitle">
        
        Limited time drop to celebrate our return to College Football.
    
    </p>
        </div>

        <div className="news-card">
          <div className="image-container">
            <img src={n4} alt="Card 4" className='imagen' style={{width:'350px' , height:'200px',marginTop:'-2px'}}/>
          </div>
          <h2>COLLEGE FOOTBALL 25 ULTIMATE TEAM DEEP DIVE</h2>
          <p className="subtitle"> Learn more about Ultimate Team in EA SPORTS College Football 25.</p>
        </div>

        <div className="news-card">
          <div className="image-container">
            <img src={n5} alt="Card 5" className='imagen' style={{width:'350px' , height:'200px' ,marginTop:'-2px'}}/>
          </div>
          <h2>WELCOME TO MADDEN NFL 25</h2>
          <p className="subtitle">
        
        Everything you need to know about the official Madden NFL 25 reveal.
    
    </p>
        </div>

        <div className="news-card">
          <div className="image-container">
            <img src={n6} alt="Card 6" className='imagen' style={{width:'350px' , height:'200px',marginTop:'-2px'}}/>
          </div>
          <h2>EA SPORTS LATEST TECH INNOVATIONS</h2>
          <p className="subtitle">     
        A look at Electronic Arts’s biggest tech advancements as we gear up for another year of innovation.    
    </p>
        </div>
      </div>
    </div>
    <div className='button1'> <button className="hover-button1">See All News</button></div>
    <div className='tog'>
      <p className='p1'>TOGETHER WE'LL <br/> CHANGE THE GAME</p>
   
    <div className='button2'> <button className="hover-button2">Join The Team</button></div> </div>
 <Footer/>




      </div>
    </>
  );
}

export default Easports;
