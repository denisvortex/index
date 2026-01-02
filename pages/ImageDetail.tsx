
import React, { useEffect, useState, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { BUILDS } from '../data/builds';

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

  if (!build) return <div className="text-center py-40 text-white font-bold">IMAGE NOT FOUND</div>;

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
    <div className="max-w-5xl mx-auto px-6 py-24">
      <Link to="/builds" className="inline-block text-[#00d2ff] mb-12 font-black uppercase text-[10px] tracking-[0.3em] hover:text-white transition-all">
        ← К списку систем
      </Link>
      
      <div className="grid lg:grid-cols-2 gap-16 mb-24">
        <div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 text-white leading-none tracking-tighter uppercase">
              {build.title}
          </h1>
          <p className="text-[#00d2ff] text-sm font-black mb-8 tracking-[0.2em]">{build.version}</p>
          <p className="text-slate-400 text-lg leading-relaxed mb-10">
            {build.longDescription}
          </p>
          <div className="grid grid-cols-3 gap-4 border-t border-white/5 pt-10">
            <div className="text-center">
                <p className="text-[10px] text-slate-500 font-bold uppercase mb-1">Размер</p>
                <p className="text-white font-black">{build.size}</p>
            </div>
            <div className="text-center border-x border-white/5">
                <p className="text-[10px] text-slate-500 font-bold uppercase mb-1">Тип</p>
                <p className="text-white font-black">ISO Image</p>
            </div>
            <div className="text-center">
                <p className="text-[10px] text-slate-500 font-bold uppercase mb-1">Язык</p>
                <p className="text-white font-black">RU / EN</p>
            </div>
          </div>
        </div>

        <div className="slider-container">
          <div className="slides">
            {build.galleryImages.map((img, i) => (
              <div className="slide" key={i}>
                <img src={img} alt={`Gallery ${i + 1}`} className="rounded-3xl" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-4 mb-24">
        <button 
          className={`v-accordion-btn ${accordionActive ? 'active' : ''}`}
          onClick={() => setAccordionActive(!accordionActive)}
        >
          Чек-лист изменений и настройки
          <span className="text-xl">{accordionActive ? '−' : '+'}</span>
        </button>
        <div className={`v-panel ${accordionActive ? 'show' : ''}`}>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-white font-black uppercase tracking-widest mb-6">Оптимизация</h3>
              <ul className="space-y-4 text-sm text-slate-400">
                <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00d2ff]"></span>
                    Вырезана телеметрия и сбор данных
                </li>
                <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00d2ff]"></span>
                    Отключены ненужные службы и фоновые задачи
                </li>
                <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00d2ff]"></span>
                    Удалены UWP приложения (Карты, Погода и др.)
                </li>
              </ul>
            </div>
            <div>
                <h3 className="text-white font-black uppercase tracking-widest mb-6">Дополнения</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                    Интегрирована папка «Denis Vortex» на рабочем столе с набором необходимых утилит для активации 
                    и тонкой настройки системы после установки.
                </p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-4xl font-black mb-12 uppercase text-white tracking-tight">Выберите зеркало загрузки</h2>
        
        <div className="max-w-4xl mx-auto space-y-16">
            <div>
                <h4 className="text-[11px] font-black text-[#00d2ff] uppercase mb-8 tracking-[0.4em]">Стандартная Сборка</h4>
                <div className="v-dl-group">
                {build.downloadLinks.standard?.mediafire && (
                    <button onClick={() => handleOpenPopup(build.downloadLinks.standard!.mediafire!)} className="v-dl-btn">MediaFire</button>
                )}
                {build.downloadLinks.standard?.pixeldrain && (
                    <button onClick={() => handleOpenPopup(build.downloadLinks.standard!.pixeldrain!)} className="v-dl-btn">PixelDrain</button>
                )}
                {build.downloadLinks.standard?.mega && (
                    <button onClick={() => handleOpenPopup(build.downloadLinks.standard!.mega!)} className="v-dl-btn">Mega.NZ</button>
                )}
                </div>
            </div>

            {build.downloadLinks.defenderless && (
            <div>
                <h4 className="text-[11px] font-black text-red-500 uppercase mb-8 tracking-[0.4em]">Без Защитника (Lite)</h4>
                <div className="v-dl-group">
                    <button onClick={() => handleOpenPopup(build.downloadLinks.defenderless.mediafire!)} className="v-dl-btn border-red-500/30 hover:!bg-red-600">MediaFire</button>
                    <button onClick={() => handleOpenPopup(build.downloadLinks.defenderless.pixeldrain!)} className="v-dl-btn border-red-500/30 hover:!bg-red-600">PixelDrain</button>
                    <button onClick={() => handleOpenPopup(build.downloadLinks.defenderless.mega!)} className="v-dl-btn border-red-500/30 hover:!bg-red-600">Mega.NZ</button>
                </div>
            </div>
            )}
        </div>
      </div>

      {showPopup && (
        <div className="v-modal-overlay">
          <div className="v-modal">
            <h2 className="text-3xl font-black mb-6 text-white uppercase tracking-tighter">Внимание, Техно-бро!</h2>
            <p className="text-slate-400 text-sm leading-relaxed mb-10">
                Прежде чем начать загрузку, убедись, что ты понимаешь процесс установки. 
                Неправильная переустановка может привести к потере файлов. 
                Посмотри обучающие видео, если не уверен.
            </p>
            
            <div className="space-y-4 mb-10">
                <a href="https://youtu.be/ckCrrp2WuMc" target="_blank" className="block p-4 rounded-xl bg-white/5 border border-white/10 text-white font-bold text-xs uppercase tracking-widest hover:bg-[#00d2ff]/10 hover:border-[#00d2ff]/40 transition-all">
                    ▶ Руководство по чистой установке
                </a>
                <a href="https://youtu.be/nBvSLOUS03Y" target="_blank" className="block p-4 rounded-xl bg-white/5 border border-white/10 text-white font-bold text-xs uppercase tracking-widest hover:bg-[#00d2ff]/10 hover:border-[#00d2ff]/40 transition-all">
                    ▶ Установка без флешки
                </a>
            </div>

            <label className="flex items-center gap-4 mb-12 cursor-pointer group">
                <input 
                    type="checkbox" 
                    className="w-5 h-5 accent-[#00d2ff] cursor-pointer" 
                    checked={isConfirmed}
                    onChange={(e) => setIsConfirmed(e.target.checked)}
                />
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest group-hover:text-white transition-colors">
                    Я осознаю риски и готов к загрузке
                </span>
            </label>

            <div className="flex gap-4">
                <button 
                    onClick={proceedDownload}
                    disabled={!isConfirmed || timeLeft > 0}
                    className={`flex-1 py-5 rounded-2xl font-black uppercase text-[10px] tracking-widest transition-all ${(!isConfirmed || timeLeft > 0) ? 'bg-[#222] text-[#444]' : 'bg-[#00d2ff] text-black shadow-[0_0_30px_rgba(0,210,255,0.4)]'}`}
                >
                    {timeLeft > 0 && isConfirmed ? `Безопасность: ${timeLeft}s` : 'Начать загрузку'}
                </button>
                <button 
                    onClick={handleClosePopup}
                    className="flex-1 py-5 rounded-2xl font-black uppercase text-[10px] tracking-widest bg-white/5 text-white hover:bg-white/10"
                >
                    Отмена
                </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageDetail;
