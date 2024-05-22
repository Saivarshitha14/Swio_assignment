import React from 'react';
import umbraImage from '../images/umbra.PNG'; 
import heading from '../images/heading.PNG'
import themeImage from '../images/theme.PNG';
import { Link } from 'react-router-dom';
import '../styles/Umbra.css';
const Umbra = () => {
  return (
    <div className="umbra-page">
      <img src={umbraImage} alt="Umbra" className="umbra-image" />
      <div className="umbra-content">
      <img src={heading} alt="Heading" className="heading-image" />
      <hr/ >
      <h5>
          Umbra is a simple menu bar app that lets you specify desktop wallpapers for both light & dark appearances in macOS, plus toggle dark mode right from the menu bar.
        </h5>
        <Link to="https://replaysoftware.gumroad.com/l/umbra-app" className="get-it-now-button">
          Get it now for Mac
        </Link>

      </div>
      <div className="feature-boxes">
        <div className="feature-box">
          <p>Preview photos from collections & set them for light, dark, or both appearances.</p>
        </div>
        <div className="feature-box">
          <p>Browse Wallpapers, Renders, Patterns, Nature & Travel Photos from Unsplash</p>
        </div>
        <div className="feature-box">
          <p>Settings for Dimming Wallpaper in Dark Mode & Changing Menu Bar Icon Behavior</p>
        </div>
        <div className="feature-box">
          <p>Keeps wallpapers, settings & appearance synced with macOS natively.</p>
        </div>
        <div className="feature-box">
          <p>Set a Global Keyboard Shortcut to Transition Between Appearances</p>
        </div>
        <div className="feature-box">
          <p>Fully localized for Japanese, Chinese, Spanish & French languages.</p>
        </div>
      </div>
      <img src={themeImage} alt="Themes" className="theme-image" />

      <div className="help-text">
        <p>Need some help with Umbra? View the FAQs or lookup a previous purchase.</p>
      </div>
    </div>
  );
};

export default Umbra;
