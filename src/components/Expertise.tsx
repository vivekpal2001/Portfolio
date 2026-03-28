import { Monitor, Atom } from 'lucide-react';
import { motion } from 'motion/react';

// Custom Flutter Icon SVG to match the screenshot
const FlutterIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M14.5 4.5l-9 9 3 3 9-9z" />
    <path d="M14.5 13.5l-3 3 3 3h5l-8-8z" />
  </svg>
);

const codeLines = [
  <><span className="text-[#c586c0]">&lt;html</span> <span className="text-[#9cdcfe]">lang=</span><span className="text-[#ce9178]">"en"</span><span className="text-[#c586c0]">&gt;</span></>,
  <>{'  '}<span className="text-[#c586c0]">&lt;head&gt;</span></>,
  <>{'    '}<span className="text-[#c586c0]">&lt;meta</span> <span className="text-[#9cdcfe]">name=</span><span className="text-[#ce9178]">"viewport"</span> <span className="text-[#9cdcfe]">content=</span><span className="text-[#ce9178]">"width=device-width, initial-scale=1.0"</span><span className="text-[#c586c0]">&gt;</span></>,
  <>{'    '}<span className="text-[#c586c0]">&lt;title&gt;</span>What do I do<span className="text-[#c586c0]">&lt;/title&gt;</span></>,
  <>{'  '}<span className="text-[#c586c0]">&lt;/head&gt;</span></>,
  <>{'  '}<span className="text-[#c586c0]">&lt;body&gt;</span></>,
  <>{'    '}<span className="text-[#c586c0]">&lt;h1&gt;</span>Things I do to get a perfect background image<span className="text-[#c586c0]">&lt;/h1&gt;</span></>,
  <>{'    '}<span className="text-[#c586c0]">&lt;p&gt;</span></>,
  <>{'      '}Maybe I should stop tinkering with VSCode settings</>,
  <>{'      '}just to take a screenshot of this dummy html code.</>,
  <>{'    '}<span className="text-[#c586c0]">&lt;/p&gt;</span></>,
  <>{'    '}<span className="text-[#c586c0]">&lt;span&gt;</span></>,
  <>{'      '}Oops, Almost forgot to say "Hello World!"!</>,
  <>{'    '}<span className="text-[#c586c0]">&lt;/span&gt;</span></>,
  <>{'  '}<span className="text-[#c586c0]">&lt;/body&gt;</span></>,
  <><span className="text-[#c586c0]">&lt;/html&gt;</span></>
];

const ColoredCode = () => (
  <motion.pre 
    className="font-mono text-[14px] leading-relaxed text-[#6b7280] text-left inline-block"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: false, margin: "0px 0px -250px 0px" }}
    variants={{
      visible: { transition: { staggerChildren: 0.15 } },
      hidden: {}
    }}
  >
    {codeLines.map((line, i) => (
      <motion.div
        key={i}
        variants={{
          hidden: { opacity: 0, clipPath: "inset(0 100% 0 0)" },
          visible: { opacity: 1, clipPath: "inset(0 0% 0 0)", transition: { duration: 0.4, ease: "linear" } }
        }}
        style={{ whiteSpace: 'pre' }}
      >
        {line}
      </motion.div>
    ))}
  </motion.pre>
);

export default function Expertise() {
  return (
    <section id="expertise" className="py-32 relative bg-transparent overflow-hidden">
      {/* Code Snippet Background */}
      <div className="absolute bottom-[-15%] left-1/2 -translate-x-1/2 z-0 opacity-[0.25] pointer-events-none" aria-hidden="true"
           style={{ 
             maskImage: 'linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)', 
             WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)' 
           }}>
        <ColoredCode />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center mb-20">
          <div className="w-6 h-6 rounded-full border border-cyan-400/50 flex items-center justify-center mb-6">
            <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold font-display tracking-tight">My Expertise</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 border border-gray-500 relative z-10">
          {/* Card 1 */}
          <div className="p-8 md:p-10 border-b md:border-b-0 md:border-r border-gray-500">
            <div className="flex items-center mb-10 space-x-5">
              <Monitor className="w-12 h-12 text-white shrink-0" strokeWidth={1.5} />
              <h2 className="text-2xl lg:text-3xl font-bold font-display text-white leading-tight">
                <span className="underline decoration-[#ff2a5f] decoration-[4px] underline-offset-[6px]">Full Stack</span>
                <br />Web Dev
              </h2>
            </div>
            <div className="font-mono text-[13px] xl:text-[14px] text-gray-500 relative">
              <div className="absolute left-[7px] top-7 bottom-7 w-px bg-gray-600"></div>
              <p>&lt;h3&gt;</p>
              <div className="pl-6 py-4 leading-relaxed text-gray-200 space-y-2">
                <p><span className="text-[#ff2a5f]">Frontend:</span> React.js, Next.js, HTML, CSS, Tailwind CSS, JavaScript</p>
                <p><span className="text-[#ff2a5f]">Backend:</span> Node.js, Express.js</p>
                <p><span className="text-[#ff2a5f]">API Dev:</span> REST APIs, Axios</p>
                <p><span className="text-[#ff2a5f]">Auth:</span> JWT, bcrypt</p>
                <p><span className="text-[#ff2a5f]">Database:</span> PostgreSQL, MySQL, MongoDB</p>
                <p><span className="text-[#ff2a5f]">ORM/Tools:</span> Prisma</p>
              </div>
              <p>&lt;/h3&gt;</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="p-8 md:p-10 border-b md:border-b-0 md:border-r border-gray-500">
            <div className="flex items-center mb-10 space-x-5">
              <Atom className="w-12 h-12 text-white shrink-0" strokeWidth={1.5} />
              <h2 className="text-2xl lg:text-3xl font-bold font-display text-white leading-tight">
                <span className="underline decoration-[#3b82f6] decoration-[4px] underline-offset-[6px]">Cloud &</span>
                <br />DevOps
              </h2>
            </div>
            <div className="font-mono text-[13px] xl:text-[14px] text-gray-500 relative">
              <div className="absolute left-[7px] top-7 bottom-7 w-px bg-gray-600"></div>
              <p>&lt;h3&gt;</p>
              <div className="pl-6 py-4 leading-relaxed text-gray-200 space-y-2">
                <p><span className="text-[#3b82f6]">Cloud:</span> AWS EC2</p>
                <p><span className="text-[#3b82f6]">Containers:</span> Docker, Docker Compose</p>
                <p><span className="text-[#3b82f6]">CI/CD:</span> GitHub Actions</p>
                <p><span className="text-[#3b82f6]">VCS:</span> Git, GitHub</p>
                <p><span className="text-[#3b82f6]">Tools:</span> Postman, Chrome DevTools</p>
              </div>
              <p>&lt;/h3&gt;</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="p-8 md:p-10">
            <div className="flex items-center mb-10 space-x-5">
              <FlutterIcon className="w-12 h-12 text-white shrink-0" />
              <h2 className="text-2xl lg:text-3xl font-bold font-display text-white leading-tight">
                <span className="underline decoration-[#f97316] decoration-[4px] underline-offset-[6px]">Programming</span>
                <br />Languages
              </h2>
            </div>
            <div className="font-mono text-[13px] xl:text-[14px] text-gray-500 relative">
              <div className="absolute left-[7px] top-7 bottom-7 w-px bg-gray-600"></div>
              <p>&lt;h3&gt;</p>
              <div className="pl-6 py-4 leading-relaxed text-gray-200 space-y-2">
                <p><span className="text-[#f97316]">C++:</span> DSA, problem solving</p>
                <p><span className="text-[#f97316]">JavaScript:</span> Frontend + Backend</p>
              </div>
              <p>&lt;/h3&gt;</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
