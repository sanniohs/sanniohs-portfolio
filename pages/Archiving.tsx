import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

interface Work {
  id: string | number;
  title: string;
  imageUrl: string;
  videoUrl?: string;
  gallery?: string[];
  aspectRatio: string;
  category?: string;
}

const Archiving: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  const [selectedWork, setSelectedWork] = useState<Work | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const getWorks = (): Work[] => {
    // 1. AI Graphics Data
    const aiWorks: Work[] = [
      {
        id: 'ai-1',
        title: 'PROJECT 1',
        imageUrl: 'https://i.imgur.com/jA1uH5h.png',
        videoUrl: 'https://i.imgur.com/FTmCBQy.mp4',
        aspectRatio: 'aspect-[4/3]',
        category: 'ai'
      },
      {
        id: 'ai-2',
        title: 'PROJECT 2',
        imageUrl: 'https://i.imgur.com/635JtoH.png',
        videoUrl: 'https://i.imgur.com/b0bmBDj.mp4',
        aspectRatio: 'aspect-[4/3]',
        category: 'ai'
      },
      {
        id: 'ai-3',
        title: 'PROJECT 3',
        imageUrl: 'https://i.imgur.com/ryaSxKi.png',
        videoUrl: 'https://i.imgur.com/Xtc3Vs4.mp4',
        aspectRatio: 'aspect-[4/3]',
        category: 'ai'
      },
      {
        id: 'ai-4',
        title: 'PROJECT 4',
        imageUrl: 'https://i.imgur.com/uy4bQXs.mp4',
        gallery: [
          'https://i.imgur.com/uy4bQXs.mp4',
          'https://i.imgur.com/XcsU5ML.mp4',
          'https://i.imgur.com/zbNGE9L.mp4',
          'https://i.imgur.com/w30wNjk.mp4'
        ],
        aspectRatio: 'aspect-[4/3]',
        category: 'ai'
      },
      {
        id: 'ai-5',
        title: 'PROJECT 5',
        imageUrl: 'https://i.imgur.com/HZ2qhZh.mp4',
        videoUrl: 'https://i.imgur.com/HZ2qhZh.mp4',
        aspectRatio: 'aspect-[4/3]',
        category: 'ai'
      }
    ];

    // 2. VFX Data
    const vfxWorks: Work[] = [
      {
        id: 'vfx-1',
        title: 'PROJECT 1',
        imageUrl: 'https://i.imgur.com/ZUrvfjz.mp4',
        gallery: [
          'https://i.imgur.com/ZUrvfjz.mp4',
          'https://i.imgur.com/i8wMadl.mp4'
        ],
        aspectRatio: 'aspect-[4/3]',
        category: 'vfx'
      },
      {
        id: 'vfx-2',
        title: 'PROJECT 2',
        imageUrl: 'https://i.imgur.com/VEtPndv.mp4',
        videoUrl: 'https://i.imgur.com/VEtPndv.mp4',
        aspectRatio: 'aspect-[4/3]',
        category: 'vfx'
      },
      {
        id: 'vfx-3',
        title: 'PROJECT 3',
        imageUrl: 'https://i.imgur.com/EEh2OTj.mp4',
        videoUrl: 'https://i.imgur.com/EEh2OTj.mp4',
        aspectRatio: 'aspect-[4/3]',
        category: 'vfx'
      },
      {
        id: 'vfx-4',
        title: 'PROJECT 4',
        imageUrl: 'https://i.imgur.com/Cmon1f9.jpeg',
        videoUrl: 'https://i.imgur.com/NJ1gkN1.mp4',
        aspectRatio: 'aspect-[4/3]',
        category: 'vfx'
      }
    ];

    // 3. 3D Artwork Data
    const d3Works: Work[] = [
      {
        id: '3d-1',
        title: 'PROJECT 1',
        imageUrl: 'https://i.imgur.com/GOXJbuv.jpeg',
        videoUrl: 'https://i.imgur.com/lGFCNML.mp4',
        aspectRatio: 'aspect-[4/3]',
        category: '3d'
      },
      {
        id: '3d-2',
        title: 'PROJECT 2',
        imageUrl: 'https://i.imgur.com/DfUsa9K.png',
        videoUrl: 'https://i.imgur.com/nfAotbp.mp4',
        aspectRatio: 'aspect-[4/3]',
        category: '3d'
      },
      {
        id: '3d-3',
        title: 'PROJECT 3',
        imageUrl: 'https://i.imgur.com/TmqelyM.mp4',
        videoUrl: 'https://i.imgur.com/TmqelyM.mp4',
        aspectRatio: 'aspect-[4/3]',
        category: '3d'
      },
      {
        id: '3d-4',
        title: 'PROJECT 4',
        imageUrl: 'https://i.imgur.com/CTOpd5d.jpeg',
        videoUrl: 'https://i.imgur.com/Y5nH30u.mp4',
        aspectRatio: 'aspect-[4/3]',
        category: '3d'
      },
      {
        id: '3d-5',
        title: 'PROJECT 5',
        imageUrl: 'https://i.imgur.com/0Bel5Xs.jpeg',
        aspectRatio: 'aspect-[4/3]',
        category: '3d'
      },
      {
        id: '3d-6',
        title: 'PROJECT 6',
        imageUrl: 'https://i.imgur.com/kAbQxNV.png',
        gallery: [
          'https://i.imgur.com/kAbQxNV.png',
          'https://i.imgur.com/qdWgBdL.png',
          'https://i.imgur.com/llqxDrp.png',
          'https://i.imgur.com/uKUR4I3.png',
          'https://i.imgur.com/dyKu4B6.png'
        ],
        aspectRatio: 'aspect-[4/3]',
        category: '3d'
      },
      {
        id: '3d-7',
        title: 'PROJECT 7',
        imageUrl: 'https://i.imgur.com/dL4tsgt.mp4',
        gallery: [
          'https://i.imgur.com/dL4tsgt.mp4',
          'https://i.imgur.com/kdzrYSJ.png',
          'https://i.imgur.com/OZW7hAf.png'
        ],
        aspectRatio: 'aspect-[4/3]',
        category: '3d'
      },
      {
        id: '3d-8',
        title: 'PROJECT 8',
        imageUrl: 'https://i.imgur.com/Sh387uo.mp4',
        videoUrl: 'https://i.imgur.com/Sh387uo.mp4',
        aspectRatio: 'aspect-[4/3]',
        category: '3d'
      }
    ];

    // Filter by category
    if (category === 'ai') return aiWorks;
    if (category === 'vfx') return vfxWorks;
    if (category === '3d') return d3Works;
    
    // Default 'all' - combine everything
    return [...d3Works, ...aiWorks, ...vfxWorks];
  };

  const works = getWorks();

  const openWork = (work: Work) => {
    setSelectedWork(work);
    setCurrentSlide(0);
    document.body.style.overflow = 'hidden';
  };

  const closeWork = () => {
    setSelectedWork(null);
    document.body.style.overflow = 'auto';
  };

  const isVideo = (url?: string) => {
    if (!url) return false;
    const cleanUrl = url.split('?')[0].split('#')[0];
    return cleanUrl.toLowerCase().endsWith('.mp4');
  };

  const nextSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedWork?.gallery) {
      setCurrentSlide((prev) => (prev + 1) % selectedWork.gallery!.length);
    }
  };

  const prevSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedWork?.gallery) {
      setCurrentSlide((prev) => (prev - 1 + selectedWork.gallery!.length) % selectedWork.gallery!.length);
    }
  };

  return (
    <div className="p-10 md:p-20 relative min-h-full">
      <h2 className="text-4xl font-bold mb-10 border-b-[2px] border-black pb-4 capitalize tracking-tighter">
        {category === 'all' ? 'All Works' : 
         category === 'ai' ? 'AI Graphic' : 
         category === '3d' ? '3D Artwork' : 
         category === 'vfx' ? 'VFX' : 
         `${category}`}
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-start">
        {works.map((work) => (
          <div 
            key={work.id} 
            className="group cursor-pointer"
            onClick={() => openWork(work)}
          >
            <div className={`${work.aspectRatio} overflow-hidden border-[2px] border-black mb-4 bg-neutral-100 relative`}>
              {/* Hover Overlay */}
              <div className="absolute inset-0 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/10">
                {isVideo(work.videoUrl || work.imageUrl) ? (
                  <svg className="w-16 h-16 text-white drop-shadow-md" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                ) : (
                   work.gallery && (
                    <svg className="w-12 h-12 text-white drop-shadow-md" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                   )
                )}
              </div>
              
              {isVideo(work.imageUrl) ? (
                <video 
                  src={work.imageUrl} 
                  muted 
                  autoPlay 
                  loop 
                  playsInline
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              ) : (
                <img 
                  src={work.imageUrl} 
                  alt={work.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://placehold.co/800x600?text=Project+Thumbnail';
                  }}
                />
              )}
            </div>
            <div className="flex flex-col">
              <h3 className="font-bold text-[13px] tracking-tighter uppercase">{work.title}</h3>
              {category === 'all' && (
                <span className="text-[10px] text-neutral-500 uppercase font-bold mt-0.5">{work.category}</span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Detail Modal */}
      {selectedWork && (
        <div 
          className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/95 p-4 md:p-10 animate-in fade-in duration-300"
          onClick={closeWork}
        >
          <button 
            className="absolute top-6 right-6 text-white hover:text-neutral-400 transition-colors z-[1001]"
            onClick={closeWork}
          >
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div 
            className="w-full max-w-5xl bg-transparent relative flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute -top-10 left-0 text-white font-bold uppercase tracking-widest text-xs">
              {selectedWork.title}
              {selectedWork.gallery && ` (${currentSlide + 1} / ${selectedWork.gallery.length})`}
            </div>
            
            {selectedWork.gallery ? (
              <div className="relative w-full flex items-center justify-center group/slider">
                <button 
                  onClick={prevSlide}
                  className="absolute left-0 md:-left-16 z-10 text-white p-2 opacity-50 hover:opacity-100 transition-opacity"
                >
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                <div className="w-full overflow-hidden flex items-center justify-center min-h-[50vh]">
                  {isVideo(selectedWork.gallery[currentSlide]) ? (
                    <video 
                      key={selectedWork.gallery[currentSlide]}
                      src={selectedWork.gallery[currentSlide]} 
                      className="w-full h-auto max-h-[85vh] object-contain"
                      controls
                      autoPlay
                      playsInline
                    />
                  ) : (
                    <img 
                      src={selectedWork.gallery[currentSlide]} 
                      alt={`${selectedWork.title} slide ${currentSlide}`}
                      className="w-full h-auto max-h-[85vh] object-contain transition-all duration-500 ease-in-out"
                    />
                  )}
                </div>

                <button 
                  onClick={nextSlide}
                  className="absolute right-0 md:-right-16 z-10 text-white p-2 opacity-50 hover:opacity-100 transition-opacity"
                >
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                <div className="absolute -bottom-8 flex gap-2">
                  {selectedWork.gallery.map((_, idx) => (
                    <div 
                      key={idx}
                      className={`w-1.5 h-1.5 rounded-full border border-white transition-colors cursor-pointer ${idx === currentSlide ? 'bg-white' : 'bg-transparent opacity-50'}`}
                      onClick={() => setCurrentSlide(idx)}
                    />
                  ))}
                </div>
              </div>
            ) : isVideo(selectedWork.videoUrl || selectedWork.imageUrl) ? (
              <video 
                src={selectedWork.videoUrl || selectedWork.imageUrl} 
                className="w-full h-auto max-h-[85vh] object-contain"
                controls
                autoPlay
                playsInline
              />
            ) : (
              <img 
                src={selectedWork.videoUrl || selectedWork.imageUrl} 
                alt={selectedWork.title}
                className="w-full h-auto max-h-[85vh] object-contain"
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Archiving;