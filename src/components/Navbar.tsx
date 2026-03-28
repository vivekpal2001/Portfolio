import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [typedName, setTypedName] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const fullName = 'VivekKumar';

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullName.length) {
        setTypedName(fullName.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 150); // Adjust typing speed here

    return () => clearInterval(typingInterval);
  }, []);

  const navItems = [
    { num: '01', name: 'home', href: '#home' },
    { num: '02', name: 'expertise', href: '#expertise' },
    { num: '03', name: 'work', href: '#work' },
    { num: '04', name: 'experience', href: '#experience' },
    { num: '05', name: 'contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navItems.map(item => document.getElementById(item.name)).filter(Boolean);
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      let currentActive = 'home';
      
      for (const section of sections) {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            currentActive = section.id;
          }
        }
      }

      // If at the very bottom, select the last section
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 50) {
        currentActive = navItems[navItems.length - 1].name;
      }

      setActiveSection(currentActive);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#121826]/90 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-3 items-center">
        
        {/* Logo */}
        <a href="#home" className="text-xl font-mono font-bold tracking-tighter justify-self-start flex items-center">
          {typedName}
          <motion.span 
            className="text-cyan-400 ml-0.5"
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
          >
            _
          </motion.span>
        </a>
        
        {/* Nav Items Container */}
        <div className="hidden md:flex justify-center space-x-10 justify-self-center col-span-1 whitespace-nowrap">
          {navItems.map((item) => {
            const isActive = activeSection === item.name;
            return (
              <a key={item.name} href={item.href} className="flex flex-col items-end group relative">
                <span className={`text-[10px] font-mono mb-0.5 transition-colors duration-300 ${isActive ? 'text-white' : 'text-gray-500 group-hover:text-white'}`}>
                  {item.num}
                </span>
                <span className={`text-sm font-mono transition-colors duration-300 ${isActive ? 'text-white' : 'text-gray-400 group-hover:text-white'}`}>
                  // {item.name}
                </span>
              </a>
            );
          })}
        </div>
        
        <div className="hidden md:block justify-self-end"></div>

        {/* Mobile Menu Button */}
        <div className="md:hidden justify-self-end flex items-center">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
            className="text-gray-400 hover:text-white transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 w-full bg-[#121826]/95 backdrop-blur-xl border-b border-gray-800 py-4 px-6 flex flex-col space-y-2 md:hidden shadow-2xl"
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.name;
              return (
                <a 
                  key={item.name} 
                  href={item.href} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center space-x-4 py-3 border-b border-gray-800/50 last:border-0"
                >
                  <span className={`text-xs font-mono ${isActive ? 'text-cyan-400' : 'text-gray-500'}`}>
                    {item.num}
                  </span>
                  <span className={`text-base font-mono ${isActive ? 'text-white' : 'text-gray-400'}`}>
                    // {item.name}
                  </span>
                </a>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
