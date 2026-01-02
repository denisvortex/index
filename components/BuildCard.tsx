
import React from 'react';
import { Link } from 'react-router-dom';
import { WindowsBuild } from '../types.ts';

interface BuildCardProps {
  build: WindowsBuild;
}

const BuildCard: React.FC<BuildCardProps> = ({ build }) => {
  return (
    <div className="v-card overflow-hidden">
      <div className="relative h-64 overflow-hidden">
        <img src={build.imageUrl} alt={build.title} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-110 hover:scale-100" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0d12] to-transparent"></div>
        <div className="absolute top-6 left-6">
            <span className="bg-cyan-400 text-black text-[9px] font-black px-3 py-1 uppercase tracking-widest">
                {build.tags[0] || 'Build'}
            </span>
        </div>
      </div>
      <div className="p-10">
        <h3 className="text-3xl font-black text-white mb-3 leading-none uppercase italic tracking-tighter">
          {build.title}
        </h3>
        <p className="text-cyan-400 text-[10px] font-bold uppercase mb-6 tracking-[0.4em]">
          Version: {build.version}
        </p>
        <p className="text-slate-500 text-sm mb-10 leading-relaxed font-medium">
          {build.description}
        </p>
        <Link to={`/build/${build.id}`} className="v-btn-cyber w-full text-center py-4">
          Открыть спецификацию
        </Link>
      </div>
    </div>
  );
};

export default BuildCard;
