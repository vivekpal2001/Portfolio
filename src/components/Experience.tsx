import { Briefcase, Award, GraduationCap } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-32 bg-transparent border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center mb-20">
          <div className="w-6 h-6 rounded-full border border-purple-500/50 flex items-center justify-center mb-6">
            <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold font-display tracking-tight text-center">Experience &<br/>Education</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 border border-gray-500 relative z-10">
          
          {/* Education Column */}
          <div className="p-8 md:p-10 border-b md:border-b-0 md:border-r border-gray-500">
            <div className="flex items-center mb-10 space-x-5">
              <GraduationCap className="w-12 h-12 text-white shrink-0" strokeWidth={1.5} />
              <h2 className="text-2xl lg:text-3xl font-bold font-display text-white leading-tight">
                <span className="underline decoration-[#ec4899] decoration-[4px] underline-offset-[6px]">Academic</span>
                <br />Education
              </h2>
            </div>
            
            <div className="font-mono text-[13px] xl:text-[14px] text-gray-500 relative">
              <div className="absolute left-[7px] top-7 bottom-7 w-px bg-gray-600"></div>
              <p>&lt;h3&gt;</p>
              <div className="pl-6 py-4 leading-relaxed text-gray-200 space-y-6">
                <div>
                  <p className="text-white font-bold text-base mb-1">NIT Warangal</p>
                  <p><span className="text-[#ec4899]">Degree:</span> Master of Computer Applications</p>
                  <p><span className="text-[#ec4899]">Timeline:</span> 2023-2026</p>
                  <p><span className="text-[#ec4899]">CGPA:</span> 7.37</p>
                </div>
                <div>
                  <p className="text-white font-bold text-base mb-1">Marwari College, Ranchi</p>
                  <p><span className="text-[#ec4899]">Degree:</span> B.Sc. Information Technology</p>
                  <p><span className="text-[#ec4899]">Timeline:</span> 2019-2022</p>
                  <p><span className="text-[#ec4899]">CGPA:</span> 8.76</p>
                </div>
              </div>
              <p>&lt;/h3&gt;</p>
            </div>
          </div>

          {/* Experience Column */}
          <div className="p-8 md:p-10 border-b md:border-b-0 md:border-r border-gray-500">
            <div className="flex items-center mb-10 space-x-5">
              <Briefcase className="w-12 h-12 text-white shrink-0" strokeWidth={1.5} />
              <h2 className="text-2xl lg:text-3xl font-bold font-display text-white leading-tight">
                <span className="underline decoration-[#a855f7] decoration-[4px] underline-offset-[6px]">Work</span>
                <br />Experience
              </h2>
            </div>
            
            <div className="font-mono text-[13px] xl:text-[14px] text-gray-500 relative">
              <div className="absolute left-[7px] top-7 bottom-7 w-px bg-gray-600"></div>
              <p>&lt;h3&gt;</p>
              <div className="pl-6 py-4 leading-relaxed text-gray-200 space-y-6">
                <div>
                  <p className="text-white font-bold text-base mb-1">Executive member - CSES</p>
                  <p><span className="text-[#a855f7]">College:</span> NIT Warangal</p>
                  <p className="mt-2 text-gray-400">
                    Mentored 15+ students on REST API integration and Git workflows, fostering a collaborative learning environment consistent with agile team standards.
                  </p>
                </div>
              </div>
              <p>&lt;/h3&gt;</p>
            </div>
          </div>

          {/* Certifications Column */}
          <div className="p-8 md:p-10">
            <div className="flex items-center mb-10 space-x-5">
              <Award className="w-12 h-12 text-white shrink-0" strokeWidth={1.5} />
              <h2 className="text-2xl lg:text-3xl font-bold font-display text-white leading-tight">
                <span className="underline decoration-[#06b6d4] decoration-[4px] underline-offset-[6px]">Licenses &</span>
                <br />Certifications
              </h2>
            </div>

            <div className="font-mono text-[13px] xl:text-[14px] text-gray-500 relative">
              <div className="absolute left-[7px] top-7 bottom-7 w-px bg-gray-600"></div>
              <p>&lt;h3&gt;</p>
              <div className="pl-6 py-4 leading-relaxed text-gray-200 space-y-6">
                <div>
                  <p className="text-white font-bold text-base mb-1">AWS Cloud Practitioner Essentials</p>
                  <p className="mt-2 text-gray-400">
                    Foundational knowledge of Cloud architecture, security compliance, and managed services (EC2, S3).
                  </p>
                </div>
                <div>
                  <p className="text-white font-bold text-base mb-1">Introduction to Linux (LFS101)</p>
                  <p className="mt-2 text-gray-400">
                    Proficiency in shell scripting, file systems, and server-side debugging in Linux environments.
                  </p>
                </div>
              </div>
              <p>&lt;/h3&gt;</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
