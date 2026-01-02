
import React from 'react';
import { Link } from 'react-router-dom';
import { BUILDS } from '../data/builds.ts';
import BuildCard from '../components/BuildCard.tsx';

const Home: React.FC = () => {
  return (
    <main className="max-w-7xl mx-auto px-6 py-32">
      <section className="text-center mb-40 relative">
        <div className="inline-block px-4 py-1 mb-10 border-l-4 border-cyan-400 bg-cyan-400/5 text-cyan-400 text-[9px] font-black uppercase tracking-[0.5em]">
            System Status: Online // Port: 8080
        </div>
        <h1 className="text-6xl md:text-[120px] font-black mb-10 text-white leading-[0.85] tracking-tighter uppercase italic">
          Vortex<br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Hub</span>
        </h1>
        <p className="max-w-2xl mx-auto text-slate-500 text-lg md:text-xl font-medium leading-relaxed mb-20 tracking-wide">
          Прецизионная настройка Windows для экстремальной производительности. 
          Ликвидация телеметрии. Максимальный FPS.
        </p>

        <div className="flex flex-wrap justify-center gap-8">
          <Link to="/builds" className="v-btn-cyber min-w-[220px]">Начать развертывание</Link>
          <a href="https://t.me/DenisVortexbasefile" target="_blank" className="v-btn-outline min-w-[220px]">ISO База</a>
          <a href="https://youtube.com/@DenisVortex" target="_blank" className="v-btn-outline">YouTube</a>
        </div>
      </section>

      <section className="mb-40">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-[30px] blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
          <div className="relative aspect-video w-full rounded-[28px] overflow-hidden border border-white/5 bg-black">
            <iframe 
              className="w-full h-full opacity-90"
              src="https://www.youtube.com/embed/videoseries?list=UULFsS9QFVkkxhF0zYwf1QP2ZA"
              title="Vortex Channel" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      <section id="popular">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20">
          <div>
            <h2 className="text-4xl font-black text-white uppercase tracking-tighter italic">Актуальные ревизии</h2>
            <div className="h-0.5 w-40 bg-cyan-400 mt-4"></div>
          </div>
          <Link to="/builds" className="text-cyan-400 text-[10px] font-black uppercase tracking-[0.3em] hover:text-white transition-colors mt-8 md:mt-0">
            [ Показать все системы ]
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {BUILDS.slice(0, 4).map(build => (
            <BuildCard key={build.id} build={build} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;
