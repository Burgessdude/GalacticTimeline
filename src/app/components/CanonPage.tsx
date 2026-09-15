import {
  Link,
  useLocation,
  useSearchParams,
} from "react-router";
import { useState, useMemo, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { canonNovels } from "../data/novels";
import { canonEras, getEraForTimeline } from "../utils/eras";

const bookTypes = [
  "Young Adult",
  "Adult",
  "Adaptations",
  "Script Book",
  "Middle Grade",
] as const;

type SortOption =
  | "timeline"
  | "release-newest"
  | "release-oldest"
  | "author-az"
  | "author-za";

function getLastName(author: string): string {
  // Handle multiple authors separated by comma - take first author
  const firstAuthor = author.split(",")[0].trim();
  // Get the last word as the last name
  const words = firstAuthor.split(" ");
  return words[words.length - 1];
}

export function CanonPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const selectedTypes = new Set(searchParams.getAll("type"));
  const selectedEras = new Set(searchParams.getAll("era"));

  const sortBy =
    (searchParams.get("sort") as SortOption) || "timeline";

  useEffect(() => {
    const original = window.history.scrollRestoration;

    window.history.scrollRestoration = "manual";

    return () => {
      window.history.scrollRestoration = original;
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      sessionStorage.setItem(
        `scroll-${location.pathname + location.search}`,
        String(window.scrollY),
      );
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location]);

  useEffect(() => {
    const saved = sessionStorage.getItem(
      `scroll-${location.pathname + location.search}`,
    );

    if (saved) {
      requestAnimationFrame(() => {
        window.scrollTo(0, Number(saved));
      });
    }
  }, [location]);

  const filteredAndSortedNovels = useMemo(() => {
    let filtered = canonNovels;

    // Apply type filter
    if (selectedTypes.size > 0) {
      filtered = filtered.filter((novel) => {
        if (!novel.bookType || novel.bookType.length === 0)
          return false;
        return novel.bookType.some((type) =>
          selectedTypes.has(type),
        );
      });
    }

    // Apply era filter
    if (selectedEras.size > 0) {
      filtered = filtered.filter((novel) => {
        const eraId = getEraForTimeline(
          novel.timelinePlacement,
        );
        return selectedEras.has(eraId);
      });
    }

    // Apply sorting
    const sorted = [...filtered];
    if (sortBy === "timeline") {
      sorted.sort(
        (a, b) => a.timelinePlacement - b.timelinePlacement,
      );
    } else if (sortBy === "release-newest") {
      sorted.sort((a, b) => {
        if (!a.releaseDate && !b.releaseDate) return 0;
        if (!a.releaseDate) return 1;
        if (!b.releaseDate) return -1;
        return (
          new Date(b.releaseDate).getTime() -
          new Date(a.releaseDate).getTime()
        );
      });
    } else if (sortBy === "release-oldest") {
      sorted.sort((a, b) => {
        if (!a.releaseDate && !b.releaseDate) return 0;
        if (!a.releaseDate) return 1;
        if (!b.releaseDate) return -1;
        return (
          new Date(a.releaseDate).getTime() -
          new Date(b.releaseDate).getTime()
        );
      });
    } else if (sortBy === "author-az") {
      sorted.sort((a, b) =>
        getLastName(a.author).localeCompare(
          getLastName(b.author),
        ),
      );
    } else if (sortBy === "author-za") {
      sorted.sort((a, b) =>
        getLastName(b.author).localeCompare(
          getLastName(a.author),
        ),
      );
    }

    return sorted;
  }, [selectedTypes, selectedEras, sortBy]);

  const toggleType = (type: string) => {
    const newParams = new URLSearchParams(searchParams);

    const currentTypes = new Set(newParams.getAll("type"));

    if (currentTypes.has(type)) {
      const updated = [...currentTypes].filter(
        (t) => t !== type,
      );

      newParams.delete("type");

      updated.forEach((t) => newParams.append("type", t));
    } else {
      newParams.append("type", type);
    }

    setSearchParams(newParams);
  };

  const toggleEra = (eraId: string) => {
    const newParams = new URLSearchParams(searchParams);

    const currentEras = new Set(newParams.getAll("era"));

    if (currentEras.has(eraId)) {
      const updated = [...currentEras].filter(
        (e) => e !== eraId,
      );

      newParams.delete("era");

      updated.forEach((e) => newParams.append("era", e));
    } else {
      newParams.append("era", eraId);
    }

    setSearchParams(newParams);
  };
  // Group books by era (only when sorting by timeline)
  const booksByEra =
    sortBy === "timeline"
      ? canonEras
          .map((era) => ({
            era,
            books: filteredAndSortedNovels.filter(
              (novel) =>
                getEraForTimeline(novel.timelinePlacement) ===
                era.id,
            ),
          }))
          .filter((group) => group.books.length > 0)
      : [];

  return (
    <div className="min-h-screen">
      <div className="relative h-80 flex items-center justify-center bg-gradient-to-b from-yellow-950/60 to-black border-b border-yellow-500/20">
        <div className="text-center z-10">
          <h1 className="text-7xl font-bold mb-4 text-yellow-400">
            CANON
          </h1>
          <p className="text-xl text-white/60">
            The Official Timeline • 2014-Present
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="mb-12">
          <p className="text-white/70 text-lg max-w-3xl mb-4">
            The official Star Wars canon, organized by era.
          </p>
          <p className="text-white/50 text-sm">
            Click any book to see more details
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-4 items-end">
            <div>
              <label
                htmlFor="sort-by"
                className="text-white/70 text-sm font-bold mb-2 block"
              >
                Sort by:
              </label>
              <div className="relative">
                <select
                  id="sort-by"
                  value={sortBy}
                  onChange={(e) => {
                    const newParams = new URLSearchParams(
                      searchParams,
                    );

                    newParams.set("sort", e.target.value);

                    setSearchParams(newParams);
                  }}
                  className="bg-black text-white/70 border border-white/20 rounded-md pl-3 pr-10 py-2 text-sm focus:outline-none focus:border-yellow-500 appearance-none w-full"
                >
                  <option
                    className="bg-white text-black"
                    value="timeline"
                  >
                    Timeline (In-Universe)
                  </option>

                  <option
                    className="bg-white text-black"
                    value="release-newest"
                  >
                    Release Date (Newest First)
                  </option>

                  <option
                    className="bg-white text-black"
                    value="release-oldest"
                  >
                    Release Date (Oldest First)
                  </option>

                  <option
                    className="bg-white text-black"
                    value="author-az"
                  >
                    Author (A-Z)
                  </option>

                  <option
                    className="bg-white text-black"
                    value="author-za"
                  >
                    Author (Z-A)
                  </option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/50 pointer-events-none" />
              </div>
            </div>

            {/* Type Filter */}
            <div>
              <label className="text-white/70 text-sm font-bold mb-2 block">
                Filter by Type:
              </label>

              <div className="flex flex-wrap gap-2">
                {bookTypes.map((type) => {
                  const isSelected = selectedTypes.has(type);

                  return (
                    <button
                      key={type}
                      onClick={() => toggleType(type)}
                      className={`px-3 py-2 rounded-md text-sm border transition-colors ${
                        isSelected
                          ? "bg-yellow-500/20 border-yellow-500 text-white"
                          : "bg-white/5 border-white/20 text-white/70 hover:text-white hover:border-white/40"
                      }`}
                    >
                      {type}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Era Filter */}
            <div>
              <label className="text-white/70 text-sm font-bold mb-2 block">
                Filter by Era:
              </label>

              <div className="flex flex-wrap gap-2 max-w-3xl">
                {canonEras.map((era) => {
                  const isSelected = selectedEras.has(era.id);

                  return (
                    <button
                      key={era.id}
                      onClick={() => toggleEra(era.id)}
                      className={`px-3 py-2 rounded-md text-sm border transition-colors ${
                        isSelected
                          ? "bg-yellow-500/20 border-yellow-500 text-white"
                          : "bg-white/5 border-white/20 text-white/70 hover:text-white hover:border-white/40"
                      }`}
                    >
                      {era.name}
                    </button>
                  );
                })}
              </div>
            </div>

            {(selectedTypes.size > 0 ||
              selectedEras.size > 0) && (
              <>
                <button
                  onClick={() => {
                    const newParams = new URLSearchParams();

                    if (sortBy !== "timeline") {
                      newParams.set("sort", sortBy);
                    }

                    setSearchParams(newParams);
                  }}
                  className="bg-white/5 text-white/70 hover:text-white border border-white/10 hover:border-white/20 rounded-md px-3 py-2 text-sm transition-colors mb-0"
                >
                  Clear Filters
                </button>
                <p className="text-white/50 text-sm pb-2">
                  Showing {filteredAndSortedNovels.length} of{" "}
                  {canonNovels.length} books
                </p>
              </>
            )}
          </div>
        </div>

        {sortBy === "timeline" ? (
          <div className="space-y-16">
            {booksByEra.map((group) => (
              <div key={group.era.id}>
                {/* Era Header */}
                <div className="mb-8">
                  <h2 className="text-3xl font-bold mb-2 text-white">
                    {group.era.name}
                  </h2>
                  <div className="w-full h-[3px] bg-white/20"></div>
                  <p className="text-white/70 mb-1">
                    {group.era.description}
                  </p>
                  <p className="text-sm text-white/50 mb-4">
                    {group.era.timeRange}
                  </p>
                </div>

                {/* Books Grid */}
                <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
                  {group.books.map((novel) => (
                    <div key={novel.id}>
                      <Link
                        to={`/canon/${novel.id}`}
                        state={{
                          from:
                            location.pathname + location.search,
                          scrollY: window.scrollY,
                          novelOrder:
                            filteredAndSortedNovels.map(
                              (n) => n.id,
                            ),
                        }}
                        className="group block"
                      >
                        <div className="relative aspect-[5/8] rounded-lg overflow-hidden bg-gradient-to-br from-white/10 to-white/5 border border-yellow-500/20 hover:border-yellow-500/40 transition-all shadow-lg hover:shadow-2xl hover:shadow-yellow-500/20">
                          <img
                            src={novel.coverUrl}
                            alt={novel.title}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity" />
                          <div className="absolute bottom-0 left-0 right-0 p-3 text-white transform translate-y-full group-hover:translate-y-0 transition-transform">
                            <p className="text-xs font-bold line-clamp-2">
                              {novel.title}
                            </p>
                            <p className="text-xs text-yellow-400 mt-1">
                              {novel.timelineLabel}
                            </p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
            {filteredAndSortedNovels.map((novel) => (
              <div key={novel.id}>
                <Link
                  to={`/canon/${novel.id}`}
                  state={{
                    from: location.pathname + location.search,
                    scrollY: window.scrollY,
                    novelOrder: filteredAndSortedNovels.map(
                      (n) => n.id,
                    ),
                  }}
                  className="group block"
                >
                  <div className="relative aspect-[5/8] rounded-lg overflow-hidden bg-gradient-to-br from-white/10 to-white/5 border border-yellow-500/20 hover:border-yellow-500/40 transition-all shadow-lg hover:shadow-2xl hover:shadow-yellow-500/20">
                    <img
                      src={novel.coverUrl}
                      alt={novel.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute bottom-0 left-0 right-0 p-3 text-white transform translate-y-full group-hover:translate-y-0 transition-transform">
                      <p className="text-xs font-bold line-clamp-2">
                        {novel.title}
                      </p>
                      <p className="text-xs text-yellow-400 mt-1">
                        {novel.timelineLabel}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}