import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { SectionHeading } from '../components/SectionHeading';
import { Button } from '../components/Button';

export function Contact() {
  return (
    <section id="contact" className="section bg-white">
      <div className="container">
        <SectionHeading 
          eyebrow="Get in touch"
          title="Let's Build Something Great Together"
          description="Whether you have a project in mind, want to discuss opportunities, or just want to say hello — I'd love to hear from you."
        />
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-display font-semibold text-[#1C1917] mb-6">
              Contact Information
            </h3>
            
            <div className="space-y-6 mb-8">
              {[
                { icon: 'bx-envelope', label: 'Email', value: portfolioData.contactInfo.email, href: `mailto:${portfolioData.contactInfo.email}` },
                { icon: 'bx-phone', label: 'Phone', value: portfolioData.contactInfo.phone, href: `tel:${portfolioData.contactInfo.phone.replace(/\s/g, '')}` },
                { icon: 'bx-map', label: 'Location', value: portfolioData.contactInfo.location, href: null },
              ].map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href || undefined}
                  className={`flex items-center gap-4 p-4 rounded-xl bg-[#F5F5F4] hover:bg-[#D97706]/10 transition-colors ${!item.href ? 'cursor-default' : ''}`}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={item.href ? { scale: 1.02, x: 5 } : {}}
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-[#D97706] text-white">
                    <i className={`bx ${item.icon} text-xl`} />
                  </div>
                  <div>
                    <p className="text-sm text-[#A8A29E] font-medium">{item.label}</p>
                    <p className="font-display font-semibold text-[#1C1917]">{item.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
            
            {/* Social Links */}
            <div>
              <h3 className="text-xl font-display font-semibold text-[#1C1917] mb-4">
                Follow Me
              </h3>
              <div className="flex gap-3">
                {portfolioData.socialLinks.map((social, index) => (
                  <motion.a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#F5F5F4] text-[#44403C] hover:bg-[#D97706] hover:text-white transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <i className={`bx bxl-${social.icon} text-xl`} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
          >
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#44403C] mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl bg-[#F5F5F4] border border-transparent focus:border-[#D97706] focus:bg-white focus:outline-none transition-all duration-300"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#44403C] mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-[#F5F5F4] border border-transparent focus:border-[#D97706] focus:bg-white focus:outline-none transition-all duration-300"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-[#44403C] mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Project Inquiry"
                  className="w-full px-4 py-3 rounded-xl bg-[#F5F5F4] border border-transparent focus:border-[#D97706] focus:bg-white focus:outline-none transition-all duration-300"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#44403C] mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 rounded-xl bg-[#F5F5F4] border border-transparent focus:border-[#D97706] focus:bg-white focus:outline-none transition-all duration-300 resize-none"
                />
              </div>
              
              <Button variant="primary" size="lg" className="w-full" type="submit">
                Send Message
                <i className="bx bx-send ml-2" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
