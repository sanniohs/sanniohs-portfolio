
import React, { useState, useEffect } from 'react';

const Home: React.FC = () => {
  const fullText = "OH'S";
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  
  // Configuration variables
  const typingSpeed = 250;     // Speed of typing (ms per char)
  const deletingSpeed = 100;   // Speed of deleting (ms per char)
  const pauseDuration = 2000;  // Pause at the end of typing (ms)

  useEffect(() => {
    // Fix: Use any type for timeout to avoid NodeJS namespace error in browser environment
    let timeout: any;

    const handleTyping = () => {
      if (!isDeleting) {
        // Typing mode
        if (displayText.length < fullText.length) {
          setDisplayText(fullText.substring(0, displayText.length + 1));
          timeout = setTimeout(handleTyping, typingSpeed);
        } else {
          // Finished typing, wait then start deleting
          timeout = setTimeout(() => setIsDeleting(true), pauseDuration);
        }
      } else {
        // Deleting mode
        if (displayText.length > 0) {
          setDisplayText(fullText.substring(0, displayText.length - 1));
          timeout = setTimeout(handleTyping, deletingSpeed);
        } else {
          // Finished deleting, start typing again
          setIsDeleting(false);
          timeout = setTimeout(handleTyping, 500);
        }
      }
    };

    timeout = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting]);

  return (
    <div className="p-10 md:p-20 flex flex-col justify-between min-h-full">
      <div className="mt-10">
        <h1 className="text-[60px] md:text-[120px] font-medium leading-none tracking-tighter mb-[30px] flex items-baseline whitespace-nowrap overflow-visible">
          <span>Portfoli</span>
          <span className="inline-flex items-center min-w-[0.5em]">
            {displayText}
            <span className="blinking-cursor h-[0.8em] md:h-[0.85em] align-middle"></span>
          </span>
        </h1>
        
        <p className="font-kor-thin text-[24px] md:text-[32px] mb-4 tracking-tighter">
          잡동사니 수집가
        </p>
        <p className="text-[18px] md:text-[24px] font-normal text-neutral-800 uppercase tracking-tight">
          3D with AI Graphic Design
        </p>
      </div>

      <div className="mt-20 mb-10 space-y-8">
        <div>
          <span className="block font-bold text-[18px] mb-3 uppercase tracking-tight">Contact</span>
          <p className="text-[16px] leading-relaxed tracking-tight font-medium">+82 010 2646 1877</p>
        </div>
        
        <div className="space-y-1">
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
  );
};

export default Home;
