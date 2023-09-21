import React from 'react';
import './Hero.css';

const Hero = ({ title, description }) => {
  return (
    <div className="hero">
      <h1>{title}</h1>
      <p>{description}</p>
      <button className='cta-button'>Contact</button>
    </div>
  );
};

export default Hero;
