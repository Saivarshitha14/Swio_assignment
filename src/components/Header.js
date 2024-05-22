
import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';
import '../styles/Header.css';
const Header = () => {
  const openLink = (link) => {
    window.open(link, '_blank');
  };
  return (
    <header className="header">
      <div className="logo">Replay</div>
      <div className="nav">
        <div className="nav-center">
          <Link to="/sleeve">Sleeve</Link>
          <Link to="/umbra">Umbra</Link>
        </div>
        <div className="nav-right">
        <button className="nav-btn" onClick={() => openLink('https://replay.software/updates')}>Updates</button>
          <button className="nav-btn" onClick={() => openLink('https://replay.software/help/sleeve')}>Help</button>
          <button className="nav-btn" onClick={() => openLink('https://x.com/i/flow/login?redirect_after_login=%2Fsoftwarereplay')}><AiOutlineClose /></button>
        </div>
      </div>
    </header>
  );
};

export default Header;
