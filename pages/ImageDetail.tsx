
import React, { useEffect, useState, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { BUILDS } from '../data/builds.ts';

interface ImageDetailProps {
  manualId?: string;
}

const ImageDetail: React.FC<ImageDetailProps> = ({ manualId }) => {
  const { id } = useParams<{ id: string }>();
  const activeId = manualId || id;
  const build = BUILDS.find(b => b.id === activeId);

  const [accordionActive, setAccordionActive] = useState(true);
  const [showPopup, setShowPopup] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState('');
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [timeLeft, setTimeLeft] = useState(15);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeId]);

  useEffect(() => {
    if (isConfirmed && timeLeft > 0) {
      timerRef.current = window.setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      if (timerRef.current) clearInterval(timerRef.current);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isConfirmed, timeLeft]);

  if (!build) return <div className="text-center py-60 text-white font-black text-4xl">404: RESOURCE_MISSING</div>;

  const handleOpenPopup = (url: string) => {
    setDownloadUrl(url);
    setIsConfirmed(false);
    setTimeLeft(15);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    if (timerRef.current) clearInterval(timerRef.current);
    setDownloadUrl('');
  };

  const proceedDownload = () => {
    if (timeLeft === 0 && isConfirmed && downloadUrl) {
      window.open(downloadUrl, "_blank");
      handleClosePopup();
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-32">
      <Link to="/builds" className="inline-block text-cyan-400 mb-16 font-black uppercase text-[10px] tracking-[0.5em] hover:text-white transition-all">
        [ Назад к терминалу ]
      </Link>
      
      <div className="grid lg:grid-cols-2 gap-24 mb-32">
        <div>
          <h1 className="text-5xl md:text-8xl font-black mb-8 text-white leading-[0.85] tracking-tighter uppercase italic">
              {build.title}
          </h1>
          <div className="flex items-center gap-4 mb-12">
            <span className="h-px w-12 bg-cyan-400"></span>
            <p className="text-cyan-400 text-sm font-black tracking-[0.4em] uppercase opacity-70">Rev. {build.version}</p>
          </div>
          <p className="text-slate-400 text-xl leading-relaxed mb-16 font-medium">
            {build.longDescription}
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 py-12 border-y border-white/5">
            <div>
                <p className="text-[10px] text-slate-600 font-bold uppercase mb-2 tracking-widest">Image Size</p>
                <p className="text-white font-black text-2xl tracking-tighter">{build.size}</p>
            </div>
            <div className="sm:border-x border-white/5 sm:px-8">
                <p className="text-[10px] text-slate-600 font-bold uppercase mb-2 tracking-widest">Platform</p>
                <p className="text-white font-black text-2xl tracking-tighter">x64 Arch</p>
            </div>
            <div className="sm:pl-8">
                <p className="text-[10px] text-slate-600 font-bold uppercase mb-2 tracking-widest">Integrity</p>
                <p className="text-white font-black text-2xl tracking-tighter">Verified</p>
            </div>
          </div>
        </div>

        <div className="v-card p-2 bg-cyan-400/5 border-cyan-400/20">
          <img src={build.imageUrl} alt={build.title} className="w-full rounded h-auto opacity-80" />
        </div>
      </div>

      <div className="mb-40">
        <button 
          className="w-full bg-white/5 border border-white/10 p-8 flex justify-between items-center text-white font-black uppercase text-xs tracking-[0.4em] hover:bg-cyan-400/10 transition-all"
          onClick={() => setAccordionActive(!accordionActive)}
        >
          // Модификации и твики ядра //
          <span className="text-cyan-400">{accordionActive ? 'Collapse' : 'Expand'}</span>
        </button>
        {accordionActive && (
          <div className="p-12 border-x border-b border-white/5 bg-white/[0.02]">
            <div className="grid md:grid-cols-2 gap-20">
                <div>
                    <h4 className="text-cyan-400 font-black uppercase text-[10px] mb-10 tracking-[0.5em]">Optimization Log:</h4>
                    <ul className="space-y-6 text-slate-400 text-sm font-bold">
                        <li className="flex items-start gap-4"><span className="text-cyan-400">[OK]</span> Удалена телеметрия и сбор данных MS</li>
                        <li className="flex items-start gap-4"><span className="text-cyan-400">[OK]</span> Отключен Defender (в Lite версиях)</li>
                        <li className="flex items-start gap-4"><span className="text-cyan-400">[OK]</span> Вырезаны рекламные ID и рекомендации</li>
                        <li className="flex items-start gap-4"><span className="text-cyan-400">[OK]</span> Оптимизирован планировщик задач</li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-cyan-400 font-black uppercase text-[10px] mb-10 tracking-[0.5em]">System Tools:</h4>
                    <p className="text-slate-500 text-sm leading-relaxed font-bold">
                        В корень образа интегрирован пакет утилит <span className="text-white">"VORTEX_TOOLKIT"</span>. 
                        Включает активаторы, драйвер-паки и набор софта для быстрого старта после переустановки.
                    </p>
                </div>
            </div>
          </div>
        )}
      </div>

      <div className="text-center">
        <h2 className="text-5xl font-black mb-20 uppercase text-white tracking-tighter italic">Download Mirrors</h2>
        
        <div className="max-w-4xl mx-auto space-y-24">
            <div className="relative p-12 bg-white/[0.02] border border-white/5">
                <p className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 bg-[#030508] text-[9px] font-black text-cyan-400 uppercase tracking-[0.8em]">Standard Deployment</p>
                <div className="flex flex-wrap justify-center gap-10">
                {build.downloadLinks.standard?.mediafire && (
                    <button onClick={() => handleOpenPopup(build.downloadLinks.standard!.mediafire!)} className="v-btn-outline min-w-[200px]">MediaFire</button>
                )}
                {build.downloadLinks.standard?.pixeldrain && (
                    <button onClick={() => handleOpenPopup(build.downloadLinks.standard!.pixeldrain!)} className="v-btn-outline min-w-[200px]">PixelDrain</button>
                )}
                {build.downloadLinks.standard?.mega && (
                    <button onClick={() => handleOpenPopup(build.downloadLinks.standard!.mega!)} className="v-btn-outline min-w-[200px]">Mega.NZ</button>
                )}
                </div>
            </div>

            {build.downloadLinks.defenderless && (
            <div className="relative p-12 bg-red-500/[0.02] border border-red-500/20">
                <p className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 bg-[#030508] text-[9px] font-black text-red-500 uppercase tracking-[0.8em]">Zero Protection (Lite)</p>
                <div className="flex flex-wrap justify-center gap-10">
                    <button onClick={() => handleOpenPopup(build.downloadLinks.defenderless.mediafire!)} className="v-btn-outline border-red-500/40 text-red-500 hover:bg-red-500/20 min-w-[200px]">MediaFire</button>
                    <button onClick={() => handleOpenPopup(build.downloadLinks.defenderless.pixeldrain!)} className="v-btn-outline border-red-500/40 text-red-500 hover:bg-red-500/20 min-w-[200px]">PixelDrain</button>
                    <button onClick={() => handleOpenPopup(build.downloadLinks.defenderless.mega!)} className="v-btn-outline border-red-500/40 text-red-500 hover:bg-red-500/20 min-w-[200px]">Mega.NZ</button>
                </div>
            </div>
            )}
        </div>
      </div>

      {showPopup && (
        <div className="v-modal-overlay">
          <div className="v-modal">
            <h2 className="text-4xl font-black mb-8 text-white uppercase tracking-tighter italic">Warning Protocol</h2>
            <p className="text-slate-500 text-sm font-bold leading-relaxed mb-10">
                Внимание: вы загружаете модифицированный системный образ. 
                Мы рекомендуем выполнить резервное копирование данных перед установкой. 
                Автор не несет ответственности за некорректное использование.
            </p>
            
            <div className="grid grid-cols-1 gap-4 mb-10">
                <a href="https://youtu.be/ckCrrp2WuMc" target="_blank" className="v-btn-outline text-center text-[10px] py-4">▶ Видео-гайд: Чистая установка</a>
                <a href="https://youtu.be/nBvSLOUS03Y" target="_blank" className="v-btn-outline text-center text-[10px] py-4">▶ Видео-гайд: Без флешки</a>
            </div>

            <label className="flex items-center gap-4 mb-12 cursor-pointer group">
                <input 
                    type="checkbox" 
                    className="w-5 h-5 accent-cyan-400 cursor-pointer" 
                    checked={isConfirmed}
                    onChange={(e) => setIsConfirmed(e.target.checked)}
                />
                <span className="text-[10px] font-black text-slate-600 uppercase tracking-widest group-hover:text-white transition-colors">
                    Я подтверждаю риск и готовность к загрузке
                </span>
            </label>

            <div className="flex gap-4">
                <button 
                    onClick={proceedDownload}
                    disabled={!isConfirmed || timeLeft > 0}
                    className={`flex-1 py-5 font-black uppercase text-[10px] tracking-widest transition-all clip-path-v ${(!isConfirmed || timeLeft > 0) ? 'bg-[#111] text-[#333]' : 'bg-cyan-400 text-black shadow-[0_0_30px_rgba(0,242,255,0.4)]'}`}
                    style={{clipPath: 'polygon(0 0, 90% 0, 100% 30%, 100% 100%, 10% 100%, 0 70%)'}}
                >
                    {timeLeft > 0 && isConfirmed ? `Security Check: ${timeLeft}` : 'Unlock Download'}
                </button>
                <button 
                    onClick={handleClosePopup}
                    className="flex-1 py-5 font-black uppercase text-[10px] tracking-widest bg-white/5 text-white hover:bg-white/10"
                    style={{clipPath: 'polygon(0 0, 90% 0, 100% 30%, 100% 100%, 10% 100%, 0 70%)'}}
                >
                    Abort
                </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageDetail;
