
import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full h-[80px] bg-white border-b-[2px] border-black flex items-center justify-between px-10 z-[100]">
      <Link to="/" className="text-[32px] font-bold tracking-tighter">
        sanniohs
      </Link>
    </header>
  );
};

export default Header;