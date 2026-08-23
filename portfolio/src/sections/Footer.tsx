import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1C1917] text-white py-16">
      <div className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <a href="#home" className="text-3xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#D97706] to-[#B45309] inline-block mb-4">
              JB.
            </a>
            <p className="text-[#A8A29E] leading-relaxed mb-6">
              Full Stack Developer specializing in ASP.NET Core & React. Building elegant, high-performance web applications.
            </p>
            <div className="flex gap-3">
              {portfolioData.socialLinks.map((social) => (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#44403C] hover:bg-[#D97706] transition-colors duration-300"
                >
                  <i className={`bx bxl-${social.icon}`} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-display font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-[#A8A29E] hover:text-[#D97706] transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-display font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-3">
              {portfolioData.services.slice(0, 4).map((service) => (
                <li key={service.id}>
                  <span className="text-[#A8A29E]">{service.title}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="font-display font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a href={`mailto:${portfolioData.contactInfo.email}`} className="text-[#A8A29E] hover:text-[#D97706] transition-colors">
                  {portfolioData.contactInfo.email}
                </a>
              </li>
              <li>
                <a href={`tel:${portfolioData.contactInfo.phone.replace(/\s/g, '')}`} className="text-[#A8A29E] hover:text-[#D97706] transition-colors">
                  {portfolioData.contactInfo.phone}
                </a>
              </li>
              <li className="text-[#A8A29E]">{portfolioData.contactInfo.location}</li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#44403C] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#A8A29E] text-sm">
            © {currentYear} {portfolioData.name}. All rights reserved.
          </p>
          <p className="text-[#A8A29E] text-sm flex items-center gap-2">
            Made with <span className="text-red-500">♥</span> using React + TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
}
