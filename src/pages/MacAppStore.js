
import React from 'react';
import { Link } from 'react-router-dom';
import macAppStoreIcon from '../images/MacAppStoreIcon.png';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../styles/MacAppStore.css';
import musicImage from '../images/music.PNG';
import screenshotImage from '../images/screenshot.PNG';
const MacAppStore = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={macAppStoreIcon} alt="Mac App Store" className="navbar-icon" />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link mx-4" to="/">Entertainment</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mx-4" to="/Accessories">Accessories</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mx-4" to="/Support">Support</Link>
              </li>
            </ul>
            <div className="d-flex mx-4">
              <i className="bi bi-search me-3 mx-4"></i>
              <i className="bi bi-bag"></i>
            </div>
          </div>
        </div>
      </nav>
      <h4 className="preview-title"><strong>Mac App Store</strong> Preview</h4>
      <div className="content-container">
        <h6>Open the Mac App Store to buy and download apps.</h6>
      </div>
      <div className="music-content">
      <img src={musicImage} alt="Music" className="music-image" />
      <div className="music-details">
            <h2>Sleeve for Spotify, Music <span className="age-rating">[4+]</span></h2>
            <p>Your music on your desktop</p>
            <p>Replay Software Limited</p>
            <div className="rating">
              <span className="stars">★★★★☆</span> 4.0 • 21 Ratings
            </div>
            <div className="price">$7.99</div>
          </div>
      </div>
      
      <hr/>
      <p className="screenshots-title"><strong>Screenshots</strong></p>
      <div className="screenshots-section">
          
          <img src={screenshotImage} alt="Screenshot" className="screenshot-image" />
        </div>
<hr/>
<div className="whats-new-section">
          <div>
            <p className="whats-new-title">What’s New</p>
            <p>This patch release addresses a bug that caused Sleeve to crash when used with Doppler.</p>
          </div>
          <div>
            <p className="version-history-title">Version History</p>
            <p>Feb 22, 2024 Version 2.3.2</p>
          </div>
        </div>

    </div>
  );
};

export default MacAppStore;
