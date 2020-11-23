import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>
          {/*VIDEO*/} 
          <video src='/videos/video-3.mp4' autoPlay loop muted />
          <h1>WELCOME</h1> 
          <p>This is my web app with REACT</p>
          <div className='hero-btns'>
              <Button 
                className='btns' 
                buttonStyle='btn--outline' 
                buttonSize='btn--large'>
                  START WITH GALLERY
              </Button>
          </div>
        </div>
    );
}

export default HeroSection;
