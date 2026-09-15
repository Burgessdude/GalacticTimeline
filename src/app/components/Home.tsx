import { Link } from 'react-router';
import { motion } from 'motion/react';

export function Home() {
  return (
    <div className="min-h-screen flex items-start justify-center pt-12 md:pt-24">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 md:mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4 md:mb-6 tracking-wider" style={{ fontFamily: "'Star Jedi', sans-serif" }}>
            Galactic Timeline
          </h1>
          <p className="text-base md:text-xl text-white/60 max-w-2xl mx-auto">
            Explore the complete collection of Star Wars novels across two timelines
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4 md:gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Link
              to="/legends"
              className="group block relative overflow-hidden rounded-lg border border-blue-500/30 bg-gradient-to-br from-blue-950/40 to-black p-6 md:p-12 transition-all hover:border-blue-500/60 hover:shadow-2xl hover:shadow-blue-500/20"
            >
              <div className="relative z-10">
                <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4 text-blue-400">LEGENDS</h2>
                <p className="text-sm md:text-base text-white/70 mb-4 md:mb-6">
                  The Expanded Universe stories that defined Star Wars for generations
                </p>
                <div className="text-xs md:text-sm text-white/50">
                  Pre-2014 Timeline
                </div>
              </div>
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Link
              to="/canon"
              className="group block relative overflow-hidden rounded-lg border border-yellow-500/30 bg-gradient-to-br from-yellow-950/40 to-black p-6 md:p-12 transition-all hover:border-yellow-500/60 hover:shadow-2xl hover:shadow-yellow-500/20"
            >
              <div className="relative z-10">
                <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4 text-yellow-400">CANON</h2>
                <p className="text-sm md:text-base text-white/70 mb-4 md:mb-6">
                  The official timeline connecting all Star Wars stories
                </p>
                <div className="text-xs md:text-sm text-white/50">
                  2014-Present Timeline
                </div>
              </div>
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              />
            </Link>
          </motion.div>
        </div>
        <a
          href="https://www.buymeacoffee.com/galactictimeline"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-5 right-5 md:bottom-5 md:right-5
                     bg-[#5F7FFF] text-white
                     px-4 py-2 md:px-5 md:py-3
                     text-sm md:text-base
                     rounded-full font-semibold
                     shadow-lg hover:scale-105
                     transition-transform z-50"
        >
          📖 Buy me a book
        </a>
      </div>
    </div>
  );
}
