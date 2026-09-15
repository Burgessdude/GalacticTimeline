import { Outlet, Link, useLocation } from 'react-router';
import { motion } from 'motion/react';
import { Footer } from './Footer';

export function RootLayout() {
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {!isHomePage && (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <Link to="/" className="text-lg md:text-2xl font-bold tracking-wider" style={{ fontFamily: "'Star Jedi', sans-serif" }}>
              Galactic Timeline
            </Link>

            <div className="flex gap-8">
              <Link
                to="/legends"
                className={`relative px-4 py-2 transition-colors ${
                  location.pathname === '/legends' ? 'text-blue-400' : 'text-white/70 hover:text-white'
                }`}
              >
                LEGENDS
                {location.pathname === '/legends' && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-400"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>

              <Link
                to="/canon"
                className={`relative px-4 py-2 transition-colors ${
                  location.pathname === '/canon' ? 'text-yellow-400' : 'text-white/70 hover:text-white'
                }`}
              >
                CANON
                {location.pathname === '/canon' && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-yellow-400"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            </div>
          </div>
        </nav>
      )}

      <main className={isHomePage ? 'flex-1' : 'pt-20 flex-1'}>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
