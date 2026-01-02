
import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="v-header">
      <Link to="/" className="v-logo">
        <img src="https://i.postimg.cc/KYJgXpVW/photo-2025-11-03-18-51-07.jpg" alt="Vortex Hub Logo" />
        Vortex Hub
      </Link>
      <nav className="v-nav">
        <Link to="/">Главная</Link>
        <Link to="/builds">Сборки</Link>
        <a href="https://t.me/DenisVortexbasefile" target="_blank">ISO</a>
        <a href="https://t.me/goyt31" target="_blank">Донат</a>
      </nav>
      <div className="md:hidden">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </div>
    </header>
  );
};

export default Header;
