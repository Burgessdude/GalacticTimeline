export function Footer() {
  return (
    <footer className="bg-black/80 border-t border-white/10 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold mb-3 text-white">About</h3>
            <p className="text-white/60 text-sm leading-relaxed">
              Galactic Timeline is a comprehensive catalog of Star Wars novels, organized by timeline and era.
              Explore both the Legends Expanded Universe and the current Canon timeline.
            </p>
            <br />
            <p className="text-white/60 text-sm leading-relaxed">
              For questions and concerns email us at galactictimeline@gmail.com
            </p>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-bold mb-3 text-white">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.starwars.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white text-sm transition-colors"
                >
                  Official Star Wars Site
                </a>
              </li>
              <li>
                <a
                  href="https://starwars.fandom.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white text-sm transition-colors"
                >
                  Wookieepedia
                </a>
              </li>
              <li>
                <a
                  href="https://www.amazon.com/Star-Wars-Books/b?ie=UTF8&node=16190"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white text-sm transition-colors"
                >
                  Browse on Amazon
                </a>
              </li>
            </ul>
          </div>

          {/* Disclaimer */}
          <div>
            <h3 className="text-lg font-bold mb-3 text-white">Disclaimer</h3>
            <p className="text-white/60 text-sm leading-relaxed mb-3">
              This site contains Amazon affiliate links. We may earn a commission from qualifying purchases.
            </p>
            <p className="text-white/60 text-sm leading-relaxed">
              Star Wars and all related properties are © Lucasfilm Ltd. and Disney.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/40 text-sm">
              © {new Date().getFullYear()} Galactic Timeline. A fan-created resource for Star Wars readers.
            </p>
            <p className="text-white/40 text-sm">
              May the Force be with you.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
