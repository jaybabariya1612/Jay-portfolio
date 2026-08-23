import { motion } from 'framer-motion';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center' | 'right';
}

export function SectionHeading({ 
  eyebrow, 
  title, 
  description, 
  align = 'center' 
}: SectionHeadingProps) {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  return (
    <motion.div 
      className={`mb-16 ${alignmentClasses[align]}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
    >
      {eyebrow && (
        <motion.span 
          className="inline-block text-sm font-mono text-[#D97706] uppercase tracking-widest mb-4"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {eyebrow}
        </motion.span>
      )}
      
      <motion.h2 
        className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold mb-6 text-[#1C1917]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {title.split(' ').map((word, i) => {
          if (word.includes('<') || word.includes('>')) {
            return <span key={i} dangerouslySetInnerHTML={{ __html: word }} />;
          }
          if (word.toLowerCase().includes('gradient') || i === Math.floor(title.split(' ').length / 2)) {
            return (
              <span key={i} className="text-transparent bg-clip-text bg-gradient-to-r from-[#D97706] to-[#B45309]">
                {word}
              </span>
            );
          }
          return <span key={i}>{word} </span>;
        })}
      </motion.h2>
      
      {description && (
        <motion.p 
          className="text-lg text-[#44403C] max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}
