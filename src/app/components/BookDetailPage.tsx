import { useParams, Link, useNavigate, useLocation } from 'react-router';
import { useEffect, useRef } from 'react';
import { legendsNovels, canonNovels } from '../data/novels';
import { canonEras, getEraForTimeline, legendsEras, getLegendsEraForTimeline } from '../utils/eras';
import { ArrowLeft, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

export function BookDetailPage() {
  const { bookId } = useParams<{ bookId: string }>();
  const navigate = useNavigate();
  const location = useLocation();
  const hasScrolled = useRef(false);

  // Scroll to top when page loads or book changes, but only on initial mount or book change
  useEffect(() => {
    if (!hasScrolled.current) {
      window.scrollTo({ top: 0, behavior: 'instant' });
      hasScrolled.current = true;
    }

    // Reset on book change
    return () => {
      hasScrolled.current = false;
    };
  }, [bookId]);

  // Determine timeline from the path
  const isLegends = location.pathname.startsWith('/legends');
  const timeline = isLegends ? 'legends' : 'canon';
  const books = isLegends ? legendsNovels : canonNovels;
  const book = books.find(b => b.id === bookId);

// Use the passed-in filtered/sorted order if available
const bookOrder: string[] =
  location.state?.novelOrder || books.map(b => b.id);

// Find current position in THAT order
const currentIndex = bookOrder.findIndex(id => id === bookId);

// Get neighboring IDs
const previousBookId =
  currentIndex > 0 ? bookOrder[currentIndex - 1] : null;

const nextBookId =
  currentIndex < bookOrder.length - 1
    ? bookOrder[currentIndex + 1]
    : null;

// Convert IDs back to full book objects
const previousBook = previousBookId
  ? books.find(b => b.id === previousBookId)
  : null;

const nextBook = nextBookId
  ? books.find(b => b.id === nextBookId)
  : null;
  
  if (!book) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Book Not Found</h1>
          <Link to={`/${timeline}`} className="text-blue-400 hover:text-blue-300">
            Return to {isLegends ? 'Legends' : 'Canon'}
          </Link>
        </div>
      </div>
    );
  }

  const accentColor = isLegends ? 'blue' : 'yellow';
  const accentClass = accentColor === 'blue' ? 'text-blue-400' : 'text-yellow-400';
  const borderClass = accentColor === 'blue' ? 'border-blue-500/20' : 'border-yellow-500/20';

  // Get era for books
  const bookEra = isLegends
    ? legendsEras.find(era => era.id === getLegendsEraForTimeline(book.timelinePlacement))
    : canonEras.find(era => era.id === getEraForTimeline(book.timelinePlacement));

  // Filter out tags that we show separately (timeline name and era name)
  const displayTags = book.bookType ? book.bookType.filter(type => {
    const timelineName = isLegends ? 'Legends' : 'Canon';
    const eraName = bookEra?.name;
    return type !== timelineName && type !== eraName;
  }) : [];

  return (
    <div className="min-h-screen">
      <div className="max-w-5xl mx-auto px-6 pt-6 pb-12">
        <Link
          to={location.state?.from || `/${timeline}`}
          className="flex items-center gap-1.5 text-white/70 hover:text-white transition-colors bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-md border border-white/10 hover:border-white/20 text-sm mb-8 w-fit"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to {isLegends ? 'Legends' : 'Canon'}
        </Link>

        <div className="flex flex-row gap-4 md:gap-12">
          {/* Book Cover */}
          <div className="flex-shrink-0">
            <div className={`w-32 md:w-56 h-auto rounded-lg overflow-hidden border ${borderClass} bg-white/5`}>
              <img
                src={book.coverUrl}
                alt={`${book.title} cover`}
                className="w-full h-auto object-cover"
              />
            </div>

            {book.amazonLink && (
              <a
                href={book.amazonLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:flex items-center justify-center gap-2 mt-4 w-56 text-center px-6 py-3 rounded-lg font-bold text-white border border-white/20 bg-white/10 hover:bg-white/20 transition-colors"
              >
                View on Amazon
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>

          {/* Book Details */}
          <div className="flex-1 min-w-0">
            <h1 className="text-2xl md:text-5xl font-bold mb-2 md:mb-4">{book.title}</h1>

            <div className="space-y-2 md:space-y-4 text-sm md:text-lg">
              <div>
                <span className="text-white/50">Author:</span>
                <span className="ml-2 md:ml-3 text-white">{book.author}</span>
              </div>

              <div>
                <span className="text-white/50">Timeline:</span>
                <span className={`ml-2 md:ml-3 font-bold ${accentClass}`}>
                  {book.timelineLabel}
                </span>
              </div>

              {book.releaseDate && (
                <div>
                  <span className="text-white/50">Release Date:</span>
                  <span className="ml-2 md:ml-3 text-white">{book.releaseDate}</span>
                </div>
              )}
            </div>

            {/* Tags - Mobile */}
            <div className="md:hidden flex flex-wrap gap-1 mt-3">
              <div className={`inline-block px-2 py-1 rounded-full text-xs font-bold text-white/90 border border-white/20 bg-white/5`}>
                {isLegends ? 'Legends' : 'Canon'}
              </div>
              {bookEra && (
                <div className={`inline-block px-2 py-1 rounded-full text-xs font-bold text-white/90 border border-white/20 bg-white/5`}>
                  {bookEra.name}
                </div>
              )}
              {displayTags.map((type) => (
                <div key={type} className={`inline-block px-2 py-1 rounded-full text-xs font-bold text-white/90 border border-white/20 bg-white/5`}>
                  {type}
                </div>
              ))}
            </div>

            {/* Tags - Desktop */}
            <div className="hidden md:flex flex-wrap gap-2 mt-4">
              <div className={`inline-block px-3 py-1 rounded-full text-sm font-bold text-white/90 border border-white/20 bg-white/5`}>
                {isLegends ? 'Legends' : 'Canon'}
              </div>
              {bookEra && (
                <div className={`inline-block px-3 py-1 rounded-full text-sm font-bold text-white/90 border border-white/20 bg-white/5`}>
                  {bookEra.name}
                </div>
              )}
              {displayTags.map((type) => (
                <div key={type} className={`inline-block px-3 py-1 rounded-full text-sm font-bold text-white/90 border border-white/20 bg-white/5`}>
                  {type}
                </div>
              ))}
            </div>

            {/* Description - Desktop */}
            {book.description && (
              <div className={`hidden md:block mt-4 p-6 rounded-lg border ${borderClass} bg-white/5`}>
                <p className="text-white/70 leading-relaxed whitespace-pre-line">
                  {book.description}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Description - Mobile Only */}
        {book.description && (
          <div className={`md:hidden mt-4 p-4 rounded-lg border ${borderClass} bg-white/5`}>
            <p className="text-white/70 leading-relaxed text-sm whitespace-pre-line">
              {book.description}
            </p>
          </div>
        )}

        {/* Purchase Button - Mobile Only */}
        {book.amazonLink && (
          <a
            href={book.amazonLink}
            target="_blank"
            rel="noopener noreferrer"
            className="md:hidden mt-6 flex items-center justify-center gap-2 w-full text-center px-6 py-3 rounded-lg font-bold text-white border border-white/20 bg-white/10 hover:bg-white/20 transition-colors"
          >
            View on Amazon
            <ExternalLink className="w-4 h-4" />
          </a>
        )}

      </div>

      {/* Fixed Navigation buttons */}
      <div className="fixed bottom-6 left-0 right-0 z-40 pointer-events-none">
        <div className="max-w-5xl mx-auto px-6 flex justify-between items-center gap-4">
          {previousBook ? (
            <Link
              to={`/${timeline}/${previousBook.id}`}
              state={location.state}
              className="flex items-center gap-2 text-white/70 hover:text-white transition-colors bg-black/80 backdrop-blur-sm px-4 py-2 rounded-md border border-white/10 hover:border-white/20 pointer-events-auto"
            >
              <ChevronLeft className="w-5 h-5" />
              <div className="text-left">
                <div className="text-xs text-white/50">Previous</div>
                <div className="text-sm font-medium">{previousBook.title}</div>
              </div>
            </Link>
          ) : (
            <div></div>
          )}

          {nextBook ? (
            <Link
              to={`/${timeline}/${nextBook.id}`}
              state={location.state}
              className="flex items-center gap-2 text-white/70 hover:text-white transition-colors bg-black/80 backdrop-blur-sm px-4 py-2 rounded-md border border-white/10 hover:border-white/20 pointer-events-auto"
            >
              <div className="text-right">
                <div className="text-xs text-white/50">Next</div>
                <div className="text-sm font-medium">{nextBook.title}</div>
              </div>
              <ChevronRight className="w-5 h-5" />
            </Link>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
}
