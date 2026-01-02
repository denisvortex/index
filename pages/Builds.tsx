
import React, { useEffect } from 'react';
import { BUILDS } from '../data/builds.ts';
import BuildCard from '../components/BuildCard.tsx';

const Builds: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="max-w-7xl mx-auto px-6 py-32">
      <div className="mb-24">
        <h1 className="text-5xl md:text-7xl font-black mb-6 uppercase text-white italic tracking-tighter">Repository</h1>
        <div className="flex items-center gap-6">
            <div className="h-0.5 w-24 bg-cyan-400"></div>
            <p className="text-slate-500 font-bold uppercase text-xs tracking-[0.3em]">Каталог оптимизированных системных образов</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12">
        {BUILDS.map(build => (
          <BuildCard key={build.id} build={build} />
        ))}
      </div>
    </main>
  );
};

export default Builds;
