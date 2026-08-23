import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { SectionHeading } from '../components/SectionHeading';

export function Experience() {
  return (
    <section id="experience" className="section bg-white">
      <div className="container">
        <SectionHeading 
          eyebrow="Career path"
          title="Work Experience"
          align="left"
        />
        
        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#D97706] via-[#D97706]/50 to-transparent hidden md:block" />
          
          <div className="space-y-12">
            {portfolioData.experience.map((exp, index) => (
              <motion.div
                key={exp.id}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                {/* Dot */}
                <div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#D97706] border-4 border-white shadow-lg z-10 hidden md:block" />
                
                {/* Content */}
                <div className={`flex-1 ml-8 md:ml-0 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}>
                  <motion.div
                    className="bg-[#F5F5F4] rounded-2xl p-6 hover:bg-white hover:shadow-xl hover:shadow-black/10 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                  >
                    {/* Period badge */}
                    <span className="inline-block px-3 py-1 rounded-full bg-[#D97706]/10 text-[#D97706] text-sm font-medium mb-3">
                      {exp.period}
                    </span>
                    
                    {/* Title & Company */}
                    <h3 className="text-xl font-display font-semibold text-[#1C1917] mb-1">{exp.title}</h3>
                    <p className="text-[#44403C] font-medium mb-4">{exp.company}</p>
                    
                    {/* Responsibilities */}
                    <ul className={`space-y-2 mb-4 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                      {exp.responsibilities.map((resp, i) => (
                        <li key={i} className="text-[#78716C] text-sm leading-relaxed flex items-start gap-2">
                          {index % 2 !== 0 && <i className="bx bx-check-circle text-[#D97706] mt-0.5 flex-shrink-0" />}
                          <span>{resp}</span>
                          {index % 2 === 0 && <i className="bx bx-check-circle text-[#D97706] mt-0.5 flex-shrink-0 order-first" />}
                        </li>
                      ))}
                    </ul>
                    
                    {/* Technologies */}
                    <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 rounded-md bg-white text-[#44403C] text-xs font-medium border border-[#E7E5E4]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
                
                {/* Empty space for alternating layout */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
