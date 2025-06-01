import React, { useState } from 'react'; // Added useState import here
import { useNavigate } from 'react-router-dom';
import { games } from './gamesData';
import { FaArrowLeft, FaStar, FaGamepad, FaSearch } from 'react-icons/fa';
import { IoGameController } from 'react-icons/io5';

const AllGames = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState(''); // Now properly imported
  
  const filteredGames = games.filter(game =>
    game.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    game.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white p-4 md:p-6">
      {/* Header */}
      <header className="mb-8">
        <div className="flex items-center justify-between max-w-6xl mx-auto">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center text-purple-400 hover:text-purple-300 transition-colors group"
          >
            <FaArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />
            Back
          </button>
          
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            x7ero
          </h1>
          
          <div className="w-8 md:w-24"></div>
        </div>
        
        <div className="max-w-6xl mx-auto mt-6">
          <div className="relative">
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-purple-400">
              <FaSearch />
            </div>
            <input
              type="text"
              placeholder="Search games..."
              className="w-full py-3 pl-12 pr-6 bg-gray-800 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-400"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        
        <p className="text-xl text-purple-200 mt-6 text-center">
          <IoGameController className="inline mr-2" />
          All Games Collection
        </p>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto">
        {/* All Games Grid */}
        <section className="mb-12">
          {filteredGames.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredGames.map((game) => (
                <div 
                  key={game.id} 
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg cursor-pointer hover:shadow-xl transition-all duration-300 border border-gray-700 group"
                  onClick={() => navigate(`/game/${game.id}`)}
                >
                  <div className="relative">
                    <img 
                      src={game.image} 
                      alt={game.name} 
                      className="w-full h-48 object-cover group-hover:opacity-80 transition-opacity"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                      <div className="flex text-yellow-400 mb-1">
                        {[...Array(5)].map((_, i) => (
                          <FaStar key={i} className={i < game.rating ? "text-yellow-400" : "text-yellow-400/30"} />
                        ))}
                      </div>
                      <span className="text-xs text-white">{game.plays || '1M'} plays</span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-white truncate">{game.name}</h3>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-xs bg-purple-900/50 text-purple-300 px-2 py-1 rounded-full">
                        {game.category}
                      </span>
                      <span className="text-xs text-gray-400">
                        ★ {game.rating}/5
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-gray-800/50 rounded-xl border border-gray-700">
              <FaGamepad className="mx-auto text-5xl text-purple-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">No Games Found</h3>
              <p className="text-gray-400">Try a different search term</p>
            </div>
          )}
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-12 text-center text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} x7ero. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AllGames;