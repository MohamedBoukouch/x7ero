import { useNavigate } from 'react-router-dom';
import { useState, useRef } from 'react';
import GameCard from './GameCard';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const GameSection = ({ title, games, type }) => {
  const navigate = useNavigate();
  const scrollRef = useRef(null);
  const [showControls, setShowControls] = useState(false);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-white">{title}</h2>
        <button 
          className="text-blue-400 hover:text-blue-300 flex items-center"
          onClick={() => navigate(`/all-games/${type}`)}
        >
          Voir tous
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Desktop view - scroll only via icons */}
      <div 
        className="hidden md:block relative"
        onMouseEnter={() => setShowControls(true)}
        onMouseLeave={() => setShowControls(false)}
      >
        {showControls && (
          <>
            <button 
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-800/80 p-2 rounded-full text-white hover:bg-gray-700"
            >
              <FaChevronLeft />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-800/80 p-2 rounded-full text-white hover:bg-gray-700"
            >
              <FaChevronRight />
            </button>
          </>
        )}

        <div 
          ref={scrollRef}
          className="flex space-x-4 overflow-hidden"
        >
          {games.map(game => (
            <div key={game.id} className="flex-none w-48">
              <GameCard game={game} size="small" />
            </div>
          ))}
        </div>
      </div>

      {/* Mobile - Grid view */}
      <div className="md:hidden">
        <div className="mb-4">
          <GameCard game={games[0]} size="large" />
        </div>
        <div className="grid grid-cols-3 gap-2 mb-2">
          {games.slice(1, 4).map(game => (
            <GameCard key={game.id} game={game} size="small" />
          ))}
        </div>
        <div className="grid grid-cols-3 gap-2">
          {games.slice(4, 7).map(game => (
            <GameCard key={game.id} game={game} size="small" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GameSection;
