
import React from 'react';
import { Link } from 'react-router-dom';
import { BUILDS } from '../data/builds';
import BuildCard from '../components/BuildCard';

const Home: React.FC = () => {
  return (
    <main className="max-w-6xl mx-auto px-6 py-24">
      <section className="text-center mb-24">
        <div className="inline-block px-5 py-2 mb-8 rounded-full bg-[#00d2ff]/10 border border-[#00d2ff]/20 text-[#00d2ff] text-[11px] font-black uppercase tracking-[0.2em] animate-pulse">
          Premium Software Portal
        </div>
        <h1 className="text-6xl md:text-8xl font-black mb-10 text-white leading-none tracking-tighter">
          VORTEX <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d2ff] to-[#3a7bd5]">MOD HUB</span>
        </h1>
        <p className="max-w-3xl mx-auto text-slate-400 text-lg md:text-xl leading-relaxed mb-12">
          Новое измерение производительности вашей Windows. <br/>
          Оптимизированные образы, эксклюзивный софт и авторские твики от Дениса Вортекса.
        </p>

        <div className="v-btn-grid max-w-4xl mx-auto">
          <Link to="/builds" className="v-action-btn">Сборки Систем</Link>
          <a href="https://t.me/DenisVortexbasefile" target="_blank" className="v-action-btn">Библиотека ISO</a>
          <a href="https://t.me/goyt31" target="_blank" className="v-action-btn">Связаться</a>
          <a href="https://youtube.com/@DenisVortex" target="_blank" className="v-action-btn">Канал YouTube</a>
        </div>
      </section>

      <section className="mb-32">
        <div className="relative p-2 rounded-[40px] bg-gradient-to-br from-[#00d2ff]/30 to-transparent">
          <div className="aspect-video w-full rounded-[35px] overflow-hidden border border-white/5 shadow-2xl">
            <iframe 
              className="w-full h-full"
              src="https://www.youtube.com/embed/videoseries?list=UULFsS9QFVkkxhF0zYwf1QP2ZA"
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      <section id="popular">
        <div className="flex items-center justify-between mb-16">
          <h2 className="text-3xl font-black text-white uppercase tracking-tight">Популярные Сборки</h2>
          <Link to="/builds" className="text-[#00d2ff] text-sm font-bold uppercase tracking-widest hover:underline">
            Все релизы →
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
