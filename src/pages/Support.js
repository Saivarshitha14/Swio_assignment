import React from 'react';
import supportImage from '../images/support.PNG';
import '../styles/Support.css';

const Support = () => {
  return (

    <div>
        <img src={supportImage} alt="Support" className="support-image" />
        <div className="support-container">
      
      <h1 className="support-title">Apple Support</h1>
    </div>
    </div>
    
  );
};

export default Support;
