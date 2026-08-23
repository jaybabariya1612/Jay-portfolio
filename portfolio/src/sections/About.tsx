import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { SectionHeading } from '../components/SectionHeading';
import { Button } from '../components/Button';

export function About() {
  return (
    <section id="about" className="section bg-white">
      <div className="container">
        <SectionHeading 
          eyebrow="Get to know me"
          title="About Me"
          align="left"
        />
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] max-w-md mx-auto">
              {/* Background shape */}
              <div className="absolute inset-4 bg-gradient-to-br from-[#D97706]/20 to-[#B45309]/20 rounded-3xl transform rotate-6" />
              
              {/* Image frame */}
              <div className="relative h-full rounded-3xl overflow-hidden shadow-2xl shadow-black/10">
                <img
                  src={portfolioData.profileImage}
                  alt={portfolioData.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Tag */}
              <motion.div
                className="absolute -bottom-6 -right-6 bg-white px-6 py-4 rounded-2xl shadow-xl shadow-black/10"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <p className="text-sm text-[#A8A29E] font-medium">BCA</p>
                <p className="font-display font-semibold text-[#1C1917]">Silver Oak University</p>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
          >
            {portfolioData.aboutDescription.map((paragraph, index) => (
              <motion.p
                key={index}
                className="text-lg text-[#44403C] leading-relaxed mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {paragraph}
              </motion.p>
            ))}
            
            {/* Info Grid */}
            <div className="grid grid-cols-2 gap-6 my-8">
              {[
                { icon: 'bx-envelope', label: 'Email', value: portfolioData.contactInfo.email, href: `mailto:${portfolioData.contactInfo.email}` },
                { icon: 'bx-phone', label: 'Phone', value: portfolioData.contactInfo.phone, href: `tel:${portfolioData.contactInfo.phone}` },
                { icon: 'bx-map', label: 'Location', value: 'Ahmedabad, Gujarat', href: null },
                { icon: 'bx-briefcase', label: 'Status', value: 'Available for work', href: null, highlight: true },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#F5F5F4] text-[#D97706]">
                    <i className={`bx ${item.icon} text-xl`} />
                  </div>
                  <div>
                    <p className="text-sm text-[#A8A29E] font-medium">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className={`font-display font-semibold hover:text-[#D97706] transition-colors ${item.highlight ? 'text-[#10B981]' : ''}`}>
                        {item.value}
                      </a>
                    ) : (
                      <p className={`font-display font-semibold ${item.highlight ? 'text-[#10B981]' : ''}`}>{item.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
            >
              <Button 
                variant="primary" 
                size="lg"
                href={portfolioData.resumeUrl}
                icon={<i className="bx bxs-file-pdf" />}
                iconPosition="left"
              >
                Download Resume
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
