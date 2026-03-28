import { useRef } from 'react';
import { ArrowUpRight, Github } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import { projects } from '../data/projects';

const ProjectCard = ({ project, index, progress, range, targetScale }: any) => {
  const scale = useTransform(progress, range, [1, targetScale]);
  
  return (
    <div className="h-screen flex justify-center pt-[15vh] md:pt-[20vh] sticky top-0">
      <motion.div 
        style={{ 
          scale, 
          top: `calc(${index * 25}px)`,
          transformOrigin: 'top center'
        }} 
        className="relative w-full max-w-4xl mx-auto max-h-[75vh] md:max-h-[70vh] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] flex flex-col bg-[#050505] border border-gray-700 rounded-3xl shadow-[0_-20px_50px_rgba(0,0,0,0.8)]"
      >
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-5">
          {/* Image / Title Area */}
          <div className={`md:col-span-2 md:row-span-2 border-b md:border-b-0 md:border-r border-gray-700 p-5 md:p-8 relative overflow-hidden flex flex-col justify-end min-h-[160px] md:min-h-[220px] bg-gradient-to-br ${project.bgAccent}`}>
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold font-display text-white mb-3 md:mb-4">{project.title}</h3>
              <div className="flex flex-wrap gap-4">
                <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center space-x-2 text-xs font-mono text-gray-400 hover:text-white transition-colors">
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <a href={project.live} target="_blank" rel="noreferrer" className="inline-flex items-center space-x-2 text-xs font-mono text-gray-400 hover:text-white transition-colors">
                  <span>Live</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* The Problem */}
          <div className="md:col-span-3 p-6 md:p-8 border-b border-gray-700 bg-[#0a0a0a]">
            <h4 className={`${project.accent} font-mono text-[10px] md:text-xs uppercase tracking-widest mb-3`}>01 / The Problem</h4>
            <p className="text-gray-400 text-xs md:text-sm leading-relaxed whitespace-pre-line">{project.problem}</p>
          </div>

          {/* The Design */}
          <div className="md:col-span-3 p-6 md:p-8 bg-[#0a0a0a]">
            <h4 className={`${project.accent} font-mono text-[10px] md:text-xs uppercase tracking-widest mb-3`}>02 / The Design</h4>
            <p className="text-gray-400 text-xs md:text-sm leading-relaxed whitespace-pre-line">{project.design}</p>
          </div>

          {/* The Solution & Tech */}
          <div className="md:col-span-5 p-6 md:p-8 border-t border-gray-700 bg-[#111]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <div className="md:col-span-2">
                <h4 className={`${project.accent} font-mono text-[10px] md:text-xs uppercase tracking-widest mb-3`}>03 / The Solution</h4>
                <p className="text-gray-300 text-xs md:text-sm leading-relaxed whitespace-pre-line">{project.solution}</p>
              </div>
              <div>
                <h4 className="text-gray-500 font-mono text-[10px] md:text-xs uppercase tracking-widest mb-3">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t: string) => (
                    <span key={t} className="px-2 py-1 border border-gray-700 rounded-full text-[10px] text-gray-400 font-mono">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Overlay to darken card when it scales down */}
        <motion.div 
          style={{ opacity: useTransform(progress, range, [0, 0.6]) }} 
          className="absolute inset-0 bg-black pointer-events-none rounded-3xl"
        />
      </motion.div>
    </div>
  );
};

export default function Work() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  });

  return (
    <section id="work" className="py-32 bg-transparent relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-5xl md:text-7xl font-bold font-display tracking-tight mb-6">My Works</h2>
          <p className="text-center text-gray-400 font-mono max-w-2xl leading-relaxed">
            A deep dive into the problems I've solved, the architectures I've designed, and the technical solutions I've implemented.
          </p>
        </div>

        <div ref={container} className="relative w-full">
          {projects.map((project, i) => {
            const targetScale = 1 - ((projects.length - 1 - i) * 0.05);
            return (
              <ProjectCard 
                key={project.id} 
                project={project} 
                index={i} 
                progress={scrollYProgress} 
                range={[i * (1 / projects.length), 1]} 
                targetScale={targetScale} 
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
