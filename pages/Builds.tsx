
import React, { useEffect } from 'react';
import { BUILDS } from '../data/builds';
import BuildCard from '../components/BuildCard';

const Builds: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-black mb-4 uppercase text-white">Список сборок Windows</h1>
        <p className="text-slate-400">Выберите подходящую версию системы для вашего компьютера.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {BUILDS.map(build => (
          <BuildCard key={build.id} build={build} />
        ))}
      </div>
    </main>
  );
};

export default Builds;
