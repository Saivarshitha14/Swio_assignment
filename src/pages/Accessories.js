
import React from 'react';
import iphoneImage from '../images/iphone.png';
import phoneImage from '../images/phone.png';
import macImage from '../images/mac.png';
import ipadImage from '../images/ipad.png';
import watchImage from '../images/watch.png';
import newArrivalsIcon from '../images/new-arrivals.png';
import casesIcon from '../images/cases-protection.png';
import chargingIcon from '../images/charging-essentials.png';
import headphonesIcon from '../images/audio-music.png';
import '../styles/Accessories.css';

import ipadAccessory1 from '../images/ipadAccessory1.PNG';
import ipadAccessory2 from '../images/ipadAccessory2.PNG';
import ipadAccessory3 from '../images/ipadAccessory3.PNG';
import iphoneAccessory1 from '../images/iphoneAccessory1.jpeg';
import iphoneAccessory2 from '../images/iphoneAccessory2.jpeg';
import iphoneAccessory3 from '../images/iphoneAccessory3.jpeg';
import watchAccessory1 from '../images/watchAccessory1.png';
import watchAccessory2 from '../images/watchAccessory2.png';
import watchAccessory3 from '../images/watchAccessory3.png';
import soundAccessory1 from '../images/soundAccessory1.png';
import soundAccessory2 from '../images/soundAccessory2.png';
import soundAccessory3 from '../images/soundAccessory3.png';
import macAccessory1 from '../images/macAccessory1.png';
import macAccessory2 from '../images/macAccessory2.png';
import macAccessory3 from '../images/macAccessory3.png';
import deliveryIcon from '../images/deliveryIcon.png';
import returnsIcon from '../images/returnsIcon.png';
import appleCardIcon from '../images/appleCardIcon.png';

const Accessories = () => {
  return (
    <div className="accessories-page">
      <div className="accessories-container">
        <img src={iphoneImage} alt="accessories" className="accessories-image" />
      </div>
      <h2 className="accessories-title">Find the accessories you’re looking for.</h2>
      <div className="search-bar">
        <input type="text" placeholder="Search accessories" className="search-input" />
      </div>
      <div className="browse-sections">
      <div className="browse-box">
        <div className="browse-by-product">
          <h3>Browse by Product</h3>
          <div className="product-icons">
            <div className="product-item">
              <img src={phoneImage} alt="iPhone" className="product-icon" />
              <p>iPhone</p>
            </div>
            <div className="product-item">
              <img src={macImage} alt="Mac" className="product-icon" />
              <p>Mac</p>
            </div>
            <div className="product-item">
              <img src={ipadImage} alt="iPad" className="product-icon" />
              <p>iPad</p>
            </div>
            <div className="product-item">
              <img src={watchImage} alt="Watch" className="product-icon" />
              <p>Watch</p>
            </div>
          </div>
        </div>
        </div>
        <hr/>
        <div className="browse-box">
        <div className="browse-by-category">
          <h3>Browse by Category</h3>
          <div className="category-icons">
            <div className="category-item">
              <img src={newArrivalsIcon} alt="New Arrivals" className="category-icon" />
              <p>New Arrivals</p>
            </div>
            <div className="category-item">
              <img src={casesIcon} alt="Cases & Protection" className="category-icon" />
              <p>Cases & Protection</p>
            </div>
            <div className="category-item">
              <img src={chargingIcon} alt="Charging Essentials" className="category-icon" />
              <p>Charging Essentials</p>
            </div>
            <div className="category-item">
              <img src={headphonesIcon} alt="Headphones & Speakers" className="category-icon" />
              <p>Speakers</p>
            </div>
          </div>
        </div>
        </div>
        <hr/>
      </div>

      <h2 className="section-title">Featured iPad Accessories</h2>
      <div className="card-section">
        <div className="card">
          <img src={ipadAccessory1} alt="Apple Pencil Pro" className="card-image" />
          <div className="card-content">
            <p>New</p>
            <p>Apple Pencil Pro</p>
            <p>$129.00</p>
            <button className="buy-now-button">Buy Now</button>
          </div>
        </div>
        <div className="card">
          <img src={ipadAccessory2} alt="Magic Keyboard" className="card-image" />
          <div className="card-content">
            <p>New</p>
            <p>Magic Keyboard for iPad Pro 13‑inch (M4) - White</p>
            <p>$349.00</p>
            <button className="buy-now-button">Buy Now</button>
          </div>
        </div>
        <div className="card">
          <img src={ipadAccessory3} alt="Smart Folio" className="card-image" />
          <div className="card-content">
            <p>New</p>
            <p>Smart Folio for iPad Pro 13-inch (M4) - Denim</p>
            <p>$99.00</p>
            <button className="buy-now-button">Buy Now</button>
          </div>
        </div>
      </div>

      <h2 className="section-title">Featured iPhone Accessories</h2>
      <div className="card-section">
        <div className="card">
          <img src={iphoneAccessory1} alt="Soft Mint" className="card-image" />
          <div className="card-content">
            <p>Soft Mint Sunshine Light Blue Storm Blue Clay Pink +</p>
            <button className="buy-now-button">Buy Now</button>
          </div>
        </div>
        <div className="card">
          <img src={iphoneAccessory2} alt="iPhone 15 Pro Clear Case with MagSafe" className="card-image" />
          <div className="card-content">
            <p>iPhone 15 Pro Clear Case with MagSafe</p>
            <p>$49.00</p>
            <button className="buy-now-button">Buy Now</button>
          </div>
        </div>
        <div className="card">
          <img src={iphoneAccessory3} alt="20W USB-C Power Adapter" className="card-image" />
          <div className="card-content">
            <p>20W USB-C Power Adapter</p>
            <p>$19.00</p>
            <button className="buy-now-button">Buy Now</button>
          </div>
        </div>
      </div>

      <h2 className="section-title">Apple Watch Bands</h2>
      <div className="card-section">
        <div className="card">
          <img src={watchAccessory1} alt="45mm Light Blue Sport Band" className="card-image" />
          <div className="card-content">
            <p>New</p>
            <p>45mm Light Blue Sport Band - M/L</p>
            <p>$49.00</p>
            <button className="buy-now-button">Buy Now</button>
          </div>
        </div>
        <div className="card">
          <img src={watchAccessory2} alt="45mm Ocean Blue Sport Loop" className="card-image" />
          <div className="card-content">
            <p>New</p>
            <p>45mm Ocean Blue Sport Loop</p>
            <p>$49.00</p>
            <button className="buy-now-button">Buy Now</button>
          </div>
        </div>
        <div className="card">
          <img src={watchAccessory3} alt="45mm Pink Solo Loop" className="card-image" />
          <div className="card-content">
            <p>New</p>
            <p>45mm Pink Solo Loop - Size 6</p>
            <p>$49.00</p>
            <button className="buy-now-button">Buy Now</button>
          </div>
        </div>
      </div>

      <h2 className="section-title">Sound Essentials</h2>
      <div className="card-section">
        <div className="card">
          <img src={soundAccessory1} alt="AirPods Pro (2nd generation)" className="card-image" />
          <div className="card-content">
            <p>Free Engraving</p>
            <p>AirPods Pro (2nd generation) with MagSafe Charging Case (USB‑C)</p>
            <p>$249.00</p>
            <button className="buy-now-button">Buy Now</button>
          </div>
        </div>
        <div className="card">
          <img src={soundAccessory2} alt="AirPods (3rd generation)" className="card-image" />
          <div className="card-content">
            <p>Free Engraving</p>
            <p>AirPods (3rd generation) with Lightning Charging Case</p>
            <p>$169.00</p>
            <button className="buy-now-button">Buy Now</button>
          </div>
        </div>
        <div className="card">
          <img src={soundAccessory3} alt="HomePod - Midnight" className="card-image" />
          <div className="card-content">
            <p>HomePod - Midnight</p>
            <p>$299.00</p>
            <button className="buy-now-button">Buy Now</button>
          </div>
        </div>
      </div>

      <h2 className="section-title">Featured Mac Accessories</h2>
      <div className="card-section">
        <div className="card">
          <img src={macAccessory1} alt="Studio Display" className="card-image" />
          <div className="card-content">
            <p>Studio Display</p>
            <p>$1,599.00</p>
            <button className="buy-now-button">Buy Now</button>
          </div>
        </div>
        <div className="card">
          <img src={macAccessory2} alt="Magic Keyboard with Touch ID" className="card-image" />
          <div className="card-content">
            <p>Magic Keyboard with Touch ID and Numeric Keypad</p>
            <p>$199.00</p>
            <button className="buy-now-button">Buy Now</button>
          </div>
        </div>
        <div className="card">
          <img src={macAccessory3} alt="Magic Mouse" className="card-image" />
          <div className="card-content">
            <p>Magic Mouse</p>
            <p>$99.00</p>
            <button className="buy-now-button">Buy Now</button>
          </div>
        </div>
      </div>

      <hr />

      <div className="info-section">
        <div className="info-item">
          <img src={deliveryIcon} alt="Fast delivery or pickup" className="info-icon" />
          <p>Enjoy two-hour delivery from an Apple Store, free delivery, or easy pickup.</p>
          <a href="#">Learn more</a>
        </div>
        <div className="info-item">
          <img src={returnsIcon} alt="Free and easy returns" className="info-icon" />
          <p>Complete your return online or take it to an Apple Store.</p>
          <a href="#">Learn more</a>
        </div>
        <div className="info-item">
          <img src={appleCardIcon} alt="Buy with Apple Card" className="info-icon" />
          <p>Get 3% Daily Cash back when you shop at Apple with Apple Card.</p>
          <a href="#">Learn more</a>
        </div>

       
      </div>
      <p>We approximate your location from your internet IP address by matching it to a geographic region or from the location entered during your previous visit to Apple</p>
      <hr />
      <footer className="footer">
        <p>Copyright © 2024 Apple Inc. All rights reserved.</p>
        <div className="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Use</a>
          <a href="#">Sales and Refunds</a>
          <a href="#">Legal</a>
          <a href="#">Site Map</a>
        </div>
        
      </footer>

    </div>
  );
};

export default Accessories;
