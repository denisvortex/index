
import { WindowsBuild } from '../types';

export const BUILDS: WindowsBuild[] = [
  {
    id: 'makuos_11',
    title: 'MakuOS 11 Pro',
    version: '24H2 (Build 26100)',
    description: 'Полноценная Windows 11 24H2 с магазином и защитником (опционально).',
    longDescription: 'Сборка на базе новейшей Windows 11 24H2. Сохранена максимальная совместимость при высокой скорости работы. Удален лишний мусор, оставлены важные системные компоненты.',
    imageUrl: 'https://i.postimg.cc/KYJgXpVW/photo-2025-11-03-18-51-07.jpg',
    galleryImages: ['https://i.postimg.cc/KYJgXpVW/photo-2025-11-03-18-51-07.jpg'],
    downloadLinks: {
      standard: {
        mediafire: 'https://www.mediafire.com/file/6t86h95mx7giqk9/MakuOS_11_Full.iso/file',
        pixeldrain: 'https://pixeldrain.com/u/JrXsz7kN',
        mega: 'https://mega.nz/file/fI8FEYZK#EdEisvTe4wfxpLIyqejInVvQ1XKdwo7QmhA32d9ZoI8'
      },
      defenderless: {
        mediafire: 'https://www.mediafire.com/file/vde089as995p0hz/MakuOS_11_Def.iso/file',
        pixeldrain: 'https://pixeldrain.com/u/dhE6FWJ7',
        mega: 'https://mega.nz/file/CJdhnIbA#1cxsQNbkJazJD4TVHJDH6ZszpHeoeDi-DuWk5Uxue58'
      }
    },
    features: ['24H2 Support', 'Store Enabled', 'Full Drivers', 'Optimized Registry'],
    systemRequirements: { cpu: '2.0 GHz x64', ram: '4 GB', disk: '30 GB' },
    size: '4.8 GB',
    tags: ['Windows 11', 'Latest']
  },
  {
    id: 'makuos_11_Lite',
    title: 'MakuOS 11 Lite',
    version: 'v23H2 Pro',
    description: 'Облегченная версия 11 для слабых ноутбуков и ПК.',
    longDescription: 'Максимально оптимизированная Windows 11. Удалены практически все UWP приложения, кроме критически важных. Идеальна для тех, кто хочет современную систему без лагов.',
    imageUrl: 'https://i.postimg.cc/KYJgXpVW/photo-2025-11-03-18-51-07.jpg',
    galleryImages: ['https://i.postimg.cc/KYJgXpVW/photo-2025-11-03-18-51-07.jpg'],
    downloadLinks: {
      standard: { pixeldrain: 'https://pixeldrain.com/u/6aCam7Zz' }
    },
    features: ['Low RAM usage', 'Extreme Lite', 'No Bloatware'],
    systemRequirements: { cpu: '2.0 GHz', ram: '2 GB', disk: '20 GB' },
    size: '3.5 GB',
    tags: ['Lite', 'Gaming']
  },
  {
    id: 'makuos_10',
    title: 'MakuOS 10 Pro',
    version: '22H2 Full',
    description: 'Стабильная Windows 10 для повседневной работы.',
    longDescription: 'Классическая Windows 10 со всеми обновлениями. Проведена легкая оптимизация, удалена телеметрия.',
    imageUrl: 'https://i.postimg.cc/KYJgXpVW/photo-2025-11-03-18-51-07.jpg',
    galleryImages: ['https://i.postimg.cc/KYJgXpVW/photo-2025-11-03-18-51-07.jpg'],
    downloadLinks: {
      standard: { pixeldrain: 'https://pixeldrain.com/u/yBuCjqNx' }
    },
    features: ['Stable', 'All Updates', 'Clean UI'],
    systemRequirements: { cpu: '2.4 GHz', ram: '4 GB', disk: '25 GB' },
    size: '4.2 GB',
    tags: ['Windows 10', 'Stable']
  },
  {
    id: 'makuos_10_Lite',
    title: 'MakuOS 10 Lite',
    version: '22H2 Extreme',
    description: 'Самая быстрая десятка. Минимум процессов.',
    longDescription: 'Сборка для тех, кому важен каждый FPS. Удалено все, что можно удалить без потери стабильности системы.',
    imageUrl: 'https://i.postimg.cc/KYJgXpVW/photo-2025-11-03-18-51-07.jpg',
    galleryImages: ['https://i.postimg.cc/KYJgXpVW/photo-2025-11-03-18-51-07.jpg'],
    downloadLinks: {
      standard: { pixeldrain: 'https://pixeldrain.com/u/KHVPVhyh' }
    },
    features: ['FPS Boost', 'Ultra Lite', 'Gaming'],
    systemRequirements: { cpu: '2.0 GHz', ram: '2 GB', disk: '15 GB' },
    size: '3.2 GB',
    tags: ['Lite', 'Windows 10']
  },
  {
    id: 'makuos_mini',
    title: 'MakuOS Mini',
    version: 'LTSC Compact',
    description: 'Крошечная сборка для старого железа.',
    longDescription: 'Сборка на базе LTSC. Размер образа минимизирован, потребление ОЗУ в простое — менее 600МБ.',
    imageUrl: 'https://i.postimg.cc/KYJgXpVW/photo-2025-11-03-18-51-07.jpg',
    galleryImages: ['https://i.postimg.cc/KYJgXpVW/photo-2025-11-03-18-51-07.jpg'],
    downloadLinks: {
      standard: { pixeldrain: 'https://pixeldrain.com/u/yBuCjqNx' }
    },
    features: ['Minimal Size', 'Fast Install', 'LTSC Base'],
    systemRequirements: { cpu: '1.0 GHz', ram: '1 GB', disk: '10 GB' },
    size: '2.1 GB',
    tags: ['Mini', 'Compact']
  },
  {
    id: 'makuos_8',
    title: 'MakuOS 8.1',
    version: 'Update 3 Lite',
    description: 'Лучшая замена семерке для слабых ноутбуков.',
    longDescription: 'Windows 8.1 с возвращенным меню Пуск и удаленными метро-приложениями. Работает быстрее любой десятки.',
    imageUrl: 'https://i.postimg.cc/KYJgXpVW/photo-2025-11-03-18-51-07.jpg',
    galleryImages: ['https://i.postimg.cc/KYJgXpVW/photo-2025-11-03-18-51-07.jpg'],
    downloadLinks: {
      standard: { pixeldrain: 'https://pixeldrain.com/u/QuKAqNin' }
    },
    features: ['Start Menu Back', 'No Telemetry', 'Legacy Support'],
    systemRequirements: { cpu: '1.0 GHz', ram: '1 GB', disk: '15 GB' },
    size: '2.8 GB',
    tags: ['Windows 8.1']
  },
  {
    id: 'makuos_7',
    title: 'MakuOS 7',
    version: 'Ultimate SP1',
    description: 'Классика с драйверами USB 3.0 и NVMe.',
    longDescription: 'Windows 7 для современных компьютеров (насколько это возможно). Интегрированы все необходимые драйверы для установки с флешки на новые платы.',
    imageUrl: 'https://i.postimg.cc/KYJgXpVW/photo-2025-11-03-18-51-07.jpg',
    galleryImages: ['https://i.postimg.cc/KYJgXpVW/photo-2025-11-03-18-51-07.jpg'],
    downloadLinks: {
      standard: { pixeldrain: 'https://pixeldrain.com/u/SHW1DnMn' }
    },
    features: ['USB 3.0 Support', 'NVMe Ready', 'Classic Speed'],
    systemRequirements: { cpu: '1.0 GHz', ram: '512 MB', disk: '15 GB' },
    size: '2.4 GB',
    tags: ['Windows 7', 'Legacy']
  }
];
