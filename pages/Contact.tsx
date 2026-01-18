import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="p-10 md:p-20 max-w-2xl">
      <div className="space-y-12">
        <div>
          <span className="block font-bold text-[18px] mb-3 uppercase tracking-tight">Contact</span>
          <p className="text-[16px] leading-relaxed tracking-tight font-medium">+82 010 2646 1877</p>
        </div>
        
        <div>
          <span className="block font-bold text-[18px] mb-3 uppercase tracking-tight">Email / SNS</span>
          <div className="space-y-2">
            <p className="text-[16px] leading-relaxed tracking-tight font-medium">E. sanniworks@naver.com</p>
            <p className="text-[16px] leading-relaxed tracking-tight font-medium">
              ig. <a href="https://www.instagram.com/sanniohs/" target="_blank" rel="noopener noreferrer" className="hover:underline transition-all">@sanniohs</a>
            </p>
            <p className="text-[16px] leading-relaxed tracking-tight font-medium">
              <a href="https://notefolio.net/daltang012240" target="_blank" rel="noopener noreferrer" className="hover:underline transition-all">notefolio</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;