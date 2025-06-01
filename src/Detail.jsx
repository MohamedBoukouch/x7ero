import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { games } from './gamesData';

const Detail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const game = games.find(game => game.id === parseInt(id));

  if (!game) {
    return <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      Game not found
    </div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white p-4">
      <div className="max-w-6xl mx-auto">
        {/* Game Header */}
        <div className="flex justify-between items-center mb-6">
          <button 
            onClick={() => navigate('/')}
            className="flex items-center text-purple-400 hover:text-purple-300 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to Games
          </button>
        </div>

        {/* Game Info Section */}
        <div className="bg-gray-800 rounded-xl p-6 mb-6 border border-gray-700">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-1/3">
              <img 
                src={game.image} 
                alt={game.name} 
                className="w-full h-48 object-cover rounded-lg border border-gray-700"
              />
            </div>
            <div className="w-full md:w-2/3">
              <h1 className="text-3xl font-bold mb-2">{game.name}</h1>
              <p className="text-gray-300 mb-6">{game.description}</p>
              <button 
                onClick={() => document.querySelector('iframe')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full transition-colors duration-300"
              >
                Start Playing!
              </button>
            </div>
          </div>
        </div>

        {/* Game Container */}
        <div className="bg-gray-800 rounded-xl p-4 border border-gray-700">
          <iframe
            src={game.url}
            width="100%"
            height="750"
            scrolling="no"
            frameBorder="0"
            className="rounded-lg shadow-lg"
            allowFullScreen
            title={game.name}
          ></iframe>
        </div>

        {/* Game Footer */}
        <div className="mt-4 text-center text-gray-400 text-sm">
          <p>Use keyboard/mouse to play | Fullscreen available</p>
        </div>
      </div>
    </div>
  );
};

export default Detail;