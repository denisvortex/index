
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="v-footer">
      <div className="flex justify-center items-center gap-12 mb-16">
        <a href="https://t.me/VortexDenis" target="_blank" className="opacity-40 hover:opacity-100 transition-all hover:scale-110">
          <img src="https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg" alt="TG" className="w-8 h-8 filter grayscale" />
        </a>
        <a href="https://youtube.com/@DenisVortex" target="_blank" className="opacity-40 hover:opacity-100 transition-all hover:scale-110">
          <img src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg" alt="YT" className="h-6 w-auto filter grayscale" />
        </a>
      </div>
      <p className="font-black text-[#1a1a1a] text-[10px] uppercase tracking-[0.8em] mb-4">Vortex Hub Official Environment</p>
      <p className="text-[#222] text-[9px] uppercase tracking-widest">Optimized for Static GitHub Deployment © 2025</p>
    </footer>
  );
};

export default Footer;
