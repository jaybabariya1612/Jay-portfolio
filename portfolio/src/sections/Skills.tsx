import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { SectionHeading } from '../components/SectionHeading';

export function Skills() {
  return (
    <section id="skills" className="section bg-[#F5F5F4]">
      <div className="container">
        <SectionHeading 
          eyebrow="What I work with"
          title="My Tech Arsenal"
          description="Technologies I've mastered across the full stack — from pixel-perfect interfaces to robust backend architectures."
        />
        
        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {portfolioData.skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.id}
              className="bg-white rounded-2xl p-6 shadow-lg shadow-black/5 hover:shadow-xl hover:shadow-black/10 transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
            >
              {/* Header */}
              <div className="flex items-center gap-4 mb-6">
                <div 
                  className="w-12 h-12 flex items-center justify-center rounded-xl text-2xl"
                  style={{ background: category.iconBg }}
                >
                  {category.icon}
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg text-[#1C1917]">{category.name}</h3>
                  <p className="text-sm text-[#A8A29E]">{category.subtitle}</p>
                </div>
              </div>
              
              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill.name}
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-[#F5F5F4] text-[#44403C] text-sm font-medium hover:bg-[#D97706] hover:text-white transition-all duration-300 cursor-default group"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: catIndex * 0.1 + skillIndex * 0.05 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                  >
                    <i className={`bx bxl-${skill.iconClass} text-[#D97706] group-hover:text-white transition-colors`} />
                    {skill.name}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Tech Stack Marquee */}
        <div className="overflow-hidden relative">
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#F5F5F4] to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#F5F5F4] to-transparent z-10" />
          
          <motion.div 
            className="flex gap-4"
            animate={{ x: [0, -500] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            {[...portfolioData.techStack, ...portfolioData.techStack].map((tech, index) => (
              <motion.div
                key={`${tech}-${index}`}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white border border-[#E7E5E4] text-[#44403C] font-medium whitespace-nowrap hover:border-[#D97706] hover:text-[#D97706] transition-colors cursor-default"
                whileHover={{ scale: 1.05, y: -2 }}
              >
                {tech.includes('HTML') && <i className="bx bxl-html5 text-orange-500" />}
                {tech.includes('CSS') && <i className="bx bxl-css3 text-blue-500" />}
                {tech.includes('JavaScript') && <i className="bx bxl-javascript text-yellow-500" />}
                {tech.includes('React') && <i className="bx bxl-react text-cyan-500" />}
                {tech.includes('Tailwind') && <i className="bx bxl-tailwind-css text-teal-500" />}
                {tech.includes('Bootstrap') && <i className="bx bxl-bootstrap text-purple-500" />}
                {tech.includes('.NET') && <i className="bx bxl-visual-studio text-indigo-500" />}
                {tech.includes('C#') && <i className="bx bx-code text-blue-600" />}
                {tech.includes('SQL') && <i className="bx bx-data text-gray-600" />}
                {tech.includes('Git') && <i className="bx bxl-git text-red-500" />}
                {tech.includes('Node') && <i className="bx bxl-nodejs text-green-500" />}
                {tech.includes('jQuery') && <i className="bx bxl-jquery text-blue-400" />}
                {!tech.match(/(HTML|CSS|JavaScript|React|Tailwind|Bootstrap|\.NET|C#|SQL|Git|Node|jQuery)/) && (
                  <i className="bx bx-code text-[#D97706]" />
                )}
                {tech}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
