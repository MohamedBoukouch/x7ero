import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { games } from './gamesData';
import { TiArrowSortedDown, TiStarFullOutline } from "react-icons/ti";
import { FaGamepad, FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom';
const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredGames, setFilteredGames] = useState(games);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const navigate = useNavigate();

  const featuredGame = games[0];
  const popularGames = games.slice(0, 8);

  // Enhanced search function
  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredGames(games);
      setShowSearchResults(false);
    } else {
      const results = games.filter(game =>
        game.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        game.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        game.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredGames(results);
      setShowSearchResults(true);
    }
  }, [searchTerm]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-indigo-900 to-blue-900 text-white pt-4">
      {/* Header */}
      <header className="flex flex-col items-center mb-8">
        <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-amber-200 mb-2">
          x7ero
        </h1>
        <p className="text-xl text-amber-200 mb-6">Discover Your Next Favorite Game!</p>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto">
        {/* Enhanced Search Bar */}
        <div className="mb-8 relative">
          <div className="relative max-w-2xl mx-auto">
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-purple-300">
              <FaSearch className="h-5 w-5" />
            </div>
            <input
              type="text"
              placeholder="Search games by name, category or description..."
              className="w-full py-4 pl-12 pr-6 bg-blue-800/50 backdrop-blur-sm rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-lg border border-purple-500/30 text-white placeholder-purple-200"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onFocus={() => searchTerm && setShowSearchResults(true)}
            />
            {searchTerm && (
              <button 
                onClick={() => {
                  setSearchTerm('');
                  setShowSearchResults(false);
                }}
                className="absolute right-14 top-1/2 transform -translate-y-1/2 text-purple-300 hover:text-white"
              >
                ×
              </button>
            )}
          </div>

          {/* Search Results Dropdown */}
          {showSearchResults && (
            <div className="absolute z-10 mt-2 w-full max-w-2xl mx-auto bg-blue-900/95 backdrop-blur-md rounded-xl shadow-2xl border border-purple-500/30 max-h-96 overflow-y-auto">
              {filteredGames.length > 0 ? (
                filteredGames.map((game) => (
                  <div
                    key={game.id}
                    className="p-4 hover:bg-purple-800/50 cursor-pointer border-b border-purple-500/10 last:border-0 flex items-center"
                    onClick={() => {
                      navigate(`/game/${game.id}`);
                      setShowSearchResults(false);
                    }}
                  >
                    <img 
                      src={game.image} 
                      alt={game.name} 
                      className="w-12 h-12 object-cover rounded-lg mr-4"
                    />
                    <div>
                      <h3 className="font-semibold">{game.name}</h3>
                      <p className="text-sm text-purple-200 truncate">{game.description}</p>
                      <div className="flex items-center mt-1">
                        <span className="text-xs bg-purple-600 px-2 py-1 rounded-full mr-2">
                          {game.category}
                        </span>
                        <div className="flex text-yellow-400 text-xs">
                          <TiStarFullOutline className="mr-1" />
                          {game.rating}
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="p-6 text-center text-purple-200">
                  <FaGamepad className="mx-auto h-10 w-10 mb-2" />
                  <p>No games found matching "{searchTerm}"</p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Featured Game - Enhanced Design */}
        {!showSearchResults && (
          <>
            <section className="mb-12 bg-gradient-to-r from-purple-800/50 to-blue-800/50 rounded-2xl p-6 shadow-xl border border-purple-500/30 backdrop-blur-sm">
              <h2 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-amber-200">
                Featured Game
              </h2>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="w-full md:w-1/2 relative group">
                  <img 
                    src={featuredGame.image} 
                    alt={featuredGame.name} 
                    className="w-full h-64 object-cover rounded-xl transform group-hover:scale-105 transition-transform duration-500 shadow-lg"
                  />
                  {/* <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-white font-medium">Click to play</span>
                  </div> */}
                </div>
                <div className="w-full md:w-1/2">
                  <h3 className="text-3xl font-bold mb-2">{featuredGame.name}</h3>
                  <p className="text-purple-100 mb-4">{featuredGame.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-purple-600/50 text-purple-100 px-3 py-1 rounded-full text-sm font-medium">
                      {featuredGame.plays || '12M'} plays
                    </span>
                    <span className="bg-amber-500/20 text-amber-200 px-3 py-1 rounded-full text-sm font-medium">
                      {featuredGame.category}
                    </span>
                    <span className="bg-pink-500/20 text-pink-200 px-3 py-1 rounded-full text-sm font-medium">
                      ★ {featuredGame.rating}
                    </span>
                  </div>
                  <button 
                    onClick={() => navigate(`/game/${featuredGame.id}`)}
                    className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Play Now!
                  </button>
                </div>
              </div>
            </section>

            {/* Most Popular Games - Enhanced Design */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-amber-200">
                Most Popular Games
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {popularGames.map((game) => (
                  <div 
                    key={game.id} 
                    className="bg-blue-900/50 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg cursor-pointer hover:shadow-xl transition-all duration-300 border border-blue-700/30 group"
                    onClick={() => navigate(`/game/${game.id}`)}
                  >
                    <div className="relative">
                      <img 
                        src={game.image} 
                        alt={game.name} 
                        className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3">
                        <div className="flex text-yellow-400 mb-1">
                          {[...Array(5)].map((_, i) => (
                            <TiStarFullOutline key={i} className={i < game.rating ? "text-yellow-400" : "text-yellow-400/30"} />
                          ))}
                        </div>
                        <span className="text-xs text-white">{game.plays || '1M'} plays</span>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-white truncate">{game.name}</h3>
                      <span className="text-xs text-purple-200">{game.category}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div 
                className='flex items-center justify-center text-xl text-amber-200 font-bold cursor-pointer hover:text-pink-300 mt-8 transition-colors duration-300'
                onClick={() => navigate('/all-games')}
              >
                <h1>Browse All Games</h1>
                <div className="ml-2 animate-bounce"><TiArrowSortedDown /></div>
              </div>
            </section>

            {/* Game Categories - Enhanced Design */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-amber-200">
                Game Categories
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { name: 'Adventure', bg: 'from-blue-600 to-blue-800', icon: '🧭' },
                  { name: 'Puzzle', bg: 'from-emerald-600 to-emerald-800', icon: '🧩' },
                  { name: 'Action', bg: 'from-red-600 to-red-800', icon: '💥' },
                  { name: 'Cooking', bg: 'from-amber-600 to-amber-800', icon: '🍳' },
                  { name: 'Sports', bg: 'from-orange-600 to-orange-800', icon: '⚽' },
                  { name: 'Racing', bg: 'from-purple-600 to-purple-800', icon: '🏎️' },
                  { name: 'Educational', bg: 'from-indigo-600 to-indigo-800', icon: '📚' },
                  { name: 'Arcade', bg: 'from-pink-600 to-pink-800', icon: '🕹️' }
                ].map((category) => (
                  <div 
                    key={category.name} 
                    className="relative rounded-xl overflow-hidden shadow-lg cursor-pointer h-40 group"
                    // onClick={() => navigate(`/category/${category.name.toLowerCase()}`)}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${category.bg} opacity-90 group-hover:opacity-100 transition-opacity duration-300`}></div>
                    <div className="relative z-10 h-full flex flex-col items-center justify-center p-4 text-white">
                      <div className="text-5xl mb-3 transform group-hover:scale-125 transition-transform duration-300">
                        {category.icon}
                      </div>
                      <h3 className="font-bold text-xl relative">
                        {category.name}
                        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-white group-hover:w-3/4 transition-all duration-500"></span>
                      </h3>
                      <p className="text-sm mt-3 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                        {Math.floor(Math.random() * 20) + 5} games
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800/80 backdrop-blur-sm mt-12 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center">
              <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">x7ero</span>
              <span className="mx-4 text-gray-500">|</span>
              <span className="text-gray-400">© {new Date().getFullYear()} All rights reserved</span>
            </div>
            <div className="mt-4 md:mt-0">
              <Link to="/privacy-policy" className="text-gray-400 hover:text-purple-400 transition-colors mr-6">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
      
    </div>
  );
};

export default App;