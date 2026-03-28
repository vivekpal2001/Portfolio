import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import React from 'react';

export default function Home() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Different parallax depths
  const moveX1 = useTransform(smoothX, [-1, 1], [-20, 20]);
  const moveY1 = useTransform(smoothY, [-1, 1], [-20, 20]);
  
  const moveX2 = useTransform(smoothX, [-1, 1], [30, -30]);
  const moveY2 = useTransform(smoothY, [-1, 1], [30, -30]);

  const moveX3 = useTransform(smoothX, [-1, 1], [-40, 40]);
  const moveY3 = useTransform(smoothY, [-1, 1], [-40, 40]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth) * 2 - 1;
    const y = (clientY / innerHeight) * 2 - 1;
    
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-transparent"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Ambient Background Glows */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#1e2638] rounded-full blur-[150px] opacity-60"></div>
      </div>

      {/* Exact Replica 3D Shapes Background Cluster */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <div className="relative w-[800px] h-[800px] scale-50 sm:scale-75 md:scale-100">
          
          <svg className="absolute w-0 h-0">
            <defs>
              <linearGradient id="grad-top-face" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#334155" />
                <stop offset="100%" stopColor="#0f172a" />
              </linearGradient>
              <linearGradient id="grad-right-face" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#1e293b" />
                <stop offset="100%" stopColor="#020617" />
              </linearGradient>
              <linearGradient id="grad-left-face" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0f172a" />
                <stop offset="100%" stopColor="#000000" />
              </linearGradient>
              <linearGradient id="grad-cyl-top" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#334155" />
                <stop offset="100%" stopColor="#0f172a" />
              </linearGradient>
              <linearGradient id="grad-cyl-body" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#1e293b" />
                <stop offset="100%" stopColor="#000000" />
              </linearGradient>

              {/* Cyan Cube Gradients */}
              <linearGradient id="grad-cyan-top" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#06b6d4" />
                <stop offset="100%" stopColor="#164e63" />
              </linearGradient>
              <linearGradient id="grad-cyan-right" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#0891b2" />
                <stop offset="100%" stopColor="#083344" />
              </linearGradient>
              <linearGradient id="grad-cyan-left" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#164e63" />
                <stop offset="100%" stopColor="#020617" />
              </linearGradient>

              {/* Purple Cube Gradients */}
              <linearGradient id="grad-purple-top" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#a855f7" />
                <stop offset="100%" stopColor="#581c87" />
              </linearGradient>
              <linearGradient id="grad-purple-right" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#9333ea" />
                <stop offset="100%" stopColor="#3b0764" />
              </linearGradient>
              <linearGradient id="grad-purple-left" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#6b21a8" />
                <stop offset="100%" stopColor="#020617" />
              </linearGradient>

              {/* Pink Cylinder Gradients */}
              <linearGradient id="grad-pink-cyl-top" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#ec4899" />
                <stop offset="100%" stopColor="#831843" />
              </linearGradient>
              <linearGradient id="grad-pink-cyl-body" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#db2777" />
                <stop offset="100%" stopColor="#020617" />
              </linearGradient>
            </defs>
          </svg>

          {/* Glowing Sphere */}
          <motion.div 
            className="absolute w-12 h-12 rounded-full z-20"
            style={{ 
              top: '22%', left: '58%',
              background: '#ffcd94',
              boxShadow: '0 0 60px 20px rgba(255, 150, 50, 0.6), 0 0 100px 40px rgba(255, 100, 0, 0.2), inset -5px -5px 15px rgba(0,0,0,0.2)',
              x: moveX1, y: moveY1
            }}
          />

          {/* Top-Right Cylinder */}
          <motion.div className="absolute w-16 h-48 z-10" style={{ top: '28%', left: '60%', rotate: 25, x: moveX2, y: moveY2 }}>
            <svg viewBox="0 0 100 200" className="w-full h-full drop-shadow-2xl">
              <ellipse cx="50" cy="30" rx="40" ry="15" fill="url(#grad-cyl-top)" />
              <path d="M10,30 L10,170 A40,15 0 0,0 90,170 L90,30 Z" fill="url(#grad-cyl-body)" />
              <ellipse cx="50" cy="170" rx="40" ry="15" fill="#000" />
            </svg>
          </motion.div>

          {/* Top-Left Cube */}
          <motion.div className="absolute w-[220px] h-[220px] z-20" style={{ top: '15%', left: '25%', rotate: -5, x: moveX3, y: moveY3 }}>
            <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-[0_15px_30px_rgba(0,0,0,0.6)]">
              <polygon points="100,20 180,60 100,100 20,60" fill="url(#grad-top-face)" />
              <polygon points="20,60 100,100 100,180 20,140" fill="url(#grad-left-face)" />
              <polygon points="100,100 180,60 180,140 100,180" fill="url(#grad-right-face)" />
            </svg>
          </motion.div>

          {/* Central Cube */}
          <motion.div className="absolute w-[300px] h-[300px] z-30" style={{ top: '28%', left: '36%', x: moveX1, y: moveY2 }}>
            <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-[0_25px_50px_rgba(0,0,0,0.8)]">
              <polygon points="100,20 180,60 100,100 20,60" fill="url(#grad-cyan-top)" />
              <polygon points="20,60 100,100 100,180 20,140" fill="url(#grad-cyan-left)" />
              <polygon points="100,100 180,60 180,140 100,180" fill="url(#grad-cyan-right)" />
            </svg>
          </motion.div>

          {/* Mid-Left Cube */}
          <motion.div className="absolute w-[130px] h-[130px] z-40" style={{ top: '46%', left: '29%', rotate: 5, x: moveX2, y: moveY1 }}>
            <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-[0_10px_20px_rgba(0,0,0,0.6)]">
              <polygon points="100,20 180,60 100,100 20,60" fill="url(#grad-purple-top)" />
              <polygon points="20,60 100,100 100,180 20,140" fill="url(#grad-purple-left)" />
              <polygon points="100,100 180,60 180,140 100,180" fill="url(#grad-purple-right)" />
            </svg>
          </motion.div>

          {/* Bottom-Left Cylinder */}
          <motion.div className="absolute w-14 h-40 z-20" style={{ top: '62%', left: '42%', rotate: -40, x: moveX3, y: moveY2 }}>
            <svg viewBox="0 0 100 200" className="w-full h-full drop-shadow-2xl">
              <ellipse cx="50" cy="30" rx="40" ry="15" fill="url(#grad-pink-cyl-top)" />
              <path d="M10,30 L10,170 A40,15 0 0,0 90,170 L90,30 Z" fill="url(#grad-pink-cyl-body)" />
              <ellipse cx="50" cy="170" rx="40" ry="15" fill="#000" />
            </svg>
          </motion.div>

          {/* Bottom-Right Cube */}
          <motion.div className="absolute w-[260px] h-[260px] z-50" style={{ top: '52%', left: '48%', rotate: 15, x: moveX1, y: moveY3 }}>
            <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-[0_30px_60px_rgba(0,0,0,0.9)]">
              <polygon points="100,20 180,60 100,100 20,60" fill="url(#grad-top-face)" />
              <polygon points="20,60 100,100 100,180 20,140" fill="url(#grad-left-face)" />
              <polygon points="100,100 180,60 180,140 100,180" fill="url(#grad-right-face)" />
            </svg>
          </motion.div>

        </div>
      </div>

      <div className="relative z-30 text-center px-6 max-w-7xl mx-auto w-full flex flex-col items-center mt-10">
        <h1 className="text-[clamp(2.5rem,10vw,8rem)] whitespace-nowrap font-bold tracking-tight leading-none mb-6 text-white" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
          VIVEK KUMAR
        </h1>
        <p className="text-sm md:text-base text-gray-300 font-mono tracking-[0.2em] uppercase">
          Software Engineer, Full Stack Developer.
        </p>
        
        <div className="mt-24 flex flex-col items-center">
          <p className="text-[10px] text-gray-500 font-mono tracking-widest uppercase mb-4">Currently pursuing</p>
          <div 
            className="flex items-center space-x-8 opacity-60 hover:opacity-100 transition-opacity duration-500 cursor-pointer"
            data-cursor-hover="true"
          >
            <span className="text-lg font-bold tracking-widest text-white">MCA @ NIT Warangal</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <a href="#expertise" className="relative w-7 h-11 flex justify-center items-start pt-2 group">
          {/* Animated Border */}
          <svg className="absolute inset-0 w-full h-full text-gray-500 group-hover:text-cyan-400 transition-colors" viewBox="0 0 28 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.rect 
              x="1" y="1" width="26" height="42" rx="13" 
              stroke="currentColor" strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
            />
          </svg>
          
          {/* Electric Down Arrow Inside */}
          <motion.svg 
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-cyan-300 drop-shadow-[0_0_8px_rgba(34,211,238,0.9)]"
            animate={{ 
              y: [-5, 15],
              opacity: [0, 1, 1, 0],
              x: [0, -1, 1, -1, 1, 0]
            }}
            transition={{ 
              y: { duration: 1.5, repeat: Infinity, ease: "easeIn" },
              opacity: { duration: 1.5, repeat: Infinity, ease: "linear" },
              x: { duration: 0.1, repeat: Infinity, ease: "linear" }
            }}
          >
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </motion.svg>
        </a>
      </div>
    </section>
  );
}
