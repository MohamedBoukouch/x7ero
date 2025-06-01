import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { games } from './gamesData';
import { TiArrowSortedDown } from "react-icons/ti";

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const filteredGames = games.filter(game =>
    game.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const featuredGame = games[0];
  const popularGames = games.slice(0, 8);

  return (
<div className="min-h-screen bg-gradient-to-b from-purple-800 via-pink-600 to-blue-800 text-white p-4">
      {/* Header */}
      <header className="flex flex-col items-center mb-8">
        <h1 className="text-5xl font-bold text-white mb-2">x7ero</h1>
        <p className="text-xl text-amber-200 mb-6">Fun Games for Everyone!</p>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto">
        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-2xl mx-auto">
            <input
              type="text"
              placeholder="Search for awesome games..."
              className="w-full py-3 px-6 bg-blue-900 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-md"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="absolute right-3 top-3 text-purple-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Featured Game */}
        <section className="mb-12 bg-white rounded-2xl p-6 shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-purple-600">Featured Game</h2>
          <div className="flex flex-col md:flex-row gap-6">
            <img 
              src={featuredGame.image} 
              alt={featuredGame.name} 
              className="w-full md:w-1/2 h-64 object-cover rounded-xl"
            />
            <div className="flex flex-col justify-center">
              <h3 className="text-3xl font-bold mb-2">{featuredGame.name}</h3>
              <p className="text-gray-600 mb-4">{featuredGame.description}</p>
              <div className="flex items-center mb-4">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mr-4">
                  {featuredGame.plays || '12M'} plays
                </span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  {featuredGame.category}
                </span>
              </div>
              <button 
                onClick={() => navigate(`/game/${featuredGame.id}`)}
                className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-full w-full md:w-auto"
              >
                Play Now!
              </button>
            </div>
          </div>
        </section>

        {/* Most Popular Games */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-white">Most Popular Games</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {popularGames.map((game) => (
              <div 
                key={game.id} 
                className="bg-white rounded-xl overflow-hidden shadow-md cursor-pointer hover:shadow-lg transition-shadow"
                onClick={() => navigate(`/game/${game.id}`)}
              >
                <img 
                  src={game.image} 
                  alt={game.name} 
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">{game.name}</h3>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div 
            className='flex items-center justify-center text-xl text-white font-bold cursor-pointer hover:text-pink-700 mt-6'
            onClick={() => navigate('/all-games')}
          >
            <h1>More Games</h1>
            <div className="ml-2"><TiArrowSortedDown /></div>
          </div>
        </section>

        {/* Game Categories */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-white">Game Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'Adventure', bg: 'bg-blue-500', icon: '🧭' },
              { name: 'Puzzle', bg: 'bg-green-500', icon: '🧩' },
              { name: 'Action', bg: 'bg-red-500', icon: '💥' },
              { name: 'Cooking', bg: 'bg-yellow-500', icon: '🍳' },
              { name: 'Sports', bg: 'bg-orange-500', icon: '⚽' },
              { name: 'Racing', bg: 'bg-purple-500', icon: '🏎️' },
              { name: 'Educational', bg: 'bg-indigo-500', icon: '📚' },
              { name: 'Arcade', bg: 'bg-pink-500', icon: '🕹️' }
            ].map((category) => (
              <div 
                key={category.name} 
                className="relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group h-40"
                onClick={() => navigate(`/category/${category.name.toLowerCase()}`)}
              >
                {/* Background with opacity */}
                <div className={`absolute inset-0 ${category.bg} opacity-80 group-hover:opacity-90 transition-opacity duration-300`}></div>
                
                {/* Category content */}
                <div className="relative z-10 h-full flex flex-col items-center justify-center p-4 text-white">
                  {/* Icon with animation */}
                  <div className="text-4xl mb-3 transform group-hover:scale-110 transition-transform duration-300">
                    {category.icon}
                  </div>
                  
                  {/* Category name with animated underline */}
                  <h3 className="font-bold text-lg relative">
                    {category.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
                  </h3>
                  
                  {/* Hidden text that slides up */}
                  <p className="text-sm mt-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    Explore {category.name} games
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-12 text-center text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} x7ero. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;