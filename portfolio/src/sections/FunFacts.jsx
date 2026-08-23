import { motion } from 'framer-motion'
import { funFacts } from '../data/content'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15,
    },
  },
}

function FunFacts() {
  return (
    <section id="fun-facts" className="section">
      <div className="container">
        <motion.div
          className="section-header text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Fun Facts</span>
          <h2 className="section-title">
            Beyond the <span className="grad">Code</span>
          </h2>
          <p className="section-subtitle">
            A glimpse into my personality outside of development
          </p>
        </motion.div>

        <motion.div
          className="fun-facts-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {funFacts.map((fact, index) => (
            <motion.div
              key={index}
              className="fun-fact-card glass"
              variants={cardVariants}
              whileHover={{ 
                y: -8,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              <div className="fun-fact-emoji">{fact.emoji}</div>
              <h3 className="fun-fact-title">{fact.title}</h3>
              <p className="fun-fact-description">{fact.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default FunFacts
