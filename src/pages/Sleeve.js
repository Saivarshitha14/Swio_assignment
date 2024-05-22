
import React from 'react';
import { Link } from 'react-router-dom';
import captureImage from '../images/Capture.PNG';
import appDoppler from '../images/AppDoppler.png';
import appMusic from '../images/AppMusic.png';
import appSpotify from '../images/AppSpotify.png';
import macAppStoreIcon from '../images/MacAppStoreIcon.png';
import '../styles/Sleeve.css';
import progressImage from '../images/progess.png';
import shareableImage from '../images/shareable.PNG'; 
import customizeImage from '../images/customize.PNG';
import scrobbleImage from '../images/scroble.PNG';

const Sleeve = () => {
  
  return (
    <div className="sleeve-page">
      <img src={captureImage} alt="Capture" className="sleeve-image" />
      <div className="sleeve-content">
        <h1 className="title"><strong>Sleeve</strong>  2</h1>
        <p className="subtitle"><strong>The ultimate music accessory for your Mac.</strong></p>
        <p>
          Sleeve sits on the desktop, displaying and controlling the music you’re currently playing in&nbsp;
          <img src={appMusic} alt="Apple Music" className="music-icon" /> Apple Music,&nbsp;
          <img src={appSpotify} alt="Spotify" className="music-icon" /> Spotify, and&nbsp;
          <img src={appDoppler} alt="Doppler" className="music-icon" /> Doppler.
        </p>
        <div className="d-flex justify-content-center mt-4">
          <Link to="/MacAppStore" className="btn btn-primary me-2" style={{ backgroundColor: 'white' }}>
            <img src={macAppStoreIcon} alt="MacAppStore" className="apple-icon" />
            Mac App Store
          </Link>
          <a href="buy_directly_link" className="btn btn-secondary" style={{ backgroundColor: 'black', color: 'white' }}> Buy directly
            <span className="price-background">$5.99</span>
          </a>
        </div>
        <div className="update-info mt-4">
        <img src={progressImage} alt="Progress" className="progress-image" />
          <a href="https://replay.software/updates/sleeve-2-3" target="_blank" rel="noopener noreferrer" className="update-link">

            <div className="update-text">
              Now with shelves and a progress bar. See what's new in Sleeve 2.3.
            </div>
          </a>
        </div>
        <h2 className="section-heading">Themes. Unlimited themes.</h2>
        <p className="section-text">
          Themes in Sleeve make creating and switching between customizations easy. Share your own creations with friends and install as many themes as you like with just a double-click.
        </p>
        <img src={shareableImage} alt="Shareable Themes" className="section-image" />

        <h2 className="section-heading">Countless ways to customize.</h2>
        <p className="section-text">
          Customization is at the core of the Sleeve experience — choose from any combination of design choices, behaviors and settings to make Sleeve at home on your desktop.
        </p>
        <img src={customizeImage} alt="Customize" className="section-image" />

        <h2 className="section-heading">Like, Scrobble.</h2>
        <img src={scrobbleImage} alt="Scrobble" className="section-image" />

        <div className="support-section mt-4">
          <h2 className="section-heading">Have questions that need answers?</h2>
          <p className="section-text">
            Replay's a tiny two person team — if you need some support for Sleeve, check the docs first and then, if you email us, include as much information as you can!
          </p>
          <p className="section-text">
            For any enquiries you can email us at <a href="mailto:support@replay.software">support@replay.software</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sleeve;
