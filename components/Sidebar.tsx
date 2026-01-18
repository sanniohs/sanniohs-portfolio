import React from 'react';
import { Link } from 'react-router-dom';
import { MenuSection } from '../types';

const sidebarData: MenuSection[] = [
  {
    title: '소개',
    items: [
      { label: '프로필', path: '/profile' },
    ],
  },
  {
    title: '아카이빙',
    items: [
      { label: '작업물 전체', path: '/archiving/all' },
      { label: '3D 아트웍', path: '/archiving/3d' },
      { label: 'AI 그래픽', path: '/archiving/ai' },
      { label: 'VFX', path: '/archiving/vfx' },
    ],
  },
  {
    title: '연락처',
    items: [
      { label: 'Contact Me', path: '/contact' },
    ],
  },
];

const Sidebar: React.FC = () => {
  return (
    <aside className="w-[260px] border-r-[2px] border-black flex-shrink-0 flex flex-col overflow-y-auto hidden md:flex">
      {sidebarData.map((section, idx) => (
        <div 
          key={section.title} 
          className={`border-b-[2px] border-black min-h-[160px] p-0 flex flex-col ${idx === sidebarData.length - 1 ? 'flex-grow border-b-0' : ''}`}
        >
          <div className="p-[25px_30px] font-kor-bold text-[22px] tracking-tighter">
            {section.title}
          </div>
          <nav className="flex flex-col">
            {section.items.map((item, itemIdx) => (
              <Link
                key={`${item.label}-${itemIdx}`}
                to={item.path}
                className="p-[10px_30px] font-medium text-[18px] text-right opacity-90 hover:opacity-100 hover:underline transition-all mt-[2px] tracking-tight"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      ))}
    </aside>
  );
};

export default Sidebar;