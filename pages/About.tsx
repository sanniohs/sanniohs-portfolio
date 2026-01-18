import React from 'react';

interface SkillProps {
  name: string;
  level: number; // 1 to 5
}

const SkillRow: React.FC<SkillProps> = ({ name, level }) => {
  return (
    <div className="flex justify-between items-center w-full max-w-[300px] mb-2">
      <span className="text-base font-normal">{name}</span>
      <div className="flex gap-1.5">
        {[1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full border border-black ${
              i <= level ? 'bg-black' : 'bg-transparent'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

const About: React.FC = () => {
  return (
    <div className="p-10 md:p-20 max-w-4xl">
      {/* Basic Info Section moved to just above Education */}
      <div className="mb-8">
        <h3 className="text-4xl font-bold tracking-tighter mb-1">오다인</h3>
        <p className="text-2xl font-kor-thin tracking-tight text-neutral-600">2003.12.24</p>
      </div>

      <section id="education" className="mb-20 pt-10 border-t-[2px] border-black">
        <h3 className="text-xl font-bold mb-6 uppercase tracking-tighter">Education</h3>
        <ul className="space-y-6">
          <li className="flex flex-col md:flex-row md:justify-between items-start md:items-center">
            <div>
              <h4 className="font-bold text-lg">서울시립대학교</h4>
              <p className="font-kor-thin">산업디자인학과</p>
            </div>
            <span className="text-neutral-500 font-medium mt-1 md:mt-0">2023 - Present</span>
          </li>
        </ul>
      </section>

      <section id="software-skills" className="mb-20">
        <h3 className="text-xl font-bold mb-8 uppercase tracking-tighter">SOFTWARE SKILLS</h3>
        
        <div className="space-y-12">
          {/* 3D Design */}
          <div>
            <h4 className="font-bold text-sm uppercase mb-4 tracking-tight">3D Design</h4>
            <div className="flex flex-col">
              <SkillRow name="Cinema 4D" level={4} />
              <SkillRow name="Blender" level={3} />
              <SkillRow name="NX" level={2} />
            </div>
          </div>

          {/* Visual */}
          <div>
            <h4 className="font-bold text-sm uppercase mb-4 tracking-tight">Visual</h4>
            <div className="flex flex-col">
              <SkillRow name="Photoshop" level={5} />
              <SkillRow name="Illustrator" level={5} />
              <SkillRow name="After Effects" level={3} />
              <SkillRow name="Figma" level={3} />
            </div>
          </div>

          {/* AI Graphics */}
          <div>
            <h4 className="font-bold text-sm uppercase mb-4 tracking-tight">AI Graphics</h4>
            <div className="flex flex-col gap-2">
              <span className="text-base font-normal">Midjourney</span>
              <span className="text-base font-normal">Kling ai</span>
              <span className="text-base font-normal">Nano Banana</span>
              <span className="text-base font-normal">ImageFX</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;