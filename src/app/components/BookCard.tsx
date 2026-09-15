import { motion } from 'motion/react';
import type { Novel } from '../data/novels';

interface BookCardProps {
  novel: Novel;
  index: number;
  accentColor: 'blue' | 'yellow';
}

export function BookCard({ novel, index, accentColor }: BookCardProps) {
  const accentClass = accentColor === 'blue' ? 'border-blue-500/20 hover:border-blue-500/40' : 'border-yellow-500/20 hover:border-yellow-500/40';
  const labelClass = accentColor === 'blue' ? 'text-blue-400' : 'text-yellow-400';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className={`group flex gap-6 p-6 rounded-lg border ${accentClass} bg-white/5 backdrop-blur-sm transition-all hover:bg-white/10`}
    >
      <div className="flex-shrink-0">
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 300 }}
          className="w-32 h-48 rounded overflow-hidden bg-gradient-to-br from-white/10 to-white/5 border border-white/10"
        >
          <img
            src={novel.coverUrl}
            alt={`${novel.title} cover`}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-4 mb-3">
          <div>
            <h3 className="text-2xl font-bold mb-1">{novel.title}</h3>
            {novel.series && (
              <div className="text-sm text-white/50 mb-2">{novel.series}</div>
            )}
          </div>
          <div className={`text-right flex-shrink-0 ${labelClass} font-bold text-lg`}>
            {novel.timelineLabel}
          </div>
        </div>

        <div className="space-y-2 text-white/70">
          <div className="flex gap-2">
            <span className="text-white/50">Author:</span>
            <span>{novel.author}</span>
          </div>
          <div className="flex gap-2">
            <span className="text-white/50">Released:</span>
            <span>{novel.releaseDate}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
