import { ArrowUp } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="min-h-[70vh] border-t border-gray-800 bg-transparent flex flex-col items-center justify-center text-center p-12 md:p-24 relative">
      <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold font-display mb-8 leading-tight">
        Available for select<br />freelance opportunities
      </h2>
      <p className="text-gray-400 font-mono text-lg mb-12 max-w-2xl leading-relaxed">
        Have an exciting project you need help with?<br />
        Send me an email or contact me via instant message!
      </p>

      <a 
        href="mailto:vkpal1901@gmail.com" 
        className="text-2xl md:text-4xl font-mono font-bold text-white mb-16 inline-block relative group w-fit"
      >
        vkpal1901@gmail.com
        <span className="absolute bottom-0 left-0 w-full h-1 bg-purple-500 transform translate-y-2 group-hover:translate-y-1 transition-transform"></span>
      </a>

      <div className="flex flex-wrap justify-center gap-8 font-mono text-lg">
        <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a>
        <a href="https://github.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">Github</a>
        <a href="tel:+917717720989" className="text-gray-400 hover:text-white transition-colors">+91-7717720989</a>
      </div>

      <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="absolute bottom-6 right-6 md:bottom-12 md:right-12 w-12 h-12 bg-white flex items-center justify-center hover:scale-110 transition-transform rounded-full">
        <ArrowUp className="text-black" />
      </button>
    </section>
  );
}
